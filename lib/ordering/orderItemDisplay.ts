import { PACKAGES, type PackageId } from "./catalog";

export type OrderAddOnLine = {
  name: string;
  quantity: number;
  price?: number;
};

export type StoredOrderItemLike = {
  item_type?: string | null;
  item_name?: string | null;
  quantity?: number | null;
  unit_price?: number | null;
  metadata?: {
    catalogPackageId?: string | null;
    includes?: unknown;
    addOns?: unknown;
    [key: string]: unknown;
  } | null;
};

/** Flat lines for UI: primary name, then package includes / add-ons. */
export function flatStoredOrderItemLines(
  item: StoredOrderItemLike,
  opts?: { withAddOnLabels?: boolean },
): string[] {
  const qty = Math.max(1, Number(item.quantity) || 1);
  const name = (item.item_name || "Item").trim();
  const out: string[] = [`${qty}× ${name}`];

  for (const row of resolveIncludes(item)) {
    out.push(row);
  }

  if (opts?.withAddOnLabels !== false) {
    for (const a of resolveAddOns(item)) {
      out.push(`${a.quantity}× ${a.name}`);
    }
  }

  return out;
}

export function resolveIncludes(item: StoredOrderItemLike): string[] {
  const meta = item.metadata;
  const raw = meta?.includes;
  if (Array.isArray(raw)) {
    const fromMeta = raw
      .filter((s): s is string => typeof s === "string" && s.trim().length > 0)
      .map((s) => s.trim());
    if (fromMeta.length) return fromMeta;
  }

  const catalogId =
    typeof meta?.catalogPackageId === "string" ? meta.catalogPackageId : null;
  if (catalogId && item.item_type === "package") {
    const pkg = PACKAGES.find((p) => p.id === (catalogId as PackageId));
    if (pkg?.items?.length) return [...pkg.items];
  }

  return [];
}

export function resolveAddOns(item: StoredOrderItemLike): OrderAddOnLine[] {
  const raw = item.metadata?.addOns;
  if (!Array.isArray(raw)) return [];
  const out: OrderAddOnLine[] = [];
  for (const row of raw) {
    if (!row || typeof row !== "object") continue;
    const r = row as Record<string, unknown>;
    const name = typeof r.name === "string" ? r.name.trim() : "";
    const quantity = Math.max(0, Number(r.quantity) || 0);
    if (!name || quantity <= 0) continue;
    const price = typeof r.price === "number" ? r.price : undefined;
    out.push({ name, quantity, price });
  }
  return out;
}

/** Grouped summary bullets for an order (packages expand includes + add-ons). */
export function orderDetailBullets(items: StoredOrderItemLike[]): string[] {
  const bullets: string[] = [];
  for (const item of items) {
    bullets.push(...flatStoredOrderItemLines(item, { withAddOnLabels: true }));
  }
  return bullets;
}
