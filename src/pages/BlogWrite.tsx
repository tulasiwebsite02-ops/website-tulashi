import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Bold,
  Eye,
  Heading2,
  Italic,
  List,
  PenLine,
  Quote,
  Save,
  Send,
  Trash2,
} from "lucide-react";
import { TOPICS } from "../data/blog";
import { PageHeader, Reveal } from "../components/Section";
import PostBody from "../components/PostBody";
import { isSafeImageUrl, readingTime, todayISO } from "../lib/postUtils";
import { deletePost, fetchPost, savePost, type DbPost } from "../lib/posts";
import { useAuth } from "../lib/auth";

const input =
  "mt-1.5 w-full border border-rule bg-white px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-brick";

/** Admin-only route: checks login, loads the post being edited, then shows the editor. */
export default function BlogWrite() {
  const { id } = useParams();
  const { isAdmin, loading } = useAuth();
  const [existing, setExisting] = useState<DbPost | null>(null);
  const [ready, setReady] = useState(!id);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!id || !isAdmin) return;
    let alive = true;
    fetchPost(id)
      .then((p) => {
        if (!alive) return;
        setExisting(p);
        if (!p) setLoadError("That post could not be found.");
        setReady(true);
      })
      .catch((e: Error) => {
        if (!alive) return;
        setLoadError(e.message);
        setReady(true);
      });
    return () => {
      alive = false;
    };
  }, [id, isAdmin]);

  if (loading) return <p className="px-5 py-24 text-center text-muted">Loading…</p>;
  if (!isAdmin) return <Navigate to="/admin" replace />;
  if (!ready) return <p className="px-5 py-24 text-center text-muted">Loading post…</p>;
  if (loadError)
    return (
      <div className="px-5 py-24 text-center">
        <p className="text-brick">{loadError}</p>
        <Link to="/admin" className="mt-4 inline-block text-brick link-underline">
          Back to admin
        </Link>
      </div>
    );

  return <Editor existing={existing} />;
}

function Editor({ existing }: { existing: DbPost | null }) {
  const navigate = useNavigate();

  const [postId, setPostId] = useState<string | undefined>(existing?.id);
  const [title, setTitle] = useState(existing?.title ?? "");
  const [author, setAuthor] = useState(existing?.author ?? "Tulasi Acharya");
  const [postDate, setPostDate] = useState(existing?.post_date ?? todayISO());
  const [busy, setBusy] = useState(false);
  const [image, setImage] = useState(existing?.image ?? "");
  const [cats, setCats] = useState<string[]>(existing?.cats ?? ["Blog"]);
  const [body, setBody] = useState(existing?.body ?? "");
  const [tab, setTab] = useState<"write" | "preview">("write");
  const [error, setError] = useState("");
  const [savedMsg, setSavedMsg] = useState("");
  const area = useRef<HTMLTextAreaElement>(null);

  const { words, minutes } = readingTime(body);

  const toggleCat = (c: string) =>
    setCats((cur) => (cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]));

  /** Wrap the current selection (or insert a prefix at line start). */
  const format = (kind: "bold" | "italic" | "h2" | "quote" | "list") => {
    const el = area.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    const sel = body.slice(s, e);
    let insert = sel;
    let from = s;
    let to = e;
    if (kind === "bold") insert = `**${sel || "bold text"}**`;
    if (kind === "italic") insert = `*${sel || "italic text"}*`;
    if (kind === "h2" || kind === "quote" || kind === "list") {
      const prefix = kind === "h2" ? "## " : kind === "quote" ? "> " : "- ";
      from = body.lastIndexOf("\n", s - 1) + 1; // start of the current line
      const chunk = body.slice(from, e) || "Text";
      insert = chunk
        .split("\n")
        .map((l) => (l.startsWith(prefix) ? l : prefix + l))
        .join("\n");
      to = e;
    }
    const next = body.slice(0, from) + insert + body.slice(to);
    setBody(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(from, from + insert.length);
    });
  };

  const persist = async (status: DbPost["status"]) => {
    setBusy(true);
    setError("");
    try {
      const saved = await savePost({
        id: postId,
        title: title.trim() || "Untitled draft",
        author: author.trim() || "Tulasi Acharya",
        body: body.trim(),
        image: image.trim(),
        cats: cats.length ? cats : ["Blog"],
        status,
        post_date: postDate,
      });
      setPostId(saved.id);
      return saved;
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not save. Please try again.");
      return null;
    } finally {
      setBusy(false);
    }
  };

  const saveDraft = async () => {
    if (!title.trim() && !body.trim()) return setError("Add a title or some text before saving.");
    if (image.trim() && !isSafeImageUrl(image))
      return setError("The cover image must be a full http(s) link, or leave it empty.");
    const saved = await persist("draft");
    if (saved) {
      setSavedMsg("Draft saved.");
      window.setTimeout(() => setSavedMsg(""), 2500);
    }
  };

  const publish = async () => {
    if (!title.trim()) return setError("Please give your post a title.");
    if (words < 30) return setError("Write at least a few sentences (30 words) before publishing.");
    if (image.trim() && !isSafeImageUrl(image))
      return setError("The cover image must be a full http(s) link, or leave it empty.");
    const saved = await persist("published");
    if (saved) navigate(`/blog/post/${saved.id}`);
  };

  const del = async () => {
    if (!postId) return navigate("/admin");
    if (!window.confirm("Delete this post permanently?")) return;
    try {
      await deletePost(postId);
      navigate("/admin");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not delete.");
    }
  };

  const tools = [
    { k: "bold", icon: Bold, label: "Bold" },
    { k: "italic", icon: Italic, label: "Italic" },
    { k: "h2", icon: Heading2, label: "Heading" },
    { k: "quote", icon: Quote, label: "Quote" },
    { k: "list", icon: List, label: "Bulleted list" },
  ] as const;

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={postId ? "Edit post" : "Write a new post"}
        lede="Drafts are private. Published posts appear on the Blog page for every visitor."
      />

      <div className="mx-auto max-w-4xl px-5 py-12">
        <Link
          to="/admin"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-brick"
        >
          <ArrowLeft size={14} /> Back to admin
        </Link>

        <Reveal>
          <div className="card p-6 sm:p-8">
            <label className="block">
              <span className="label text-muted">Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={140}
                className={`${input} display text-[1.25rem]`}
                placeholder="A title worth clicking"
              />
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="label text-muted">Author</span>
                <input
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  maxLength={60}
                  className={input}
                  placeholder="Tulasi Acharya"
                />
              </label>
              <label className="block">
                <span className="label text-muted">Cover image link (optional)</span>
                <input
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className={input}
                  placeholder="https://…"
                  inputMode="url"
                />
              </label>
            </div>

            <label className="mt-4 block sm:max-w-xs">
              <span className="label text-muted">Post date</span>
              <input
                type="date"
                value={postDate}
                onChange={(e) => setPostDate(e.target.value)}
                className={input}
              />
            </label>

            <div className="mt-5">
              <span className="label text-muted">Topics</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {TOPICS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleCat(t)}
                    aria-pressed={cats.includes(t)}
                    className={`rounded-full border px-3.5 py-1 text-[0.74rem] uppercase tracking-[0.12em] transition-colors ${
                      cats.includes(t)
                        ? "border-brick bg-brick text-paper"
                        : "border-rule text-muted hover:border-brick hover:text-brick"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* ------------------------------------------------ editor */}
            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-between gap-2 border border-b-0 border-rule bg-paper-2/60 px-2 py-1.5">
                <div className="flex items-center gap-0.5">
                  {tools.map((t) => (
                    <button
                      type="button"
                      key={t.k}
                      onClick={() => format(t.k)}
                      disabled={tab !== "write"}
                      aria-label={t.label}
                      title={t.label}
                      className="rounded p-2 text-muted transition-colors hover:bg-white hover:text-brick disabled:opacity-40"
                    >
                      <t.icon size={16} />
                    </button>
                  ))}
                </div>
                <div className="flex overflow-hidden rounded-full border border-rule text-[0.72rem] uppercase tracking-[0.12em]">
                  <button
                    type="button"
                    onClick={() => setTab("write")}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 ${
                      tab === "write" ? "bg-ink text-paper" : "bg-white text-muted"
                    }`}
                  >
                    <PenLine size={12} /> Write
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("preview")}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 ${
                      tab === "preview" ? "bg-ink text-paper" : "bg-white text-muted"
                    }`}
                  >
                    <Eye size={12} /> Preview
                  </button>
                </div>
              </div>

              {tab === "write" ? (
                <textarea
                  ref={area}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={16}
                  className="w-full resize-y border border-rule bg-white px-4 py-3.5 text-[1rem] leading-relaxed outline-none transition-colors focus:border-brick"
                  placeholder={"Start writing…\n\nLeave a blank line between paragraphs."}
                />
              ) : (
                <div className="min-h-[24rem] border border-rule bg-white px-5 py-5">
                  {body.trim() ? (
                    <PostBody body={body} />
                  ) : (
                    <p className="text-sm text-muted">Nothing to preview yet.</p>
                  )}
                </div>
              )}

              <p className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-muted">
                <span>
                  Tip: blank line = new paragraph · <code>## Heading</code> · <code>&gt; quote</code> ·{" "}
                  <code>- list</code> · <code>**bold**</code> · <code>*italic*</code>
                </span>
                <span>
                  {words} words · {minutes} min read
                </span>
              </p>
            </div>

            {error && (
              <p role="alert" className="mt-4 border-l-2 border-brick bg-paper-2/60 px-3 py-2 text-sm text-brick-deep">
                {error}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-rule pt-5">
              <button
                type="button"
                onClick={publish}
                disabled={busy}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-brick disabled:opacity-60"
              >
                <Send size={15} /> {existing?.status === "published" ? "Update post" : "Publish"}
              </button>
              <button
                type="button"
                onClick={saveDraft}
                disabled={busy}
                className="inline-flex items-center gap-2 rounded-full border border-rule px-5 py-3 text-sm transition-colors hover:border-brick hover:text-brick disabled:opacity-60"
              >
                <Save size={15} /> Save draft
              </button>
              {postId && (
                <button
                  type="button"
                  onClick={del}
                  className="ml-auto inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-brick"
                >
                  <Trash2 size={15} /> Delete
                </button>
              )}
              {savedMsg && <span className="text-sm text-moss">{savedMsg}</span>}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
