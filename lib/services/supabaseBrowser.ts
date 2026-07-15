import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

/** Same storage key family as the Cap customer app so sessions stay conceptually aligned. */
const CUSTOMER_AUTH_STORAGE_KEY = "shoredrop-customer-auth-web";

let browserClient: SupabaseClient | null = null;

export const getSupabaseBrowser = (): SupabaseClient | null => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  if (typeof window === "undefined") return null;
  if (!browserClient) {
    browserClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storage: localStorage,
        storageKey: CUSTOMER_AUTH_STORAGE_KEY,
        persistSession: true,
        autoRefreshToken: true,
      },
    });
  }
  return browserClient;
};
