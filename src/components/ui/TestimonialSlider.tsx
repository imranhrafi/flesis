"use client";

"use client";

import { useRef } from "react";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";
import StarRating from "./StarRating";

const TestimonialSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const PrevArrow = ({ onClick }: { onClick: () => void }) => (
    <div
      className=' w-12 h-12 absolute z-10 transform -translate-y-1/2 cursor-pointer bg-[#F4F4F4] hover:bg-primary p-2 -top-11 right-[200px] lg:right-[220px] rounded-full grid place-content-center  transition-all duration-500 hover:text-white'
      onClick={() => {
        onClick();
        if (sliderRef.current) {
          sliderRef.current.slickPrev(); // Move the slides to the left
        }
      }}
    >
      <FaChevronLeft className='text-xl font-normal text-slate-400 ' />
    </div>
  );

  const NextArrow = ({ onClick }: { onClick: () => void }) => (
    <div
      className='w-12 h-12 absolute z-10 transform -translate-y-1/2 cursor-pointer bg-[#F4F4F4] hover:bg-primary p-2 -top-11 right-[150px] rounded-full grid place-content-center transition-all duration-500 hover:text-white'
      onClick={() => {
        onClick();
        if (sliderRef.current) {
          sliderRef.current.slickNext(); // Move the slides to the right
        }
      }}
    >
      <FaChevronRight className='text-xl text-normal text-slate-400 ' />
    </div>
  );

  return (
    <div className='relative'>
      <div className='py-8 bg-white'>
        <Slider {...settings} ref={sliderRef}>
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
      <PrevArrow onClick={() => {}} />
      <NextArrow onClick={() => {}} />
    </div>
  );
};

export default TestimonialSlider;
