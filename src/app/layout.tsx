import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Notification from '@/components/Notification';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Little Pompeius',
  description: 'A restaurant food delivery app built to serve the community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Notification />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
