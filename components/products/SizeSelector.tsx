import { FC } from "react"
import { Box, Button } from "@mui/material"

import { ISize } from "../../interfaces"

interface selectedSize {
  selectedSize?: ISize
  sizes: ISize[]

  onSelectedSize: (size: ISize) => void
}

export const SizeSelector: FC<selectedSize> = ({
  selectedSize,
  sizes,
  onSelectedSize
}) => {
  return (
    <Box>
      {sizes.map(size => (
        <Button
          key={size}
          size="small"
          color={size === selectedSize ? "primary" : "info"}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  )
}
