 

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';  

 
const SignInForm = dynamic(() => import('@/components/sign-in'), {
  ssr: false,
});

export const metadata: Metadata = {
 
  title: 'Sign In - True Feedback',
};


export default function SignInPage() {
   return <SignInForm />;
}