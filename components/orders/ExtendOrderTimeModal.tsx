"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Clock, Loader2, X } from "lucide-react";
import { Button } from "../button";
import { cn } from "../../lib/utils";
import StripeCardForm from "../checkout/StripeCardForm";
import {
  buildOrderExtensionOptions,
  canOfferOrderExtension,
  extensionPriceCents,
  parseServiceDateLabel,
  type OrderExtensionHours,
} from "../../lib/ordering/orderExtension";
import type { OrderStatus } from "../../lib/services/orderTracker";
import {
  createOrderExtensionPaymentIntent,
  isStripeConfigured,
  recordOrderExtension,
} from "../../lib/services/stripePayment";
import { isSupabaseConfigured } from "../../lib/services/supabase";

type Props = {
  open: boolean;
  onClose: () => void;
  order: {
    id: string;
    trackingToken: string;
    endTime: string;
    serviceDateLabel: string;
    status: OrderStatus;
    foodOnly: boolean;
  } | null;
  onExtended: (orderId: string, endTime: string, totalAmount: number) => void;
};

export default function ExtendOrderTimeModal({ open, onClose, order, onExtended }: Props) {
  const [selectedHours, setSelectedHours] = useState<OrderExtensionHours | null>(1);
  const [paying, setPaying] = useState(false);
  const [stripeReady, setStripeReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const confirmRef = useRef<((clientSecret: string) => Promise<string | undefined>) | null>(null);

  const serviceDate = useMemo(
    () => (order ? parseServiceDateLabel(order.serviceDateLabel) : null),
    [order],
  );

  const offer = useMemo(() => {
    if (!order || !serviceDate) return { ok: false as const, reason: "Missing order details." };
    return canOfferOrderExtension({
      foodOnly: order.foodOnly,
      status: order.status,
      endTime: order.endTime,
      serviceDate,
    });
  }, [order, serviceDate]);

  const options = useMemo(() => {
    if (!order || !serviceDate) return [];
    return buildOrderExtensionOptions(serviceDate, order.endTime);
  }, [order, serviceDate]);

  const selected = options.find((o) => o.hours === selectedHours && o.available) ?? null;
  const priceUsd = selected?.priceUsd ?? 0;
  const priceCents = selected ? extensionPriceCents(selected.hours) : 0;
  const canPay = isStripeConfigured() && isSupabaseConfigured() && Boolean(order?.trackingToken);

  useEffect(() => {
    if (!open) {
      setSelectedHours(1);
      setPaying(false);
      setStripeReady(false);
      setError(null);
      return;
    }
    const first = options.find((o) => o.available);
    setSelectedHours(first?.hours ?? null);
  }, [open, order?.id, order?.endTime]);

  const registerConfirm = useCallback((fn: (clientSecret: string) => Promise<string | undefined>) => {
    confirmRef.current = fn;
  }, []);

  const handlePay = async () => {
    if (!order || !selected || paying || !canPay) return;
    setPaying(true);
    setError(null);
    try {
      const clientSecret = await createOrderExtensionPaymentIntent(
        priceCents,
        order.id,
        selected.hours,
      );
      const run = confirmRef.current;
      if (!run) throw new Error("Payment form is still loading.");
      const paymentIntentId = await run(clientSecret);
      if (!paymentIntentId) throw new Error("Payment did not complete.");
      const result = await recordOrderExtension({
        orderId: order.id,
        trackingToken: order.trackingToken,
        paymentIntentId,
      });
      onExtended(order.id, result.endTime, result.totalAmount);
      onClose();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not process extension.");
    } finally {
      setPaying(false);
    }
  };

  if (!open || !order) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/45 p-4 sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="extend-title"
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white shadow-xl"
      >
        <div className="flex items-start justify-between gap-3 border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e6f9ff]">
              <Clock className="h-5 w-5 text-[#083b6c]" />
            </div>
            <div>
              <h2 id="extend-title" className="text-lg font-extrabold text-[#083b6c]">
                Add more beach time
              </h2>
              <p className="text-sm text-muted-foreground">Current end time: {order.endTime || "—"}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:bg-muted"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 px-5 py-4">
          {!offer.ok ? (
            <p className="rounded-2xl border border-border bg-[#f7fafc] px-4 py-3 text-sm text-muted-foreground">
              {offer.reason}
            </p>
          ) : (
            <>
              <div className="space-y-2">
                {options.map((opt) => {
                  const selectedRow = selectedHours === opt.hours && opt.available;
                  return (
                    <button
                      key={opt.hours}
                      type="button"
                      disabled={!opt.available}
                      onClick={() => setSelectedHours(opt.hours)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left transition-all",
                        !opt.available && "cursor-not-allowed opacity-50",
                        selectedRow
                          ? "border-[#083b6c] bg-[#e6f9ff]"
                          : "border-border hover:border-[#083b6c]/40",
                      )}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="font-bold text-[#083b6c]">
                            +{opt.hours} hour{opt.hours === 1 ? "" : "s"}
                          </p>
                          {opt.popular ? (
                            <span className="rounded-full bg-[#083b6c]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#083b6c]">
                              Popular
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {opt.available
                            ? `New end: ${opt.newEndLabel}`
                            : opt.disabledReason || "Not available"}
                        </p>
                      </div>
                      <p className="shrink-0 font-extrabold text-[#083b6c]">${opt.priceUsd}</p>
                      {selectedRow ? <Check className="h-5 w-5 shrink-0 text-[#083b6c]" /> : null}
                    </button>
                  );
                })}
              </div>

              {canPay && selected ? (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#083b6c]">Payment</p>
                  <StripeCardForm
                    amountCents={priceCents}
                    onReady={setStripeReady}
                    registerConfirm={registerConfirm}
                  />
                </div>
              ) : !canPay ? (
                <p className="text-sm text-muted-foreground">
                  Online payment isn’t configured for this build.
                </p>
              ) : null}

              {error ? <p className="text-sm text-red-600">{error}</p> : null}
            </>
          )}
        </div>

        <div className="space-y-2 border-t border-border px-5 py-4">
          <Button
            type="button"
            className="h-12 w-full rounded-full bg-[#083b6c] text-base font-bold"
            disabled={!offer.ok || !selected || paying || !canPay || !stripeReady}
            onClick={() => void handlePay()}
          >
            {paying ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Processing…
              </>
            ) : selected ? (
              `Extend for $${priceUsd}`
            ) : (
              "Choose an option"
            )}
          </Button>
          <Button type="button" variant="ghost" className="w-full rounded-full" onClick={onClose}>
            Not now
          </Button>
        </div>
      </div>
    </div>
  );
}
