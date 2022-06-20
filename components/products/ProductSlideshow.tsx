import { Box } from "@mui/material"
import { FC } from "react"

import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"
import useWindowDimensions from "../../hooks/useWindowDimension"

type Props = {
  images: string[]
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
  const sizeWindow = useWindowDimensions()

  const imagesToShow: ReactImageGalleryProps["items"] = [
    {
      original: `../products/${images[0]}`,
      thumbnail: `../products/${images[0]}`
    },
    {
      original: `../products/${images[1]}`,
      thumbnail: `../products/${images[1]}`
    }
  ]

  return (
    <Box sx={{ transform: "translate(0, -10%) scale(0.85)" }}>
      <ImageGallery
        items={imagesToShow}
        showFullscreenButton={false}
        showPlayButton={false}
        thumbnailPosition={
          sizeWindow.width === undefined
            ? "bottom"
            : sizeWindow.width > 960
            ? "left"
            : "bottom"
        }
      />
    </Box>
  )
}
