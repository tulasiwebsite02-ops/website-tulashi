import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CalendarDays, PenLine, User } from "lucide-react";
import { POSTS, TOPICS } from "../data/blog";
import { PageHeader, Reveal } from "../components/Section";
import { makeExcerpt } from "../lib/postUtils";
import { usePublishedPosts } from "../lib/posts";
import { useAuth } from "../lib/auth";

const fmt = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/** One shape for both the author's WordPress posts and posts written on this site. */
type Card = {
  key: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  cats: string[];
  href: string;
  external: boolean;
  author?: string;
};

function PostCard({ post, index }: { post: Card; index: number }) {
  const cls =
    "card group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1";

  const inner = (
    <>
      {post.image && (
        <div className="aspect-[16/10] w-full overflow-hidden border-b border-rule bg-paper-2">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] uppercase tracking-[0.16em] text-muted">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={12} /> {fmt(post.date)}
          </span>
          {post.author && (
            <span className="inline-flex items-center gap-1.5">
              <User size={12} /> {post.author}
            </span>
          )}
        </p>
        <h3 className="mt-2 text-[1.08rem] leading-snug">{post.title}</h3>
        {post.excerpt && (
          <p className="mt-2 line-clamp-4 text-[0.9rem] leading-relaxed text-muted">
            {post.excerpt}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          {post.cats.map((c) => (
            <span
              key={c}
              className="rounded-full border border-rule px-2.5 py-0.5 text-[0.68rem] uppercase tracking-[0.12em] text-muted"
            >
              {c}
            </span>
          ))}
          <span className="ml-auto inline-flex items-center gap-1 text-sm text-brick">
            Read <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </>
  );

  return (
    <Reveal delay={(index % 3) * 0.06}>
      {post.external ? (
        <a href={post.href} target="_blank" rel="noreferrer" className={cls}>
          {inner}
        </a>
      ) : (
        <Link to={post.href} className={cls}>
          {inner}
        </Link>
      )}
    </Reveal>
  );
}

export default function Blog() {
  const [topic, setTopic] = useState<string>("All");
  const { posts: dbPosts } = usePublishedPosts();
  const { isAdmin } = useAuth();

  const all = useMemo<Card[]>(() => {
    const mine: Card[] = dbPosts.map((p) => ({
        key: p.id,
        title: p.title,
        date: p.post_date,
        excerpt: makeExcerpt(p.body),
        image: p.image,
        cats: p.cats,
        href: `/blog/post/${p.id}`,
        external: false,
        author: p.author,
    }));
    const theirs: Card[] = POSTS.map((p) => ({
      key: p.url,
      title: p.title,
      date: p.date,
      excerpt: p.excerpt,
      image: p.image,
      cats: p.cats,
      href: p.url,
      external: true,
    }));
    // newest first; posts written on this site win ties
    return [...mine, ...theirs].sort((a, b) => b.date.localeCompare(a.date));
  }, [dbPosts]);

  const list = useMemo(
    () => (topic === "All" ? all : all.filter((p) => p.cats.includes(topic))),
    [all, topic],
  );

  const counts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const t of TOPICS) m[t] = all.filter((p) => p.cats.includes(t)).length;
    return m;
  }, [all]);

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes, reviews & literary news"
        lede="Essays, book reviews, podcast episodes, award news and dispatches from readings — published on Dr. Acharya's blog. Every entry opens the full post."
      />

      <div className="mx-auto max-w-6xl px-5 py-12">
        {isAdmin && (
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border border-rule bg-paper-2/50 px-5 py-4">
            <p className="text-[0.95rem] text-ink-soft">You are signed in as admin.</p>
            <div className="flex gap-3">
              <Link to="/admin" className="rounded-full border border-rule px-4 py-2 text-sm text-muted hover:border-brick hover:text-brick">
                Manage posts
              </Link>
              <Link
                to="/admin/write"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2 text-sm text-paper transition-colors hover:bg-brick"
              >
                <PenLine size={15} /> New post
              </Link>
            </div>
          </div>
        )}

        <Reveal>
          <div className="flex flex-wrap items-center gap-2 border-b border-rule pb-5">
            <span className="label mr-2 text-brick">Topics</span>
            {["All", ...TOPICS].map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`rounded-full border px-4 py-1.5 text-[0.78rem] uppercase tracking-[0.12em] transition-colors ${
                  topic === t
                    ? "border-brick bg-brick text-paper"
                    : "border-rule text-muted hover:border-brick hover:text-brick"
                }`}
              >
                {t}
                {t !== "All" && <span className="ml-1.5 opacity-60">{counts[t] ?? 0}</span>}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <PostCard key={p.key} post={p} index={i} />
          ))}
        </div>

        <Reveal>
          <p className="mt-12 border-t border-rule pt-6 text-center text-sm text-muted">
            Looking for older entries?{" "}
            <a
              href="https://tulasiacharya.wordpress.com/"
              target="_blank"
              rel="noreferrer"
              className="text-brick link-underline"
            >
              Browse the full blog archive
            </a>
            .
          </p>
        </Reveal>
      </div>
    </>
  );
}
