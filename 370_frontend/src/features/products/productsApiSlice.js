// src/features/products/productsApiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

console.log(import.meta.env.VITE_BASE_URL)
console.log(import.meta.env)

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }), // Adjust the base URL according to your backend server
  endpoints: (builder) => ({
    getTopProducts: builder.query({
      query: () => '/top-products',
    }),
    getProductbyId: builder.query({
      query: (id) => `/products/product_info/${id}`,
    }),
  }),
});

export const { useGetTopProductsQuery, useGetProductbyIdQuery } = apiSlice;
