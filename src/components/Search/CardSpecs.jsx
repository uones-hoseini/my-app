import { Image } from "@mui/icons-material"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React, { useEffect } from "react"
import Axios from "axios"

export default function CardSpecs(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row-reverse", // Change to 'column' for vertical layout
        justifyContent: "space-between", // Aligns children horizontally
        alignItems: "center", // Aligns children vertically
        height: "180px", // Full viewport height
       m:2,
background:'#dddddd'      }}
    >
      <Box sx={{ p: 2, textAlign: "left" }}>
        <Typography variant="span" sx={{ p: 2 }}>
          ORGIN:
          <Typography color="green" variant="h6">
            {props.orgin}
          </Typography>
        </Typography>
        <Typography variant="span" sx={{ p: 2 }}>
          DESTANATION:
          <Typography color="green" variant="h6">
            {props.destination}
          </Typography>{" "}
        </Typography>
      </Box>
      <Box sx={{ p: 2, textAlign: "left" }}>
        <Typography variant="span" sx={{ p: 2 }}>
          NAME:
          <Typography color="green" variant="h6">
            {props.name}
          </Typography>
        </Typography>
        <Typography variant="span" sx={{ p: 2 }}>
          WEIGHT:
          <Typography color="green" variant="h6">
            {props.weight}
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}
