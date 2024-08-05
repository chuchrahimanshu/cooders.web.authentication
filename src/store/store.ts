import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./accounts.services";
import { tokenSlice } from "./tokens.services";

export const store = configureStore({
  reducer: {
    [accountSlice.reducerPath]: accountSlice.reducer,
    [tokenSlice.reducerPath]: tokenSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountSlice.middleware,
      tokenSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
