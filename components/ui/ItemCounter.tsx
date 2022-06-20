import { FC } from "react"
import { Box, IconButton, Typography } from "@mui/material"
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material"

interface Props {
  currentValue?: number
  maxValue?: number

  onUpdatedQuantity: (arg: number) => void
}

export const ItemCounter: FC<Props> = ({
  currentValue,
  onUpdatedQuantity,
  maxValue = 8
}) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton color="primary" onClick={() => onUpdatedQuantity(-1)}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {currentValue}
      </Typography>
      <IconButton
        disabled={currentValue === maxValue && true}
        color="primary"
        onClick={() => onUpdatedQuantity(+1)}
      >
        <AddCircleOutline />
      </IconButton>
    </Box>
  )
}
