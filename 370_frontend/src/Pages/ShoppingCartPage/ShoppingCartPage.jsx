// Import necessary React components and styling
import React from 'react';
import './ShoppingCartPage.css'; // Import your stylesheet

// Mockup data for items in the shopping cart
const cartItems = [
  {
    id: 1,
    name: 'Comfort Running Shoe',
    brand: 'ABC Sports',
    price: 69.99,
    imageUrl: 'https://example.com/shoe1.jpg',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Fashionable Sneaker',
    brand: 'XYZ Footwear',
    price: 89.99,
    imageUrl: 'https://example.com/shoe2.jpg',
    quantity: 1,
  },
  // Add more items as needed
];

const ShoppingCartPage = () => {
  return (
    <div className="shopping-cart-page">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.brand}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="total">
            <p>Total: ${calculateTotal(cartItems).toFixed(2)}</p>
          </div>
          <button>Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

// Helper function to calculate the total price of items in the cart
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default ShoppingCartPage;
