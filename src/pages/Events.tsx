import { ExternalLink } from "lucide-react";
import { EVENTS } from "../data/site";
import { PageHeader, Reveal } from "../components/Section";

export default function Events() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Readings, signings & conferences"
        lede="Conference panels, library readings and bookstore signings across the United States and Nepal. To invite Dr. Acharya to read, teach or speak, write to tulasi.acharya1@gmail.com."
      />

      <div className="mx-auto max-w-6xl px-5">
        <ol className="relative">
          {EVENTS.map((e, i) => (
            <Reveal key={e.date} delay={0.04 * i}>
              <li className="grid gap-8 border-b border-rule py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                <div>
                  <p className="label text-brick">{e.date}</p>
                  <p className="mt-4 text-[1rem] leading-[1.85] text-ink-soft">{e.text}</p>
                  {e.link && (
                    <a
                      href={e.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm text-brick hover:text-brick-deep"
                    >
                      {e.link.label} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {e.images.map((src, j) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${e.date} photograph`}
                      loading="lazy"
                      className={`w-full border border-rule object-cover ${
                        e.images.length === 1 ? "col-span-2 max-h-96" : "max-h-64"
                      } ${e.images.length === 3 && j === 0 ? "col-span-2 max-h-80" : ""}`}
                    />
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </>
  );
}
