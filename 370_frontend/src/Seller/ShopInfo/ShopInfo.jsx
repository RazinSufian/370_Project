import React, { useState } from 'react';
import './ShopInfo.css'; // Create a CSS file for styling

const ShopInfo = () => {
  const [shopName, setShopName] = useState('My Shop');
  const [shopDescription, setShopDescription] = useState('A brief description of my shop.');
  const [shopLocation, setShopLocation] = useState('City, Country');
  const [shopLogo, setShopLogo] = useState('https://placehold.co/600x400'); // Add a default logo URL if available

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send shop information to your backend or perform any necessary actions
    console.log('Shop information submitted:', { shopName, shopDescription, shopLocation, shopLogo });
    // Add additional logic for form submission, such as sending data to your backend
  };

  return (
    <div className="shop-info-container">
      <h2>Add Your Shop Information</h2>
      <form onSubmit={handleSubmit} className="shop-info-form">
        <label>
          Shop Name:
          <input
            type="text"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            placeholder="Enter your shop name"
          />
        </label>

        <label>
          Shop Description:
          <textarea
            value={shopDescription}
            onChange={(e) => setShopDescription(e.target.value)}
            placeholder="Enter a brief description of your shop"
          />
        </label>

        <label>
          Shop Location:
          <input
            type="text"
            value={shopLocation}
            onChange={(e) => setShopLocation(e.target.value)}
            placeholder="Enter your shop location (e.g., City, Country)"
          />
        </label>

        <label>
          Shop Logo URL:
          <input
            type="url"
            value={shopLogo}
            onChange={(e) => setShopLogo(e.target.value)}
            placeholder="Enter your shop logo URL"
          />
        </label>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ShopInfo;
