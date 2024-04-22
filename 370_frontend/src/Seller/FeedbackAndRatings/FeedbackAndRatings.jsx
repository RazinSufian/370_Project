// FeedbackAndRatings.js
import React, { useState } from 'react';

const FeedbackAndRatings = () => {
  // Mockup data
  const customerReviews = [
    {
      id: 1,
      customerName: 'Alice',
      rating: 4.5,
      feedback: 'Great quality shoes, fast shipping!',
      date: '2024-03-22',
      sellerReply: 'Thank you for your positive feedback!',
      repliedDate: '2024-03-23',
    },
    // Add more mockup data as needed
  ];

  // Function to handle replying to a review
  const replyToReview = (id, replyMessage) => {
    setCustomerReviews((prevReviews) =>
      prevReviews.map((review) =>
        review.id === id
          ? { ...review, sellerReply: replyMessage, repliedDate: new Date().toISOString() }
          : review
      )
    );
  };

  return (
    <div>
      <h2>Feedback and Ratings</h2>

      {customerReviews.map((review) => (
        <div key={review.id}>
          <h3>{review.customerName}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.feedback}</p>
          <p>Date: {review.date}</p>

          {review.sellerReply && (
            <div>
              <p>Seller Reply:</p>
              <p>{review.sellerReply}</p>
              <p>Replied Date: {review.repliedDate}</p>
            </div>
          )}

          {!review.sellerReply && (
            <div>
              <label>Reply:</label>
              <textarea
                rows="4"
                cols="50"
                placeholder="Type your reply here..."
                onChange={(e) => replyToReview(review.id, e.target.value)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedbackAndRatings;
