import { Container, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/actions";

export default function EditProfile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user);
  
  const [formData, setFormData] = useState({
    username: profile.username,
    phone: "(+90)5510486924",
    email: "uoneshoseini4@gmail.com"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Dispatch update action to update profile in Redux store
    dispatch(updateProfile(formData));
    console.log("Profile updated:", formData);
  };

  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h4" gutterBottom>Edit Profile</Typography>
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save Changes
      </Button>
    </Container>
  );
}
