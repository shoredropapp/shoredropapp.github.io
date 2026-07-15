"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { STRIPE_PUBLISHABLE_KEY } from "../../lib/services/stripePayment";

const stripePromise = STRIPE_PUBLISHABLE_KEY ? loadStripe(STRIPE_PUBLISHABLE_KEY) : null;

function InnerForm({
  amountCents,
  onReady,
  registerConfirm,
}: {
  amountCents: number;
  onReady: (ready: boolean) => void;
  registerConfirm: (fn: (clientSecret: string) => Promise<string | undefined>) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    onReady(Boolean(stripe && elements));
  }, [stripe, elements, onReady]);

  useEffect(() => {
    if (!elements) return;
    elements.update({ amount: Math.max(50, amountCents) });
  }, [elements, amountCents]);

  useEffect(() => {
    registerConfirm(async (clientSecret: string) => {
      if (!stripe || !elements) throw new Error("Payment form still loading.");
      const { error: submitError } = await elements.submit();
      if (submitError) throw new Error(submitError.message);
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: "if_required",
        confirmParams: {
          return_url: typeof window !== "undefined" ? `${window.location.origin}/booking` : undefined,
        },
      });
      if (error) throw new Error(error.message || "Payment failed.");
      return paymentIntent?.id;
    });
  }, [stripe, elements, registerConfirm]);

  return (
    <PaymentElement
      options={{
        layout: "tabs",
        paymentMethodOrder: ["card"],
        /** Card fields only — Klarna / Affirm / wallets are disabled. */
        wallets: { applePay: "never", googlePay: "never", link: "never" },
      }}
    />
  );
}

export default function StripeCardForm({
  amountCents,
  onReady,
  registerConfirm,
}: {
  amountCents: number;
  onReady: (ready: boolean) => void;
  registerConfirm: (fn: (clientSecret: string) => Promise<string | undefined>) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !stripePromise) {
    return <p className="text-sm text-muted-foreground">Payment is not configured for this build.</p>;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: Math.max(50, amountCents),
        currency: "usd",
        /** Explicit card-only — stops Klarna / Affirm / other BNPL from appearing. */
        paymentMethodTypes: ["card"],
        appearance: { theme: "stripe", variables: { borderRadius: "12px", fontSizeBase: "16px" } },
      }}
    >
      <InnerForm amountCents={amountCents} onReady={onReady} registerConfirm={registerConfirm} />
    </Elements>
  );
}
