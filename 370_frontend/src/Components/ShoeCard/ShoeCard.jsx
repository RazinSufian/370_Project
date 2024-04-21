// ShoeCard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './ShoeCard.css';

const ShoeCard = ({ shoe }) => {
  return (
    <Link to={`/shoes/${shoe.id}`} className="shoe-card-link">
      <div className="shoe-card">
        <img src={shoe.image} alt={shoe.name} />
        <h3>{shoe.name}</h3>
        <p>{shoe.description}</p>
        <p>${shoe.price}</p>
        <button>Add to Cart</button>
      </div>
    </Link>
  );
};

export default ShoeCard;
