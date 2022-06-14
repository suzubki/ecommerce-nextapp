import { ShopLayout } from "../../components/layout"
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Box,
  Button
} from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"

const CartPage = () => {
  return (
    <ShopLayout
      title="Carrito de compras"
      pageDescription="Carrito de compras de la tienda"
    >
      <Typography variant="h1" component="h1">
        Carrito de compras
      </Typography>

      <Grid container marginTop={2}>
        <Grid item xs={12} sm={6}>
          {/* CartList */}
          <CartList />
        </Grid>
        <Grid item xs={12} sm={1} />
        <Grid item xs={12} sm={5}>
          {/* CartList - Payment */}
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Order</Typography>
              <Divider sx={{ my: 1 }} />

              {/* Cart Order Summary */}
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="primary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage
