import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateProductMutation } from '../../features/products/productAPI';
import './ProductListings.css'; // Import CSS file

const ProductListings = () => {
  const shop_id = localStorage.getItem('shop_id');
  const [formData, setFormData] = useState({
    shop_id: shop_id,
    name: '',
    quantity: '',
    approval: false,
    price: '',
    review: '',
    image_url: '',
    product_description: ''
  });

  const navigate = useNavigate();
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
    <div className="product-listings-container">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label className="form-label">
          Shop ID:
          <input disabled type="text" name="shop_id" value={formData.shop_id} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Quantity:
          <input type="text" name="quantity" value={formData.quantity} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Approval:
          <input type="text" name="approval" value={formData.approval} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Price:
          <input type="text" name="price" value={formData.price} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Image URL:
          <input type="text" name="image_url" value={formData.image_url} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Description:
          <input type="text" name="product_description" value={formData.product_description} onChange={handleChange} className="form-input" />
        </label>
        <label className="form-label">
          Review:
          <input type="text" name="review" value={formData.review} onChange={handleChange} className="form-input" />
        </label>
        <button type="submit" disabled={isLoading} className="submit-button">Create Product</button>
        {isError && <div className="error-message">Error creating product</div>}
      </form>
    </div>
  );
};

export default ProductListings;
