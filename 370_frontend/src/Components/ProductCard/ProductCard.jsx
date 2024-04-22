// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.product_id}`} className="product-card-link">
      <div className="product-card">
        <img src={product.product_image_url} alt={product.name} />
        <h3>{product.product_name}</h3>
        <p>{product.product_description}</p>
        <p>{product.shop_name}</p>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductCard;
