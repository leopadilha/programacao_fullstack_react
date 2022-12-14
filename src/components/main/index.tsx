import { useContext } from 'react';
import { ButtonHome } from '../button';
import { ClientContext } from '../context/clientContext';
import { TableClient } from '../tableclient/index';
import { TableUsers } from '../tableusers/index';
import { Text } from './style';

export function Main(){

    const { showclient } = useContext(ClientContext)
    
    return (
        <>
        <ButtonHome/>
        { !showclient ? <Text>Lista de Usuários</Text> : <Text>Lista de Clientes</Text>  }
        { !showclient? <TableUsers></TableUsers> : <TableClient></TableClient> }
        
        </>
    );
   
}
 