import React,{useState} from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import Axios from "axios";

const Signup = () => {
const[username,setUsername]=useState()
const[email,setEmail]=useState()
const[password,setPassword]=useState()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post("http://localhost:8080/register", {
        username,
        email,
        password
      });
      console.log("User was successfully created.",e.target.value);
    } catch (e) {
      console.error("There was an error:", e);

    }
  }

  return (
    <Container sx={{ marginTop: 10 }}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "300px" },
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        <TextField required onChange={e=>setUsername(e.target.value)} id="username" label="User Name" variant="outlined" />
        <TextField required onChange={e=>setEmail(e.target.value)} id="email" label="Email" variant="outlined" type="email" />
        <TextField required onChange={e=>setPassword(e.target.value)} id="password" label="Password" variant="outlined" type="password" />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
