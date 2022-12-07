import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Container} from "./style";


export function TableClient() {

    const { clients, replaceCreatedAt } = useContext(ClientContext)

    return (
        <Container>
           <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                    <th>Pontos</th>
                    <th>Criação</th>
                </tr>
            </thead>
            <tbody>
                { clients.map(client => {
                    return (
                        <tr key={client.id}>
                            
                            <td>{client.name}</td>
                            <td>{client.document}</td>
                            <td>{client.spots}</td>
                            <td>{replaceCreatedAt(client.createdAt)}</td>
                    </tr>               
                    )
                })}
            </tbody>
           </table>
        </Container>
    )
}