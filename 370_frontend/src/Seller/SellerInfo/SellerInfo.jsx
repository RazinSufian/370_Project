import React, { useState } from 'react';
import './SellerInfo.css'; // Create a CSS file for styling

const SellerInfo = () => {
  const [sellerName, setSellerName] = useState('John Doe');
  const [shopName, setShopName] = useState('Doe\'s Shop');
  const [contactEmail, setContactEmail] = useState('john.doe@example.com');
  const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
  const [isEditMode, setIsEditMode] = useState(false);
  const [ profileImage, setProfileImage ] = useState('https://placehold.co/600x400');

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    // Add logic to save seller details to your backend or perform any necessary actions
    console.log('Seller details saved:', { sellerName, shopName, contactEmail, phoneNumber });
  };

  return (
    <div className="seller-details-container">
      <div className="profile-section">
        <img className="profile-image" src={profileImage} alt="Profile" />
        {isEditMode ? (
          <button className="save-button" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        )}
      </div>

      <div className="details-section">
        <h2>Seller Details</h2>
        {isEditMode ? (
          <form className="edit-form">
            <label>
              Seller Name:
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>

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
              Contact Email:
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </label>

            <label>
              Phone Number:
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </label>
          </form>
        ) : (
          <div className="preview-section">
            <p><strong>Seller Name:</strong> {sellerName}</p>
            <p><strong>Shop Name:</strong> {shopName}</p>
            <p><strong>Contact Email:</strong> {contactEmail}</p>
            <p><strong>Phone Number:</strong> {phoneNumber}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerInfo;
