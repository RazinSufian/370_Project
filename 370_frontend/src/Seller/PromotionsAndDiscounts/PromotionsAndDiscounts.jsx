// PromotionsAndDiscounts.js
import React, { useState } from 'react';

const PromotionsAndDiscounts = () => {
  // Mockup data
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      name: 'Spring Sale',
      discountPercent: 15,
      startDate: '2024-03-15',
      endDate: '2024-03-31',
    },
    // Add more mockup data as needed
  ]);

  // Function to add a new promotion
  const addPromotion = (newName, newDiscount, newStart, newEnd) => {
    const newPromotion = {
      id: promotions.length + 1,
      name: newName,
      discountPercent: newDiscount,
      startDate: newStart,
      endDate: newEnd,
    };
    setPromotions((prevPromotions) => [...prevPromotions, newPromotion]);
  };

  // Function to remove a promotion
  const removePromotion = (id) => {
    setPromotions((prevPromotions) => prevPromotions.filter((promotion) => promotion.id !== id));
  };

  return (
    <div>
      <h2>Promotions and Discounts</h2>

      <ul>
        {promotions.map((promotion) => (
          <li key={promotion.id}>
            {promotion.name} - {promotion.discountPercent}% Off
            <br />
            Valid from {promotion.startDate} to {promotion.endDate}
            <button onClick={() => removePromotion(promotion.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <label>Add New Promotion:</label>
        <input type="text" placeholder="Promotion Name" />
        <input type="number" placeholder="Discount Percent" min="1" max="100" />
        <input type="date" placeholder="Start Date" />
        <input type="date" placeholder="End Date" />
        <button onClick={() => addPromotion('New Promotion', 10, '2024-04-01', '2024-04-15')}>Add</button>
      </div>
    </div>
  );
};

export default PromotionsAndDiscounts;
