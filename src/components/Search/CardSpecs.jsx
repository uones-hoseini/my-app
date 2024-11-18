import { Box, Typography, Button, Container } from "@mui/material"

import Axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setPrice, setWeight, setDestination, setOrgin,setId } from "../../Reducer/orderSlice"
import { loggin } from "../../Reducer/logginSlice"

import EditComponent from "./EditOrder"

export default function CardSpecs(props) {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isEditOpen, setEditOpen] = useState(false)
  // async function handleEdit(id) {
  //   console.log("Edit item with id:", id)
  //   // Implement your edit logic here

  //   navigate(`/edit/$(id)`)
  //   console.log(id)
  //   // e.preventDefault()
  //   try {
  //     const response = await Axios.get(`/orders/${id}`, { identifier: username, password })
  //     if (response.data) {
  //       console.log(response.data)
  //       localStorage.setItem("jwt", response.data.jwt)
  //       console.log(response.data)
  //       dispatch(setUsername(response.data.username))
  //       dispatch(setPrice(response.data.price))
  //       dispatch(setWeight(response.data.weight))
  //       dispatch(setDestination(response.data.destination))
  //       dispatch(setOrgin(response.data.orgin))
  //       dispatch(setId(response.data.documentId))

  //       dispatch(loggin())
  //     } else {
  //       console.log("Incorrect username/password")
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }
  async function handleDelete(id) {
    if (!id) {
      console.error("No valid ID provided for deletion.")
      return
    }
    try {
      const response = await Axios.delete(`/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${props.jwt}`, // Use actual JWT token source
        },
      })
      console.log("Deleted successfully:", response.data)
    } catch (e) {
      console.error("Delete request failed:", e.response ? e.response.data : e.message)
    }
  }

  return (
    <Container sx={{ marginTop: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse", // Change to 'column' for vertical layout
          justifyContent: "space-between",
          alignItems: "center",
          height: "180px",
          m: 2,
          background: "#f5f5f5",
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ p: 2, textAlign: "left" }}>
          <Typography variant="subtitle2" color="textSecondary">
            ORIGIN:
          </Typography>
          <Typography color="green" variant="h6">
            {props.orgin}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            DESTINATION:
          </Typography>
          <Typography color="green" variant="h6">
            {props.destination}
          </Typography>
        </Box>

        <Box sx={{ p: 2, textAlign: "left" }}>
          <Typography variant="subtitle2" color="textSecondary">
            PRICE:
          </Typography>
          <Typography color="green" variant="h6">
            {props.price}
          </Typography>
        </Box>

        <Box sx={{ p: 2, textAlign: "left" }}>
          <Typography variant="subtitle2" color="textSecondary">
            NAME:
          </Typography>
          <Typography color="green" variant="h6">
            {props.name}
          </Typography>

          <Typography variant="subtitle2" color="textSecondary">
            WEIGHT:
          </Typography>
          <Typography color="green" variant="h6">
            {props.weight}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", p: 2 }}>
          <Button type="submit" variant="contained" color="success" onClick={() => navigate(`/edit/${props.id}`)} sx={{ mb: 1, minWidth: "100px" }} fullWidth>
            Edit
          </Button>

          <Button variant="contained" color="error" onClick={() => handleDelete(props.id)} sx={{ minWidth: "100px" }} fullWidth>
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
