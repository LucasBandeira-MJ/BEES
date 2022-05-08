import { render } from "@testing-library/react"
import { mocked } from 'jest-mock'
import { useRouter } from 'next/router'

import renderer from 'react-test-renderer'

import { BreweriesContext } from "../../context/BreweriesContext"
import Breweries from '../../pages/breweries'

jest.mock('next/router')

describe("Breweries page", () => {

    it('should match the snapshot', () => {
        const snapshot = renderer
            .create(<Breweries />)
            .toJSON()

            expect(snapshot).toMatchSnapshot()
    })

    it("should redirect user to Home page if user is not set", () => {
        
        const useRouterMocked = mocked(useRouter) 
        const pushMocked = jest.fn()

        useRouterMocked.mockReturnValueOnce({
            push: pushMocked
        } as any)

        render(
            <BreweriesContext.Provider value={{ user: ''} as any}>
                <Breweries />
            </BreweriesContext.Provider>
        )

        expect(pushMocked).toHaveBeenCalled()  
    })
})