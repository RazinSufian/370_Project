// features/customers/customerSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../API/axios';

const initialState = {
  customers: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  role: null,
};

// Async thunk actions for Customers
export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async () => {
  const response = await axios.get('/customer');
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
