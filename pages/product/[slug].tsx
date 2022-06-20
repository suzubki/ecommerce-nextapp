import { useContext, useState } from "react"
import { NextPage, GetStaticProps, GetStaticPaths } from "next"
import { useRouter } from "next/router"
import { Box, Button, Grid, Typography, Chip } from "@mui/material"

import { ShopLayout } from "../../components/layout"
import { ProductSlideshow, SizeSelector } from "../../components/products"
import { ItemCounter } from "../../components/ui"

import { dbProducts } from "../../database"
import { ICartProduct, IProduct, ISize } from "../../interfaces"
import { CartContext } from "../../context"

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    images: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1
  })
  const { addProductToCart } = useContext(CartContext)
  const router = useRouter()

  const onUpdatedProductQuantity = (updateQuantityByOne: number) => {
    // Validación...
    if (tempCartProduct.quantity === 1 && updateQuantityByOne === -1) return
    if (
      tempCartProduct.quantity >= product.inStock &&
      updateQuantityByOne === 1
    )
      return
    //

    setTempCartProduct((currentProduct: ICartProduct) => ({
      ...currentProduct,
      quantity: currentProduct.quantity + updateQuantityByOne
    }))
  }

  const onSelectedSize = (size: ISize) => {
    setTempCartProduct((currentProduct: ICartProduct) => ({
      ...currentProduct,
      size
    }))
  }

  const onAddProduct = () => {
    if (tempCartProduct.size === undefined) return

    addProductToCart(tempCartProduct)
    router.push("/cart")
  }

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* Slider */}
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* Título del producto */}
            <Typography variant="h1" component="h1">
              {product.title}
            </Typography>

            {/* Precio del producto */}
            <Typography variant="subtitle1" component="h2">
              ${product.price}
            </Typography>

            {/* Cantidad a querer del producto */}
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Cantidad</Typography>
              <ItemCounter
                currentValue={tempCartProduct.quantity}
                onUpdatedQuantity={onUpdatedProductQuantity}
              />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={onSelectedSize}
              />
            </Box>

            {/* Botón para agregar al carrito */}
            {product.inStock > 0 ? (
              <Button
                color="secondary"
                variant="outlined"
                onClick={onAddProduct}
              >
                {tempCartProduct.size
                  ? "Agregar al carrito"
                  : "Seleccione una talla"}
              </Button>
            ) : (
              <Chip
                label="No quedan disponibles"
                color="error"
                variant="outlined"
              />
            )}

            {/* Descripción del producto */}
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Descripción</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productsSlug = await dbProducts.getAllProductsSlug()

  const paths = productsSlug.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string }
  const product = await dbProducts.getProductBySlug(`${slug}`) // your fetch function here

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      },
      revalidate: 60 * 60 * 24
    }
  }

  return {
    props: { product }
  }
}

export default ProductPage
