# Blog admin setup (5 steps)

The blog now has a real admin area. Only the admin can create, edit or delete
posts; everyone else can only read published ones. Drafts stay private.

1. **Create a free project** at https://supabase.com.
2. **Create the tables:** Supabase → SQL Editor → paste `supabase/schema.sql` → Run.
3. **Create the admin login:** Authentication → Users → *Add user* (email + password,
   tick "Auto confirm"). Then Authentication → Sign In / Providers → turn
   **off "Allow new users to sign up"** so nobody else can register.
4. **Make that user an admin:** SQL Editor, run (use the admin's email):
   ```sql
   insert into public.admins (user_id)
   select id from auth.users where email = 'YOUR-ADMIN-EMAIL';
   ```
5. **Connect the site:** copy `.env.example` to `.env.local` and fill in the Project URL and
   anon key (Project Settings → API). When deploying (Netlify / Vercel / etc.), add the
   same two variables in the host's environment settings, then redeploy.

Then open `/admin`, sign in, and click **New post**.

Security notes
- The anon key is meant to be public. Protection comes from the Row Level Security
  policies in `schema.sql`, not from hiding the key.
- There is deliberately no "Admin" link in the site menu; visit `/admin` directly.
