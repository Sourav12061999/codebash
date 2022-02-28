import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface Props{
    anchorEl:null | HTMLElement, 
    setAnchorEl:Function
}
function StatusFilter(prop:Props) {
  const {anchorEl,setAnchorEl}=prop
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Published</MenuItem>
        <MenuItem onClick={handleClose}>Unpublished</MenuItem>
      </Menu>
  )
}

export default StatusFilter