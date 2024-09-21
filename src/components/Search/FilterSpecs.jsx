import { Box, TextField } from "@mui/material"
import React from "react"

export default function FilterSpecs() {
  const [name, setName] = React.useState("Cat in the Hat")
  return (
    <Box component="form" sx={{ "& > :not(style)": { m: 1, width: "25ch" } }} noValidate autoComplete="off">
      <TextField
        id="outlined-controlled"
        label="مبدا"
        value={name}
        onChange={(event) => {
          setName(event.target.value)
        }}
      />
      <TextField id="outlined-uncontrolled" label="مقصد" defaultValue="foo" />
    </Box>
  )
}
