import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { ClientContext } from '../context/clientContext';
import { Content } from './style';


interface NewCreateClientModal{
    isOpen: boolean;
    onRequestClose: () => void;
}
export function CreateClientModal({isOpen, onRequestClose}: NewCreateClientModal){


    const [name, setName] = useState('')
    const [document, setDocument] = useState('')
    const [spots, setSpots] = useState('')

    const data = { name, document, spots }

    const { createClient } = useContext(ClientContext)
    
    const [client, setClient] = useState('')

    
   async  function handleCreateNewClient(e: FormEvent){ 
        e.preventDefault();
        await createClient(data)
        setSpots('')
        setDocument('')
        setName('')
        onRequestClose()
    }

    return (
            <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >
                <Content onSubmit={handleCreateNewClient}> 
                    <h1>Cadastrar Cliente</h1>

                    <input type="text" placeholder='Nome do cliente'
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />                    
                    <input type="text" placeholder='Documento do cliente'
                    value={document}
                    onChange={e=> setDocument(e.target.value)}
                    />
                    <input type="text" placeholder='Pontos do cliente'
                    value={spots}
                    onChange={e=> setSpots(e.target.value)}
                    />

                    <button type="submit">Cadastrar</button>
                
                </Content>
                    
            </Modal>
      
    );
}
