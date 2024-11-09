import React from "react"
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, Tooltip, Avatar } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import HeaderLoggedOut from "./HeaderLoggedOut"
import HeaderLoggedIn from "./HeaderLoggedIn"
import { useDispatch, useSelector } from "react-redux"
import { loggin, loggout } from "../../Reducer/logginSlice"


function Header(props) {
  const username=useSelector((state)=>state.user.username)
  console.log(username)
  const dispatch=useDispatch()
  const isLoggedIn=useSelector((state)=>state.isLoggedin)
  console.log(isLoggedIn)
  return (
    <AppBar position="fixed" color="primary" sx={{ width: "100%", height: "80px" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h4" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          Trust
        </Typography>
        <Typography variant="h4" component={RouterLink} to="/" sx={{ textDecoration: "none", color: "inherit" }}>
          {username?username:'null'}
        </Typography>
        <Box sx={{ justifyContent: "end" }}>{isLoggedIn ? <HeaderLoggedIn  /> : <HeaderLoggedOut  />}</Box>

      </Toolbar>
    </AppBar>
  )
}

export default Header
