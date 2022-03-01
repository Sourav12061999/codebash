import { Button } from "@mui/material";
import React, { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Box } from "@mui/material";
import Dlalogbox from "./dialogbox";
function AddBlog() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [blogDetails, setBlogDetails] = useState<string | null>(null);
  return (
    <Box sx={{ ml: { xs: "25vw", md: "38vw" }, mt: 3, display: "block" }}>
      <Button
        onClick={handleClickOpen}
        variant="contained"
        startIcon={<IoMdAddCircleOutline />}
      >
        Add New Blog
      </Button>
      <Dlalogbox
        open={open}
        onClose={handleClose}
        setBlogDetails={setBlogDetails}
        blogDetails={blogDetails}
      />
    </Box>
  );
}

export default AddBlog;
