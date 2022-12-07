import { useContext } from 'react';
import { ButtonHome } from '../button';
import { ClientContext } from '../context/clientContext';
import { TableClient } from '../tableclient/index';
import { TableUsers } from '../tableusers/index';

export function Main(){

    const { showclient } = useContext(ClientContext)
    
    return (
        <>
        <ButtonHome/>
        {!showclient? <TableUsers></TableUsers> : <TableClient></TableClient> }   
        </>
    );
   
}
 