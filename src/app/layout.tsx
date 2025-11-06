 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import Providers from '../components/providers';  

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'True Feedback',
  description: 'Real feedback from real people.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/*
          Render your Providers component INSIDE the body.
          It will handle Auth and Toaster safely on the client.
        */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}