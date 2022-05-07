import { render } from "@testing-library/react"
import { mocked } from 'jest-mock'
import { useRouter } from 'next/router'

import renderer from 'react-test-renderer'

import { BreweriesContext } from "../../context/BreweriesContext"
import Home from '../../pages'

jest.mock('next/router')

describe("Home component", () => {

    it('should match the snapshot', () => {
        const snapshot = renderer
            .create(<Home />)
            .toJSON()

            expect(snapshot).toMatchSnapshot()
    })

    it("should redirect user if user is set", () => {
        
        const useRouterMocked = mocked(useRouter) 
        const pushMocked = jest.fn()

        useRouterMocked.mockReturnValueOnce({
            push: pushMocked
        } as any)
        
        render(
            <BreweriesContext.Provider value={{ user: 'John Joe' } as any} >
                <Home />
            </BreweriesContext.Provider>
        )    

        expect(pushMocked).toHaveBeenCalled()        
    })
})