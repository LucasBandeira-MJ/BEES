import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 0.5rem;
        height: 7rem;
        padding: 0.5rem 0;
    }

    background: var(--yellow);

    strong {
        font-size: 1.875rem;
        font-weight: 400;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        cursor: pointer;

        @media (max-width: 600px) {
            order: 2;

            img {
                width: 3rem;
            }
        }
    }
`