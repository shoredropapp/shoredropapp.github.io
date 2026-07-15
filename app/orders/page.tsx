import type { Metadata } from "next";
import { Suspense } from "react";
import OrdersClient from "../../components/orders/OrdersClient";

export const metadata: Metadata = {
  title: "Your Orders — ShoreDrop",
  description: "Track your ShoreDrop beach setup or food order and chat with your crew.",
  alternates: { canonical: "/orders" },
};

export default function OrdersPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center pt-28">Loading orders…</div>}>
      <OrdersClient />
    </Suspense>
  );
}
