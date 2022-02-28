import React,{useState} from 'react'

interface adminStateInterface{
    name:string,
    email:string,
    password:string,
}
interface adminContextInterface{
    admin:adminStateInterface | null
    setAdmin:Function
}
const AdminContext=React.createContext<adminContextInterface | null>(null);
export {AdminContext};
function Context(props:any) {
    const [admin, setAdmin] = useState<adminStateInterface | null>(null);
  return (
    <AdminContext.Provider value={{admin,setAdmin}}>
    {props.children}
    </AdminContext.Provider>
  )
}

export default Context