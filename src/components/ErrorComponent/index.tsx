import { ErrorContainer } from "./styles"

export const ErrorComponent = () => {
    return (
        <ErrorContainer>
            <h1>Oops, something went wrong...</h1>
            <p>Please try again later</p>
            <img src="images/spilledbeer.svg" alt="Spilled beer" />
        </ErrorContainer>
    )
}