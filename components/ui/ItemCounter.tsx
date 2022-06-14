import { Box, IconButton, Typography } from "@mui/material"
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material"
import React from "react"

export const ItemCounter = () => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton color="primary">
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>1</Typography>
      <IconButton color="primary">
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
