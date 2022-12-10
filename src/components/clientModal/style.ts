import styled from "styled-components";

export const Content = styled.form`
    input{
        width:96%;
        margin-left:3px;
        border-radius:12px;
        height:30px;
        border:1px solid white;
        padding-top:10px;
    
        &::placeholder{
            color:black;
            font-family: 'Roboto';
            font-weight: 400;
        }
    
        & + input {
            margin-top:10px

        }
       }

       h1{
        margin-left:3px;
        color: #002B5B;
    }
    
       button{
        margin: 15px 0 0 3px;
        width: 97%;
        height:30px;
        border-radius:10px;
        border:0;
        cursor:pointer;
    
        &::hover{
            color:blue;
        }
    }
`

