import type { NextPage, GetServerSideProps } from "next"
import { Box, Typography } from "@mui/material"

import { getAllProducts, getProductsByTerm } from "../../database/dbProducts"
import { IProduct } from "../../interfaces"

import { ShopLayout } from "../../components/layout"
import { ProductList } from "../../components/products"

interface Props {
  products: IProduct[]
  productsExists: boolean
  query: string
}

const SearchPage: NextPage<Props> = ({ products, productsExists, query }) => {
  return (
    <ShopLayout
      title={"Ecommerce | Búsquedas de " + query}
      pageDescription={"Encuentra los mejores productos en nuestra tienda"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      {productsExists ? (
        <Typography variant="h2" sx={{ mb: 1 }}>
          Buscando {query}
        </Typography>
      ) : (
        <Box display="flex">
          <Typography variant="h2" sx={{ mb: 1 }}>
            No encontramos ningún producto
          </Typography>
          <Typography variant="h2" sx={{ mb: 1, ml: 1 }} color="secondary">
            {query}
          </Typography>
        </Box>
      )}

      <ProductList products={products} />
    </ShopLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string } // your fetch function here
  if (query.length === 0)
    return {
      redirect: {
        destination: "/",
        permanent: true
      }
    }
  let products = await getProductsByTerm(query)
  const productsExists = products.length > 0

  if (!productsExists) {
    products = await getAllProducts()
  }

  return {
    props: {
      products,
      productsExists,
      query
    }
  }
}

export default SearchPage
