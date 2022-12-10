import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    .react-modal-overlay{
        position:fixed;
        top:-100px;
        bottom:0;
        left:0;
        right: 0;
        display:flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width:40%
        border-radius:5px;
        background: gray;
        height:300px;
    } 
    
    p, h1, td, th, button {
        font-family: 'Roboto';
        font-weight: 400;
    }   

`