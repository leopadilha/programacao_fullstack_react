import { createContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";

interface Client {
    id:number;
    name:string;
    document:string;
    spots:number;
    createdAt:string;
}

interface Users {
    id:string;
    name:string;
    document:string;
    createdAt:string;
    roles:string;
}

interface ClientContext {
    clients: Client[];
    users: Users[];
    createClient: (client: ClientInput) => Promise<void>
    showClient: () => void;
    getAllClient:() => void;
    getAllUsers:() => void
    replaceCreatedAt: (createAt: string) => string;
    showclient: boolean;
}

interface ClientInput {
    name:string;
    document:string;
}

interface clientContext{
    children: ReactNode;
}

export const ClientContext = createContext<ClientContext>({} as ClientContext);

export function ClientContextProvider({children}:clientContext){

    const [ clients, setClients ] = useState<Client[]>([])
    const [ users, setUsers ] = useState<Users[]>([])
    const [ showclient, setShowClient ] = useState(false)
    const [ responseClient, setResponseClient ] = useState<null | Client>(null)

    useEffect(()=>{
        if (showclient){
            getAllClient()
        }else{
            getAllUsers()
        }        
    },[showclient, responseClient])
   
    async function createClient(clientRequest: ClientInput){
        const response = await api.post('/client', clientRequest)
        setResponseClient(response.data)
    }

    function replaceCreatedAt(createdAt: string){
        const createdAtReplace = createdAt.split('T')
        return createdAtReplace[0].replace('-','/').replace('-','/')
    }
    async function getAllClient(){
        await api('/client').then(response => setClients(response.data))
    }

    async function getAllUsers(){
        await api('/users').then(response => setUsers(response.data))
    }

    function showClient(){
        if(!showclient){
            setShowClient(true)
        }else{
            setShowClient(false)
        }
    }

    return (
        <ClientContext.Provider value={{clients, users, showClient, showclient, createClient, getAllClient, getAllUsers, replaceCreatedAt}}>
            {children}
        </ClientContext.Provider>
    );
}