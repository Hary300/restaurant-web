import React from 'react';
import Header from './ui/header';

function Hero() {
  return (
    <div>
      <div className="relative px-4 lg:px-30 bg-[url('/images/burger.svg')] bg-no-repeat bg-cover bg-center h-[648px] md:h-[827px]">
        <div className='absolute inset-0 z-0 bg-linear-to-t from-black/80 to-black/10'></div>
        <Header />
        <div className='relative flex flex-col z-10 items-center justify-center mt-53 md:mt-81.5 text-white'>
          <div>
            <h1 className='text-4xl md:text-5xl font-extrabold text-center'>
              Explore Culinary Experiences
            </h1>
            <p className='text-lg md:text-2xl font-extrabold mb-10 text-center'>
              Search and refine your choice to discover the perfect restaurant.
            </p>
          </div>
          <input
            type='text'
            placeholder='Search restaurants, food and drink'
            className='bg-white rounded-full text-black text-[16px] font-medium py-2 pl-10 max-w-[600px] w-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
