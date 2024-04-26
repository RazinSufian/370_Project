// ProductListByShopPage.js

import React from 'react';
import { useDeleteProductMutation, useGetProductByShopIdQuery } from '../../../features/products/productAPI';
// import { useGetProductByShopIdQuery, useDeleteProductMutation } from './productAPI'; // Import the RTK Query hooks
import './ProductLists.css';
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
        <div className="product-list-container"> {/* Add class name */}
            <h2>Products</h2>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error fetching products</div>}
            {products && (
                <ul className="product-list"> {/* Add class name */}
                    {products.map(product => (
                        <li key={product.product_id} className="product-item"> {/* Add class name */}
                            <div className="product-image"> {/* Add class name */}
                                <img src={product.image_url} alt="Product_image" />
                            </div>                           
                            <div className="product-details"> {/* Add class name */}
                                <strong>Name: </strong>{product.name}
                                <strong>Quantity: </strong>{product.quantity}
                                <strong>Price: </strong>{product.price}
                                <strong>Approval: </strong>{product.approval}
                                <strong>Review: </strong>{product.review}
                            </div>
                            <div className="product-buttons"> {/* Add class name */}
                                <button onClick={() => handleDelete(product.product_id)} disabled={isDeleting}>Delete</button>
                                {/* <button onClick={() => handleUpdate(product.product_id)} disabled={isDeleting}>Update</button> */}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductLists;
