import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ProductType } from '@/types/types';

type CategoryProps = {
  params: { category: string };
};

const getData = async (category: string) => {
  const result = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: 'no-store'
  });

  if (!result.ok) {
    throw new Error('Failed!');
  }

  return result.json();
};

const CategoryPage = async ({ params }: CategoryProps) => {
  const { category } = await params; // https://nextjs.org/docs/messages/sync-dynamic-apis
  const products: ProductType[] = await getData(category);

  return (
    <div className='flex flex-wrap text-red-500'>
      {
        products.map((item) => (
          <Link
            href={`/product/${item.id}`}
            key={item.id}
            className='w-full h-[65vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-rose-100'
          >
            {/* Image Container */}
            {
              item.img && (
                <div className='relative h-[80%]'>
                  <Image src={item.img} alt={item.title} fill className='object-contain' />
                </div>
              )
            }
            {/* Text Container */}
            <div className='flex items-center justify-between font-bold'>
              <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
              <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
              <button className='hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md hover:bg-red-600'>Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default CategoryPage;
