import { setCookie, destroyCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

interface BreweriesContextData {
    user: string
    updateUser: (username: string) => void
    clearUser: () => void
}

interface BreweriesProviderProps {
    children: React.ReactNode
    cookies: any
}

export const BreweriesContext = createContext({} as BreweriesContextData)

export const BreweriesProvider = ({children, cookies}: BreweriesProviderProps) => {
    const [user, setUser] = useState<string>('')
    
    const updateUser = (username: string) => {
        setUser(username)

        setCookie(null, 'USER_NAME', username, {
            maxAge: 3 * 60 * 60,
            path: '/',
        })
    }

    const clearUser = () => {
        setUser('')
        destroyCookie(null, 'USER_NAME')
    }

    return (
        <BreweriesContext.Provider value={{
            user,
            updateUser,
            clearUser
        }}>
            { children }
        </BreweriesContext.Provider>
    )
}