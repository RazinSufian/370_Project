import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSeller } from '../../features/users/sellerSlice';
import './SellerInfo.css'; // Import the CSS file

const SellerInfo = () => {
  const { seller, isLoading, role, loaded } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!role) {
      dispatch(getSeller());
    }
    if (seller && seller.length > 0) {
      setSellerName(seller[0]?.name);
      setContactEmail(seller[0]?.email);
      setPhoneNumber(seller[0]?.phone_number);
      setProfileImage(seller[0]?.profile_image || 'https://placehold.co/600x400');
    }
  }, [seller, role, dispatch]);

  const [sellerName, setSellerName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState('https://placehold.co/600x400');

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    console.log('Seller details saved:', { sellerName, contactEmail, phoneNumber });
  };

  return (
    <div className="seller-details-container">
      <div className="profile-section">
        <img className="profile-image" src={profileImage} alt="Profile" />
        {/* {isEditMode ? (
          <button className="save-button" onClick={handleSaveClick}>Save</button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        )} */}
      </div>

      <div className="details-section">
        <h2>Seller Details</h2>
        {isEditMode ? (
          <form className="edit-form">
            <div className="info-bar">
              <label>Seller Name:</label>
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div className="info-bar">
              <label>Contact Email:</label>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div className="info-bar">
              <label>Phone Number:</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
          </form>
        ) : (
          <div className="preview-section">
            <p><strong>Seller Name:</strong> {sellerName}</p>
            <p><strong>Contact Email:</strong> {contactEmail}</p>
            {/* <p><strong>Phone Number:</strong> {phoneNumber}</p> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerInfo;
