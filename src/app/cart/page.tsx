import React from 'react';
import Image from 'next/image';

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* PRODUCTS CONTAINER */}
      <div className='h-2/3 p-4 flex flex-col overflow-y-scroll justify-center gap-4 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-16 xl:px-40'>
        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-2'>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span className='font-medium'>Large</span>
          </div>
          <h2 className='font-bold'>$79.92</h2>
          <span className='cursor-pointer font-semibold'>X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-2'>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span className='font-medium'>Large</span>
          </div>
          <h2 className='font-bold'>$79.90</h2>
          <span className='cursor-pointer font-semibold'>X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-2'>
          <Image src='/temporary/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>sicilian</h1>
            <span className='font-medium'>Large</span>
          </div>
          <h2 className='font-bold'>$79.90</h2>
          <span className='cursor-pointer font-semibold'>X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className='h-1/3 p-4 bg-rose-100 flex flex-col gap-2 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-16 xl:px-28 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (3 items)</span>
          <span className='font-medium'>$81.70</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Service Cost</span>
          <span className='font-medium'>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery Cost</span>
          <span className='text-green-500 font-medium'>FREE!</span>
        </div>
        <hr className='my-2 border-slate-400' />
        <div className='flex justify-between'>
          <span className=''>TOTAL (INCL. VAT)</span>
          <span className='font-bold'>$81.70</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end hover:bg-red-600'>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartPage;
