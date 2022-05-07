import { BreweryCardContainer } from "./BreweryCard.styles"

interface BreweryCardProps {
    breweryInfo: {
        address_2: null
        address_3: null
        brewery_type: string
        city: string
        country: string
        county_province: null
        created_at: string
        id: string
        latitude: null
        longitude: null
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
        street,
        country,
        brewery_type,
        phone
    } = breweryInfo

    return (
        <BreweryCardContainer>
            <strong>{name}</strong>
            <p>{city}, {state} - {country}</p>
        </BreweryCardContainer>
    )
}