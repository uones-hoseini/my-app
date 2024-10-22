import React from "react"
import { Box, TextField, Button, Container, Typography } from "@mui/material"
import "./MyForm.css"
const SimpleForm = () => {
  return (
    // <Container sx={{ marginTop: 10 }}>
    //   <Box
    //     component="form"
    //     sx={{
    //       "& .MuiTextField-root": { m: 1, width: "25ch" },
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //     }}
    //     noValidate
    //     autoComplete="off"
    //   >
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Simple Form
    //     </Typography>
    //     <TextField required id="name" label="Name" variant="outlined" />
    //     <TextField required id="email" label="Email" variant="outlined" type="email" />
    //     <TextField required id="password" label="Password" variant="outlined" type="password" />
    //     <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
    //       Submit
    //     </Button>
    //   </Box>
    // </Container>
    // <form>
    //     <div class="form-group">
    //       <label for="post-title" class="text-muted mb-1">
    //         <small>Title</small>
    //       </label>
    //       <input autofocus name="title" id="post-title" class="form-control form-control-lg form-control-title" type="text" placeholder="" autocomplete="off" />
    //     </div>

    //     <div class="form-group">
    //       <label for="post-body" class="text-muted mb-1 d-block">
    //         <small>Body Content</small>
    //       </label>
    //       <textarea name="body" id="post-body" class="body-content tall-textarea form-control" type="text"></textarea>
    //     </div>

    //     <button class="btn btn-primary">Save New Order</button>
    //   </form>
    <Container sx={{ marginTop: 10 }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary", fontStyle: "inherit" }}>
          NEW ORDER
        </Typography>
        <TextField autoFocus name="title" id="post-title" label="" variant="outlined" placeholder="Title" fullWidth />
        <TextField autoFocus label="Weight" variant="outlined" placeholder="Wight" type="number" sx={{ width: "200px" }} />
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Body Content
        </Typography>
        <TextField name="body" id="post-body" label="" variant="outlined" multiline rows={4} placeholder="Body Content" fullWidth />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Save New Order
        </Button>
      </Box>
    </Container>
  )
}

export default SimpleForm
