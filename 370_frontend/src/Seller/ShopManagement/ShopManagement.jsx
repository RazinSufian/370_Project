// ShopManagement.js
import React, { useState } from 'react';

const ShopManagement = () => {
  // Mockup data
  const [shopDetails, setShopDetails] = useState({
    shopName: "Shoe Haven",
    shopLogo: "url-to-shop-logo",
    shopDescription: "The best place for trendy shoes!",
  });

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add logic to update shop details in the backend
    console.log("Shop details updated:", shopDetails);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <div>
      <h2>Shop Management</h2>

      <form onSubmit={handleFormSubmit}>
        <label>
          Shop Name:
          <input
            type="text"
            name="shopName"
            value={shopDetails.shopName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Shop Logo URL:
          <input
            type="text"
            name="shopLogo"
            value={shopDetails.shopLogo}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Shop Description:
          <textarea
            name="shopDescription"
            value={shopDetails.shopDescription}
            onChange={handleInputChange}
          />
        </label>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ShopManagement;
