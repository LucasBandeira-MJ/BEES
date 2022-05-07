import { render, screen } from '@testing-library/react'
import Home from '../../pages'

describe("Home page", () => {
    it("should render properly", () => {
        render(<Home />)

        expect(screen.getByText(/Please enter your full name below/i)).toBeInTheDocument()
        expect(screen.getByText(/Only alphabetical characters are accepted/i)).toBeInTheDocument()
        expect(screen.getByText(/Are you older than 18 year old?/i)).toBeInTheDocument()
    })
})