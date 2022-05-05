import { render, screen } from '@testing-library/react'
import Home from '../../pages'

describe("Home page", () => {
    it("should render properly", () => {
        render(<Home />)

        expect(screen.getByText(/Hello World/i)).toBeInTheDocument()
    })
})