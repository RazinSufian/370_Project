import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes: ['Order'],
    endpoints: (builder) => ({
        getAllOrders: builder.query({
            query: () => 'order',
            providesTags: ['Order'],
        }),
        getOrderById: builder.query({
            query: (id) => `order/${id}`,
            providesTags: (result, error, id) => [{ type: 'Order', id }],
        }),
        getOrdersByCustomerId: builder.query({
            query: (customer_id) => `order/customer/${customer_id}`,
            providesTags: (result, error, customer_id) => [{ type: 'Order', id: `customer-${customer_id}` }],
        }),
        getOrdersByProductId: builder.query({
            query: (product_id) => `order/product/${product_id}`,
            providesTags: (result, error, product_id) => [{ type: 'Order', id: `product-${product_id}` }],
        }),
        getOrdersByShopId: builder.query({
            query: (shop_id) => `order/shop/${shop_id}`,
            providesTags: (result, error, shop_id) => [{ type: 'Order', id: `shop-${shop_id}` }],
        }),
        createOrder: builder.mutation({
            query: ({ customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status }) => ({
                url: 'order',
                method: 'POST',
                body: { customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status }
            }),
            invalidatesTags: ['Order'],
        }),
        updateOrder: builder.mutation({
            query: ({ order_id, customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status }) => ({
                url: `order/${order_id}`,
                method: 'PUT',
                body: { customer_id, product_id, shop_id, payment_method, billing_address, delivery_time, payment_status, shipment_status }
            }),
            invalidatesTags: (result, error, { order_id }) => [{ type: 'Order', id: order_id }],
        }),
        deleteOrder: builder.mutation({
            query: (id) => ({
                url: `order/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => [{ type: 'Order', id }],
        }),
    }),
});

export const {
    useGetAllOrdersQuery,
    useGetOrderByIdQuery,
    useGetOrdersByCustomerIdQuery,
    useGetOrdersByProductIdQuery,
    useGetOrdersByShopIdQuery,
    useCreateOrderMutation,
    useUpdateOrderMutation,
    useDeleteOrderMutation,
} = orderApi;

export default orderApi;
