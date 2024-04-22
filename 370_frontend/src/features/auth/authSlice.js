import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

// Define API endpoint base
const API_BASE_URL = `${import.meta.env.VITE_BASE_URL}/auth`; // Change this to your actual API base URL
// Helper function to set local storage
const setAuthData = (token, user, role) => {
  console.log(token, user, role)
  localStorage.setItem('isLoggedIn', 'true');
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('role', role);
};

// Helper function to clear local storage
const clearAuthData = () => {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('role');
};
// Async thunks for signing up and logging in
export const adminSignup = createAsyncThunk(
  'auth/adminSignup',
  async ({ name, role, pass }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup/admin`, { name, role, pass });
      setAuthData(response.data.token, { name, role }, role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const adminLogin = createAsyncThunk(
  'auth/adminLogin',
  async ({ name, pass }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login/admin`, { name, pass });
      const { token } = response.data;
      const decoded = jwtDecode(token);
      setAuthData(response.data.token, { name, role }, role);
      return { ...response.data, role: decoded.role };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customerSignup = createAsyncThunk(
  'auth/customerSignup',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup/customer`, data);
      setAuthData(response.data.token, { name, role }, role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const customerLogin = createAsyncThunk(
  'auth/customerLogin',
  async ({ email, pass }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login/customer`, { email, pass });
      const { token } = response.data;
      const decoded = jwtDecode(token);
      console.log(decoded);
      setAuthData(response.data.token, email, 'customer');
      console.log(response.data);
      return { ...response.data, role: decoded.role };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sellerSignup = createAsyncThunk(
  'auth/sellerSignup',
  async ({ name, email, pass }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/signup/seller`, { name, email, pass });
      setAuthData(response.data.token, { name, role }, role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const sellerLogin = createAsyncThunk(
  'auth/sellerLogin',
  async ({ email, pass }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login/seller`, { email, pass });
      const { token } = response.data;
      const decoded = jwtDecode(token);
      setAuthData(response.data.token, { name, role }, role);
      return { ...response.data, role: decoded.role };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  user: null,
  token: null,
  role: null,  // This field now explicitly stores the user's role
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      clearAuthData();
      state.user = null;
      state.token = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
      })
      .addCase(customerLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
      })
      .addCase(sellerLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
      })
      .addCase(adminSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
      })
      .addCase(customerSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
      })
      .addCase(sellerSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.status = 'succeeded';
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state) => {
          state.status = 'loading';
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.status = 'failed';
          state.error = action.payload || action.error.message;
        }
      );
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
