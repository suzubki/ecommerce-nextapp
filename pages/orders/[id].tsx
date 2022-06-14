import NextLink from "next/link"
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Button,
  Link,
  Chip
} from "@mui/material"

import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layout"
import { CreditCardOffOutlined, CreditCardOutlined } from "@mui/icons-material"

const OrderPage = () => {
  return (
    <ShopLayout
      title="Resumen de la orden xxxxxxxxx"
      pageDescription="Resumen de la orden de compras de los productos que se han seleccionado"
    >
      <Typography variant="h1" component="h1">
        Orden: ABC123
      </Typography>

      <Chip
        sx={{ my: 2 }}
        label="Orden pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      />
      <Chip
        sx={{ my: 2 }}
        label="Orden pagada"
        variant="outlined"
        color="success"
        icon={<CreditCardOutlined />}
      />

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
              {/* Title */}
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
              {/* Cart Order Summary */}
              <OrderSummary />

              <h1>Pagar...</h1>
              <Chip
                sx={{ my: 2 }}
                label="Orden pagada"
                variant="outlined"
                color="success"
                icon={<CreditCardOutlined />}
              />
              {/* Confirm payment */}
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

export default OrderPage
