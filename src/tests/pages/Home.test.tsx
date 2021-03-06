import { render } from "@testing-library/react"
import { mocked } from 'jest-mock'
import { useRouter } from 'next/router'

import renderer from 'react-test-renderer'

import { BreweriesContext } from "../../context/BreweriesContext"
import Home from '../../pages'

jest.mock('next/router')

describe("Home page", () => {

    it('should match the snapshot', () => {
        const snapshot = renderer
            .create(<Home USER_NAME={''} />)
            .toJSON()

            expect(snapshot).toMatchSnapshot()
    })

    it("should update user if USER_NAME is set in cookies and redirect user to breweries page", () => {
        
        const useRouterMocked = mocked(useRouter) 
        const pushMocked = jest.fn()

        useRouterMocked.mockReturnValueOnce({
            push: pushMocked
        } as any)

        const updateUser = jest.fn()
        render(
            <BreweriesContext.Provider value={{updateUser} as any}>
                <Home USER_NAME="John Joe" />
            </BreweriesContext.Provider>
        )

        expect(pushMocked).toHaveBeenCalled()  
        expect(updateUser).toHaveBeenCalled()
    })
})