import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./usersActions"


export interface user {
  id?: number,
  name: string,
  username: string,
  email: string,
  city?: string
}
export interface users {
  users: user[]
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
      console.log("adding user ... ",action.payload)
      console.log("length", state.value.length)
      const allIds  : any = state.value.map(user => user.id)
      console.log("max id ", allIds)
      const newId = Math.max(...allIds) + 1
      const newUser: user = {id: newId,...action.payload}
      state.value.push(newUser)
    },
    editUser: (state, action: PayloadAction<user>) => {
      console.log("edit user ....",action.payload)
      const updatedUsers = state.value.map(user => {
        if(action.payload.id === user.id) {
          console.log("in 333333333")
          return action.payload
        }
        return user
      })
      state.value = updatedUsers
    },
    deleteUser : (state, action: PayloadAction<number>) => {
      console.log("user id",action.payload)
      const updatedUsers  = state.value.filter(user => user.id !== action.payload)
      state.value = updatedUsers
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

export const { addUser , editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;