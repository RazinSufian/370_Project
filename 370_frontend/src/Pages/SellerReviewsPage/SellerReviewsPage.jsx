// Import necessary React components and styling
import React from 'react';

// Mockup data for seller reviews
const sellerReviews = [
  {
    id: 1,
    sellerName: 'ABC Sports Shoes',
    averageRating: 4.5,
    reviews: [
      {
        id: 101,
        rating: 5,
        comment: 'Excellent products and fast shipping!',
        reviewer: 'HappyCustomer123',
      },
      {
        id: 102,
        rating: 4,
        comment: 'Great selection, but delivery took a bit longer than expected.',
        reviewer: 'ShoeLover456',
      },
      // Add more reviews as needed
    ],
  },
  {
    id: 2,
    sellerName: 'XYZ Footwear Co.',
    averageRating: 4.2,
    reviews: [
      {
        id: 201,
        rating: 4,
        comment: 'Love the trendy styles! Good quality too.',
        reviewer: 'Fashionista789',
      },
      {
        id: 202,
        rating: 3,
        comment: 'Some shoes are a bit pricey for my budget.',
        reviewer: 'BudgetShopper101',
      },
      // Add more reviews as needed
    ],
  },
  // Add more seller reviews as needed
];

const SellerReviewsPage = () => {
  return (
    <div className="seller-reviews-page">
      <h2>Seller Reviews</h2>

      <div className="seller-reviews">
        {sellerReviews.map((seller) => (
          <div key={seller.id} className="seller-review">
            <h3>{seller.sellerName}</h3>
            <p>Average Rating: {seller.averageRating.toFixed(1)}</p>

            <div className="reviews-list">
              {seller.reviews.map((review) => (
                <div key={review.id} className="review">
                  <p>
                    <strong>{review.reviewer}</strong> rated it {review.rating}/5
                  </p>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerReviewsPage;
