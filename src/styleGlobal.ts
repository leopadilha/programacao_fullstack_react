import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .react-modal-overlay{
        position:fixed;
        top:-400px;
        bottom:0;
        left:0;
        right: 0;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width:15%;
        border-radius:10px;
        background: lightgray;
    }

`