import { useState } from "react";
import { Button, Buttons, Container, Title } from "./style";

interface headerProp {
    openModal: () => void;
    openModalUser: ()=> void;
}
export function Header({openModal, openModalUser}: headerProp) {

    return (
        <Container>
            <Title>Programa Pontos</Title>

            <Buttons>
                <Button type="button" onClick={openModal}>
                    Cadastrando cliente 
                </Button>

                <Button type="button"  onClick={openModalUser}>
                    Cadastrar Usuário
                </Button>
            </Buttons>

        </Container>
    )
}