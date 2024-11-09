import { createSlice } from "@reduxjs/toolkit";

  
  

const logginSlice=createSlice({
  name:"isLoggedin",
  initialState:!!localStorage.getItem("jwt"),
  reducers:{
    loggin:state=>{
      state=true
      return state
    },
    loggout:state=>{
      state=false
      return state
    }
  }

})

export const{loggin,loggout}=logginSlice.actions
export default logginSlice.reducer