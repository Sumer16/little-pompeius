'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CartIcon from './CartIcon';

const menuLinks = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Menu', url: '/menu' },
  { id: 3, title: 'Working Hours', url: '/' },
  { id: 4, title: 'Contact', url: '/' },
];

type menuLink = {
  id: number;
  title: string;
  url: string;
};

const Menu = () => {
  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <div>
      {
        !open ? (
          <Image
            src='/open.png'
            alt='menu-sidebar'
            width={20} height={20}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src='/close.png'
            alt='menu-sidebar'
            width={20}
            height={20}
            onClick={() => setOpen(false)}
          />
        )
      }

      {
        open && (
          <div className='bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
            {
              menuLinks.map((link: menuLink) => (
                <Link key={link.id} href={link.url} onClick={() => setOpen(false)}>{link.title}</Link>
              ))
            }

            {
              true ? (
                <Link href='/login' onClick={() => setOpen(false)}>Login</Link>
              ) : (
                <Link href='/orders' onClick={() => setOpen(false)}>Orders</Link>
              )
            }

            <Link href='/cart' onClick={() => setOpen(false)}>
              <CartIcon />
            </Link>
          </div>
        )
      }
    </div>
  );
}

export default Menu;
