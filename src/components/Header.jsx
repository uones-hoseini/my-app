import { AppBar, Button, SvgIcon, Toolbar, Typography } from "@mui/material"

import styled from "styled-components"
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "start",
})

function Header() {
  return (
    <>
      <AppBar  position="sticky" sx={{ height: 100, marginBottom: 10,backgroundColor:"black" }}>
        <StyleToolbar >
          <Typography variant="h5">TRUST APP</Typography>
          <Button sx={{marginLeft:150}} variant="contained" color="success">
          {/* <SvgIcon deta-testid="AccountBoxIcon">Profile</SvgIcon> */}
          <AccountBoxIcon color="disablet" />
      </Button>
          {/* {appState.loggedIn ? <HeaderLoggedIn  /> : <HeaderLoggedOut  />} */}
        </StyleToolbar>
      </AppBar>
    </>
  )
}

export default Header
