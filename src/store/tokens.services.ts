import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_API_URL as string;
const TOKEN_URL = API_URL + "tokens";

export const tokenSlice = createApi({
  reducerPath: "tokenReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: TOKEN_URL,
  }),
  endpoints: () => ({}),
});
