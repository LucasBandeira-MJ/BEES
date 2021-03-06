import { render, screen, fireEvent } from "@testing-library/react"

import { UserForm } from '.'
import { BreweriesContext } from "../../context/BreweriesContext"


describe("UserForm component", () =>{

    describe("user validation methods", () => {

        beforeEach(() => {
            render( <UserForm /> )
        })

        it("should be disabled when user is not an adult" , () => {
            const input = screen.getByPlaceholderText('Full name')
            const button = screen.getByRole('button', { name: /enter/i })

            fireEvent.change(input, {target: {value: 'John Joe'}})

            expect(button).toBeDisabled()
        })
        

        it("should be disabled when user doesn't input a full name" , () => {
            const input = screen.getByPlaceholderText('Full name')
            const checkbox = screen.getByRole('checkbox', { name: /are you older than 18 year old\?/i })
            const button = screen.getByRole('button', { name: /enter/i })

            fireEvent.change(input, {target: {value: 'John'}})
            fireEvent.click(checkbox)

            expect(button).toBeDisabled()
        })

        
        

        it("should be disabled when user inputs an invalid name" , () => {
            const input = screen.getByPlaceholderText('Full name')
            const checkbox = screen.getByRole('checkbox', { name: /are you older than 18 year old\?/i })
            const button = screen.getByRole('button', { name: /enter/i })
            
            fireEvent.click(checkbox)

            fireEvent.change(input, {target: {value: 'John_Joe'}})
            expect(button).toBeDisabled()

            fireEvent.change(input, {target: {value: 'John Joe 21'}})
            expect(button).toBeDisabled() 

            fireEvent.change(input, {target: {value: 'John@Joe'}})
            expect(button).toBeDisabled()
        })

        it("should be enabled when user is an adult and has given a full name" , () => {
            const input = screen.getByPlaceholderText('Full name')
            const checkbox = screen.getByRole('checkbox', { name: /are you older than 18 year old\?/i })
            const button = screen.getByRole('button', { name: /enter/i })

            fireEvent.change(input, {target: {value: 'John Joe'}})
            fireEvent.click(checkbox)

            expect(button).toBeEnabled()
        })    
    })

    describe('context methods' , () => {

        it('should update user when button is clicked' , () => {
            const updateUser = jest.fn()

            render (
                <BreweriesContext.Provider value={{ updateUser } as any}>
                    <UserForm />
                </BreweriesContext.Provider>
            )

            const input = screen.getByPlaceholderText('Full name')
            const checkbox = screen.getByRole('checkbox', { name: /are you older than 18 year old\?/i })
            const button = screen.getByRole('button', { name: /enter/i })

            fireEvent.change(input, {target: {value: 'John Joe'}})
            fireEvent.click(checkbox)
            fireEvent.click(button)

            expect(updateUser).toHaveBeenCalled()
        })
    })

})
