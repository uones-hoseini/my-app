import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import React from "react"


export default function CardSpecs() {
  return (
    
    <Card sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{ color: "secondary" }}>
            Mac Miller
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia component="img" sx={{ width: 151 }} image="../../Images/IMG_0929.jpg" alt="Live from space album cover" />
    </Card>
    
  )
}
