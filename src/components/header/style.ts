import styled from "styled-components";

export const Button = styled.button`
    font-size:10px;
    cursor:pointer;
    border:0px;
    color:red;
    border-radius:10px;

    transition:0.2s ;
    &:hover{
        filter:brightness(0.8)
    }
`;

export const Container = styled.header`
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin: 10px 50px 10px 50px;
`
export const Title = styled.h1`
    font-size:20px;
    color: black;
`

export const Buttons = styled.div`
    display:flex;
    width: 300px;
    display:flex;
    justify-content:space-between;
`
