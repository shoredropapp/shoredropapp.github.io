import { getFunctionHeaders, getFunctionUrl, isSupabaseConfigured } from "./supabase";

export const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "";

export const isStripeConfigured = (): boolean =>
  Boolean(STRIPE_PUBLISHABLE_KEY.startsWith("pk_"));

export async function createPaymentIntentClientSecret(
  amountCents: number,
  promoCode?: string,
): Promise<string> {
  if (!isSupabaseConfigured()) {
    throw new Error("Cloud checkout requires Supabase to be configured.");
  }
  if (!Number.isFinite(amountCents) || amountCents < 50) {
    throw new Error("Invalid payment amount.");
  }

  const res = await fetch(getFunctionUrl("create-payment-intent"), {
    method: "POST",
    headers: getFunctionHeaders(),
    body: JSON.stringify({ amountCents, ...(promoCode ? { promoCode } : {}) }),
  });

  const raw = await res.text();
  let payload = {} as { clientSecret?: string; error?: string };
  try {
    payload = JSON.parse(raw) as typeof payload;
  } catch {
    payload = { error: raw.slice(0, 280) };
  }

  if (!res.ok || !payload.clientSecret) {
    throw new Error(payload.error || `Could not start payment (HTTP ${res.status}).`);
  }
  return payload.clientSecret;
}
