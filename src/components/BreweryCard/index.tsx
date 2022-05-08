import { useState } from "react"
import { BreweryType } from "../../@types/breweryTypes"
import { Tag } from "../Tag"
import { BreweryCardContainer, TagContainer } from "./styles"

interface BreweryCardProps {
    breweryInfo: BreweryType
    onDeleteBrewery: (id: string) => void
}

export const BreweryCard = ({ breweryInfo, onDeleteBrewery }: BreweryCardProps) => {
    const [newTags, setNewTags] = useState<string[]>([])

    const handleAddTag = (newTag:string) => {
        setNewTags(tags => [...tags, newTag])
    }

    const { 
        id,
        name, 
        city,
        state, 
        country,
        postal_code,
        brewery_type,
        street,
        phone,
    } = breweryInfo

    return (
        <BreweryCardContainer>
            <strong>{name}</strong>

            <p>
                {street} <br />
                {city}, {state} - {country}
            </p>

            <TagContainer>
                <Tag variant='chart-square-bar'>
                    { brewery_type }
                </Tag>
                
                <Tag variant='location-marker'>
                    { postal_code }
                </Tag>
                
                <Tag variant='phone'>
                    { phone }
                </Tag>

                {
                    newTags && newTags.map(newTag => (
                        <Tag>
                            {newTag}
                        </Tag>
                    ))
                }
                
                <Tag 
                    variant='plus-circle'
                    onAddTag={handleAddTag}
                >
                    add more
                </Tag>
            </TagContainer>

            <button className="delete-btn" onClick={() => onDeleteBrewery(id)}>
                <img src="images/trash.svg" alt="delete" />
            </button>
        </BreweryCardContainer>
    )
}