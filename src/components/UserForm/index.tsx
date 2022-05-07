import { SyntheticEvent, useEffect, useState } from "react"
import { validateUser } from "../../utils/validateUser"
import { FormContainer } from "./styles"

export const UserForm = () => {
    const [isAdult, setIsAdult] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>('')
    const [isUserValid, setIsUserValid] = useState<boolean>(false)

    const handleChange = (username:string) => {
        const initialSpaceRegex = /^\s/
        const multipleSpacesRegex = /\s+/g

        const name = username
            .replace(initialSpaceRegex, '')
            .replace(multipleSpacesRegex, ' ')

        setUserName(name)
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        console.log(e)
    }

    useEffect(()=>{
        const userIsValid = validateUser(userName)
        setIsUserValid(userIsValid)
    },[userName])

    return (
    <FormContainer onSubmit={handleSubmit}>
        <p>Please enter your full name below</p>

        <p>Only alphabetical characters are accepted</p>

        <input 
            type="text" 
            placeholder="Full name"
            required
            value={userName}
            onChange={e => handleChange(e.target.value)}
        />

        <div className="field-control">
            <input 
                type="checkbox" 
                id="ageInput"
                required
                onChange={() => setIsAdult(isAdult => !isAdult)}
            />
            <label htmlFor="ageInput">Are you older than 18 year old?</label>
        </div>

        <button 
            type="submit"
            disabled={!isUserValid || !isAdult}
        >
            Enter
        </button>
    </FormContainer>
    )
}