import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

import UserService from "../services/users";

const RegisterDialog = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const toggle = () => {
    setOpen(!open);
  };

  const register = async (event) => {
    event.preventDefault();

    setUsername("");
    setName("");
    setPassword("");
    try {
      await UserService.register(username, name, password);
      setOpen(!open)
    } catch (exception) {
      console.log(exception)
    }
  };

  return (
    <div>
      <Button variant="contained" sx={{backgroundColor: 'lightcoral'}} className="signup" onClick={toggle}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Register
        </Typography>
      </Button>
      <Dialog open={open} onClose={toggle}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <DialogContentText>Choose your credentials:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            fullWidth
            variant="standard"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={register}>Register</Button>
          <Button onClick={toggle}>Cancel</Button>
          <Button onClick={toggle}>Already have an account? Log in</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RegisterDialog;
