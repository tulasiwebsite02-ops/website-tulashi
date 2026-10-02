import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { books } from "../data/books";
import { payWithPayPal, useCart } from "../lib/cart";

const SHIPPING = 5;

export default function CartDrawer() {
  const { open, setOpen, lines, setQty, remove, total, count } = useCart();

  const detailed = lines
    .map((l) => ({ line: l, book: books.find((b) => b.id === l.id)! }))
    .filter((x) => x.book);

  const checkout = () => {
    if (!detailed.length) return;
    payWithPayPal(
      detailed.map(({ line, book }) => ({
        name: `${book.title}${book.subtitle ? ` — ${book.subtitle}` : ""}`,
        price: book.price,
        qty: line.qty,
      })),
      { shipping: SHIPPING },
    );
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-rule bg-paper shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
          >
            <div className="flex items-center justify-between border-b border-rule px-5 py-4">
              <p className="display text-xl">
                Your order{" "}
                <span className="text-sm text-muted align-middle">
                  ({count} {count === 1 ? "book" : "books"})
                </span>
              </p>
              <button onClick={() => setOpen(false)} aria-label="Close cart" className="text-muted hover:text-brick">
                <X size={19} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {!detailed.length && (
                <div className="mt-16 text-center">
                  <ShoppingBag className="mx-auto text-rule" size={44} />
                  <p className="mt-4 text-muted">Your cart is empty.</p>
                  <Link
                    to="/books"
                    onClick={() => setOpen(false)}
                    className="mt-4 inline-block border-b border-brick text-brick"
                  >
                    Browse the bookstore
                  </Link>
                </div>
              )}

              <ul className="space-y-5">
                {detailed.map(({ line, book }) => (
                  <li key={book.id} className="flex gap-4">
                    <img
                      src={book.cover}
                      alt={book.title}
                      loading="lazy"
                      className="h-28 w-[4.6rem] object-cover border border-rule"
                    />
                    <div className="min-w-0 flex-1">
                      <p className={`text-[0.95rem] leading-snug ${book.language === "Nepali" ? "deva" : ""}`}>
                        {book.title}
                      </p>
                      <p className="text-xs text-muted">
                        {book.kind} · ${book.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center border border-rule">
                          <button
                            className="px-2 py-1 hover:text-brick"
                            onClick={() => setQty(book.id, line.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span className="w-8 text-center text-sm">{line.qty}</span>
                          <button
                            className="px-2 py-1 hover:text-brick"
                            onClick={() => setQty(book.id, line.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <button
                          onClick={() => remove(book.id)}
                          className="text-muted hover:text-brick"
                          aria-label="Remove"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm tabular-nums">${(book.price * line.qty).toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>

            {!!detailed.length && (
              <div className="border-t border-rule px-5 py-5">
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted">Subtotal</dt>
                    <dd className="tabular-nums">${total.toFixed(2)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">Shipping &amp; handling</dt>
                    <dd className="tabular-nums">${SHIPPING.toFixed(2)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-rule pt-2 text-base">
                    <dt className="display">Total</dt>
                    <dd className="display tabular-nums">${(total + SHIPPING).toFixed(2)}</dd>
                  </div>
                </dl>

                <button
                  onClick={checkout}
                  className="mt-4 w-full rounded-full bg-[#0070ba] px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#005b96]"
                >
                  Check out with PayPal
                </button>
                <p className="mt-3 flex items-start gap-2 text-xs text-muted">
                  <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                  You will be taken to PayPal to pay by PayPal balance, debit or
                  credit card. Payment is received directly by the author,
                  tulasi.acharya1@gmail.com. Add a note at checkout if you would
                  like your copy signed or dedicated.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
