import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";

function CreateOrder() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Axios.post("/create-post", { title, body,price:"2000",token:localStorage.getItem("token")});
      console.log("Great! Order is successfully created.", response.data);
      alert(`post created. id: ${response.data}`)
    } catch (e) {
      console.error("There was a problem", e); // Log the entire error object for more details
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
          Title
        </Typography>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          name="title"
          id="post-title"
          label="Enter a Title"
          variant="outlined"
          fullWidth
        />
        <Typography variant="h6" component="div" sx={{ mb: 2, color: "text.secondary" }}>
          Body Content
        </Typography>
        <TextField
          onChange={(e) => setBody(e.target.value)}
          name="body"
          id="post-body"
          label="Body Content"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Save New Post
        </Button>
      </Box>
    </Container>
  );
}

export default CreateOrder;
