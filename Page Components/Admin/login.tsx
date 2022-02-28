import React,{useState,useContext} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {AdminContext} from "../../Components/Context/context";
const Login:React.FunctionComponent = ()=> {
    const [email, setEmail] = useState<string | null>("");
    const [password, setPassword] = useState<string | null>("");
    const adminContext = useContext(AdminContext);
    const admin=adminContext?.admin;
    const setAdmin=adminContext?.setAdmin;
    const adminLogin:Function=(email:string,password:string)=>{
       fetch(`/api/dashboard/${email}/${password}`)
       .then(res => res.json())
       .then(data =>{
         if(data.isError){
          console.log(data);
         }else{
          setAdmin? setAdmin(data):null;
         }
       })
       .catch(error =>{
           console.error(error);
       })
    }
  return (
    <Box sx={{maxWidth:500, width:"90%",height:300,margin:"auto",mt:'10%'}}>
        <Paper sx={{width:"100%",height:"100%",boxSizing:"border-box",padding:"8%"}}>
            <Typography sx={{textAlign:"center"}} variant='h4'>Admin Sign in</Typography>
          <TextField onChange={(event)=>{
            setEmail(event.target.value)
          }}  fullWidth label="Email" variant="standard"/>
          <TextField sx={{mt:3}}
           onChange={(event)=>{
               setPassword(event.target.value);
           }}
          fullWidth label="Password" variant="standard"/>
          <Button onClick={()=>{
              adminLogin(email,password);
          }} sx={{display:"block",margin:"auto",mt:5}} variant={"contained"}>Sign in</Button>
        </Paper>
    </Box>
  )
}
export default Login