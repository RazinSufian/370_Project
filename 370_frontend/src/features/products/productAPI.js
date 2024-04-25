import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productAPI = createApi({
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `product_info`,
        }),
        getProductById: builder.query({
            query: (id) => `product_info/${id}`,
        }),
        getProductByShopId: builder.query({
            query: (shop_id) => `product_info/shop/${shop_id}`,
        }),
        getProductByShopName: builder.query({
            query: (name) => `product_info/shop/${name}`,
        }),
        createProduct: builder.mutation({
            query: ({ shop_id, name, quantity, approval, price, review }) => ({
                url: 'product_info',
                method: 'POST',
                body: { shop_id, name, quantity, approval, price, review }
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ product_id, shop_id, name, quantity, approval, price, review }) => ({
                url: `product_info/${product_id}`,
                method: 'PUT',
                body: { shop_id, name, quantity, approval, price, review }
            }),
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `product_info/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetAllProductsQuery,
    useGetProductByIdQuery,
    useGetProductByShopIdQuery,
    useGetProductByShopNameQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productAPI;

export default productAPI;
