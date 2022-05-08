import styled from "styled-components";

export const TagContainer = styled.div`
    height: 2rem;
    background: var(--yellow);
    padding: 0 15px;
    border-radius: 99px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 0.625rem;
    margin: 0.625rem;

    cursor: default;

    form {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 0.625rem;
        margin: 0.625rem;

        img {
            width: 20px;
            height: 20px;
        }
    }

    button {
        border: none;
        background: transparent;
    }

    &.editable {
        cursor: pointer;
    }
`