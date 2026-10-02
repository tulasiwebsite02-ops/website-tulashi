-- Run once in Supabase → SQL Editor (adds the newsletter subscriber list).

create table if not exists public.subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null
             check (email = lower(email) and length(email) <= 254 and position('@' in email) > 1),
  created_at timestamptz not null default now()
);

create unique index if not exists subscribers_email_key on public.subscribers (email);

alter table public.subscribers enable row level security;

-- anyone may subscribe (insert only — they can never read the list)
create policy "anyone can subscribe"
  on public.subscribers for insert
  with check (true);

-- only the admin can see or remove subscribers
create policy "admin reads subscribers"
  on public.subscribers for select
  using (public.is_admin());

create policy "admin deletes subscribers"
  on public.subscribers for delete
  using (public.is_admin());
