import { createContext, useState } from "react";


interface BreweriesContextData {
    user: string
    updateUser: (username: string) => void
}

interface BreweriesProviderProps {
    children: React.ReactNode
}

export const BreweriesContext = createContext({} as BreweriesContextData)

export const BreweriesProvider = ({children}: BreweriesProviderProps) => {
    const [user, setUser] = useState<string>('')
    
    const updateUser = (username: string) => {
        setUser(username)
    }

    return (
        <BreweriesContext.Provider value={{
            user,
            updateUser
        }}>
            { children }
        </BreweriesContext.Provider>
    )
}