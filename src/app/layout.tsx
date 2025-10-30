// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./global.css";

// Dynamically import the toaster so it's client-only and not server-rendered
const Toaster = dynamic(() => import("@/components/ui/toaster").then(m => m.Toaster), {
  ssr: false,
});

// If AuthProvider is a client component (uses useEffect/useState/next-auth), leave as normal import.
// If it is server-only, keep it server. If you're unsure and hydration still occurs, we'll make it client-only next.
import AuthProvider from "../context/authprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "True Feedback",
  description: "Real feedback from real people.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
