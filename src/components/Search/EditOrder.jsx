import React, { useState, useEffect } from "react"
import { Box, Typography, TextField, Button, Container } from "@mui/material"
import Axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { setUsername } from "../../Reducer/userSlice"

export default function EditPage(props) {
  const { id } = useParams()
  const username = useSelector((state) => state.user.username)

  // const [username, setUsername] = useState("")
  const [body, setBody] = useState("")
  const [price, setPrice] = useState("")
  const [orgin, setOrgin] = useState("")
  const [destination, setDestination] = useState("")
  const [weight, setWeight] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    // Fetch item data by ID on component load
    async function fetchData() {
      try {
        const response = await Axios.get(`/orders/${id}`)
        console.log(response)
        setPrice(response.data.data.price)
        setUsername(response.data.data.name)
        setWeight(response.data.data.weight)
        setDestination(response.data.data.destination)
        setOrgin(response.data.data.orgin)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [id])
  async function handleSubmit(e) {
    e.preventDefault()

    const dataToSend = {
      data: {
        destination: destination,
        orgin: orgin,
        weight: weight,
        isActive: true,
        user: "1",
        price: price,
      },
    }
    try {
      const response = await Axios.put(`/orders/${id}`, dataToSend)
      console.log("Great! Order is successfully created.", response.data)
      alert(`post created. id: ${response.data}`)
      navigate("/")
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          margin: "auto",
          padding: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Item
        </Typography>

        <TextField label="Name" name="name" value={username} onChange={(e) => dispatch(setUsername(e.target.value))} fullWidth margin="normal" variant="outlined" />

        <TextField label="Price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth margin="normal" variant="outlined" />

        <TextField label="Weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} fullWidth margin="normal" variant="outlined" type="number" />
        <TextField label="Destination" name="destination" value={destination} onChange={(e) => setDestination(e.target.value)} fullWidth margin="normal" variant="outlined" />
        <TextField label="Orgin" name="orgin" value={orgin} onChange={(e) => setOrgin(e.target.value)} fullWidth margin="normal" variant="outlined" />

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, width: "100%" }}>
          <Button href="http://localhost:3000/" variant="contained" color="error">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="success">
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
