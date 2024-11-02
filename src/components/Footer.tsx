import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='h-12 md:h-24 p-4 lg:p-16 xl:p-40 text-red-500 flex items-center justify-between'>
      <Link href='/' className='font-bold text-lg uppercase'>Little Pompeius</Link>
      <span className='font-mono'>© ALL RIGHTS RESERVED.</span>
    </div>
  )
}

export default Footer;
