import { Check, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import type { Book } from "../data/books";
import { useCart } from "../lib/cart";

export function AddToCart({ book, compact }: { book: Book; compact?: boolean }) {
  const { add, justAdded, setOpen } = useCart();
  const added = justAdded === book.id;
  return (
    <button
      onClick={() => {
        add(book.id);
        if (!compact) setOpen(true);
      }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full border transition-all ${
        added
          ? "border-moss bg-moss text-paper"
          : "border-brick bg-brick text-paper hover:bg-brick-deep"
      } ${compact ? "px-4 py-2 text-[0.8rem]" : "px-5 py-2.5 text-sm"}`}
    >
      {added ? <Check size={15} /> : <ShoppingBag size={15} />}
      {added ? "Added" : `Buy · $${book.price.toFixed(2)}`}
    </button>
  );
}

export default function BookCard({ book, index = 0 }: { book: Book; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
      className="card flex h-full flex-col p-5"
    >
      <div className="flex gap-5">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="book-shadow h-40 w-[6.4rem] shrink-0 object-cover"
        />
        <div className="min-w-0">
          <p className="label text-saffron">{book.kind}</p>
          <h3
            className={`mt-1.5 text-[1.12rem] leading-tight ${
              book.language === "Nepali" ? "deva" : ""
            }`}
          >
            {book.title}
          </h3>
          {book.subtitle && (
            <p className="mt-1 text-[0.82rem] italic leading-snug text-muted">
              {book.subtitle}
            </p>
          )}
          <p className="mt-2 text-xs text-muted">{book.language}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-rule/70 pt-4">
        <AddToCart book={book} compact />
        {book.retail?.[0] && (
          <a
            href={book.retail[0].url}
            target="_blank"
            rel="noreferrer"
            className="text-[0.78rem] uppercase tracking-[0.14em] text-muted hover:text-brick"
          >
            Also on {book.retail[0].label}
          </a>
        )}
      </div>
    </motion.article>
  );
}
