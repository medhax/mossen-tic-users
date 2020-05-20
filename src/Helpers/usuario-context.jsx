import React, {useMemo, useState} from 'react';


const UsuarioContext = React.createContext

export default function UsuarioProvider (props){
    
        const[email,setEmail]=useState("");
        const[url,setUrl]=useState("");
        const[name,setName]=useState("");

    const value = useMemo(() =>{
        return({
            email,
            name,
            url,
        })
    }, [name, email, url])
    return <UsuarioContext.Provider value={value} {...props}/>
}


export function useUsuario(){
    const context = React.useContext(UsuarioContext);
    if (!context){
        throw new Error('useUsuario debe estar dentro del proveedor UsuarioContext')
    }
    return context;
}

