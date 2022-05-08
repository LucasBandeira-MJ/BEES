import { BreweriesContext } from "../../context/BreweriesContext"
import { HeaderComponent } from '.'
import { render, screen, fireEvent } from "@testing-library/react"

describe("HeaderComponent component", () => {
     it("should clean the user", () => {
        const clearUser = jest.fn()
         render(
            <BreweriesContext.Provider value={{ clearUser } as any} >
                <HeaderComponent />
            </BreweriesContext.Provider>
         )

        
         const element = screen.getByTestId('go-back')
         fireEvent.click(element)

         expect(clearUser).toHaveBeenCalled()
     })
})