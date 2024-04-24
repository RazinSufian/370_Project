// features/admin/adminSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../API/axios';

const initialState = {
  admins: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  role: null,
};

// Async thunk actions
export const fetchAdmins = createAsyncThunk('admins/fetchAdmins', async () => {
  const response = await axios.get('/admin');
  return response.data;
});

export const addAdmin = createAsyncThunk('admins/addAdmin', async (adminData) => {
  const response = await axios.post('/admin', adminData);
  return response.data;
});

export const updateAdmin = createAsyncThunk('admins/updateAdmin', async ({ id, adminData }) => {
  const response = await axios.put(`/admin/${id}`, adminData);
  return response.data;
});

export const deleteAdmin = createAsyncThunk('admins/deleteAdmin', async (id) => {
  await axios.delete(`/admin/${id}`);
  return id;
});

const adminSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdmins.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.admins = action.payload;
        state.role = 'admin';
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addAdmin.fulfilled, (state, action) => {
        state.admins.push(action.payload);
      })
      .addCase(updateAdmin.fulfilled, (state, action) => {
        const index = state.admins.findIndex(admin => admin.id === action.payload.id);
        state.admins[index] = action.payload;
      })
      .addCase(deleteAdmin.fulfilled, (state, action) => {
        const index = state.admins.findIndex(admin => admin.id === action.payload);
        state.admins.splice(index, 1);
      });
  }
});

export default adminSlice.reducer;
