import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Container} from "../tableclient/style";


export function TableUsers() {

    const { users, replaceCreatedAt } = useContext(ClientContext)

    return (
        <Container>
           <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                    <th>Criação</th>
                </tr>
            </thead>

            <tbody>
                { users.map(user => {
                    return (
                        <tr key={user.id}>
                            
                            <td>{user.name}</td>
                            <td>{user.document}</td>
                            <td>{replaceCreatedAt(user.createdAt)}</td>
                    </tr>               
                    )
                })}
            </tbody>
           </table>
        </Container>
    )
}