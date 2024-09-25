import React from "react"
import { TextField, Button, Container, Typography, Box } from "@mui/material"

function Login() {
  return (
    <Container maxWidth="sm" sx={{marginTop:10}}>
      <Box   sx={{
        display: 'flex',
        marginBottom:10,
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1, width: '300px' },
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        
          <TextField label="Email" variant="outlined" fullWidth margin="normal" required />
          <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" required />
          <Button type="submit" variant="contained" color="primary"  sx={{ mt: 2 }}>
            Login
          </Button>
        
      </Box>
    </Container>
  )
}

export default Login
