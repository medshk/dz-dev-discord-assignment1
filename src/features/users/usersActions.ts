import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../../app/store"
import { api } from "../admin/adminActions"

interface user {
  id: number,
  name: string,
  username: string,
  email: string,
  city?: string
}

export const getUsers = createAsyncThunk<user[],void,{
  state: RootState
}>(
  "users/getUsers",
  async (arg,thunkApi) => {
    const config = {
      headers: {
        Authorization: `Bearer ${thunkApi.getState().admin.adminTooken}`,
      },
    }
    console.log("sending request ...",thunkApi.getState().admin.adminTooken)
    const data = await axios.get(`${api}/data`, config)
    console.log("server data",data)
    return data.data
  }
)

