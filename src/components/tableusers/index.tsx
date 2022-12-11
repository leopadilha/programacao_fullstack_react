import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Container} from "../tableclient/style";


export function TableUsers() {

    const { users, replaceCreatedAt, deleteUser } = useContext(ClientContext)
    

    return (
        <Container>
           <table>
            <thead>
                <p> Lista de Usuários </p>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                    <th>Criação</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
                { users.map(user => {
                    return (
                        <tr key={user._id}>
                            
                            <td>{user.name}</td>
                            <td>{user.document}</td>
                            <td>{replaceCreatedAt(user.createdAt)}</td>
                            <td> <button type="button" onClick={() => deleteUser(user.document)}> Deletar </button> <button> Editar </button> </td>
                    </tr>               
                    )
                })}
            </tbody>
           </table>
        </Container>
    )
}