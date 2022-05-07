import { Tag } from "../Tag"
import { BreweryCardContainer, TagContainer } from "./styles"

interface BreweryCardProps {
    breweryInfo: {
        address_2: string
        address_3: string
        brewery_type: string
        city: string
        country: string
        county_province: string
        created_at: string
        id: string
        latitude: string
        longitude: string
        name: string
        phone: string
        postal_code: string
        state: string
        street: string
        updated_at: string
        website_url: string
    }
}

export const BreweryCard = ({ breweryInfo }: BreweryCardProps) => {
    console.log(breweryInfo)

    const { 
        name, 
        city,
        state, 
        country,
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
                    Micro
                </Tag>
                
                <Tag variant='location-marker'>
                    46534
                </Tag>
                
                <Tag variant='phone'>
                    6308165790
                </Tag>
                
                <Tag variant='plus-circle'>
                    add more
                </Tag>
            </TagContainer>
        </BreweryCardContainer>
    )
}