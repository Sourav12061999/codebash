import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function Dlalogbox(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog  onClose={handleClose} open={open}>
      <DialogTitle sx={{textAlign:"center"}}>Create a new Blog</DialogTitle>
      <Box sx={{width:"500px",boxSizing:"border-box",padding:"5%"}}>
      <TextField fullWidth   label="Heading" variant="outlined" />
      <Button sx={{margin:"auto",mt:2,display:"block"}} variant='contained'>Create</Button>
      </Box>
    </Dialog>
  );
}
export default Dlalogbox;