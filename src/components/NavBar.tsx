import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Menu from './Menu';
import CartIcon from './CartIcon';

const NavBar = () => {
  return (
    <div className='h-12 text-red-500 p-4 flex flex-row items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-16 xl:px-40'>
      {/* Left Links */}
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href='/' className='font-medium hover:text-red-700'>Home</Link>
        <Link href='/menu' className='font-medium hover:text-red-700'>Menu</Link>
        <Link href='/contact' className='font-medium hover:text-red-700'>Contact</Link>
      </div>

      {/* Logo */}
      <div className='text-xl font-semibold md:font-bold flex-1 md:text-center'>
        <Link href='/'>Little Pompeius</Link>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Right Links */}
      <div className='hidden md:flex gap-4 items-center justify-end flex-1'>
        <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-3 rounded-3xl'>
          <Image src='/phone.png' alt='Phone Number' width={20} height={20} />
          <span className='font-medium hover:text-red-700'>555 (8172)</span>
        </div>

        {
          true ? (
            <Link href='/login' className='font-medium hover:text-red-700'>Login</Link>
          ) : (
            <Link href='/orders' className='font-medium hover:text-red-700'>Orders</Link>
          )
        }

        <Link href='/cart' className='font-semibold hover:text-red-700'>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
