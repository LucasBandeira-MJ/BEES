import renderer from 'react-test-renderer'

import { Loader } from '.'

describe("Loader component", () => {
    it("should match snapshot", () => {
        const snapshot = renderer
        .create(<Loader />)
        .toJSON()

        expect(snapshot).toMatchSnapshot()
    })
})