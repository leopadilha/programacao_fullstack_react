
import { useContext } from "react";
import { ClientContext } from "../context/clientContext";
import { Button } from "./style";

export function ButtonHome() {

    const { showClient, showclient} = useContext(ClientContext)

    return (
       <Button onClick={showClient} type="button" >{!showclient ? 'Mostrar Tabela Cliente' : 'Mostrar Tabela Usuário'}</Button>
    )
}