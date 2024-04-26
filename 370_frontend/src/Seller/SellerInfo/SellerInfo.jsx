import React, { useEffect, useState } from 'react';
import './SellerInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getSeller } from '../../features/users/sellerSlice';

const SellerInfo = () => {
  const { seller, isLoading, role, loaded } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!role) {
      dispatch(getSeller());
    }
    if (seller && seller.length > 0) { // Ensure that seller is not empty
      setSellerName(seller[0]?.name);
      setSellerId(seller[0]?.seller_id);
      setContactEmail(seller[0]?.email);
      setPhoneNumber(seller[0]?.phone_number);
      setProfileImage(seller[0]?.profile_image || 'https://placehold.co/600x400'); // Provide default image if none
      console.log(seller[0]);
    }
  }, [seller, role, dispatch]);

  const [sellerName, setSellerName] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileImage, setProfileImage] = useState('https://placehold.co/600x400');

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
    console.log('Seller details saved:', { sellerName, sellerId, contactEmail, phoneNumber });
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
              Seller Id:
              <input
                type="text"
                value={sellerId}
                onChange={(e) => setSellerId(e.target.value)}
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
          </form>
        ) : (
          <div className="preview-section">
            <p><strong>Seller Name:</strong> {sellerName}</p>
            <p><strong>Shop Name:</strong> {sellerId}</p>
            <p><strong>Contact Email:</strong> {contactEmail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerInfo;
