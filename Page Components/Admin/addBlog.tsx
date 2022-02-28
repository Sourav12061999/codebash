import { Button } from '@mui/material'
import React from 'react'
import { IoMdAddCircleOutline} from "react-icons/io"
import { Box } from '@mui/material'
function AddBlog() {
  return (
    <Box sx={{ml:{xs:"25vw",md:"38vw"},mt:3,display:"block"}}>
     <Button variant='contained' startIcon={<IoMdAddCircleOutline/>}>Add New Blog</Button>
    </Box>
  )
}

export default AddBlog