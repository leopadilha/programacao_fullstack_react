import styled from "styled-components";

export const Container = styled.div`
    
    margin-top:20px;
    display:flex;
    justify-content: center;
    width:100%;

    table {
        width:60%;
    }

    td,th {
        color: white;
       
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
        border-spacing: 2px;
        background-color: lightgray;
        
    }

   
`