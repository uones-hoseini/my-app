import React, { useState } from "react"
import Axios from "axios"

import { Box, TextField, Button, Container } from "@mui/material"
import { loggin } from "../../Reducer/logginSlice"
import { setId,setPhone,setUsername as setxxx } from "../../Reducer/userSlice"
import { useDispatch } from "react-redux"

function HeaderLoggedOut() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/auth/local", { identifier: username, password })
      if (response.data) {
        console.log(response.data)
        localStorage.setItem("jwt", response.data.jwt)
        console.log(response.data)
        dispatch(setxxx(response.data.user.username))
        dispatch(setId(response.data.user.documentId))
        dispatch(setPhone(response.data.user.phone))
        dispatch(loggin())
      } else {
        console.log("Incorrect username/password")
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container sx={{ mt: 0.5 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: "#f9f9f9",
          p: 2,
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: 400,
          margin: "auto",
        }}
      >
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          label="Username"
          variant="outlined"
          size="small"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          sx={{
            flex: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "orangered",
            color: "white",
            px: 2,
            py: 1,
            fontWeight: "bold",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#003366",
            },
          }}
        >
          LOG In
        </Button>
      </Box>
    </Container>
  )
}

export default HeaderLoggedOut
