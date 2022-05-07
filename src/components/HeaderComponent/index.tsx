import { useContext } from "react"
import { BreweriesContext } from "../../context/BreweriesContext"
import { HeaderContainer } from "./styles"

export const HeaderComponent = () => {
    const { user } = useContext(BreweriesContext)

    return (
        <HeaderContainer>
            <div>
                <img src="images/arrow-circle-left.svg" alt="back arrow" />
                <strong>Go Back</strong>
            </div>
            <strong>
                { user }
            </strong>
        </HeaderContainer>
    )
}