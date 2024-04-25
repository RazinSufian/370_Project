// features/customers/customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../API/axios';
const baseUrl = import.meta.env.VITE_BASE_URL;
const initialState = {
  customers: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  role: null,
  customer: null,
};

// Async thunk actions for Customers
export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await axios.get('/customer');
  return response.data;
});

export const getCustomer = createAsyncThunk('customers/getCustomer', async () => {
  const token = localStorage.getItem('token'); // Correctly fetch token from local storage
  console.log(axios);
  const response = await axios.get(`${baseUrl}/customer/token/${token}`);
  console.log(response.data);
  return response.data;
});

export const addCustomer = createAsyncThunk('customers/addCustomer', async (customerData) => {
  const response = await axios.post('/customer', customerData);
  return response.data;
});

export const updateCustomer = createAsyncThunk('customers/updateCustomer', async ({ id, customerData }) => {
  const response = await axios.put(`/customer/${id}`, customerData);
  return response.data;
});

export const deleteCustomer = createAsyncThunk('customers/deleteCustomer', async (id) => {
  await axios.delete(`/customer/${id}`);
  return id;
});

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.customers = action.payload;
        state.role = 'customer';
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getCustomer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCustomer.fulfilled, (state, action) => {
        state.seller = action.payload;
        state.role = 'customer';
        state.loaded = true;
        state.isLoading = false;
        localStorage.setItem('customer_id', action.payload[0].customer_id);
        state.customer = action.payload;
        
      })
      .addCase(getCustomer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.loaded = false;
        state.role = null;
      })
      .addCase(addCustomer.fulfilled, (state, action) => {
        state.customers.push(action.payload);
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex(customer => customer.id === action.payload.id);
        state.customers[index] = action.payload;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        const index = state.customers.findIndex(customer => customer.id === action.payload);
        state.customers.splice(index, 1);
      });
  }
});

export default customerSlice.reducer;
