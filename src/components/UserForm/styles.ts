import styled from "styled-components";

export const FormContainer = styled.form`
    background: var(--yellow);
    color: var(--black);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    z-index: 1;

    p, label {
        font-family: Work Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
    }
    
    input[type="text"] {
        width: 100%;
        border: 1px solid #D4D4D8;
        border-radius: 4px;
        padding: 10px 12px 9px;
    }

    .field-control{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 8px;
    }

    label {
        cursor: pointer;
    }

    button {
        color: var(--white);
        background: var(--blue);

        border: none;
        border-radius: 4px;

        font-size: 16px;

        margin: auto;
        padding: 8px 16px;

        &:disabled {
            background: var(--gray-600);
        }
    }
`