import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    :root {
        --white: #FFF;
        --offwhite: #FFFEF0 ;
        --black: #000 ;
        --yellow: #F2EC54;
        --blue: #5D5FEF;

        --gray-600: #52525B;
        --gray-700: #3F3F46;
        --gray-800: #27272A;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--offwhite);
    }

    body, input, textarea, select, button {
        font: 400 1rem "Work Sans", sans-serif;
    }

    button {
    cursor: pointer;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: var(--yellow); 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }
`