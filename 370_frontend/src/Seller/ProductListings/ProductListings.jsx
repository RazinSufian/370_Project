// ProductListings.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateProductMutation } from '../../features/products/productAPI';
// import { useCreateProductMutation } from './productAPI'; // Import the RTK Query hooks
// import { useHistory } from 'react-router-dom'; // If using React Router for navigation

const ProductListings = () => {
  const shop_id = localStorage.getItem('shop_id');
    const [formData, setFormData] = useState({
        shop_id: shop_id,
        name: '',
        quantity: '',
        approval: false,
        price: '',
        review: ''
    });

    const navigate = useNavigate();

    // const history = useHistory();
    const [createProduct, { isLoading, isError }] = useCreateProductMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(formData).unwrap(); // Unwrap the result
            // Redirect to product list page after successful creation
            navigate('/seller/products');
        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    return (
        <div>
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Shop ID:
                    <input disabled type="text" name="shop_id" value={formData.shop_id} onChange={handleChange} />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Quantity:
                    <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} />
                </label>
                <label>
                    Approval:
                    <input type="text" name="approval" value={formData.approval} onChange={handleChange} />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" value={formData.price} onChange={handleChange} />
                </label>
                <label>
                    Review:
                    <input type="text" name="review" value={formData.review} onChange={handleChange} />
                </label>
                <button type="submit" disabled={isLoading}>Create Product</button>
                {isError && <div>Error creating product</div>}
            </form>
        </div>
    );
};

export default ProductListings;
