// src/components/ClientOnlyToaster.tsx

'use client';

import { Toaster } from '@/components/ui/toaster';
import { useEffect, useState } from 'react';

export default function ClientOnlyToaster() {
  const [isMounted, setIsMounted] = useState(false);

  // This effect runs *only* on the client, after the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []); // The empty array ensures this runs only once

  // If the component is not mounted yet (i.e., on the server or initial client render), render nothing
  if (!isMounted) {
    return null;
  }

  // Once mounted, safely render the Toaster
  return <Toaster />;
}