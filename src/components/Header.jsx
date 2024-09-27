import { AppBar, Button, Link, Tab, Toolbar, Typography } from "@mui/material"

import styled from "styled-components"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import LogoutIcon from "@mui/icons-material/Logout"

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "start",
})

function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "black" }}>
        <StyleToolbar sx={{ gap: 1 }}>
          <Typography width="200px" sx={{ marginRight: 130 }} variant="h4">
            TRUST APP
          </Typography>

          <Link href="http://localhost:3000/myprofile" color="#fff">
            <AccountBoxIcon fontSize="large" />
          </Link>

          <Button variant="contained" color="action">
            <LogoutIcon fontSize="large" />
          </Button>
        </StyleToolbar>
      </AppBar>
    </>
  )
}

export default Header
