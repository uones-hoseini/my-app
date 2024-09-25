// src/SignupForm.js
import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Signup = () => {
  return (
    <Container sx={{marginTop:10}}>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        required
        id="name"
        label="User Name"
        variant="outlined"
      />
      <TextField
        required
        id="email"
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextField
        required
        id="password"
        label="Password"
        variant="outlined"
        type="password"
      />
       <TextField
        required
        id="comfirmPassword"
        label="Comfirm Password"
        variant="outlined"
        type="password"
      />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Sign Up
      </Button>
    </Box>
    </Container>
  );
};

export default Signup;
