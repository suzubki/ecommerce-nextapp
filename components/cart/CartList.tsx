import { FC, useContext } from "react"
import NextLink from "next/link"
import {
  Grid,
  Link,
  Typography,
  CardActionArea,
  CardMedia,
  Box,
  Button
} from "@mui/material"

import { ItemCounter } from "../ui"
import { CartContext } from "../../context"
import { ICartProduct } from "../../interfaces"

interface Props {
  editable?: boolean
}

export const CartList: FC<Props> = ({ editable = true }) => {
  const {
    cart: productsInCart,
    updateCartQuantity,
    removeProductFromCart
  } = useContext(CartContext)

  const onNewCartQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    if (product.quantity + newQuantityValue < 1) return
    product.quantity += newQuantityValue
    updateCartQuantity(product)
  }

  return (
    <>
      {productsInCart.map(product => (
        <Grid
          container
          spacing={2}
          key={product.slug + product.size}
          marginBottom={1}
        >
          <Grid item xs={3}>
            {/* TODO: llevar a la página del producto */}
            <NextLink href={`/product/${product.slug}`} passHref>
              <Link>
                <CardActionArea>
                  <CardMedia
                    image={`/products/${product.images}`}
                    component="img"
                    sx={{ borderRadius: "5px" }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box>
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>{product.size}</strong>
              </Typography>

              {/* Item counter condicional */}
              {editable ? (
                <ItemCounter
                  currentValue={product.quantity}
                  onUpdatedQuantity={value =>
                    onNewCartQuantityValue(product, value)
                  }
                />
              ) : (
                <Typography>
                  {product.quantity}{" "}
                  {product.quantity > 1 ? "productos" : "producto"}
                </Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">${product.price}</Typography>

            {editable && (
              <Button
                size="small"
                color="primary"
                onClick={() => removeProductFromCart(product)}
              >
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  )
}
