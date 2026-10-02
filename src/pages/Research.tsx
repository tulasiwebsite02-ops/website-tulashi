import { ExternalLink, MapPin, Users } from "lucide-react";
import { PROJECTS } from "../data/site";
import { PageHeader, Reveal } from "../components/Section";

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research & projects"
        title="Research and projects led by Dr. Acharya"
        lede="Alongside writing and teaching, Dr. Acharya leads research projects that support communities in Nepal."
      />

      <div className="mx-auto max-w-5xl space-y-14 px-5 py-14">
        {PROJECTS.map((p) => (
          <Reveal key={p.id}>
            <article className="card overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="max-h-80 w-full border-b border-rule object-cover"
              />
              <div className="p-6 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-moss px-3 py-1 text-[0.7rem] uppercase tracking-[0.14em] text-paper">
                    {p.status}
                  </span>
                  <span className="label text-brick">{p.role}: Tulasi Acharya, PhD</span>
                </div>

                <h2 className="mt-4 text-[1.8rem] leading-tight sm:text-[2.2rem]">{p.title}</h2>
                <p className="mt-1 text-sm text-muted">{p.org}</p>

                <div className="mt-6 space-y-4 text-[1rem] leading-[1.85] text-ink-soft">
                  {p.summary.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>

                <dl className="mt-8 grid gap-6 border-t border-rule pt-6 text-[0.92rem] sm:grid-cols-2">
                  <div>
                    <dt className="label text-brick">Funding support</dt>
                    <dd className="mt-1.5">
                      <a href={p.funderUrl} target="_blank" rel="noreferrer" className="link-underline">
                        {p.funder}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="label flex items-center gap-1.5 text-brick">
                      <MapPin size={13} /> Study site
                    </dt>
                    <dd className="mt-1.5">{p.site}</dd>
                  </div>
                  <div>
                    <dt className="label flex items-center gap-1.5 text-brick">
                      <Users size={13} /> Co-investigators
                    </dt>
                    <dd className="mt-1.5 leading-relaxed">{p.coInvestigators.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="label text-brick">Research assistants</dt>
                    <dd className="mt-1.5 leading-relaxed">{p.assistants.join(", ")}</dd>
                  </div>
                </dl>

                <div className="mt-8 border-t border-rule pt-6">
                  <p className="label text-brick">Project timeline</p>
                  <ol className="mt-4 space-y-3">
                    {p.timeline.map((t) => (
                      <li key={t.when} className="flex gap-4 text-[0.92rem]">
                        <span className="w-20 shrink-0 text-muted">{t.when}</span>
                        <span className="text-ink-soft">{t.what}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="mt-8 border-t border-rule pt-6">
                  <p className="label text-brick">In the media</p>
                  <ul className="mt-3 space-y-2 text-[0.92rem]">
                    {p.media.map((m) => (
                      <li key={m.url}>
                        <a href={m.url} target="_blank" rel="noreferrer" className="link-underline">
                          {m.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-brick"
                >
                  Full project page on NIRI <ExternalLink size={14} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </>
  );
}
