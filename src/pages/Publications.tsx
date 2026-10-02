import { ExternalLink } from "lucide-react";
import {
  ARTICLES,
  FICTION_NONFICTION,
  POEMS,
  PUB_HIGHLIGHTS,
  RESEARCH,
  type Pub,
} from "../data/publications";
import { PageHeader, Reveal } from "../components/Section";

function isDeva(s: string) {
  return /[\u0900-\u097F]/.test(s);
}

function PubList({ items, ordered }: { items: Pub[]; ordered?: boolean }) {
  const List = ordered ? "ol" : "ul";
  return (
    <List className="mt-5 space-y-2.5">
      {items.map((p, i) => (
        <li
          key={`${p.text}-${i}`}
          className={`flex gap-3 border-b border-rule/60 pb-2.5 text-[0.92rem] leading-[1.75] last:border-0 ${
            isDeva(p.text) ? "deva" : ""
          }`}
        >
          <span className="mt-1 shrink-0 select-none text-[0.7rem] tabular-nums text-saffron">
            {String(i + 1).padStart(2, "0")}
          </span>
          {p.url ? (
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group text-ink-soft transition-colors hover:text-brick"
            >
              {p.text}
              <ExternalLink
                size={11}
                className="ml-1.5 inline-block -translate-y-px opacity-50 group-hover:opacity-100"
              />
            </a>
          ) : (
            <span className="text-ink-soft">{p.text}</span>
          )}
        </li>
      ))}
    </List>
  );
}

function Group({
  id,
  title,
  count,
  children,
}: {
  id: string;
  title: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section id={id} className="scroll-mt-28 border-t border-rule py-12 first:border-t-0">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-[1.6rem] sm:text-[2rem]">{title}</h2>
          <span className="label text-muted">{count} entries</span>
        </div>
        {children}
      </section>
    </Reveal>
  );
}

export default function Publications() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Research, journalism, fiction & poems"
        lede="Peer-reviewed research, book chapters, literary work, book reviews and more than five hundred newspaper articles published in Nepal and the United States — collected here with links to the originals."
      />

      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {PUB_HIGHLIGHTS.map((h) => (
              <a
                key={h.title}
                href={h.url}
                target="_blank"
                rel="noreferrer"
                className="card group flex h-full flex-col justify-between p-6"
              >
                <p className="text-[0.98rem] leading-snug">{h.title}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-brick">
                  {h.where} <ExternalLink size={12} />
                </p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-rule pb-5 text-sm">
            {[
              ["#research", "Research"],
              ["#fiction-nonfiction", "Fiction / Non-fiction"],
              ["#articles", "Articles"],
              ["#poems", "Poems"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-muted hover:text-brick">
                {label}
              </a>
            ))}
          </nav>
        </Reveal>

        <Group id="research" title="Research" count={RESEARCH.length}>
          <PubList items={RESEARCH} ordered />
        </Group>

        <Group
          id="fiction-nonfiction"
          title="Fiction / Non-fiction"
          count={FICTION_NONFICTION.length}
        >
          <PubList items={FICTION_NONFICTION} />
        </Group>

        <Group id="articles" title="Articles" count={ARTICLES.length}>
          <PubList items={ARTICLES} />
        </Group>

        <Group id="poems" title="Poems" count={POEMS.length}>
          <PubList items={POEMS} />
        </Group>

        <Reveal>
          <p className="border-t border-rule py-8 text-sm text-muted">
            Write-ups:{" "}
            <a
              href="http://www.tulasiacharya.com"
              target="_blank"
              rel="noreferrer"
              className="text-brick link-underline"
            >
              http://www.tulasiacharya.com
            </a>{" "}
            – Over 500 articles published.
          </p>
        </Reveal>
      </div>
    </>
  );
}
