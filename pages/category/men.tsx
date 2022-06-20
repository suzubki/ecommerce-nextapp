import { Typography } from "@mui/material"

import { useProducts } from "../../hooks"
import { ShopLayout } from "../../components/layout"
import { ProductList } from "../../components/products"
import { Loading } from "../../components/ui"

const KidPage = () => {
  const { products, isLoading } = useProducts("/products?gender=men")

  return (
    <ShopLayout
      title={"Hombres | Ecommerce"}
      pageDescription={
        "Encuentra los mejores productos para hombres en nuestra tienda"
      }
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos para hombres
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default KidPage
