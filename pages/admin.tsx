import React,{useContext} from 'react'
import type { NextPage } from 'next'
import Login from '../Page Components/Admin/login'
import {AdminContext} from "../Components/Context/context";
import TableComp from '../Page Components/Admin/tableComp';
const  Admin:NextPage=() => {
  const adminContext = useContext(AdminContext);
    const admin=adminContext?.admin;
    const setAdmin=adminContext?.setAdmin;
  return (
    <div>
       {
         admin?<TableComp/>:<Login setAdmin={setAdmin}/>
       }
    </div>
  )
}

export default Admin