import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import { apiSlice } from '../features/products/productsApiSlice';
import authSlice from '../features/auth/authSlice';
import adminSllice from '../features/users/adminSllice';
import sellerSlice from '../features/users/sellerSlice';
import customerSlice from '../features/users/customerSlice';



const store = configureStore({
  reducer: {
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth : authSlice,
    admin: adminSllice,
    seller: sellerSlice,
    customer: customerSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;