// src/app/auth/sign-up/page.tsx
import dynamic from "next/dynamic";
import type { Metadata } from "next";

const SignUpForm = dynamic(() => import("@/components/sign-up"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Sign Up - True Feedback",
  description: "Create an account to start your anonymous adventure",
};

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-md p-8">
        <SignUpForm />
      </div>
    </main>
  );
}
