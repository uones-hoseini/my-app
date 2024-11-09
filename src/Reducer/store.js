import { configureStore } from "@reduxjs/toolkit";
import logginSlice from './logginSlice'
import userSlice from './userSlice'

export const store=configureStore({
  reducer:{
    isLoggedin:logginSlice,
    user:userSlice
  },
})