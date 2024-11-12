import { useEffect, useState } from "react"
import Axios from "axios"
import CardSpecs from "./CardSpecs"
import { Container } from "@mui/material"
import { styled } from "@mui/system" // Or import from styled-components directly

export default function OrderPage() {
  const [data, setData] = useState([])

  // Function to fetch orders
  const fetchOrders = () => {
    Axios.get("/orders?populate=user").then((response) => {
      setData(response.data.data)
    })
  }

  useEffect(() => {
    fetchOrders() // Fetch orders on component mount
  }, [])

  const handleDelete = (id) => {
    Axios.delete(`orders/${id}`)
      .then((response) => {
        console.log(`Item with id ${id} deleted successfully`)
        fetchOrders() // Fetch updated orders after deletion
      })
      .catch((error) => {
        console.error("Error deleting item:", error)
      })
  }

  return (
    <Container >
      {data.map((item, index) => (
        <CardSpecs
          key={index}
          id={item.documentId}
          orgin={item.orgin}
          destination={item.destination}
          name={item.user.username}
          weight={item.weight}
          price={item.price}
          onDelete={handleDelete} // Pass delete function
        />
      ))}
    </Container>
  )
}

// const CustomContainer = styled(Container)`
//   // background-color: grey;
//   color: white;

//   & .card{
//     border: 5px solid blue ;
//   }
// `;
