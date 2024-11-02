import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:px-16 lg:py-2 xl:px-40 xl:py-10 text-red-500 flex items-center justify-between'>
      <Link href='/' className='font-bold text-lg uppercase'>Little Pompeius</Link>
      <span className='font-mono'>© ALL RIGHTS RESERVED.</span>
    </div>
  )
}

export default Footer;
