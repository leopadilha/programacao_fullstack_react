import { createContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";

interface Client {
    _id:number;
    name:string;
    document:string;
    spots:string;
    createdAt:string;
}

interface Users {
    _id:number;
    name:string;
    document:string;
    createdAt:string;
    roles:string;
}

interface ClientContext {
    clients: Client[];
    users: Users[];
    createClient: (client: ClientInput) => Promise<void>
    createUser: (user: userInput) => Promise<void>
    showClient: () => void;
    getAllClient:() => void;
    getAllUsers:() => void;
    deleteClient:(id : number) => void;
    deleteUser:(document : string) => void;
    replaceCreatedAt: (createAt: string) => string;
    showclient: boolean;
}

interface ClientInput {
    name:string;
    document:string;
    spots:string;
}

interface userInput {
    name:string;
    document:string;
    password:string;
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
    const [ responseUser, setResponseUser ] = useState<null | Users>(null)
    
    useEffect(()=>{
        setTimeout(()=>{
            if (showclient){
                getAllClient()
            }else{
                getAllUsers()
            }        
        }, 3000)
       
    },[showclient, responseClient, responseUser])
   
    async function createClient(clientRequest: ClientInput){
        const response = await api.post('/client', clientRequest)
        if (response.status === 200) setShowClient(true)
        setResponseClient(response.data)
    }

    async function createUser(userRequest: userInput){
        const response = await api.post('/user', userRequest)
        if (response.status === 200) setShowClient(false)
        setResponseClient(response.data)
    }

    function replaceCreatedAt(createdAt: string){
        const createdAtReplace = createdAt.split('T')
        return createdAtReplace[0].split('-').reverse().join('/')
    }
    async function getAllClient(){
        await api('/client').then(response => setClients(response.data))
    }

    async function getAllUsers(){
        await api('/users').then(response => setUsers(response.data))
    }

    async function deleteClient(id :number){
        console.log(id)
        const response = await api.delete(`/client/id/${id}`) 
        if (response.status === 200) setResponseClient(response.data)    

    }

    async function deleteUser(document :string){
        console.log(document)
        const response = await api.delete(`/user/${document}`) 
        if (response.status === 200) setResponseUser(response.data)            

    }

    function showClient(){
        if(!showclient){
            setShowClient(true)
        }else{
            setShowClient(false)
        }
    }

    return (
        <ClientContext.Provider value={{clients, users, showClient, showclient, createClient, getAllClient, getAllUsers, replaceCreatedAt, createUser, deleteClient, deleteUser}}>
            {children}
        </ClientContext.Provider>
    );
}