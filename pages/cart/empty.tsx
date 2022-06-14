import NextLink from "next/link"
import { RemoveShoppingCartOutlined } from "@mui/icons-material"
import { Box, Button, Link, Typography } from "@mui/material"

import { ShopLayout } from "../../components/layout"

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Carrito vacío"
      pageDescription="No hay artículos en el carrito de compras"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography marginLeft={2}>Su carrito está vacío</Typography>
          <NextLink href="/" passHref>
            <Link>
              <Button color="primary" sx={{ marginTop: 1 }}>
                Regresar
              </Button>
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage
