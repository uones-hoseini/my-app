import React, { useState } from "react"
import { Box, TextField, Button, Typography, Container, Paper } from "@mui/material"
import Axios from "axios"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("auth/local/register", {
        username,
        email,
        password,
      })
      console.log("User was successfully created.", response)

      // Reset form values
      setUsername("")
      setEmail("")
      setPassword("")
    } catch (e) {
      console.error("There was an error:", e)
    }
  }

  return (
    <Container sx={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          borderRadius: 2,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign Up
          </Typography>

          <TextField
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="username"
            label="User Name"
            variant="outlined"
          />
          <TextField
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button type="submit" variant="contained"  sx={{ mt: 2, width: "100%",backgroundColor:"orangered",color:"white" }}>
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Signup
