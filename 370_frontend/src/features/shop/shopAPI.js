import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes: ['Shop'],
    endpoints: (builder) => ({
        getAllShops: builder.query({
            query: () => 'shop',
            providesTags: ['Shop'],
        }),
        getShopById: builder.query({
            query: (id) => `/shop/${id}`,
            providesTags: (result, error, id) => [{ type: 'Shop', id }],
        }),
        getShopBySellerId: builder.query({
            query: (seller_id) => `/shop/seller/${seller_id}`,
            providesTags: (result, error, seller_id) => [{ type: 'Shop', id: seller_id }],
        }),
        getShopByName: builder.query({
            query: (name) => `/shop/name/${name}`,
            providesTags: (result, error, name) => [{ type: 'Shop', id: name }],
        }),
        createShop: builder.mutation({
            query: ({ seller_id, name, total_categories, phone, division, house, city, fb, insta }) => ({
                url: 'shop',
                method: 'POST',
                body: { seller_id, name, total_categories, phone, division, house, city, fb, insta }
            }),
            invalidatesTags: ['Shop'],
        }),
        updateShop: builder.mutation({
            query: ({ shop_id, seller_id, name, total_categories, phone, division, house, city, fb, insta }) => ({
                url: `/shop/${shop_id}`,
                method: 'PUT',
                body: { seller_id, name, total_categories, phone, division, house, city, fb, insta }
            }),
            invalidatesTags: [{ type: 'Shop', id: 'LIST' }],
        }),
        deleteShop: builder.mutation({
            query: (id) => ({
                url: `/shop/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Shop', id: 'LIST' }],
        }),
    }),
});

export const {
    useGetAllShopsQuery,
    useGetShopByIdQuery,
    useGetShopBySellerIdQuery,
    useGetShopByNameQuery,
    useCreateShopMutation,
    useUpdateShopMutation,
    useDeleteShopMutation,
} = shopApi;

export default shopApi;
