import styled from "styled-components";

export const BreweryCardContainer = styled.div`
    position: relative;
    width: 23.875rem;
    height: 17.625rem;

    background: var(--white);
    border: 1px solid var(--black);
    border-radius: 4px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding: 30px 22px;

    strong {
        font-weight: bold;
        font-size: 1.25rem;
    }

    p {
        line-height: 26px;
    }

    button {
        position: absolute;
        top: 0;
        right: 0;
        width: 2.5rem;
        height: 2.5rem;

        border: none;
        background: transparent;
    }
`

export const TagContainer = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;

    overflow-y: auto;
`