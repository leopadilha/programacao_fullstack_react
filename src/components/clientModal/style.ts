import styled from "styled-components";

export const Content = styled.form`
    input{
        width:96%;
        margin-left:3px;
        border-radius:12px;
        height:50px;
        border:1px solid white;
        padding-top:10px;
    
        &::placeholder{
            color:black;
        }
    
        & + input {
            margin-top:5px
        }
       }

       h1{
        margin-left:3px;
    }
    
       button{
        margin: 15px 0 0 3px;
        width: 98%;
        height:30px;
        border-radius:10px;
        border:0;
        cursor:pointer;
    
        &:hover{
            color:blue;
        }
       }
`

