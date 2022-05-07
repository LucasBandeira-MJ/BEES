import { useContext } from "react"
import { BreweriesContext } from "../../context/BreweriesContext"
import { HeaderContainer } from "./styles"

export const HeaderComponent = () => {
    const { user, updateUser } = useContext(BreweriesContext)

    return (
        <HeaderContainer>
            <div
                data-testid="go-back" 
                onClick={() => updateUser('')}
            >
                <img src="images/arrow-circle-left.svg" alt="back arrow" />
                <strong>Go Back</strong>
            </div>
            <strong>
                { user }
            </strong>
        </HeaderContainer>
    )
}