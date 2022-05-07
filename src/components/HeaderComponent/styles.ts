import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 4.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;

    background: var(--yellow);

    div {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        cursor: pointer;
    }
`