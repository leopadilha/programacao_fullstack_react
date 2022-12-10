import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { ClientContext } from '../context/clientContext';
import { Content } from '../clientModal/style';


interface NewCreateUserModal{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function CreateUserModal({isOpen, onRequestClose}: NewCreateUserModal){


    const [ name, setName ] = useState('')
    const [ document, setDocument] = useState('')
    const [ password, setPassword] = useState('')

    const data = { name, document, password }

    const { createClient, createUser } = useContext(ClientContext)
    
    const [client, setClient] = useState('')

    
   async  function handleCreateNewUser(e: FormEvent){ 
        e.preventDefault();
        await createUser(data)
        setDocument('')
        setName('')
        setPassword('')
        onRequestClose()
    }

    return (
            <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <Content onSubmit={handleCreateNewUser}> 
                    <h1>Cadastrar Usuário</h1>

                    <input type="text" placeholder='Nome do usuário'
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                    <input type="text" placeholder='Documento do usuário'
                    value={document}
                    onChange={e=> setDocument(e.target.value)}
                    />

                    <input type="password" placeholder='Senha do usuário'
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                
                </Content>
                    
            </Modal>
      
    );
}
