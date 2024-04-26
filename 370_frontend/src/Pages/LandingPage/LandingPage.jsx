// LandingPage.js

import React, { useEffect } from 'react';

import './LandingPage.css'; // Import a CSS file for styling
// import topProductCard from '../../Components/topProductCard/topProductCard';
import Navbar from '../../Shared/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopProductsQuery } from '../../features/products/productsApiSlice';
import { selectTopProducts, setError, setLoading, setTopProducts } from '../../features/products/productsSlice';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Carousel from '../../Components/Carousel/Carousel';
import ProductsPage from '../AllProduct/AllProdoct';


const LandingPage = () => {
  const dispatch = useDispatch();
  const { data: topProducts, isLoading, isError } = useGetTopProductsQuery();
  const products = useSelector(selectTopProducts);

  useEffect(() => {
    if (topProducts) {
      dispatch(setTopProducts(topProducts));
      console.log(topProducts);
    }
    console.log(topProducts);
  }, [topProducts, dispatch]);

  useEffect(() => {
    if (isLoading) {
      dispatch(setLoading('loading'));
    } else if (isError) {
      dispatch(setError('error'));
    } else {
      dispatch(setLoading('idle'));
    }
  }, [isLoading, isError, dispatch]);

  return (
    <>
    <Carousel></Carousel>
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to Our Store</h1>
      </header>
      
      <section className="featured-section">
        <h2>Featured topProducts</h2>
        <div className="product-list">
          {products && products.map((product) => (
            <ProductCard key={product.product_id} product={product} />
          ))}
        </div>
      </section>
      {/* <ProductsPage></ProductsPage> */}

      {/* <section className="about-section">
        <h2>About Us</h2>
        <p>
          At our topProduct store, we strive to provide you with the best in footwear fashion.
          Explore our wide range of topProducts, from athletic sneakers to elegant boots,
          designed to suit every occasion and style.
        </p>
      </section>

      <section className="subscribe-section">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Stay updated with the latest arrivals and exclusive offers by subscribing to our newsletter.</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section> */}

      {/* <footer className="footer">
        <p>&copy; 2024 Your topProduct Store. All rights reserved.</p>
      </footer> */}
    </div>
    </>
  );
};

export default LandingPage;
