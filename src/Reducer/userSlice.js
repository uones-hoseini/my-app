import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: localStorage.getItem("username") || "",
    phone: localStorage.getItem("phone") || "",
    email: localStorage.getItem("email") || "",

    id: null,
  },
  reducers: {
    setUsername: (state, action) => {
      console.log("userSlice.setUsername")
      state.username = action.payload
      localStorage.setItem("username", action.payload) // Save to localStorage
    },
    setId: (state, action) => {
      console.log("userSlice.setId")
      state.id = action.payload
    },
    setPhone: (state, action) => {
      console.log("userSlice.setPhone")
      state.phone = action.payload
      localStorage.setItem("phone", action.payload) // Save to localStorage
    },
    setEmail: (state, action) => {
      console.log("userSlice.setEmail")
      state.email = action.payload
      localStorage.setItem("email", action.payload) // Save to localStorage
    },
    reset: (state) => {
      state.username = null
      state.id = null
      state.phone = null
    },
  },
})

export const { setId, setUsername, setPhone, setEmail } = userSlice.actions // Added setPhone
export default userSlice.reducer
