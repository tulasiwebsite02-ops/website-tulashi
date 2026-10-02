import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export type DbPost = {
  id: string;
  title: string;
  author: string;
  body: string;
  image: string;
  cats: string[];
  status: "draft" | "published";
  /** YYYY-MM-DD shown on the post */
  post_date: string;
  updated_at: string;
};

export type PostInput = Omit<DbPost, "id" | "updated_at"> & { id?: string };

const TABLE = "posts";

/** Public: published posts only (the database enforces this, not just this query). */
export async function fetchPublished(): Promise<DbPost[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("status", "published")
    .order("post_date", { ascending: false });
  if (error) throw error;
  return (data ?? []) as DbPost[];
}

/** Admin: everything, including drafts. Non-admins simply get published rows back. */
export async function fetchAll(): Promise<DbPost[]> {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as DbPost[];
}

export async function fetchPost(id: string): Promise<DbPost | null> {
  if (!supabase) return null;
  const { data, error } = await supabase.from(TABLE).select("*").eq("id", id).maybeSingle();
  if (error) throw error;
  return (data as DbPost | null) ?? null;
}

export async function savePost(input: PostInput): Promise<DbPost> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const row = { ...input, updated_at: new Date().toISOString() };
  const q = input.id
    ? supabase.from(TABLE).update(row).eq("id", input.id)
    : supabase.from(TABLE).insert(row);
  const { data, error } = await q.select().single();
  if (error) throw error;
  return data as DbPost;
}

export async function deletePost(id: string): Promise<void> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw error;
}

/** Load published posts once for the public blog list. */
export function usePublishedPosts() {
  const [posts, setPosts] = useState<DbPost[]>([]);
  const [loading, setLoading] = useState(Boolean(supabase));

  useEffect(() => {
    if (!supabase) return;
    let alive = true;
    fetchPublished()
      .then((p) => alive && setPosts(p))
      .catch(() => alive && setPosts([]))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  return { posts, loading };
}
