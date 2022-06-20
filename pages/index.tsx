import type { NextPage } from "next"
import { Typography } from "@mui/material"

import { useProducts } from "../hooks"
import { ShopLayout } from "../components/layout"
import { ProductList } from "../components/products"
import { Loading } from "../components/ui"

const HomePage: NextPage = () => {
  const { products, isLoading } = useProducts("/products")

  return (
    <ShopLayout
      title={"Ecommerce | Bienvenidos a nuestra tienda en línea"}
      pageDescription={"Encuentra los mejores productos en nuestra tienda"}
    >
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default HomePage
