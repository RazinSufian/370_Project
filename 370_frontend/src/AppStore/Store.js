import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import { apiSlice } from '../features/products/productsApiSlice';
import authSlice from '../features/auth/authSlice';
import adminSllice from '../features/users/adminSllice';
import sellerSlice from '../features/users/sellerSlice';
import customerSlice from '../features/users/customerSlice';
import productAPI from '../features/products/productAPI';
import shopApi from '../features/shop/shopAPI';
import orderApi from '../features/order/orderAPI';
import cartApi from '../features/cart/cartAPI';



const store = configureStore({
  reducer: {
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    admin: adminSllice,
    seller: sellerSlice,
    customer: customerSlice,
    [productAPI.reducerPath]: productAPI.reducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
      .concat(productAPI.middleware)
      .concat(shopApi.middleware)
      .concat(orderApi.middleware)
      .concat(cartApi.middleware),
});

export default store;