
import { Button, Buttons, Container, Title } from "./style";

interface headerProp {
    openModal: () => void
}
export function Header({openModal}: headerProp) {
    return (
        <Container>
            <Title>Programa Pontos</Title>

            <Buttons>
                <Button type="button" onClick={openModal}>
                    Cadastrar Cliente
                </Button>

                <Button type="button">
                    Cadastrar Usuário
                </Button>
            </Buttons>

        </Container>
    )
}