import React, { useState, useContext } from "react"
import Axios from "axios"

import { Box, TextField, Button, Container } from "@mui/material"

function HeaderLoggedOut(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("http://localhost:8080/login", { username, password })
      if (response.data) {
        console.log(response.data)
        props.setLoggedIn(true)
      } else {
        console.log("Incorrect username/password")
      }
    } catch (e) {}
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", alignItems: "center" }}>
        <TextField onChange={(e) => setUsername(e.target.value)} name="username" label="Username" variant="outlined" size="small" sx={{ mr: 1 }} />
        <TextField onChange={(e) => setPassword(e.target.value)} name="password" label="Password" type="password" variant="outlined" size="small" sx={{ mr: 1 }} />
        <Button type="submit" variant="contained" color="success" size="small">
          Sign In
        </Button>
      </Box>
    </Container>
  )
}

export default HeaderLoggedOut
