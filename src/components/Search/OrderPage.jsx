import { Container } from "@mui/material"
import FilterSpecs from "./FilterSpecs"
import CardSpecs from "./CardSpecs"
import { useEffect, useState } from "react"
import Axios from "axios"

function OrderPage() {
  const [data, setData] = useState([])
  useEffect(() => {
    Axios.get("/orders?populate=user").then((response) => {
      // console.log(response)
      setData(response.data.data)
      console.log("data:",data)
    })
  }, [])
  return (
    <Container sx={{ marginTop: 10 }}>
      <FilterSpecs />
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <CardSpecs
              key={index}
              orgin={item.orgin || ""}
              destination={item.destination || ""}
              name={item?.user?.username || ""}
              weight={item.weight || ""}
            />
          )
        })}

      <br />
    </Container>
  )
}

export default OrderPage
