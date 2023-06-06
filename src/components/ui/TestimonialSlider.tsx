"use client";

import { useRef } from "react";

import Image from "next/image";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";
import ArrowIcon from "./ArrowIcon";
import StarRating from "./StarRating";

const TestimonialSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move the slides to the left
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move the slides to the right
    }
  };
  return (
    <div className='relative '>
      <div className='py-8 bg-white'>
        <Slider {...settings} ref={sliderRef} className='text-center'>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className='max-w-xs p-4 transition-all duration-200 border rounded-md hover:shadow-lg'
            >
              <div className='flex items-center justify-start'>
                <div className='relative w-16 h-16 overflow-hidden rounded-full flex-start'>
                  <Image
                    src={item.image}
                    width={64}
                    height={64}
                    className='object-cover'
                    alt={item.name}
                  />
                </div>
              </div>
              <p className='mt-6 mb-12 text-sm text-gray-600'>
                {item.text}
              </p>
              <div className='flex items-center justify-between mt-4'>
                <div className='flex flex-col'>
                  <h1 className='text-sm font-semibold'>
                    {item.name}
                  </h1>
                  <p className='mt-2 text-sm text-gray-600'>
                    {item.designation}
                  </p>
                </div>
                <div>
                  <span className='text-sm text-gray-600'>
                    <StarRating rating={item.rating} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <ArrowIcon direction='prev' onClick={handlePrevClick} />
      <ArrowIcon direction='next' onClick={handleNextClick} />
    </div>
  );
};

export default TestimonialSlider;
