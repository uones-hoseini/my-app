import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "null",
    id: null,
    phone: "Phone:null",
  },
  reducers: {
    setUsername: (state, action) => {
      console.log("userSlice.setUsername");
      state.username = action.payload;
    },
    setId: (state, action) => {
      console.log("userSlice.setId");
      state.id = action.payload;
    },
    setPhone: (state, action) => {
      console.log("userSlice.setPhone");
      state.phone = action.payload;
    },
    reset: (state) => {
      state.username = null;
      state.id = null;
      state.phone = null;
    },
  },
});

export const { setId, setUsername, setPhone } = userSlice.actions; // Added setPhone
export default userSlice.reducer;
