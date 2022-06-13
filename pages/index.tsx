import type { NextPage } from "next"
import { Typography } from "@mui/material"
import { ShopLayout } from "../components/layout"
import { initialData } from "../database/products"
import { ProductList } from "../components/products"

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Ecommerce - Home"}
      pageDescription={"Encuentra los mejores productos en nuestra tienda"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList products={initialData.products as any} />
    </ShopLayout>
  )
}

export default Home
