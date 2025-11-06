import dynamic from "next/dynamic";
import type { Metadata } from "next";

const VerifyAccountClient = dynamic(
  () => import("@/components/verifyAccountClient"),
  { ssr: false, loading: () => <p>Loading verification UI…</p> }
);

export const metadata: Metadata = {
  title: "Verify - True Feedback",
};

export default function VerifyPage() {
  return <VerifyAccountClient />;
}
