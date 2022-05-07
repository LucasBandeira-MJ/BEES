import { BreweriesContext } from "../../context/BreweriesContext"
import { HeaderComponent } from '.'
import { render, screen, fireEvent } from "@testing-library/react"

describe("HeaderComponent component", () => {
     it("should clean the user", () => {
        const updateUser = jest.fn()
         render(
            <BreweriesContext.Provider value={{ updateUser } as any} >
                <HeaderComponent />
            </BreweriesContext.Provider>
         )

        
         const element = screen.getByTestId('go-back')
         fireEvent.click(element)

         expect(updateUser).toHaveBeenCalled()
     })
})