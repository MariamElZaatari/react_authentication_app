import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  // Navigation
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Empty Array
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {/* Navigation Icons */}
      <FaAngleLeft className='left-arrow clr_brown_text' onClick={prevSlide} />
      <FaAngleRight className='right-arrow clr_brown_text' onClick={nextSlide} />

      {/*  Mapping from Slider Data*/}
      {SliderData.map((slide, index) => {
        return (
          // Add Different Class for Animation
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {/*  Return Image of Current Index */}
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;