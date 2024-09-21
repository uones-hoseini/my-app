import { AppBar, Button, Toolbar, Typography } from "@mui/material"

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
          <Typography width="200px" sx={{marginRight:130}} variant="h4">
            TRUST APP
          </Typography>

        
            <Button variant="contained" color="action">
              <AccountBoxIcon fontSize="large" />
            </Button>

            <Button  variant="contained" color="action">
              <LogoutIcon fontSize="large" />
            </Button>
         
        </StyleToolbar>
      </AppBar>
    </>
  )
}

export default Header
