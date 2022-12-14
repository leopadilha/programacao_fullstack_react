import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Container} from "../tableclient/style";
import { Loading } from '../loading/loading';


export function TableUsers() {

    const { users, replaceCreatedAt, deleteUser } = useContext(ClientContext)
    
    function cpfMask(value:string){
            return value
              .replace(/\D/g, '') 
              .replace(/(\d{3})(\d)/, '$1.$2') 
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d{1,2})/, '$1-$2')
              .replace(/(-\d{2})\d+?$/, '$1')         
    }
    return (
        <Container>
            { users.length === 0 && 
            <Loading
            text="Aguarde enquanto carregamos os usuários..."
            /> }
           <table>
           { users.length > 0 &&
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Documento</th>
                    <th>Criação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            }
            <tbody>
                { users.map(user => {
                    return (
                        <tr key={user._id}>
                            
                            <td>{user.name}</td>
                            <td>{cpfMask(user.document)}</td>
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