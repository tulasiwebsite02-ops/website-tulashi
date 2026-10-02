-- Run this once in Supabase → SQL Editor.

-- 1) Posts ---------------------------------------------------------------
create table if not exists public.posts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  author      text not null default 'Tulasi Acharya',
  body        text not null default '',
  image       text not null default '',
  cats        text[] not null default '{Blog}',
  status      text not null default 'draft' check (status in ('draft', 'published')),
  post_date   date not null default current_date,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- 2) Who is an admin ---------------------------------------------------------
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

-- 3) Row Level Security: this is what actually protects the blog ---------------
alter table public.posts  enable row level security;
alter table public.admins enable row level security;

-- everyone (even logged-out visitors) may read PUBLISHED posts only
create policy "public reads published"
  on public.posts for select
  using (status = 'published');

-- admins can read everything (drafts too) and create / edit / delete
create policy "admin full access"
  on public.posts for all
  using (public.is_admin())
  with check (public.is_admin());

-- a logged-in user may check whether THEY are an admin (nothing more)
create policy "read own admin row"
  on public.admins for select
  using (user_id = auth.uid());

-- 4) Newsletter subscribers (see also supabase/subscribers.sql) ------------------
create table if not exists public.subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null
             check (email = lower(email) and length(email) <= 254 and position('@' in email) > 1),
  created_at timestamptz not null default now()
);
create unique index if not exists subscribers_email_key on public.subscribers (email);
alter table public.subscribers enable row level security;
create policy "anyone can subscribe" on public.subscribers for insert with check (true);
create policy "admin reads subscribers" on public.subscribers for select using (public.is_admin());
create policy "admin deletes subscribers" on public.subscribers for delete using (public.is_admin());
