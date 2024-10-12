
import { Container } from "@mui/material"
import FilterSpecs from "./FilterSpecs"
import CardSpecs from "./CardSpecs"

function OrderPage() {
  return (
    <Container sx={{marginTop:10}}>
      <FilterSpecs/>
      <CardSpecs/>
      <CardSpecs/>
      <CardSpecs/>
      <CardSpecs/>
      <CardSpecs/>
    </Container>
  )
}

export default OrderPage