import { AppBar, Button, Toolbar, Typography } from "@mui/material"

import styled from "styled-components"

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "start",
})

function Header() {
  return (
    <>
      <AppBar  position="sticky" sx={{ height: 100, marginBottom: 10,backgroundColor:"black" }}>
        <StyleToolbar sx={{}}>
          <Typography variant="h5">TRUST APP</Typography>
          <Button variant="contained" color="success">
        Success
      </Button>
          {/* {appState.loggedIn ? <HeaderLoggedIn  /> : <HeaderLoggedOut  />} */}
        </StyleToolbar>
      </AppBar>
    </>
  )
}

export default Header
