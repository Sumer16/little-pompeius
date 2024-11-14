'use client';

import React, { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const SuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const payment_intent = searchParams.get('payment_intent');

  useEffect(() => {
    // Validate if payment_intent exists before making the request
    if (!payment_intent) {
      console.error('No payment_intent found in the URL');
      return;
    }

    const makeRequest = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to update order status');
        }

        setTimeout(() => {
          router.push('/orders');
        }, 5000);
      } catch (err) {
        console.error(err);
      }
    };

    makeRequest();
  }, [payment_intent, router]);

  return (
    <>
      <div className='min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700'>
        <p className='max-w-[600px]'>
          Payment successful. You are being redirected to the orders page.
          Please do not close the page.
        </p>
      </div>
    </>
  );
}

export default SuccessPage;
