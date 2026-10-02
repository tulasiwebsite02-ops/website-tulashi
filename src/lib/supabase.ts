import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** false until the two env vars are set — the site still works without them (WordPress posts only). */
export const isConfigured = Boolean(url && anon);

export const supabase = isConfigured ? createClient(url!, anon!) : null;
