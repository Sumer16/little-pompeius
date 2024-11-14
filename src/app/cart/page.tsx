'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { useCartStore } from '@/utils/store';

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push('/login');
    } else {
      try {
        const res = await fetch('http://localhost:3000/api/orders', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            price: totalPrice.toFixed(2),
            products,
            status: 'Not Paid!',
            userEmail: session.user.email,
          }),
        });
        const data =await res.json();
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      {/* PRODUCTS CONTAINER */}
      <div className='h-2/3 p-4 flex flex-col justify-center gap-4 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-16 xl:px-40'>
        {/* SINGLE ITEM */}
        {
          products.map((item) => (
            <div className='flex items-center justify-between mb-1' key={item.id}>
              {
                item.img && (
                  <Image src={item.img} alt={item.title} width={100} height={100} />
                )
              }
              <div className='flex flex-col w-60'>
                <h1 className='uppercase text-xl font-bold text-ellipsis'>{item.title} x{item.quantity}</h1>
                <span className='font-medium'>{item.optionTitle}</span>
              </div>
              <h2 className='font-bold'>${item.price.toFixed(2)}</h2>
              <span
                className='cursor-pointer font-semibold'
                onClick={() => removeFromCart(item)}
              >
                X
              </span>
            </div>
          ))
        }
      </div>
      {/* PAYMENT CONTAINER */}
      <div className='h-1/3 p-4 bg-rose-100 flex flex-col gap-2 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-16 xl:px-28 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal ({totalItems} items)</span>
          <span className='font-medium'>${totalPrice.toFixed(2)}</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Service Cost</span>
          <span className='font-medium'>$1.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery Cost</span>
          <span className='text-green-500 font-medium'>FREE!</span>
        </div>
        <hr className='my-2 border-slate-400' />
        <div className='flex justify-between'>
          <span className=''>TOTAL (INCL. VAT)</span>
          <span className='font-bold'>${totalPrice.toFixed(2)}</span>
        </div>
        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end hover:bg-red-600' onClick={handleCheckout}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartPage;
