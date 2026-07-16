import {
  getFunctionHeaders,
  getFunctionUrl,
  getRestJsonHeaders,
  getRestUrl,
  getUserFunctionHeaders,
  isSupabaseConfigured,
} from "./supabase";
import { orderDetailBullets, type StoredOrderItemLike } from "../ordering/orderItemDisplay";

export type OrderStatus =
  | "confirmed"
  | "en-route"
  | "setting-up"
  | "ready"
  | "completed"
  | "pickup-requested"
  | "pickup-scheduled"
  | "picked-up"
  | "cancelled";

export type TrackerMessage = {
  id: string;
  sender_type: "customer" | "driver" | "system" | string;
  message: string;
  created_at: string;
};

export type TrackerSnapshot = {
  order: {
    status?: string;
    driver_claim_user_id?: string | null;
    location_display_name?: string | null;
    service_date?: string | null;
    start_time?: string | null;
    end_time?: string | null;
    total_amount?: number | null;
    setup_photo_url?: string | null;
    food_staff_eta?: string | null;
    guest_pickup_window?: string | null;
    [key: string]: unknown;
  };
  messages: TrackerMessage[];
};

export type CloudOrderSummary = {
  id: string;
  trackingToken: string;
  status: OrderStatus;
  title: string;
  detailLines: string[];
  locationLabel: string;
  serviceDateLabel: string;
  startTime: string;
  endTime: string;
  totalAmount: number;
  createdAt: string;
  foodOnly: boolean;
  crewClaimed: boolean;
};

const VALID: OrderStatus[] = [
  "confirmed",
  "en-route",
  "setting-up",
  "ready",
  "completed",
  "pickup-requested",
  "pickup-scheduled",
  "picked-up",
  "cancelled",
];

export function parseOrderStatus(raw: unknown): OrderStatus {
  if (typeof raw === "string" && (VALID as string[]).includes(raw)) return raw as OrderStatus;
  return "confirmed";
}

export async function fetchOrderTracker(
  orderId: string,
  trackingToken: string,
): Promise<TrackerSnapshot | null> {
  if (!isSupabaseConfigured()) return null;
  const res = await fetch(getRestUrl("rpc/fetch_order_tracker"), {
    method: "POST",
    headers: getRestJsonHeaders(),
    body: JSON.stringify({ p_order_id: orderId, p_tracking_token: trackingToken.trim() }),
  });
  if (!res.ok) return null;
  const data = (await res.json()) as TrackerSnapshot | null;
  if (!data?.order) return null;
  return {
    order: data.order,
    messages: Array.isArray(data.messages) ? data.messages : [],
  };
}

export async function postOrderChat(input: {
  orderId: string;
  trackingToken: string;
  message: string;
}): Promise<{ ok: boolean; error?: string }> {
  if (!isSupabaseConfigured()) return { ok: false, error: "Not configured." };
  const message = input.message.trim().slice(0, 4000);
  if (!message) return { ok: false, error: "Message required." };
  const res = await fetch(getFunctionUrl("post-order-chat"), {
    method: "POST",
    headers: getFunctionHeaders(),
    body: JSON.stringify({
      orderId: input.orderId,
      trackingToken: input.trackingToken.trim(),
      message,
    }),
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { error?: string };
    return { ok: false, error: body.error || `Chat failed (${res.status}).` };
  }
  return { ok: true };
}

type CloudRow = {
  id: string;
  tracking_token?: string | null;
  status?: string;
  location_display_name?: string | null;
  service_date?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  total_amount?: number | null;
  created_at?: string | null;
  driver_claim_user_id?: string | null;
  items?: StoredOrderItemLike[];
};

export async function fetchCustomerCloudOrders(accessToken: string): Promise<CloudOrderSummary[]> {
  if (!isSupabaseConfigured() || !accessToken.trim()) return [];
  const res = await fetch(getFunctionUrl("list-customer-orders"), {
    method: "POST",
    headers: getUserFunctionHeaders(accessToken),
    body: JSON.stringify({}),
  });
  if (!res.ok) return [];
  const payload = (await res.json().catch(() => ({}))) as { orders?: CloudRow[] };
  return (payload.orders ?? [])
    .map((row): CloudOrderSummary | null => {
      const token = typeof row.tracking_token === "string" ? row.tracking_token.trim() : "";
      if (!row.id || !token) return null;
      const items = Array.isArray(row.items) ? row.items : [];
      const foodOnly = items.length > 0 && items.every((i) => i.item_type === "food");
      const title =
        items.length === 0
          ? "Order"
          : foodOnly
            ? "Food & drinks"
            : items
                .map((i) => i.item_name)
                .filter(Boolean)
                .slice(0, 3)
                .join(", ") || "Beach setup";
      const detailLines = orderDetailBullets(items);
      return {
        id: row.id,
        trackingToken: token,
        status: parseOrderStatus(row.status),
        title,
        detailLines,
        locationLabel: row.location_display_name?.trim() || "Virginia Beach",
        serviceDateLabel: row.service_date || "",
        startTime: row.start_time || "",
        endTime: row.end_time || "",
        totalAmount: Number(row.total_amount) || 0,
        createdAt: row.created_at || new Date().toISOString(),
        foodOnly,
        crewClaimed: Boolean(row.driver_claim_user_id),
      };
    })
    .filter(Boolean) as CloudOrderSummary[];
}
