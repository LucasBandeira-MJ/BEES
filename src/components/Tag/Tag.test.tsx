import { render, screen, fireEvent } from "@testing-library/react"
import { Tag } from "."

describe("Tag component", () => {

    it("should not trigger editing when a non editable tag is clicked", () => {
        
        render( <Tag variant='phone'>19347582</Tag> )

        const tagEl = screen.getByTestId('tag-element')
        fireEvent.click(tagEl)

        const formEl = screen.queryByTestId('form-el')
        expect(formEl).not.toBeInTheDocument()
    })
    
    it("should trigger editing when an editable tag is clicked", () => {
        
        render( <Tag variant='plus-circle'>add tag</Tag> )

        const tagEl = screen.getByTestId('tag-element')
        fireEvent.click(tagEl)

        const formEl = screen.queryByTestId('form-el')
        expect(formEl).toBeInTheDocument()
    })
    
    it("should add a new tag when form is submitted", () => {
        const onAddtag = jest.fn()
        render( <Tag variant='plus-circle' onAddTag={onAddtag}>add tag</Tag> )

        const tagEl = screen.getByTestId('tag-element')
        fireEvent.click(tagEl)

        const formEl = screen.queryByTestId('form-el')
        const inputEl = screen.getByRole('textbox')

        
        if(formEl) {
            fireEvent.change(inputEl, {target: {value: 'John'}})
            fireEvent.submit(formEl)
        }

        expect(onAddtag).toHaveBeenCalled()
    })

    it("should return an empty component when no children is passed", () => {
        render(<Tag />)

        expect(screen.queryByTestId('tag-element')).not.toBeInTheDocument()
    })
})