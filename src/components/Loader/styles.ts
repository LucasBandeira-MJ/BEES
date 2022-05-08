import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100vh;

  display:flex;
  align-items: center;
  justify-content: center;

  img {
    width: 6rem;
    height: 6rem;
    animation: mymove 2s infinite
  }

  @keyframes mymove {
    100% { transform: rotate(360deg); }
  }
`