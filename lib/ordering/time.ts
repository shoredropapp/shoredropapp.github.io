import { addHours } from "date-fns";
import { fromZonedTime } from "date-fns-tz/fromZonedTime";
import { formatInTimeZone } from "date-fns-tz/formatInTimeZone";

const TZ = "America/New_York";

export function easternDateKey(d: Date): string {
  return d.toLocaleDateString("en-CA", { timeZone: TZ });
}

export function easternMinutesSinceMidnight(d: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(d);
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  return hour * 60 + minute;
}

/** Food ordering window: 10:00 AM ≤ t < 4:00 PM Eastern. */
export function isFoodDrinkOrderWindowOpen(now = new Date()): boolean {
  const t = easternMinutesSinceMidnight(now);
  return t >= 10 * 60 && t < 16 * 60;
}

/** Same-day gear cutoff: after 4 PM Eastern, today is disabled. */
export function isSameDayGearCutoffPassed(now = new Date()): boolean {
  return easternMinutesSinceMidnight(now) >= 16 * 60;
}

export function parseBeachStartClock(label: string): { hour: number; minute: number } | null {
  const m = label.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!m) return null;
  let h = parseInt(m[1], 10);
  const minute = parseInt(m[2], 10);
  const ap = m[3].toUpperCase();
  if (ap === "PM" && h !== 12) h += 12;
  if (ap === "AM" && h === 12) h = 0;
  return { hour: h, minute };
}

export function beachWallStartToInstant(serviceDate: Date, startTimeLabel: string): Date | null {
  const clock = parseBeachStartClock(startTimeLabel);
  if (!clock) return null;
  return fromZonedTime(
    new Date(serviceDate.getFullYear(), serviceDate.getMonth(), serviceDate.getDate(), clock.hour, clock.minute, 0, 0),
    TZ,
  );
}

export function formatBookingEndTime(serviceDate: Date, startTimeLabel: string, durationHours: number): string {
  const start = beachWallStartToInstant(serviceDate, startTimeLabel);
  if (!start) return "";
  try {
    return formatInTimeZone(addHours(start, durationHours), TZ, "h:mm a");
  } catch {
    return "";
  }
}

export function roundUsd2(n: number): number {
  return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
}

export function computeCheckoutTotals(input: {
  merchandiseUsd: number;
  deliveryFeeUsd: number;
  onDemandSurchargeUsd: number;
  tipUsd: number;
}) {
  const merchandiseUsd = roundUsd2(input.merchandiseUsd);
  const deliveryFeeUsd = roundUsd2(input.deliveryFeeUsd);
  const onDemandSurchargeUsd = roundUsd2(input.onDemandSurchargeUsd);
  const tipUsd = roundUsd2(input.tipUsd);
  return {
    netMerchandiseUsd: merchandiseUsd,
    netDeliveryFeeUsd: deliveryFeeUsd,
    orderTotalUsd: roundUsd2(merchandiseUsd + deliveryFeeUsd + onDemandSurchargeUsd + tipUsd),
  };
}

/** Calendar day equality in Eastern. */
export function isSameEasternDay(a: Date, b: Date): boolean {
  return easternDateKey(a) === easternDateKey(b);
}
