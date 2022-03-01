import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  setBlogDetails: Function;
  blogDetails: null | string;
}
function Dlalogbox(props: SimpleDialogProps) {
  const { onClose, open, setBlogDetails, blogDetails } = props;
  const [error, setError] = useState<boolean>(false);
  const handleClose = () => {
    onClose();
  };
  const createBlog = (blogDetails: string) => {
    console.log(blogDetails);

    fetch("http://localhost:3000/api/create-new-blog", {
      method: "POST",
      body: JSON.stringify({
        title: blogDetails,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ textAlign: "center" }}>Create a new Blog</DialogTitle>
      <Box sx={{ width: "500px", boxSizing: "border-box", padding: "5%" }}>
        <TextField
          onChange={(e) => setBlogDetails(e.target.value)}
          error={error}
          fullWidth
          label="Heading"
          variant="outlined"
          helperText={error ? "Heading can't be empty" : ""}
        />
        <Button
          sx={{ margin: "auto", mt: 2, display: "block" }}
          variant="contained"
          onClick={() => {
            if (blogDetails && blogDetails?.length) {
              createBlog(blogDetails);
              setError(false);
            } else {
              setError(true);
            }
          }}
        >
          Create
        </Button>
      </Box>
    </Dialog>
  );
}
export default Dlalogbox;
