// Import necessary React components and styling
import React from 'react';

// Mockup data for the wishlist
const wishlistItems = [
  {
    id: 1,
    name: 'Fashionable Sneaker',
    brand: 'XYZ Footwear',
    price: 89.99,
    imageUrl: 'https://example.com/shoe2.jpg',
  },
  {
    id: 3,
    name: 'Casual Shoes',
    brand: 'ABC Footwear',
    price: 59.99,
    imageUrl: 'https://example.com/casual-shoes.jpg',
  },
  // Add more wishlist items as needed
];

const WishlistPage = () => {
  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty. Start adding your favorite items!</p>
      ) : (
        <div className="wishlist-items">
          {wishlistItems.map((item) => (
            <div key={item.id} className="wishlist-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <p>${item.price.toFixed(2)}</p>
                <button>Move to Cart</button>
                <button>Remove from Wishlist</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
