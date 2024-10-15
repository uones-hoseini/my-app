import React, { useContext, useState } from "react"
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, Tooltip, Avatar } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"

function Header(props) {
  const [loggedIn, setLoggedIn] = useState()

  return (
    <AppBar position="fixed" color="primary" sx={{ width: "100%", height: "80px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Trust
        </Typography>
        <Box sx={{ justifyContent: "end" }}>
          {props.loggedIn ? <HeaderLoggedIn setLoggedIn={props.setLoggedIn} /> : <HeaderLoggedOut setLoggedIn={props.setLoggedIn} />}
       
          </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
