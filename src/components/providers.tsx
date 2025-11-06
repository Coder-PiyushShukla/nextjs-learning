'use client';  
import { useState, useEffect } from 'react';
import AuthProvider from '../context/authprovider'; 
import { Toaster } from '@/components/ui/toaster';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

 
  useEffect(() => {
    setIsClient(true);
  }, []);

 
  if (!isClient) {
    return null;
  }

  return (
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
  );
}