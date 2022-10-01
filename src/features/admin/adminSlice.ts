import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { adminLogin } from "./adminActions";

interface adminState {
  status: 'idle' |'loading',
  adminTooken: string | null,
  error: string | null
}
const initialState: adminState = {
  status: 'idle',
  adminTooken: null,
  error: null
}

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending,(state) => {
      state.status = "loading"
      state.error = null
    });
    builder.addCase(adminLogin.fulfilled,(state, { payload }) => {
      console.log("payload",payload)
      state.adminTooken = payload.token
      state.status = "idle"
    });
    builder.addCase(adminLogin.rejected,(state, { payload }) => {
       state.error = "some thing wrong happend";      
            state.status = "idle";
    })
  }
})

export default adminSlice.reducer;