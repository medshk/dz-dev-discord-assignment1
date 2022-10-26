import { configureStore, combineReducers } from "@reduxjs/toolkit";
import usersSlice from "../features/users/usersSlice";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";

import adminSlice from "../features/admin/adminSlice"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["users", "admin"]
}
const rootReducer = combineReducers({
  users: usersSlice,
  admin: adminSlice,
})
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store  = configureStore({
  reducer:persistedReducer,
  // middleware: [thunk]
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;