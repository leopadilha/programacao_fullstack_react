import styled from "styled-components";

export const Content = styled.form`
    input{
        width:96%;
        margin-left:8px;
        border-radius:5px;
        height:30px;
        border:1px solid white;
        padding-top:10px;        
    
        &::placeholder{
            color: #256D85;
            font-family: 'Roboto';
            font-weight: 400;
            
        }
    
        & + input {
            margin-top:10px;
            
            
        }
       }

    h1{
        margin: 15px 0 10px 400px;
        color: #002B5B;
        }
    
    button{
        margin: 15px 0 0 400px;
        width: 20%;
        text-align: center;
        height:30px;
        border-radius:5px;
        border:0;
        cursor:pointer;
    
        &:hover{
            color:blue;
            filter:brightness(0.8)
        }
    }
`

