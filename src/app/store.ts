import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";

import adminSlice from "../features/admin/adminSlice"
export const store  = configureStore({
  reducer: {
    users: usersSlice,
    admin: adminSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;