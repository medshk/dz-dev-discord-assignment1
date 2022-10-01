import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const api: string = "https://dz-dev-discord-assigment1-api.herokuapp.com"

interface adminCredentials {
  password: string,
  email: string
}

interface token {
  token: string
}

export const adminLogin = createAsyncThunk<token,adminCredentials>(
  "admin/login",
 async ({ email, password }: adminCredentials) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      `${api}/login`,
      { email, password },
      config
    )
    return data
  } catch (error) {
    return error
  }
 }
)