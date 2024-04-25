// features/sellers/sellerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../API/axios'
import { useGetShopBySellerIdQuery } from '../shop/shopAPI';
const baseUrl = import.meta.env.VITE_BASE_URL;

const initialState = {
  sellers: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  seller : [],
  isLoading: false,
  loaded: false,
  role: null,
  sellerId : null
};

// Async thunk actions for Sellers
export const fetchSellers = createAsyncThunk('sellers/fetchSellers', async () => {
  const response = await axios
    .get('/seller');
  return response.data;
});

export const addSeller = createAsyncThunk('sellers/addSeller', async (sellerData) => {
  const response = await axios.post('/seller', sellerData);
  return response.data;
});

export const getSeller = createAsyncThunk('sellers/getSeller', async () => {
  const token = localStorage.getItem('token');
  console.log(axios)
  const response = await axios.get(`${baseUrl}/seller/token/${token}`);
  console.log(response.data)
  return response.data;
});

export const updateSeller = createAsyncThunk('sellers/updateSeller', async ({ id, sellerData }) => {
  const response = await axios.put(`/seller/${id}`, sellerData);
  return response.data;
});

export const deleteSeller = createAsyncThunk('sellers/deleteSeller', async (id) => {
  await axios.delete(`/seller/${id}`);
  return id;
});

const sellerSlice = createSlice({
  name: 'sellers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSellers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sellers = action.payload;
        
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getSeller.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSeller.fulfilled, (state, action) => {
        state.seller = action.payload;
        state.role = 'seller';
        state.loaded = true;
        state.isLoading = false;
        localStorage.setItem('seller_id', action.payload[0].seller_id);
       
      })
      .addCase(getSeller.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.loaded = false;
        state.role = null;
        state.seller = null;
      })
      .addCase(addSeller.fulfilled, (state, action) => {
        state.sellers.push(action.payload);
      })
      .addCase(updateSeller.fulfilled, (state, action) => {
        const index = state.sellers.findIndex(seller => seller.id === action.payload.id);
        state.sellers[index] = action.payload;
      })
      .addCase(deleteSeller.fulfilled, (state, action) => {
        const index = state.sellers.findIndex(seller => seller.id === action.payload);
        state.sellers.splice(index, 1);
      });
  }
});

export default sellerSlice.reducer;
