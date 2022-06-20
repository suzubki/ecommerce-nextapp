import { Typography } from "@mui/material"

import { useProducts } from "../../hooks"
import { ShopLayout } from "../../components/layout"
import { ProductList } from "../../components/products"
import { Loading } from "../../components/ui"

const KidPage = () => {
  const { products, isLoading } = useProducts("/products?gender=women")

  return (
    <ShopLayout
      title={"Mujeres | Ecommerce"}
      pageDescription={
        "Encuentra los mejores productos para mujeres en nuestra tienda"
      }
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos de mujeres
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default KidPage
