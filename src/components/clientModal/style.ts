import styled from "styled-components";

export const Content = styled.form`
   input{
    width:98%;
    background-color:lightblue;
    height: 50px;
    border-radius:12px;

    border:1px solid white;

    &::placeholder{
        color:black;
    }

    & + input {
        margin-top:5px
    }
   }

   button{
    margin-top:5px;
    width: 98%;
    background-color: gray;
    border-radius:10px;
    border:0;
    cursor:pointer;

    &:hover{
        color:blue;
    }
   }
`

