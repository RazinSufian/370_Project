// TermsAndPolicies.js
import React, { useState } from 'react';

const TermsAndPolicies = () => {
  // Mockup data
  const [shopPolicies, setShopPolicies] = useState({
    returnPolicy: '30 days for returns',
    refundPolicy: 'Refunds issued upon product return',
    shippingPolicy: 'Standard shipping within 5 business days',
  });

  // Function to handle updating shop policies
  const updateShopPolicies = (newPolicies) => {
    setShopPolicies((prevPolicies) => ({ ...prevPolicies, ...newPolicies }));
  };

  return (
    <div>
      <h2>Terms and Policies</h2>

      <div>
        <h3>Return Policy:</h3>
        <p>{shopPolicies.returnPolicy}</p>
        <button onClick={() => updateShopPolicies({ returnPolicy: '45 days for returns' })}>
          Update Return Policy
        </button>
      </div>

      <div>
        <h3>Refund Policy:</h3>
        <p>{shopPolicies.refundPolicy}</p>
        <button onClick={() => updateShopPolicies({ refundPolicy: 'Refunds within 7 days' })}>
          Update Refund Policy
        </button>
      </div>

      <div>
        <h3>Shipping Policy:</h3>
        <p>{shopPolicies.shippingPolicy}</p>
        <button onClick={() => updateShopPolicies({ shippingPolicy: 'Express shipping within 2 days' })}>
          Update Shipping Policy
        </button>
      </div>
    </div>
  );
};

export default TermsAndPolicies;
