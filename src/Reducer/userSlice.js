import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    id: null,
  },
  reducers: {
    setUsername: (state, action) => {
      console.log("userSlice.setUsername")
      state.username = action.payload
    
    },
    setId: (state, action) => {
      console.log("userSlice.setId")
      state.id = action.payload
    },
    reset:(state,action)=>{
      state.username=null
      state.id=null
    }
  },
})

// red({id:2, username:"harchi"}) // action.payload = {id:2,username:"harchi"}

// redId(2)                       // action.payload = 2
// redUsername("alireza")         // action.payload = "alireza"

export const{setId,setUsername}=userSlice.actions
export default userSlice.reducer