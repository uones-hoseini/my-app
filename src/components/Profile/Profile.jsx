import { Button, Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ImageAvatar from "./../../Images/User-Avatar-in-Suit-PNG.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalOrder from "../Modals/ModalOrder";
import {setId}from'../../Reducer/userSlice'

export default function Profile(props) {
  const dispatch=useDispatch()
  const username = useSelector((state) => state.user.username);
  const phone = useSelector((state) => state.user.phone);
  const email = useSelector((state) => state.user.email);
  const id=useSelector((state)=>state.user.id)

  console.log(phone)
  const navigate = useNavigate();

  return (
    <>
      <Container sx={{ marginTop: 10 }}>
        <ModalOrder />
        <Grid display="flex" justifyContent="center" alignItems="center" width="40">
          <Avatar src={ImageAvatar} sx={{ width: 130, height: 130 }} />
        </Grid>
        <Typography sx={{ textAlign: "center", marginTop: 10, fontStyle: "bold" }} gutterBottom variant="h4">
          {username}
         
        </Typography> <Typography sx={{ textAlign: "center", marginTop: 10, fontStyle: "bold" }} gutterBottom variant="h4">
          {phone}
         
        </Typography>
        {email}
        <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        boxShadow: 2,
        borderRadius: 2,
        padding: 2,
      }}
    >
      {/* Phone Item */}
      <ListItem sx={{ mb: 1, alignItems: "center" }}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Phone" secondary={phone || "Phone: Not Available"} />
      </ListItem>

      {/* Email Item */}
      <ListItem sx={{ mb: 1, alignItems: "center" }}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={email || "uoneshoseini4@gmail.com"} />
      </ListItem>

      {/* WhatsApp Item */}
      <ListItem sx={{ alignItems: "center" }}>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "success.main" }}>
            <WhatsAppIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="WhatsApp" secondary={phone || "Phone: Not Available"} />
      </ListItem>
    </List>
        <Button variant="contained" color="primary" onClick={() => navigate(`/edit-profile/${id}`)}>
          Edit Profile
        </Button>
      </Container>
    </>
  );
}
