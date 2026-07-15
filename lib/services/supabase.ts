const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const isSupabaseConfigured = (): boolean => Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const anonKeyIsJwt = (): boolean => SUPABASE_ANON_KEY.trimStart().startsWith("eyJ");

const baseAnonHeaders = (): Record<string, string> => {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }
  const key = SUPABASE_ANON_KEY.trim();
  const h: Record<string, string> = { apikey: key };
  if (anonKeyIsJwt()) h.Authorization = `Bearer ${key}`;
  return h;
};

export const getFunctionHeaders = () => ({
  ...baseAnonHeaders(),
  "Content-Type": "application/json",
});

export const getRestInsertMinimalHeaders = () => ({
  ...baseAnonHeaders(),
  "Content-Type": "application/json",
  Prefer: "return=minimal",
});

export const getRestJsonHeaders = () => ({
  ...baseAnonHeaders(),
  "Content-Type": "application/json",
});

export const getFunctionUrl = (functionName: string) => {
  if (!SUPABASE_URL) throw new Error("Supabase URL missing");
  return `${SUPABASE_URL}/functions/v1/${functionName}`;
};

export const getRestUrl = (tableName: string) => {
  if (!SUPABASE_URL) throw new Error("Supabase URL missing");
  return `${SUPABASE_URL}/rest/v1/${tableName}`;
};

export const getUserFunctionHeaders = (accessToken: string) => ({
  ...getFunctionHeaders(),
  Authorization: `Bearer ${accessToken.trim()}`,
});
