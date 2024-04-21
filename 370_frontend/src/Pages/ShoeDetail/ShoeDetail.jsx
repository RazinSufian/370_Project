// ShoeDetail.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ShoeDetail.css';

const ShoeDetail = ({ shoe }) => {
    const mockShoe = {
        id: 1,
        name: 'Sample Shoe',
        brand: 'Sample Brand',
        description: 'This is a sample shoe description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 59.99,
        image: 'sample-image.jpg',
        color: 'Red',
        sizesAvailable: ['US 7', 'US 8', 'US 9', 'US 10'],
        shop: {
          id: 1,
          name: 'Sample Shop',
          // Add other shop details as needed
        },
      };
  const { id, name, brand, description, price, image, color, sizesAvailable, shop } = mockShoe;

  return (
    <div className="shoe-detail">
      <img src={image} alt={name} className="shoe-detail-image" />
      <div className="shoe-details">
        <h2>{name}</h2>
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Price:</strong> ${price}</p>
        <p><strong>Color:</strong> {color}</p>
        <p><strong>Sizes Available:</strong> {sizesAvailable.join(', ')}</p>
        <p>
          <strong>Shop:</strong> <Link to={`/shops/${shop.id}`} className="shop-link">{shop.name}</Link>
        </p>
      </div>
    </div>
  );
};

// Sample data for preview


export default ShoeDetail;
