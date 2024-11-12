'use client';

import { SessionProvider } from 'next-auth/react';

type AuthProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
