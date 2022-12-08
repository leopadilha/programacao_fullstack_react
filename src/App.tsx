import { Header } from './components/header/header';
import { useState } from "react";
import { CreateClientModal } from './components/clientModal/createClientModal';
import { GlobalStyle } from './styleGlobal';
import { ClientContextProvider } from './components/context/clientContext';
import { Main } from './components/main';
import { CreateUserModal } from './components/clientModal/createUserModal';

export function App() {
  
  const [newCreateClientModal, setNewCreateClienteModal] = useState(false);
  const [newCreateUserModal, setNewCreateUserModal] = useState(false);

    function handleOpenNewClientModal(){
        setNewCreateClienteModal(true)
    }

    function handleCloseNewClientModal(){
        setNewCreateClienteModal(false)
    }

    function handleOpenNewUserModal(){
      setNewCreateUserModal(true)
  }

  function handleCloseNewUserModal(){
      setNewCreateUserModal(false)
  }

  return (
    <ClientContextProvider>
      <Header 
      openModal={handleOpenNewClientModal}
      openModalUser={handleOpenNewUserModal}
      />
      <Main></Main>
      <GlobalStyle/>
      <CreateClientModal
        isOpen={newCreateClientModal}
        onRequestClose={handleCloseNewClientModal}
      />
      <CreateUserModal
      isOpen={newCreateUserModal}
      onRequestClose={handleCloseNewUserModal}
      />
  </ClientContextProvider>
  );
}


