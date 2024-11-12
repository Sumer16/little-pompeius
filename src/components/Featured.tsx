import React from 'react';
import Image from 'next/image';

import { ProductType } from '@/types/types';

const getData = async () => {
  const result = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store'
  });

  if (!result.ok) {
    throw new Error('Failed!');
  }

  return result.json();
};

const Featured = async () => {
  const featuredProducts: ProductType[] = await getData();

  return (
    <div className='w-screen overflow-x-scroll text-red-500'>
      {/* Wrapper */}
      <div className='w-max flex'>
        {/* Single Item */}
        {
          featuredProducts.map((product) => (
            <div key={product.id} className='w-screen h-[65vh] flex flex-col items-center gap-1 justify-around p-4 hover:bg-rose-100 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]'>
            {/* Image Container */}
            {
              product.img && (
                <div className='relative flex-1 w-full hover:rotate-[65deg] transition-all duration-500'>
                  <Image src={product.img} alt={product.title} fill className='object-contain' />
                </div>
              )
            }
            {/* Text Container */}
            <div className='flex-1 flex flex-col items-center justify-center text-center gap-4'>
              <h1 className='text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl'>{product.title}</h1>
              <p className='p-4 font-medium 2xl:p-8'>{product.desc}</p>
              <span className='text-xl font-semibold'>${product.price}</span>
              <button className='bg-red-500 text-white font-medium p-2 rounded-md hover:bg-red-600'>Add to Cart</button>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Featured;
