'use client';

import React from 'react';
import Image from 'next/image';

import { useCartStore } from '@/utils/store';

const CartIcon = () => {
  const { totalItems } = useCartStore();
  return (
    <div className='flex items-center gap-4 md:gap-2'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src='/cart.png' alt='Cart' fill />
      </div>
      <span>Cart ({totalItems})</span>
    </div>
  );
}

export default CartIcon;
