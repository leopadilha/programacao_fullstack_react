import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Container} from "./style";



export function TableClient() {

    const { clients, replaceCreatedAt, deleteClient } = useContext(ClientContext)
    

    return (
        <Container>
           <table>
            <thead>
                <p> Tabela de Clientes </p>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                    <th>Pontos</th>
                    <th>Criação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                { clients.map(client => {
                    return (
                        <tr key={client._id}>
                            
                            <td>{client.name}</td>
                            <td>{client.document}</td>
                            <td>{client.spots}</td>
                            <td>{replaceCreatedAt(client.createdAt)}</td>
                            <td> <button type="button" onClick={() => deleteClient(client._id)}> Deletar </button> <button> Editar </button> </td>
                    </tr>               
                    )
                })}
            </tbody>
           </table>
        </Container>
    )
}