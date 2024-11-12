import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPage({ item, onSave }) {
  const [formData, setFormData] = useState({
    name: item?.name || '',
    price: item?.price || '',
    weight: item?.weight || '',
  });
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSave = () => {
    onSave(formData);
    navigate(-1); // Go back to the previous page
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box
   
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 600,
        margin:"auto",
        padding: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
       
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>Edit Item</Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      
      <TextField
        label="Price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        type="number"
      />
      
      <TextField
        label="Weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
        fullWidth
        margin="normal"
        variant="outlined"
        type="number"
      />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, width: '100%' }}>
        <Button variant="contained" color="error" onClick={handleCancel}>Cancel</Button>
        <Button variant="contained" color="success" onClick={handleSave}>Save</Button>
      </Box>
    </Box>
  );
}
