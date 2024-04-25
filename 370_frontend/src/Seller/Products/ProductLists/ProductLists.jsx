// ProductListByShopPage.js

import React from 'react';
import { useDeleteProductMutation, useGetProductByShopIdQuery } from '../../../features/products/productAPI';
// import { useGetProductByShopIdQuery, useDeleteProductMutation } from './productAPI'; // Import the RTK Query hooks

const ProductLists = () => {
  const shop_id = localStorage.getItem('shop_id');
    const { data: products, isLoading, isError } = useGetProductByShopIdQuery(shop_id, { skip: !shop_id });
    const [deleteProduct, { isLoading: isDeleting, isError: deleteError }] = useDeleteProductMutation();
    console.log(products)
    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId).unwrap(); // Unwrap the result
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const handleUpdate = (productId) => {
        // Implement update functionality here
        console.log(`Update product with ID ${productId}`);
    };

    return (
        <div>
            <h2>Products</h2>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error fetching products</div>}
            {products && (
                <ul>
                    {products.map(product => (
                        <li key={product.product_id}>
                            <div>
                                <strong>Name: </strong>{product.name}
                            </div>
                            <div>
                                <strong>Quantity: </strong>{product.quantity}
                            </div>
                            <div>
                                <strong>Price: </strong>{product.price}
                            </div>
                            <div>
                                <strong>Approval: </strong>{product.approval}
                            </div>
                            <div>
                                <strong>Review: </strong>{product.review}
                            </div>
                            <button onClick={() => handleDelete(product.product_id)} disabled={isDeleting}>Delete</button>
                            <button onClick={() => handleUpdate(product.product_id)} disabled={isDeleting}>Update</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductLists;
