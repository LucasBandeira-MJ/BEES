import styled from "styled-components";

export const BreweryCardContainer = styled.div`
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

    p {
        line-height: 26px;
    }
`

export const TagContainer = styled.div`
    width: 100%;
    
    display: flex;
    flex-wrap: wrap;
`