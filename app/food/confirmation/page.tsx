"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "../../../components/button";
import SiteNav from "../../../components/SiteNav";
import { rememberWebOrder } from "../../../lib/ordering/webOrders";

function ConfirmationInner() {
  const search = useSearchParams();
  const id = search.get("id") ?? "";
  const eta = search.get("eta") ?? "Ready in ~45 min";
  const token = search.get("token") ?? "";

  useEffect(() => {
    if (!id || !token) return;
    rememberWebOrder({
      id,
      trackingToken: token,
      title: "Food & drinks",
      createdAt: new Date().toISOString(),
      foodOnly: true,
    });
  }, [id, token]);

  return (
    <div className="min-h-screen bg-[hsl(200,20%,98%)] px-4 pb-16 pt-28">
      <SiteNav />
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-8 text-center shadow-wave">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <Check className="h-8 w-8 text-emerald-600" />
          </div>
          <h1 className="text-2xl font-bold text-[#083b6c]">Your order is on the way</h1>
          {id ? (
            <p className="mt-2 text-sm text-muted-foreground">Order {id.slice(0, 8).toUpperCase()}</p>
          ) : null}
          <p className="mt-4 text-sm font-medium text-[#083b6c]">{eta}</p>
          <div className="mt-8 flex flex-col gap-2">
            <Button asChild className="rounded-full bg-[#083b6c]">
              <Link href={id ? `/orders?focus=${id}` : "/orders"}>Track order & chat</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/#services">Add beach packages</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/food">Order more food</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FoodConfirmationPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading…</div>}>
      <ConfirmationInner />
    </Suspense>
  );
}
