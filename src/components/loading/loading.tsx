
import { Container } from "./style"

interface loadingProps {
    text: string;
}
export function Loading ( { text } : loadingProps) {
    return (
        <Container>
            <p>{text}</p>
        </Container>
    )
}
   