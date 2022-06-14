import NextLink from "next/link"
import { Button, Chip, Grid, Link, Typography } from "@mui/material"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

import { ShopLayout } from "../../components/layout"

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    width: 100
  },
  {
    field: "fullname",
    headerName: "Nombre Completo",
    width: 300
  },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra información acerca si está pagada la orden o no",
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      )
    }
  },
  {
    field: "Order",
    headerName: "No. Orden",
    description: "ID de la orden de compra",
    width: 200,
    sortable: false,
    filterable: false,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link>
            <Button color="secondary">Ver más</Button>
          </Link>
        </NextLink>
      )
    }
  }
]

const rows = [
  { id: 1, paid: true, fullname: "John Doe" },
  { id: 2, paid: false, fullname: "Darwin Narro" },
  { id: 3, paid: false, fullname: "John Doe" },
  { id: 4, paid: true, fullname: "Pedro Frank" },
  { id: 5, paid: false, fullname: "John Doe" },
  { id: 6, paid: false, fullname: "Darwin Narro" },
  { id: 7, paid: true, fullname: "Pedro Frank" }
]

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de órdenes"
      pageDescription="Historial de órdenes del cliente xxxx"
    >
      <Typography>Historial de órdenes</Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: "650px", width: "100%" }}>
          <DataGrid columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage
