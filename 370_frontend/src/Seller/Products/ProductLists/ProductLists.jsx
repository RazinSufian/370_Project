// ProductLists.js

import React, { useState } from 'react';

const ProductLists = () => {
  // Mock-up data for product list
  const mockProducts = [
    {
      id: 1,
      name: 'Running Shoes',
      description: 'High-performance running shoes for athletes.',
      price: '$89.99',
      image: 'https://example.com/running-shoes.jpg',
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      description: 'Stylish and comfortable sneakers for everyday wear.',
      price: '$49.99',
      image: 'https://example.com/casual-sneakers.jpg',
    },
    // Add more mock products as needed
  ];

  const [products, setProducts] = useState(mockProducts);

  const handleDeleteProduct = (productId) => {
    // Add logic to delete the product with the given productId
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div className="manage-products-container">
      <h2>Your Products</h2>
      {products.length === 0 ? (
        <p>No products available. Add some products to manage.</p>
      ) : (
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductLists;
