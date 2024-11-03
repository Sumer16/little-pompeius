import React from 'react';
import Link from 'next/link';

import { menuCategory } from '@/data';

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-16 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center'>
      {
        menuCategory.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            style={{ backgroundImage: `url(${category.img})` }}
            className='w-full h-1/3 bg-cover p-8 md:h-1/2'
          >
            <div className={`text-${category.color} w-[51%]`}>
              <h1 className='text-3xl font-bold uppercase'>{category.title}</h1>
              <p className='text-sm font-semibold my-8'>{category.desc}</p>
              <button className={`hidden 2xl:block ${category.color === 'black' ? 'bg-slate-950 text-white' : 'bg-white text-red-500' } font-semibold py-2 px-4 rounded-md`}>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  );
}

export default MenuPage;
