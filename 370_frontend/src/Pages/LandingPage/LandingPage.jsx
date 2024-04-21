// LandingPage.js

import React from 'react';

import './LandingPage.css'; // Import a CSS file for styling
import ShoeCard from '../../Components/ShoeCard/ShoeCard';
import Navbar from '../../Shared/Navbar/Navbar';

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

const LandingPage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Shoe Store</h1>
        <p>Discover the latest trends in footwear</p>
      </header>
      
      <section className="featured-section">
        <h2>Featured Shoes</h2>
        <div className="shoe-list">
          {mockupData.map((shoe) => (
            <ShoeCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At our shoe store, we strive to provide you with the best in footwear fashion.
          Explore our wide range of shoes, from athletic sneakers to elegant boots,
          designed to suit every occasion and style.
        </p>
      </section>

      <section className="subscribe-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest arrivals and exclusive offers by subscribing to our newsletter.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Your Shoe Store. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default LandingPage;
