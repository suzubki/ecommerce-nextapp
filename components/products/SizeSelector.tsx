import { FC } from "react"
import { Box, Button } from "@mui/material"

import { ISize } from "../../interfaces"

interface selectedSize {
  selectedSize?: ISize
  sizes: ISize[]
}

export const SizeSelector: FC<selectedSize> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map(size => (
        <Button
          key={size}
          size="small"
          color={size === selectedSize ? "primary" : "info"}
        >
          {size}
        </Button>
      ))}
    </Box>
  )
}
