import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

// Mock data with placeholder images
const mockData = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/800x400?text=Slide+1',
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/800x400?text=Slide+2',
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/800x400?text=Slide+3',
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/800x400?text=Slide+4',
  },
];

const Carousel = ({
  slideDuration = 3000,
  autoplay = true,
  visibleSlides = 1,
  transition = 'slide',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const carouselRef = useRef(null);

  // Handle slide transition
  const handleSlideTransition = (direction) => {
    const totalSlides = mockData.length;
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
  }, [isPlaying, currentSlide, slideDuration]);

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
        {mockData.map((slide) => (
          <div key={slide.id} className="carousel-item">
            <img src={slide.imageUrl} alt={`Slide ${slide.id}`} />
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
          {mockData.map((_, index) => (
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