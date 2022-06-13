import { Box } from "@mui/material"
import { FC, useEffect, useRef, useState } from "react"

import ImageGallery, { ReactImageGalleryProps } from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css"

type Props = {
  images: string[]
}

export const ProductSlideshow: FC<Props> = ({ images }) => {
  const [windowDimension, setWindowDimension] = useState<any>(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const detectSize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", detectSize)

    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowDimension])

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
    <Box>
      <ImageGallery
        items={imagesToShow}
        showFullscreenButton={false}
        showPlayButton={false}
        thumbnailPosition={
          windowDimension === 0 && windowDimension.innerWidth >= 960
            ? "left"
            : "bottom"
        }
      />
    </Box>
  )
}
