import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import Axios from "axios"

function EditProfile() {
  const [name, setName] = useState("")
  const [phone, setphone] = useState("")
  const [address, setaddress] = useState("")
  const [description, setdescription] = useState("")
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.post("/edit-profile", { name, phone, address, description, token: localStorage.getItem("token") })
      console.log("Edite a Prifile")
      alert("Profile is Edit")
    } catch (e) {
      console.log("There was error")
    }
  }
  return (
    <Container sx={{ marginTop: 10 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Name
        </Typography>
        <TextField onChange={(e) => setName(e.target.value)} autoFocus name="name" id="post-name" label="Enter a Name" variant="outlined" fullWidth />
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          phone
        </Typography>
        <TextField onChange={(e) => setphone(e.target.value)} autoFocus name="phone" id="post-phone" label="Enter a Phone" variant="outlined" fullWidth />
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Address
        </Typography>
        <TextField onChange={(e) => setaddress(e.target.value)} autoFocus name="address" id="post-address" label="Enter a Address" variant="outlined" fullWidth />

        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Description
        </Typography>
        <TextField onChange={(e) => setdescription(e.target.value)} name="description" id="post-description" label="Description" variant="outlined" multiline rows={4} fullWidth />
        <Button disabled type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Save
        </Button>
      </Box>
    </Container>
  )
}

export default EditProfile
