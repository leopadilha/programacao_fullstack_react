import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Container} from "./style";
import { Loading } from '../loading/loading';


export function TableClient() {

    const { clients, replaceCreatedAt, deleteClient } = useContext(ClientContext)
    

    return (
        <Container>
        { clients.length === 0 && 
        <Loading
        text="Aguarde enquanto carregamos os clientes..."
        /> }
           <table>
            { clients.length > 0 &&
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                    <th>Pontos</th>
                    <th>Criação do usuário</th>
                    <th>Ações</th>
                </tr>
            </thead>
            }
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