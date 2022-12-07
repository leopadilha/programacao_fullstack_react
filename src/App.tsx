import { Header } from './components/header/header';
import { useState } from "react";
import { CreateClientModal } from './components/clientModal/createClientModal';
import { GlobalStyle } from './styleGlobal';
import { ClientContextProvider } from './components/context/clientContext';
import { Main } from './components/main';

export function App() {
  
  const [newCreateClientModal, setNewCreateClienteModal] = useState(false);

    function handleOpenNewClientModal(){
        setNewCreateClienteModal(true)
    }

    function handleCloseNewClientModal(){
        setNewCreateClienteModal(false)
    }

  return (
    <ClientContextProvider>
      <Header openModal={handleOpenNewClientModal}></Header>
      <Main></Main>
      <GlobalStyle/>
      <CreateClientModal
        isOpen={newCreateClientModal}
        onRequestClose={handleCloseNewClientModal}
      />
  </ClientContextProvider>
  );
}


