// ProductInfo.js

import React from 'react';
// import { useGetProductByIdQuery, useDeleteProductMutation } from './productAPI'; // Import the RTK Query hooks
import { useParams,  useNavigate } from 'react-router-dom'; // useParams to get product ID from URL, useHistory for navigation
import { useDeleteProductMutation, useGetProductByIdQuery } from '../../../features/products/productAPI';

const ProductInfo = () => {
    const { productId } = useParams(); // Get the product ID from URL params
    const navigate = useNavigate();
    const { data: product, isLoading, isError } = useGetProductByIdQuery(productId);
    const [deleteProduct, { isLoading: isDeleting, isError: deleteError }] = useDeleteProductMutation();

    const handleDelete = async () => {
        try {
            await deleteProduct(productId).unwrap(); // Unwrap the result
            history.push('/products'); // Redirect to product list page after deletion
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const handleUpdate = () => {
        // Implement update functionality here
        console.log('Update product');
        // You can navigate to an update page or open a modal with a form for updating product details
    };

    return (
        <div>
            <h2>Product Details</h2>
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error fetching product</div>}
            {product && (
                <div>
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
                    <button onClick={handleDelete} disabled={isDeleting}>Delete</button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            )}
        </div>
    );
};

export default ProductInfo;
