import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyleToolbar=styled(Toolbar)({
  display:"flex",
  justifyContent:"start"
})

function Header() {
  return (
    <>
      <AppBar position="sticky"sx={{height:100,marginBottom
        :10}} >
        <StyleToolbar >
          <Typography variant="h5">
            
            TRUST APP
        
          </Typography>
          

          {/* {appState.loggedIn ? <HeaderLoggedIn  /> : <HeaderLoggedOut  />} */}
        </StyleToolbar>
      </AppBar>
    </>
  )
}

export default Header
