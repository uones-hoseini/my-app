import React, {  useState } from "react"
import { TextField, Button, Container, Typography, Box } from "@mui/material"
import Axios from "axios"

function Login(props) {
  const [username, setUsername] = useState()
  const [password, setPasword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/login", { username, password })
      if (response.data) {
        console.log(response.data.user)
        localStorage.setItem("token", response.data.token)
        props.setLoggedIn(true)
      } else {
        console.log("Incorrect username/password")
      }
    } catch (e) {}
  }
  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          marginBottom: 10,
          flexDirection: "column",
          alignItems: "center",
          "& .MuiTextField-root": { m: 1, width: "300px" },
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <TextField onChange={(e) => setUsername(e.target.value)} label="Username" type="text" variant="outlined" fullWidth margin="normal" required />
        <TextField onChange={(e) => setPasword(e.target.value)} label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </Container>
  )
}

export default Login
