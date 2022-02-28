import React,{useContext} from 'react'
import type { NextPage } from 'next'
import Login from '../Page Components/Admin/login'
import {AdminContext} from "../Components/Context/context";
import AdminView from '../Page Components/Admin/adminView';
const  Admin:NextPage=() => {
  const adminContext = useContext(AdminContext);
    const admin=adminContext?.admin;
    const setAdmin=adminContext?.setAdmin;
  return (
    <main>
       {
         admin?<AdminView/>:<Login setAdmin={setAdmin}/>
       }
    </main>
  )
}

export default Admin