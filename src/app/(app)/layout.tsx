import Navbar from '@/components/navbar';  
import React from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
   return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}