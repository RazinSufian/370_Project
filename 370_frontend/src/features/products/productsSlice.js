// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    topProducts: [],
    product: {},
    loading: 'idle',
    error: null,
  },
  reducers: {
    setTopProducts: (state, action) => {
      state.topProducts = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTopProducts, setProduct, setLoading, setError } = productsSlice.actions;

export const selectTopProducts = (state) => state.products.topProducts;

export const selectProduct = (state) => state.products.product;

export default productsSlice.reducer;
