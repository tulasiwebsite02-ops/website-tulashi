import { supabase } from "./supabase";

export type Subscriber = { id: string; email: string; created_at: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeResult = "ok" | "invalid" | "unavailable" | "error";

export async function subscribe(rawEmail: string): Promise<SubscribeResult> {
  const email = rawEmail.trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return "invalid";
  if (!supabase) return "unavailable";
  const { error } = await supabase.from("subscribers").insert({ email });
  // 23505 = already subscribed: treat as success so we never reveal who is on the list
  if (error && error.code !== "23505") return "error";
  return "ok";
}

export async function fetchSubscribers(): Promise<Subscriber[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("subscribers")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as Subscriber[];
}

export async function deleteSubscriber(id: string): Promise<void> {
  if (!supabase) return;
  const { error } = await supabase.from("subscribers").delete().eq("id", id);
  if (error) throw error;
}

export function subscribersCsv(list: Subscriber[]) {
  const rows = ["email,subscribed_at", ...list.map((s) => `${s.email},${s.created_at}`)];
  return rows.join("\n");
}
