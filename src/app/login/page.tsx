'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  };
  

  return (
    <div className='p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center'>
      {/* BOX */}
      <div className='h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2 justify-center'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-1/2 w-full md:h-full md:w-1/2'>
          <Image src='/loginBg.png' alt='' fill className='object-cover'/>
        </div>
        {/* FORM CONTAINER */}
        <div className='py-10 md:py-8 px-8 flex flex-col gap-8 md:w-1/2 xl:justify-center'>
          <h1 className='font-bold font-mono text-xl xl:text-3xl'>Welcome</h1>
          <p className='font-mono'>Log into your account or create a new one using social buttons</p>
          <button className='flex self-start gap-4 p-4 ring-1 ring-orange-100 rounded-md items-center' onClick={() => signIn('google')}>
            <Image
              src='/google.png'
              alt='Google login'
              width={20}
              height={20}
              className='object-contain'
            />
            <span className='font-mono'>Sign in with Google</span>
          </button>
          <button className='flex self-start gap-4 p-4 ring-1 ring-blue-100 rounded-md items-center'>
            <Image
              src='/facebook.png'
              alt='Facebook login'
              width={20}
              height={20}
              className='object-contain'
            />
            <span className='font-mono'>Sign in with Facebook</span>
          </button>
          <p className='text-sm font-mono'>
            Have a problem? <Link className='underline' href='/'>Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
