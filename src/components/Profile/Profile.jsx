import { Avatar, CardMedia, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import React from "react"
import ImageAvatar from "./../../Images/User-Avatar-in-Suit-PNG.png"
import { Grid } from "@mui/joy"
import PhoneIcon from "@mui/icons-material/Phone"
import MailIcon from "@mui/icons-material/Mail"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ModalOrder from "../Modals/ModalOrder"

export default function Profile() {
  return (
    <>
      <Container sx={{ marginTop: 10 }}>
        <ModalOrder />
        <Grid display="flex" justifyContent="center" alignItems="center" width="40">
          <Avatar src={ImageAvatar} sx={{ width: 130, height: 130 }} />
        </Grid>
        <Typography sx={{ textAlign: "center", marginTop: 10, fontStyle: "bold" }} gutterBottom variant="h4" component="div">
          Younes Hosseini
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="(+90)5510486924" secondary="" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="uoneshoseini4@gmail.com" secondary="" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WhatsAppIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="(+90)5510486924" secondary="" />
          </ListItem>
        </List>
      </Container>
    </>
  )
}
