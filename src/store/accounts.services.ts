import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL as string;
const ACCOUNT_URL = API_URL + "accounts";

export const accountSlice = createApi({
  reducerPath: "accountReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: ACCOUNT_URL,
  }),
  endpoints: () => ({}),
});
