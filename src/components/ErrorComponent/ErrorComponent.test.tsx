import renderer from 'react-test-renderer'

import { ErrorComponent } from '.'

describe("ErrorComponent component", () => {
    it("should match snapshot", () => {
        const snapshot = renderer
        .create(<ErrorComponent />)
        .toJSON()

        expect(snapshot).toMatchSnapshot()
    })
})