import styled from "styled-components";


export const Container = styled.div`
    margin-top:50px;
    display:flex;
    justify-content: center;
    width:100%;

    table {
        width:60%;
    }

    td,th {
        color: #256D85;
       
    }

    th{
        padding: 10px 5px;
        text-align: left;
        font-weight: 500;
        background-color: lightgray;
    }

    td{
        border:0px;
        padding: 5px;
        border-spacing: 5px;
        background-color: lightgray;
        
    }

    p{
        color: #2B4865;

    }
    button{
        cursor:pointer;
        color: #256D85;           
        font-size:15px;
        
    }

   
`