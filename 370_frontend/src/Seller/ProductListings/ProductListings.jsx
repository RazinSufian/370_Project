// ProductListings.js
import React, { useState } from 'react';

const ProductListings = () => {
  // Mockup data
  const [productListings, setProductListings] = useState([
    {
      id: 1,
      name: 'Classic Sneakers',
      description: 'Timeless style for any occasion',
      price: 49.99,
      sizes: ['US 7', 'US 8', 'US 9'],
    },
    // Add more mockup data as needed
  ]);

  // Function to handle adding a new product
  const addProduct = () => {
    const newProduct = {
      id: productListings.length + 1,
      name: 'New Product',
      description: 'Product description',
      price: 29.99,
      sizes: ['US 7', 'US 8', 'US 9'],
    };
    setProductListings((prevListings) => [...prevListings, newProduct]);
  };

  // Function to handle deleting a product
  const deleteProduct = (productId) => {
    setProductListings((prevListings) =>
      prevListings.filter((product) => product.id !== productId)
    );
  };

  return (
    <div>
      <h2>Product Listings</h2>

      <button onClick={addProduct}>Add New Product</button>

      {productListings.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Sizes: {product.sizes.join(', ')}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete Product</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListings;
