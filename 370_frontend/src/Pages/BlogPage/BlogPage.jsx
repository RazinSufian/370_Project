// Import necessary React components and styling
import React from 'react';
import './BlogPage.css'; // Import your stylesheet

// Mockup data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Sneaker Trends for 2024',
    date: '2024-03-01',
    content: 'Explore the latest sneaker trends, from bold colors to futuristic designs.',
  },
  {
    id: 2,
    title: 'How to Clean and Maintain Your Leather Shoes',
    date: '2024-02-15',
    content: 'Learn effective tips for cleaning and maintaining your favorite leather shoes.',
  },
  {
    id: 3,
    title: 'Fashionable Footwear for Every Season',
    date: '2024-02-01',
    content: 'Discover the best shoe styles for different seasons and occasions.',
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h2>Explore Our Blog</h2>

      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
