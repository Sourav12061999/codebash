import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
interface adminLogged{
    isError:boolean,
    msg:string,
    showSnack:boolean,
  }
  interface Prop{
      open:adminLogged,
      setOpen:Function
  }
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const SnackbarComp = (props:Prop)=> {
    let {open,setOpen}=props;
    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <>
       <Snackbar open={open.showSnack} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={open.isError? "error" : "success"} sx={{ width: '100%' }}>
          {open.msg}
        </Alert>
      </Snackbar>
    </>
  )
}

export default SnackbarComp