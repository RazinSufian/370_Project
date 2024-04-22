// CommunicationCenter.js
import React, { useState } from 'react';

const CommunicationCenter = () => {
  // Mockup data
  const [customerMessages, setCustomerMessages] = useState([
    {
      id: 1,
      customerName: 'Alice',
      subject: 'Product Inquiry',
      message: "Hi, I'm interested in the Classic Sneakers. Can you provide more details?",
      date: '2024-03-20',
    },
    // Add more mockup data as needed
  ]);

  // Function to handle sending a reply
  const sendReply = (id, replyMessage) => {
    setCustomerMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id
          ? { ...message, reply: replyMessage, repliedDate: new Date().toISOString() }
          : message
      )
    );
  };

  return (
    <div>
      <h2>Communication Center</h2>

      {customerMessages.map((message) => (
        <div key={message.id}>
          <h3>{message.subject}</h3>
          <p>From: {message.customerName}</p>
          <p>Date: {message.date}</p>
          <p>{message.message}</p>

          {message.reply && (
            <div>
              <p>Reply:</p>
              <p>{message.reply}</p>
              <p>Replied Date: {message.repliedDate}</p>
            </div>
          )}

          {!message.reply && (
            <div>
              <label>Reply:</label>
              <textarea
                rows="4"
                cols="50"
                placeholder="Type your reply here..."
                onChange={(e) => sendReply(message.id, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommunicationCenter;
