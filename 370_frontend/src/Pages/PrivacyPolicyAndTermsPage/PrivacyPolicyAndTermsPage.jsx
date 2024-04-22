// Import necessary React components and styling
import React from 'react';
import './PrivacyPolicyAndTermsPage.css'; // Import your stylesheet

// Mockup data for privacy policy and terms of service
const privacyPolicyText = `
  <p><strong>Privacy Policy</strong></p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
  <p>...</p>
`;

const termsOfServiceText = `
  <p><strong>Terms of Service</strong></p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
  <p>...</p>
`;

const PrivacyPolicyAndTermsPage = () => {
  return (
    <div className="privacy-policy-and-terms-page">
      <h2>Privacy Policy and Terms of Service</h2>

      <div className="privacy-policy">
        <h3>Privacy Policy</h3>
        <div dangerouslySetInnerHTML={{ __html: privacyPolicyText }} />
      </div>

      <div className="terms-of-service">
        <h3>Terms of Service</h3>
        <div dangerouslySetInnerHTML={{ __html: termsOfServiceText }} />
      </div>
    </div>
  );
};

export default PrivacyPolicyAndTermsPage;
