import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container sx={{ marginTop: 1 }}>
      <Grid item xs={6}>
        <Typography>No. Productos:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Subtotal:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>$155.36</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos:</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>15%</Typography>
      </Grid>
      <Grid item xs={6} sx={{ marginTop: 2 }}>
        <Typography variant="subtitle1">Total:</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ marginTop: 2 }}
        display="flex"
        justifyContent="end"
      >
        <Typography variant="subtitle1">$185.34</Typography>
      </Grid>
    </Grid>
  )
}
