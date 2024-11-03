'use client';

import React, { useEffect, useState } from 'react';

type PriceProps = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: PriceProps) => {
  const [ total, setTotal ] = useState<number>(price);
  const [ quantity, setQuantity ] = useState<number>(1);
  const [ selected, setSelected ] = useState<number>(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div key={id} className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className='flex gap-4'>
        {
          options?.map((option, index) => (
            <button
              key={option.title}
              className='min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md font-medium'
              style={{
                background: selected === index ? '#f87171' : 'white',
                color: selected === index ? 'white' : '#ef4444',
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))
        }
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className='flex justify-between items-center'>
        {/* QUANTITY */}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
          <span className='font-medium'>Quantity</span>
          <div className='flex gap-4 items-center'>
            <button
              className='focus:text-red-600 focus:font-bold'
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {'<'}
            </button>
            <span className='font-medium'>{quantity}</span>
            <button
              className='focus:text-red-600 focus:font-bold'
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {'>'}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className='uppercase w-56 bg-red-500 font-medium text-white p-3 ring-1 ring-red-500 hover:bg-red-600'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Price;
