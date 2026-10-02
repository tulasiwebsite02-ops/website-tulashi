import { useMemo, useState } from "react";
import { ShieldCheck, Truck, PenLine } from "lucide-react";
import { books } from "../data/books";
import BookCard from "../components/BookCard";
import { PageHeader, Reveal } from "../components/Section";
import { useCart } from "../lib/cart";

const filters = [
  { key: "all", label: "All titles" },
  { key: "nonfiction", label: "Non-fiction" },
  { key: "fiction", label: "Fiction" },
  { key: "poetry", label: "Poetry" },
  { key: "translation", label: "Translation" },
  { key: "nepali", label: "Nepali books (नेपाली)" },
] as const;

export default function Books() {
  const [active, setActive] = useState<(typeof filters)[number]["key"]>("all");
  const { setOpen, count } = useCart();

  const list = useMemo(
    () =>
      active === "all"
        ? books
        : active === "nepali"
          ? books.filter((b) => b.language === "Nepali")
          : books.filter((b) => b.section === active),
    [active],
  );

  return (
    <>
      <PageHeader
        eyebrow="Bookstore"
        title="Order signed copies directly from the author"
        lede="Every title below can be bought here and paid for securely through PayPal — by PayPal balance, debit card or credit card. Orders are fulfilled and shipped by Tulasi Acharya himself, and each copy can be signed or dedicated on request."
      />

      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, t: "Secure PayPal checkout", d: "Payments are received directly by the author at tulasi.acharya1@gmail.com." },
              { icon: PenLine, t: "Signed & dedicated", d: "Leave a note at checkout with the name for the inscription." },
              { icon: Truck, t: "Flat $5 shipping", d: "One flat shipping & handling charge per order, however many books." },
            ].map((f) => (
              <div key={f.t} className="card flex gap-3 p-5">
                <f.icon size={19} className="mt-0.5 shrink-0 text-brick" />
                <div>
                  <p className="text-[0.95rem]">{f.t}</p>
                  <p className="text-[0.84rem] leading-relaxed text-muted">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-full border px-4 py-1.5 text-[0.78rem] uppercase tracking-[0.14em] transition-colors ${
                  active === f.key
                    ? "border-brick bg-brick text-paper"
                    : "border-rule text-muted hover:border-brick hover:text-brick"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          {count > 0 && (
            <button
              onClick={() => setOpen(true)}
              className="text-sm uppercase tracking-[0.14em] text-brick hover:text-brick-deep"
            >
              Review order ({count}) →
            </button>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <BookCard key={b.id} book={b} index={i} />
          ))}
        </div>

        <Reveal>
          <p className="mx-auto mt-14 max-w-3xl border-t border-rule pt-6 text-center text-sm text-muted">
            Bookstores, libraries and course adopters: for bulk orders, review
            copies or event stock, write to{" "}
            <a className="text-brick link-underline" href="mailto:tulasi.acharya1@gmail.com">
              tulasi.acharya1@gmail.com
            </a>
            .
          </p>
        </Reveal>
      </div>
    </>
  );
}
