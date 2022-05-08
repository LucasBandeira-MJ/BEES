import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    main {
        height: calc(100vh - 4.5rem);

        display: grid;
        grid-template-columns: repeat(auto-fill, 24rem);
        justify-content: center;
        justify-items: center;
        gap: 3rem;

        overflow: hidden scroll;

        padding: 6.125rem 0;

        @media (max-width: 600px) {
            height: calc(100vh - 7rem);
        }
    }
`