import { Button, Avatar, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageAvatar from "./../../Images/User-Avatar-in-Suit-PNG.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ModalOrder from "../Modals/ModalOrder";


export default function Profile() {
  const username = useSelector((state) => state.user.username);
  const phone = useSelector((state) => state.user.phone);
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
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="(+90)5510486924" />
            
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="uoneshoseini4@gmail.com" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WhatsAppIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={phone || "Phone: Not Available"} />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" onClick={() => navigate("/edit-profile")}>
          Edit Profile
        </Button>
      </Container>
    </>
  );
}
