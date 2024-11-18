import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React, { useState,useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"

function EditProfile() {
  const{id}=useParams()
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [email, setEmail] = useState("")
   useEffect(() => {
    // Fetch item data by ID on component load
    async function fetchData() {
      try {
        const response = await Axios.get(`/user/${id}`)
        console.log(response)
       
        setUsername(response.data.user.username)
        setPhone(response.data.data.weight)
        // setaddress(response.data.data.destination)
        setEmail(response.data.data.orgin)
        // setdescription(response.data.data.orgin)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [id])
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const response = await Axios.put(`/edit-profile/${id}`, { username:"ali", phone })
      console.log("Edite a Prifile")
      alert("Profile is Edit")
    } catch (e) {
      console.log("There was error")
    }
  }
  return (
    <Container sx={{ marginTop: 10, padding: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          margin: "auto",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h5" sx={{ mb: 2, color: "text.primary" }}>Edit Profile</Typography>

        <TextField
          label="Name"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />

        <TextField
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />

        <TextField
          label="Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
        />

        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
         
        >
          Save
        </Button>
      </Box>

     
    </Container>
  )
}

export default EditProfile
