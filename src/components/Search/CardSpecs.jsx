import { Box, Typography, Button, Container } from "@mui/material"
import EditModal from "./EditOrder";
import Axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardSpecs(props) {
  const [isEditOpen, setEditOpen] = useState(false);
  function handleEdit(id) {
    console.log("Edit item with id:", id)
    // Implement your edit logic here
    const navigate=useNavigate
    navigate(`/edit/$(id)`)

  }
  async function handleDelete(id) {
    if (!id) {
      console.error("No valid ID provided for deletion.");
      return;
    }
    try {
      const response = await Axios.delete(`/orders/${id}`, {
        headers: {
          Authorization: `Bearer ${props.jwt}`, // Use actual JWT token source
        },
      });
      console.log("Deleted successfully:", response.data);
    } catch (e) {
      console.error("Delete request failed:", e.response ? e.response.data : e.message);
    }
  
  
 
  // async function handleDelete(id) {
  //   try {
  //     const response = await Axios.delete(`/orders/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${props.jwt}`, // Adjust based on where the JWT is stored
  //       },
  //     });
  //     console.log("Deleted successfully:", response.data);
  //   } catch (e) {
  //     console.log("There was a problem:", e);
  //   }
  
  

    // if (!props.id) {
    //   console.error("No valid ID provided for deletion.");
    //   return;
    // }
    // console.log("Attempting to delete item with id:", props.id);
    
    // // Call the onDelete function passed from the parent
    // props.onDelete(props.id);
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
      <Button
  variant="contained"
  color="success"
  onClick={() => window.location.href = "http://localhost:3000/edit"}
  sx={{ mb: 1, minWidth: "100px" }}
  fullWidth
>
  Edit
</Button>


        {/* Your existing component code */}
{/*     
      <button onClick={handleEdit}>Edit</button>
      <EditModal open={isEditOpen} onClose={() => setEditOpen(false)} item={props} onSave={handleSave} /> */}
  
        <Button variant="contained" color="error" onClick={() => handleDelete(props.id)} sx={{ minWidth: "100px" }} fullWidth>
          Delete
        </Button>
      </Box>
      
    </Box>
    </Container>
  )
}
