import { ExternalLink } from "lucide-react";
import type { Book } from "../data/books";
import { AddToCart } from "./BookCard";
import { Reveal } from "./Section";

/**
 * Long-form entry for a single title: cover, full description text
 * (preserved word-for-word from the author's site), endorsements and
 * purchase options.
 */
export default function BookEntry({ book }: { book: Book }) {
  const nep = book.language === "Nepali";
  return (
    <Reveal>
      <article
        id={book.id}
        className="scroll-mt-28 border-t border-rule py-12 first:border-t-0 sm:py-16"
      >
        <div className="grid gap-9 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-14">
          <div className="md:sticky md:top-32 md:self-start">
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              loading="lazy"
              className="book-shadow w-44 md:w-full max-w-[15rem] object-cover"
            />
            <div className="mt-5 space-y-3">
              <AddToCart book={book} />
              <p className="text-xs text-muted">
                Signed paperback direct from the author · secure PayPal checkout
              </p>
              {!!book.retail?.length && (
                <div>
                  <p className="label mt-4 text-saffron">Buy on</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {book.retail.map((r) => (
                      <li key={r.url}>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-brick hover:text-brick-deep"
                        >
                          {r.label}
                          <ExternalLink size={12} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <p className="label text-brick">
              {book.kind} · {book.language}
            </p>
            <h2
              className={`mt-2 text-[1.8rem] leading-[1.1] sm:text-[2.3rem] ${nep ? "deva" : ""}`}
            >
              {book.title}
            </h2>
            {book.subtitle && (
              <p className="mt-2 text-[1.05rem] italic text-muted">{book.subtitle}</p>
            )}

            <div className="mt-6 space-y-4">
              {book.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-[1rem] leading-[1.85] text-ink-soft ${nep ? "deva" : ""}`}
                >
                  {p}
                </p>
              ))}
            </div>

            {!!book.blurbs?.filter((b) => b.text).length && (
              <div className="mt-9">
                <p className="label text-saffron">Praise &amp; Reviews</p>
                <div className="mt-4 space-y-6">
                  {book.blurbs
                    .filter((b) => b.text)
                    .map((b, i) => (
                      <blockquote
                        key={i}
                        className="border-l-2 border-brick/45 pl-5"
                      >
                        {b.text.split("\n").map((chunk, j) => (
                          <p
                            key={j}
                            className={`text-[0.97rem] leading-[1.8] text-ink-soft ${
                              /[\u0900-\u097F]/.test(chunk) ? "deva" : "italic"
                            }`}
                          >
                            “{chunk}”
                          </p>
                        ))}
                        {b.source && (
                          <cite className="mt-2 block text-[0.82rem] not-italic text-muted">
                            — {b.source}
                          </cite>
                        )}
                      </blockquote>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
