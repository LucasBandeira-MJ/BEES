import { BreweryType } from "../../@types/breweryTypes"
import { Tag } from "../Tag"
import { BreweryCardContainer, TagContainer } from "./styles"

interface BreweryCardProps {
    breweryInfo: BreweryType
    onDeleteBrewery: (id: string) => void
}

export const BreweryCard = ({ breweryInfo, onDeleteBrewery }: BreweryCardProps) => {

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
                
                <Tag variant='plus-circle'>
                    add more
                </Tag>
            </TagContainer>

            <button onClick={() => onDeleteBrewery(id)}>
                <img src="images/trash.svg" alt="delete" />
            </button>
        </BreweryCardContainer>
    )
}