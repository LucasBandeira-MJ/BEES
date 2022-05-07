import { validateUser } from "../validateUser"

describe("validateUser tests", () => {
    it("should not accept invalid characters", ()=>{

        expect(validateUser("John Joe 21")).toBe(false)
        expect(validateUser("John_Joe")).toBe(false)
        expect(validateUser("John 21")).toBe(false)
        expect(validateUser("John@Joe")).toBe(false)
        expect(validateUser("John Joe")).toBe(true)
    })

    it("should only accept full names", ()=> {

        expect(validateUser("Jane")).toBe(false)
        expect(validateUser("JaneJoe")).toBe(false)
        expect(validateUser(" JaneJoe ")).toBe(false)
        expect(validateUser("JaneJoe @")).toBe(false)
        expect(validateUser("Jane Joe")).toBe(true)
    })
})