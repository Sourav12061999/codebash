import { Button } from '@mui/material'
import React from 'react'
import { IoMdAddCircleOutline} from "react-icons/io"
import { Box } from '@mui/material'
import Dlalogbox from './dialogbox'
function AddBlog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ml:{xs:"25vw",md:"38vw"},mt:3,display:"block"}}>
     <Button onClick={handleClickOpen} variant='contained' 
     startIcon={<IoMdAddCircleOutline/>}>Add New Blog</Button>
     <Dlalogbox
     open={open}
     onClose={handleClose}
     />
    </Box>
  )
}

export default AddBlog