// InventoryManagement.js
import React, { useState } from 'react';

const InventoryManagement = () => {
  // Mockup data
  const [inventory, setInventory] = useState([
    {
      productId: 1,
      productName: 'Classic Sneakers',
      sizes: {
        'US 7': 10,
        'US 8': 15,
        'US 9': 20,
      },
    },
    // Add more mockup data as needed
  ]);

  // Function to handle updating inventory
  const updateInventory = (productId, size, newStock) => {
    setInventory((prevInventory) =>
      prevInventory.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            sizes: {
              ...item.sizes,
              [size]: newStock,
            },
          };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h2>Inventory Management</h2>

      {inventory.map((item) => (
        <div key={item.productId}>
          <h3>{item.productName}</h3>
          <ul>
            {Object.entries(item.sizes).map(([size, stock]) => (
              <li key={size}>
                {size}: {stock} in stock
                <input
                  type="number"
                  min="0"
                  value={stock}
                  onChange={(e) =>
                    updateInventory(item.productId, size, parseInt(e.target.value, 10))
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InventoryManagement;
