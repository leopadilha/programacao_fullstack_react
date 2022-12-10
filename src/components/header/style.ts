import styled from "styled-components";

export const Button = styled.button`
    cursor:pointer;
    border:0px;
    transition:0.2s;
    border-radius:5px;
    color: #256D85;
    height: 30px;

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
    ccolor: #002B5B;
`

export const Buttons = styled.div`
    display:flex;
    width: 300px;
    display:flex;
    justify-content:space-between;
    
`
