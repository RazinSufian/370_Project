// ProductInfo.js

import React, { useState } from 'react';

const ProductInfo = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send product information to your backend or perform any necessary actions
    console.log('Product information submitted:', { productName, productDescription, productPrice, productImage });
    // Add additional logic for form submission, such as sending data to your backend
  };

  return (
    <div className="add-product-container">
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </label>

        <label>
          Product Description:
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </label>

        <label>
          Product Price:
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </label>

        <label>
          Product Image URL:
          <input
            type="url"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
          />
        </label>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductInfo;
