import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { Download, Eye, LogOut, PenLine, Plus, Trash2 } from "lucide-react";
import { PageHeader, Reveal } from "../components/Section";
import { useAuth } from "../lib/auth";
import { deletePost, fetchAll, type DbPost } from "../lib/posts";
import { isConfigured } from "../lib/supabase";
import {
  deleteSubscriber,
  fetchSubscribers,
  subscribersCsv,
  type Subscriber,
} from "../lib/subscribers";

const input =
  "mt-1.5 w-full border border-rule bg-white px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-brick";

function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const err = await signIn(email.trim(), password);
    if (err) setError(err);
    setBusy(false);
  };

  return (
    <form onSubmit={submit} className="card mx-auto max-w-md p-6 sm:p-8">
      <p className="label text-brick">Admin</p>
      <h2 className="mt-2 text-[1.5rem]">Sign in</h2>
      <label className="mt-5 block">
        <span className="label text-muted">Email</span>
        <input
          required
          type="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={input}
        />
      </label>
      <label className="mt-4 block">
        <span className="label text-muted">Password</span>
        <input
          required
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={input}
        />
      </label>
      {error && (
        <p role="alert" className="mt-4 border-l-2 border-brick bg-paper-2/60 px-3 py-2 text-sm text-brick-deep">
          {error}
        </p>
      )}
      <button
        disabled={busy}
        className="mt-5 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-brick disabled:opacity-60"
      >
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

function Subscribers() {
  const [list, setList] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchSubscribers()
      .then((l) => alive && setList(l))
      .catch(() =>
        alive && setError("Could not load subscribers. Has supabase/subscribers.sql been run?"),
      )
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const download = () => {
    const blob = new Blob([subscribersCsv(list)], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const remove = async (s: Subscriber) => {
    if (!window.confirm(`Remove ${s.email}?`)) return;
    try {
      await deleteSubscriber(s.id);
      setList((cur) => cur.filter((x) => x.id !== s.id));
    } catch {
      setError("Could not remove that subscriber.");
    }
  };

  return (
    <div className="card mt-10">
      <div className="flex flex-wrap items-center justify-between gap-3 p-4">
        <div>
          <p className="label text-brick">Newsletter</p>
          <p className="mt-1 text-[1rem]">
            {loading ? "Loading subscribers…" : `${list.length} subscriber${list.length === 1 ? "" : "s"}`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={download}
            disabled={!list.length}
            className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2 text-sm text-muted transition-colors hover:border-brick hover:text-brick disabled:opacity-50"
          >
            <Download size={14} /> Download CSV
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-sm text-brick link-underline"
          >
            {open ? "Hide list" : "Show list"}
          </button>
        </div>
      </div>
      {error && <p className="border-t border-rule px-4 py-3 text-sm text-brick-deep">{error}</p>}
      {open && (
        <ul className="divide-y divide-rule border-t border-rule">
          {list.map((s) => (
            <li key={s.id} className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm">
              <span className="truncate">{s.email}</span>
              <span className="shrink-0 text-xs text-muted">
                {s.created_at.slice(0, 10)}
              </span>
              <button
                onClick={() => remove(s)}
                className="shrink-0 p-1.5 text-muted hover:text-brick"
                aria-label={`Remove ${s.email}`}
              >
                <Trash2 size={15} />
              </button>
            </li>
          ))}
          {!list.length && <li className="px-4 py-3 text-sm text-muted">No subscribers yet.</li>}
        </ul>
      )}
    </div>
  );
}

function Dashboard() {
  const { signOut, session } = useAuth();
  const [posts, setPosts] = useState<DbPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    fetchAll()
      .then((p) => alive && setPosts(p))
      .catch((e: Error) => alive && setError(e.message))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const remove = async (p: DbPost) => {
    if (!window.confirm(`Delete “${p.title}” permanently?`)) return;
    try {
      await deletePost(p.id);
      setPosts((cur) => cur.filter((x) => x.id !== p.id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not delete.");
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">Signed in as {session?.user.email}</p>
        <div className="flex items-center gap-3">
          <Link
            to="/admin/write"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-brick"
          >
            <Plus size={15} /> New post
          </Link>
          <button
            onClick={signOut}
            className="inline-flex items-center gap-2 rounded-full border border-rule px-4 py-2.5 text-sm text-muted transition-colors hover:border-brick hover:text-brick"
          >
            <LogOut size={14} /> Sign out
          </button>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-5 border-l-2 border-brick bg-paper-2/60 px-3 py-2 text-sm text-brick-deep">
          {error}
        </p>
      )}

      <div className="card mt-6 divide-y divide-rule">
        {loading && <p className="p-5 text-sm text-muted">Loading posts…</p>}
        {!loading && posts.length === 0 && (
          <p className="p-5 text-sm text-muted">No posts yet — click “New post” to write your first.</p>
        )}
        {posts.map((p) => (
          <div key={p.id} className="flex flex-wrap items-center gap-3 p-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[1rem]">{p.title}</p>
              <p className="mt-0.5 text-xs uppercase tracking-[0.12em] text-muted">
                <span className={p.status === "published" ? "text-moss" : "text-brick"}>
                  {p.status}
                </span>{" "}
                · {p.post_date} · {p.cats.join(", ")}
              </p>
            </div>
            <Link to={`/blog/post/${p.id}`} className="p-2 text-muted hover:text-brick" aria-label="View" title="View">
              <Eye size={16} />
            </Link>
            <Link to={`/admin/write/${p.id}`} className="p-2 text-muted hover:text-brick" aria-label="Edit" title="Edit">
              <PenLine size={16} />
            </Link>
            <button onClick={() => remove(p)} className="p-2 text-muted hover:text-brick" aria-label="Delete" title="Delete">
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      <Subscribers />
    </div>
  );
}

export default function Admin() {
  const { session, isAdmin, loading, signOut } = useAuth();

  let content;
  if (!isConfigured) {
    content = (
      <div className="card mx-auto max-w-xl p-6 text-[0.95rem]">
        <p className="label text-brick">Setup needed</p>
        <p className="mt-3">
          The blog database isn’t connected yet. Add <code>VITE_SUPABASE_URL</code> and{" "}
          <code>VITE_SUPABASE_ANON_KEY</code> to <code>.env.local</code> and restart. See{" "}
          <code>BLOG_ADMIN_SETUP.md</code>.
        </p>
      </div>
    );
  } else if (loading) {
    content = <p className="text-center text-muted">Loading…</p>;
  } else if (!session) {
    content = <Login />;
  } else if (!isAdmin) {
    content = (
      <div className="card mx-auto max-w-md p-6 text-center">
        <p>This account is signed in but is not an admin.</p>
        <button onClick={signOut} className="mt-4 text-brick link-underline">
          Sign out
        </button>
      </div>
    );
  } else {
    content = <Dashboard />;
  }

  return (
    <>
      <PageHeader eyebrow="Admin" title="Manage the blog" />
      <div className="mx-auto max-w-4xl px-5 py-12">
        <Reveal>{content}</Reveal>
      </div>
    </>
  );
}
