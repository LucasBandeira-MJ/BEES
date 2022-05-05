import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--yellow);

    &::after {
        content: url('images/bee.png');
        position: absolute;
        left: 29px;
        bottom: 15px;
    }
`