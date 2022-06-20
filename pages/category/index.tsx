import { useProducts } from "../../hooks"
import { ShopLayout } from "../../components/layout"
import { ProductList } from "../../components/products"
import { Loading } from "../../components/ui"
import { Typography } from "@mui/material"

const KidPage = () => {
  const { products, isLoading } = useProducts("/products")

  return (
    <ShopLayout
      title={"Todos | Ecommerce"}
      pageDescription={
        "Encuentra los mejores productos para todos en nuestra tienda"
      }
    >
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      {isLoading ? <Loading /> : <ProductList products={products} />}
    </ShopLayout>
  )
}

export default KidPage
