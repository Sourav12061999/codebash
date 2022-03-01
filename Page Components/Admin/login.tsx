import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import SnackbarComp from "../../Components/Snack bar/snackbarComp";

interface adminLogged {
  isError: boolean;
  msg: string;
  showSnack: boolean;
}
interface adminStateInterface {
  _id: string;
  name: string;
  email: string;
  password: string;
}
interface adminData {
  data: adminStateInterface | null;
  isError: boolean;
  msg: string;
}
interface Props {
  setAdmin: Function | undefined;
}
const Login = (props: Props) => {
  const [email, setEmail] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");
  const [adminLoged, setAdminLoged] = useState<adminLogged>({
    isError: false,
    msg: "",
    showSnack: false,
  });
  const setAdmin = props.setAdmin;
  const adminLogin: Function = (email: string, password: string) => {
    fetch(`/api/dashboard/${email}/${password}`)
      .then((res) => res.json())
      .then((data: adminData) => {
        if (data.isError) {
          setAdminLoged({
            isError: data.isError,
            msg: data.msg,
            showSnack: true,
          });
        } else {
          setAdmin ? setAdmin(data.data) : null;
          setAdminLoged({
            isError: data.isError,
            msg: data.msg,
            showSnack: true,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Box
        sx={{
          maxWidth: 500,
          width: "90%",
          height: 300,
          margin: "auto",
          mt: "10%",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            padding: "8%",
          }}
        >
          <Typography sx={{ textAlign: "center" }} variant="h4">
            Admin Sign in
          </Typography>
          <TextField
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            fullWidth
            label="Email"
            variant="standard"
          />
          <TextField
            sx={{ mt: 3 }}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            fullWidth
            label="Password"
            variant="standard"
          />
          <Button
            onClick={() => {
              adminLogin(email, password);
            }}
            sx={{ display: "block", margin: "auto", mt: 5 }}
            variant={"contained"}
          >
            Sign in
          </Button>
        </Paper>
      </Box>
      <SnackbarComp open={adminLoged} setOpen={setAdminLoged} />
    </>
  );
};
export default Login;
