import { ExternalLink, Mail, Quote } from "lucide-react";
import { AUTHOR_PHOTO, findBook } from "../data/books";
import { AUTHOR, AWARDS, BIO, TESTIMONIALS } from "../data/site";
import { PageHeader, Reveal } from "../components/Section";

export default function About() {
  const memoir = findBook("like-water-on-leaves-of-taro")!;

  return (
    <>
      <PageHeader eyebrow="About" title="Tulasi Acharya" lede={AUTHOR.award} />

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <div>
            {BIO.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p
                  className={`mb-5 text-[1.02rem] leading-[1.9] text-ink-soft ${
                    i === 0 ? "drop-cap" : ""
                  }`}
                >
                  {p}
                </p>
              </Reveal>
            ))}

            <Reveal>
              <img
                src={memoir.cover}
                alt="Like Water on Leaves of Taro cover"
                className="book-shadow mt-6 w-44"
              />
            </Reveal>

            <Reveal>
              <div className="mt-10 border-t border-rule pt-6">
                <p className="label text-brick">Elsewhere</p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  <li>
                    Facebook:{" "}
                    <a className="text-brick link-underline" href={AUTHOR.links.facebook} target="_blank" rel="noreferrer">
                      {AUTHOR.links.facebook}
                    </a>
                  </li>
                  <li>
                    X/Twitter:{" "}
                    <a className="text-brick link-underline" href={AUTHOR.links.x} target="_blank" rel="noreferrer">
                      {AUTHOR.links.x}
                    </a>
                    .
                  </li>
                  <li>
                    <a
                      className="inline-flex items-center gap-1.5 text-brick"
                      href={AUTHOR.links.routledge}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tulasi Acharya – Routledge &amp; CRC Press Author Profile
                      <ExternalLink size={12} />
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-flex items-center gap-1.5 text-brick"
                      href={AUTHOR.links.amazon}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Amazon author page <ExternalLink size={12} />
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-8">
            <Reveal>
              <img
                src={AUTHOR_PHOTO}
                alt="Portrait of Tulasi Acharya"
                className="w-full border border-rule object-cover"
              />
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card p-6" id="contact">
                <p className="label text-brick">Get in touch!</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Mail size={15} className="mt-1 shrink-0 text-muted" />
                    <a className="link-underline" href={`mailto:${AUTHOR.email}`}>
                      {AUTHOR.email}
                    </a>
                  </li>
                </ul>
                <a
                  href={`mailto:${AUTHOR.email}?subject=Message%20for%20Dr.%20Tulasi%20Acharya`}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-brick"
                >
                  Write to the author
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card p-6">
                <p className="label text-brick">Selected honors</p>
                <ul className="mt-3 space-y-2 text-[0.88rem] leading-relaxed text-ink-soft">
                  {AWARDS.map((a) => (
                    <li key={a} className="border-b border-rule/60 pb-2 last:border-0">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>

        <section className="mt-20">
          <Reveal>
            <h2 className="text-center text-[1.9rem] sm:text-[2.3rem]">What People Say</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <figure className="card h-full p-6">
                  <Quote size={20} className="text-saffron" />
                  <blockquote className="mt-3 text-[0.93rem] italic leading-[1.8] text-ink-soft">
                    {t.text}
                  </blockquote>
                  {t.note && <p className="mt-3 text-xs font-semibold">{t.note}</p>}
                  <figcaption className="mt-3 text-xs text-muted">
                    <a href={t.url} target="_blank" rel="noreferrer" className="link-underline">
                      {t.source}
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
