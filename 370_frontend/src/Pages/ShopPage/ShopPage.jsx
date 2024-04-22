// ShopPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ShopPage.css';
import ShoeCard from '../../Components/ProductCard/ProductCard';

const ShopPage = ({ shops, shoes }) => {
    // Sample data for preview
const shop = {
    id: 1,
    name: 'Sample Shop',
    description: 'This is a sample shop description.',
    location: '123 Main Street, Cityville',
    contact: 'shop@example.com | (123) 456-7890',
    // Add other shop details as needed
  };
  const mockupData = [
    {
      id: 1,
      name: 'Running Shoes',
      description: 'Comfortable and lightweight running shoes for your active lifestyle.',
      price: 59.99,
      image: 'https://example.com/running-shoes.jpg',
    },
    {
      id: 2,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 3,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 4,
      name: 'Running Shoes',
      description: 'Comfortable and lightweight running shoes for your active lifestyle.',
      price: 59.99,
      image: 'https://example.com/running-shoes.jpg',
    },
    {
      id: 5,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 6,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 7,
      name: 'Running Shoes',
      description: 'Comfortable and lightweight running shoes for your active lifestyle.',
      price: 59.99,
      image: 'https://example.com/running-shoes.jpg',
    },
    {
      id: 8,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 9,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 10,
      name: 'Running Shoes',
      description: 'Comfortable and lightweight running shoes for your active lifestyle.',
      price: 59.99,
      image: 'https://example.com/running-shoes.jpg',
    },
    {
      id: 11,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    {
      id: 12,
      name: 'Casual Sneakers',
      description: 'Stylish and versatile sneakers for your everyday casual look.',
      price: 49.99,
      image: 'https://example.com/casual-sneakers.jpg',
    },
    // Add more shoes as needed
  ];
  
  
  return (
    <div className="shop-page">
      <h2>{shop.name}</h2>
      <p>{shop.description}</p>
      <div className="shoe-list">
      <section className="featured-section">
        <h2>Featured Shoes</h2>
        <div className="shoe-list">
          {mockupData.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </section>
      </div>
      <p className="shop-info">
        <strong>Shop Information:</strong>
        <br />
        Location: {shop.location}
        <br />
        Contact: {shop.contact}
      </p>
    </div>
  );
};




export default ShopPage;
