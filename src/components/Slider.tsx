'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const sliderData = [
  {
    id: 1,
    title: 'always fresh & always crispy & always hot',
    image: '/slide1.png',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in NY',
    image: '/slide2.png',
  },
  {
    id: 3,
    title: 'the best pizza to share with your family',
    image: '/slide3.jpg',
  },
];

const Slider = () => {
  const [ currentSlide, setCurrentSlide ] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
      },
      6000
    );
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-rose-100'>
      {/* Text Container */}
      <div className='flex-1 flex items-center justify-center flex-col gap-6 text-red-500 font-bold'>
        <h1 className='text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl'>
          {sliderData[currentSlide].title}
        </h1>
        <button className='bg-red-500 text-white py-4 px-8 rounded-lg hover:bg-red-600'>Order Now</button>
      </div>
      {/* Image Container */}
      <div className='w-full flex-1 relative'>
        <Image
          src={sliderData[currentSlide].image}
          alt='Restaurant Image Slider'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
}

export default Slider;
