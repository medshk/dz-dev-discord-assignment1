import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./usersActions"


interface user {
  id: number,
  name: string,
  username: string,
  email: string,
  city?: string
}
export interface userState {
  status: 'idle' | 'loading',
  value: user[],
  error: string | null
}
const initialState: userState = {
  status: "idle",
  value: [],
  error: null
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    addUser: (state,action: PayloadAction<user>) => {
      state.value.push(action.payload)
    }
  },
  extraReducers :(Bearer) => {
    Bearer.addCase(getUsers.pending,(state) => {
      state.status = "loading"
      state.error = null
    });
    
    Bearer.addCase(getUsers.fulfilled,(state, { payload }) => {
      console.log({payload})
      state.value = payload
      state.status = "idle"
    });

    Bearer.addCase(getUsers.rejected,(state, { payload }) => {
      state.error = "something went wrong"
      state.status = "idle"
    });
}

})

export const { addUser } = userSlice.actions;
export default userSlice.reducer;