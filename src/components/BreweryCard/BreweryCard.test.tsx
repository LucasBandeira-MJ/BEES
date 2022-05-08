import { render, screen, fireEvent } from "@testing-library/react"
import { BreweryCard } from '.'

describe("BreweryCard component", () => {
    const mockBreweryInfo = {
            "id": "banjo-brewing-fayetteville",
            "name": "Banjo Brewing",
            "brewery_type": "planning",
            "street": '',
            "address_2": '',
            "address_3": '',
            "city": "Fayetteville",
            "state": "West Virginia",
            "county_province": '',
            "postal_code": "25840",
            "country": "United States",
            "longitude": '',
            "latitude": '',
            "phone": "3042164231",
            "website_url": '',
            "updated_at": "2021-10-23T02:24:55.243Z",
            "created_at": "2021-10-23T02:24:55.243Z"
          }

        beforeAll(() => {
        })

    it("should render correctly", () => {
        render(<BreweryCard breweryInfo={mockBreweryInfo} onDeleteBrewery={jest.fn()} />)

        expect(screen.getByText(/Banjo Brewing/)).toBeInTheDocument()
        expect(screen.getByText(/fayetteville, west virginia \- united states/i)).toBeInTheDocument()
        expect(screen.getByText(/25840/i)).toBeInTheDocument()
        expect(screen.getByText(/planning/i)).toBeInTheDocument() 
    })

    it("should execute onDeleteBrewery when delete button is clicked", () => {
        const deleteBrewery = jest.fn()
        render(<BreweryCard breweryInfo={mockBreweryInfo} onDeleteBrewery={deleteBrewery} />)

        const deleteButton = screen.getByRole('button', { name: /delete/i})
        fireEvent.click(deleteButton)

        expect(deleteBrewery).toHaveBeenCalled()
    })

})