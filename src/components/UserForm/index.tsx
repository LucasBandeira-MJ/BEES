import { FormContainer } from "./UserForm.styles"

export const UserForm = () => {
    return (
    <FormContainer>
        <p>Please enter your full name below</p>

        <p>Only alphabetical characters are accepted</p>

        <input type="text" placeholder="Full name" />

        <div className="field-control">
            <input type="checkbox" id="ageInput" />
            <label htmlFor="ageInput">Are you older than 18 year old?</label>
        </div>

        <button 
            type="submit"
            disabled={true}
        >
            Enter
        </button>
    </FormContainer>
    )
}