import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopProductsQuery } from '../../features/products/productsApiSlice';
import { selectTopProducts, setError, setLoading, setTopProducts } from '../../features/products/productsSlice';
import { Link } from 'react-router-dom';

const Carousel = ({
  slideDuration = 3000,
  autoplay = true,
  visibleSlides = 1,
  transition = 'slide',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const carouselRef = useRef(null);
  
  const dispatch = useDispatch();
  const { data: topProducts, isLoading, isError } = useGetTopProductsQuery();
  const products = useSelector(selectTopProducts)?.slice(0, 5);  // Limit the products to 5

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

  // Handle slide transition
  const handleSlideTransition = (direction) => {
    const totalSlides = products.length;  // Update to use the length of the sliced products array
    let nextSlide;

    if (direction === 'next') {
      nextSlide = currentSlide + 1;
      if (nextSlide >= totalSlides) {
        nextSlide = 0;
      }
    } else {
      nextSlide = currentSlide - 1;
      if (nextSlide < 0) {
        nextSlide = totalSlides - 1;
      }
    }

    setCurrentSlide(nextSlide);
  };

  // Handle autoplay
  useEffect(() => {
    let autoplayInterval;

    if (isPlaying) {
      autoplayInterval = setInterval(() => {
        handleSlideTransition('next');
      }, slideDuration);
    }

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [isPlaying, currentSlide, slideDuration, handleSlideTransition]);

  // Handle touch and drag support
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    carouselRef.current.startX = touch.clientX;
  };

  const handleTouchMove = (e) => {
    if (!carouselRef.current.startX) return;

    const touch = e.touches[0];
    const diffX = touch.clientX - carouselRef.current.startX;

    if (diffX > 50) {
      handleSlideTransition('prev');
    } else if (diffX < -50) {
      handleSlideTransition('next');
    }

    carouselRef.current.startX = null;
  };

  return (
    <div
      className="carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className={`carousel-inner ${transition}`}
        style={{
          transform: `translateX(-${(currentSlide * 100) / visibleSlides}%)`,
        }}
      >
        {products && products.map((slide) => (
          <div key={slide.product_id} className="carousel-item">
            <Link to={`/products/${slide.product_id}`} className="product-card-link">
              <img src={slide.product_image_url} alt={`Slide ${slide.product_id}`} />
            </Link>
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button
          className="carousel-control prev"
          onClick={() => handleSlideTransition('prev')}
        >
          &lt;
        </button>
        <div className="carousel-pagination">
          {products && products.map((_, index) => (
            <span
              key={index}
              className={`pagination-dot ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        <button
          className="carousel-control next"
          onClick={() => handleSlideTransition('next')}
        >
          &gt;
        </button>
      </div>
      <button
        className="carousel-autoplay"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Carousel;
