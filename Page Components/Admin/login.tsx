import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
const Login:React.FunctionComponent = ()=> {
  return (
    <Box sx={{maxWidth:500, width:"90%",height:300,margin:"auto",mt:'10%'}}>
        <Paper sx={{width:"100%",height:"100%",boxSizing:"border-box",padding:"8%"}}>
            <Typography sx={{textAlign:"center"}} variant='h4'>Admin Sign in</Typography>
          <TextField  fullWidth label="Email" variant="standard"/>
          <TextField sx={{mt:3}}  fullWidth label="Password" variant="standard"/>
          <Button sx={{display:"block",margin:"auto",mt:5}} variant={"contained"}>Sign in</Button>
        </Paper>
    </Box>
  )
}
export default Login