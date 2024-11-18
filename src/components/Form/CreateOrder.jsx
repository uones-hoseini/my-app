import { Box, Button, Container, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import Axios from "axios"

function CreateOrder() {
  const [name, setName] = useState("")
  const [body, setBody] = useState("")
  const [price, setPrice] = useState("")
  const [orgin, setOrgin] = useState("")
  const [destination, setDestination] = useState("")
  const [weight, setWeight] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
  
    const dataToSend= {
      data: {
        destination: destination,
        orgin: orgin,
        weight: weight,
        isActive: true,
        user: "1",
        price:price
      }
    }
    try {
      const response = await Axios.post("/orders", dataToSend)
      console.log("Great! Order is successfully created.", response.data)
      alert(`post created. id: ${response.data}`)
    } catch (e) {
      console.error("There was a problem", e) // Log the entire error object for more details
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
          Price
        </Typography>
        <TextField onChange={(e) => setPrice(e.target.value)} autoFocus name="price" id="post-price" label="Enter a Price" variant="outlined" fullWidth />
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Origin
        </Typography>
        <TextField onChange={(e) => setOrgin(e.target.value)} autoFocus name="orgin" id="post-orgin" label="Enter a Orgin" variant="outlined" fullWidth />
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Destination
        </Typography>
        <TextField onChange={(e) => setDestination(e.target.value)} autoFocus name="destination" id="post-destination" label="Enter a Destination" variant="outlined" fullWidth />

        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Weight
        </Typography>
        <TextField onChange={(e) => setWeight(e.target.value)} autoFocus name="weight" id="post-weight" label="Enter a Weight" variant="outlined" fullWidth />

        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Body Content
        </Typography>
        <TextField onChange={(e) => setBody(e.target.value)} name="body" id="post-body" label="Body Content" variant="outlined" multiline rows={4} fullWidth />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Save New Post
        </Button>
      </Box>
    </Container>
  )
}

export default CreateOrder
