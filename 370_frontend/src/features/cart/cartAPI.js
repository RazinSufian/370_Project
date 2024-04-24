import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://your-server-url.com/api/' }),
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: ({ customer_id, product_id }) => ({
                url: 'cart',
                method: 'POST',
                body: { customer_id, product_id }
            }),
            invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
        getCartByCustomerId: builder.query({
            query: (customer_id) => ({
                url: 'cart',
                method: 'POST',  // Using POST to send customer_id in the body, but ideally should be GET with URL param
                body: { customer_id }
            }),
            providesTags: (result, error, customer_id) => [{ type: 'Cart', id: `customer-${customer_id}` }],
        }),
        removeFromCart: builder.mutation({
            query: ({ customer_id, product_id }) => ({
                url: 'cart',
                method: 'DELETE',
                body: { customer_id, product_id }
            }),
            invalidatesTags: [{ type: 'Cart', id: 'LIST' }],
        }),
    }),
});

export const {
    useAddToCartMutation,
    useGetCartByCustomerIdQuery,
    useRemoveFromCartMutation,
} = cartApi;

export default cartApi;
