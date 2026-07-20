import { addHours } from "date-fns";
import { fromZonedTime } from "date-fns-tz/fromZonedTime";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";
import { GEAR_PICKUP_CUTOFF_HOUR_EASTERN, parseBeachStartClock } from "./time";
import type { OrderStatus } from "../services/orderTracker";

const TZ = "America/New_York";

export const ORDER_EXTENSION_PRICES_USD: Record<1 | 2 | 3, number> = {
  1: 25,
  2: 45,
  3: 60,
};

export const ORDER_EXTENSION_HOURS = [1, 2, 3] as const;
export type OrderExtensionHours = (typeof ORDER_EXTENSION_HOURS)[number];

const EXTENDABLE_STATUSES = new Set<OrderStatus>([
  "confirmed",
  "en-route",
  "setting-up",
  "ready",
]);

export type ExtensionOption = {
  hours: OrderExtensionHours;
  priceUsd: number;
  newEndLabel: string;
  available: boolean;
  disabledReason?: string;
  popular?: boolean;
};

function beachWallClockToInstant(serviceDate: Date, clockLabel: string): Date | null {
  const clock = parseBeachStartClock(clockLabel);
  if (!clock) return null;
  const y = serviceDate.getFullYear();
  const mo = serviceDate.getMonth();
  const d = serviceDate.getDate();
  return fromZonedTime(new Date(y, mo, d, clock.hour, clock.minute, 0, 0), TZ);
}

function formatEasternClock(d: Date): string {
  /** Match Lovable copy: "5 PM" when on the hour, else "5:30 PM". */
  return formatInTimeZone(d, TZ, "h:mm a").replace(":00", "");
}

function endMinutesEastern(end: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(end);
  const h = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const m = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  return h * 60 + m;
}

export function canOfferOrderExtension(input: {
  foodOnly?: boolean;
  status: OrderStatus;
  endTime: string;
  serviceDate: Date;
}): { ok: boolean; reason?: string } {
  if (input.foodOnly) {
    return { ok: false, reason: "Food orders can’t be extended." };
  }
  if (!EXTENDABLE_STATUSES.has(input.status)) {
    return { ok: false, reason: "This order can’t be extended right now." };
  }
  const end = beachWallClockToInstant(input.serviceDate, input.endTime);
  if (!end) return { ok: false, reason: "Couldn’t read your end time." };
  if (endMinutesEastern(end) >= GEAR_PICKUP_CUTOFF_HOUR_EASTERN * 60) {
    return { ok: false, reason: "You're already at our latest pickup time." };
  }
  const anyAvailable = buildOrderExtensionOptions(input.serviceDate, input.endTime).some((o) => o.available);
  if (!anyAvailable) {
    return { ok: false, reason: "Not available — past our 7 PM cutoff" };
  }
  return { ok: true };
}

export function buildOrderExtensionOptions(
  serviceDate: Date,
  currentEndTime: string,
): ExtensionOption[] {
  const end = beachWallClockToInstant(serviceDate, currentEndTime);
  const cutoffMin = GEAR_PICKUP_CUTOFF_HOUR_EASTERN * 60;

  return ORDER_EXTENSION_HOURS.map((hours) => {
    const priceUsd = ORDER_EXTENSION_PRICES_USD[hours];
    if (!end) {
      return {
        hours,
        priceUsd,
        newEndLabel: "",
        available: false,
        disabledReason: "Couldn’t read your end time.",
        popular: hours === 2,
      };
    }
    const next = addHours(end, hours);
    const newEndLabel = formatEasternClock(next);
    if (endMinutesEastern(next) > cutoffMin) {
      return {
        hours,
        priceUsd,
        newEndLabel,
        available: false,
        disabledReason: "Not available — past our 7 PM cutoff",
        popular: hours === 2,
      };
    }
    return {
      hours,
      priceUsd,
      newEndLabel,
      available: true,
      popular: hours === 2,
    };
  });
}

export function extensionPriceCents(hours: OrderExtensionHours): number {
  return Math.round(ORDER_EXTENSION_PRICES_USD[hours] * 100);
}

/** Parse `YYYY-MM-DD` or a locale date label into a local calendar Date for wall-clock math. */
export function parseServiceDateLabel(label: string): Date | null {
  const raw = label.trim();
  if (!raw) return null;
  const iso = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    const y = parseInt(iso[1], 10);
    const mo = parseInt(iso[2], 10) - 1;
    const d = parseInt(iso[3], 10);
    const dt = new Date(y, mo, d);
    if (dt.getFullYear() === y && dt.getMonth() === mo && dt.getDate() === d) return dt;
    return null;
  }
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
}
