import { createSlice } from "@reduxjs/toolkit"

const orderSlice = createSlice({
  name: "order",
  initialState: {
    username: null,
    id: null,
    price: null,
    weight: null,
    destination: null,
    orgin: null,
  },
  reducers: {
    setUsername: (state, action) => {
      console.log("userSlice.setUsername")
      state.username = action.payload
    },
    setUsername: (state, action) => {
      console.log("userSlice.setId")
      state.id = action.payload
    },
    setPrice: (state, action) => {
      console.log("userSlice.setPrice")
      state.price = action.payload
    },
    setWeight: (state, action) => {
      console.log("userSlice.setWeight")
      state.weight = action.payload
    },
    setDestination: (state, action) => {
      console.log("userSlice.setDestination")
      state.destination = action.payload
    },
    setOrgin: (state, action) => {
      console.log("userSlice.setOrgin")
      state.orgin = action.payload
    },
  },
})
export const { setUsername, setPrice, setWeight, setDestination, setOrgin ,setId} = orderSlice.actions
export default orderSlice.reducer
