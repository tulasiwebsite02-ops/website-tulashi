import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, PenLine, Trash2, User } from "lucide-react";
import { PageHeader } from "../components/Section";
import PostBody from "../components/PostBody";
import { readingTime } from "../lib/postUtils";
import { deletePost, fetchPost, type DbPost } from "../lib/posts";
import { useAuth } from "../lib/auth";

const fmt = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAdmin } = useAuth();
  const [post, setPost] = useState<DbPost | null>(null);
  const [state, setState] = useState<"loading" | "ready" | "missing">("loading");

  useEffect(() => {
    if (!id) return;
    let alive = true;
    fetchPost(id)
      .then((p) => {
        if (!alive) return;
        setPost(p);
        setState(p ? "ready" : "missing");
      })
      .catch(() => alive && setState("missing"));
    return () => {
      alive = false;
    };
  }, [id]);

  if (state === "loading") {
    return <p className="px-5 py-24 text-center text-muted">Loading…</p>;
  }

  if (state === "missing" || !post) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <h1 className="text-[2rem]">Post not found</h1>
        <p className="mt-3 text-muted">It may have been removed or is not published yet.</p>
        <Link to="/blog" className="mt-6 inline-block text-brick link-underline">
          Back to the blog
        </Link>
      </div>
    );
  }

  const { minutes } = readingTime(post.body);

  return (
    <>
      <PageHeader eyebrow={post.cats.join(" · ")} title={post.title} />

      <article className="mx-auto max-w-3xl px-5 py-12">
        <Link
          to="/blog"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted hover:text-brick"
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <p className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.8rem] uppercase tracking-[0.14em] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <User size={13} /> {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={13} /> {fmt(post.post_date)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} /> {minutes} min read
          </span>
          {post.status === "draft" && (
            <span className="rounded-full border border-brick px-2.5 py-0.5 text-brick">Draft</span>
          )}
        </p>

        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="mb-8 w-full rounded-lg border border-rule object-cover"
            referrerPolicy="no-referrer"
          />
        )}

        <PostBody body={post.body} />

        {isAdmin && (
          <div className="mt-12 flex items-center gap-4 border-t border-rule pt-5 text-sm">
            <Link
              to={`/admin/write/${post.id}`}
              className="inline-flex items-center gap-1.5 text-brick link-underline"
            >
              <PenLine size={14} /> Edit
            </Link>
            <button
              onClick={async () => {
                if (!window.confirm("Delete this post permanently?")) return;
                await deletePost(post.id);
                navigate("/blog");
              }}
              className="inline-flex items-center gap-1.5 text-muted hover:text-brick"
            >
              <Trash2 size={14} /> Delete
            </button>
          </div>
        )}
      </article>
    </>
  );
}
