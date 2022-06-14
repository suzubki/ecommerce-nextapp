import NextLink from "next/link"
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
  Link
} from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"

const SummaryPage = () => {
  return (
    <ShopLayout
      title="Resumen de la orden"
      pageDescription="Resumen de la orden de compras de los productos que se han seleccionado"
    >
      <Typography variant="h1" component="h1">
        Carrito de compras
      </Typography>

      <Grid container marginTop={2}>
        <Grid item xs={12} sm={6}>
          {/* CartList */}
          <CartList editable={false} />
        </Grid>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={5}>
          {/* CartList - Payment */}
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Resumen de compras</Typography>
              <Divider sx={{ my: 1 }} />

              {/* Update order list */}
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ marginTop: 2 }}
              >
                <Typography variant="subtitle1">
                  Dirección de entrega
                </Typography>
                <NextLink href="/checkout/address" passHref>
                  <Link underline="always">Editar datos</Link>
                </NextLink>
              </Box>

              {/* User data */}
              <Typography>Darwin Narro</Typography>
              <Typography>Mz B3 LT.15 Villa la Alborada</Typography>
              <Typography>Lima, Pte. Piedra</Typography>
              <Typography>Perú</Typography>
              <Typography>+51 922860113</Typography>

              <Divider sx={{ marginTop: 3 }} />

              {/* Shopping cart data */}
              {/* Cart Order Summary */}
              <Box
                display="flex"
                justifyContent="space-between"
                sx={{ marginTop: 2 }}
              >
                <Typography variant="subtitle1">Compras</Typography>
                <NextLink href="/cart" passHref>
                  <Link underline="always">Ir al carrito de compras</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="primary" className="circular-btn" fullWidth>
                  Confirmar orden
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage
