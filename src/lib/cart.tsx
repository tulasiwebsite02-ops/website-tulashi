import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { books, PAYPAL_EMAIL } from "../data/books";

export type CartLine = { id: string; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  open: boolean;
  setOpen: (v: boolean) => void;
  justAdded: string | null;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "ta-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as CartLine[]) : [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable */
    }
  }, [lines]);

  const add = useCallback((id: string, qty = 1) => {
    setLines((prev) => {
      const found = prev.find((l) => l.id === id);
      if (found)
        return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
      return [...prev, { id, qty }];
    });
    setJustAdded(id);
    window.setTimeout(() => setJustAdded(null), 1600);
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => l.id !== id)
        : prev.map((l) => (l.id === id ? { ...l, qty } : l)),
    );
  }, []);

  const remove = useCallback(
    (id: string) => setLines((prev) => prev.filter((l) => l.id !== id)),
    [],
  );
  const clear = useCallback(() => setLines([]), []);

  const { count, total } = useMemo(() => {
    let c = 0;
    let t = 0;
    for (const l of lines) {
      const b = books.find((x) => x.id === l.id);
      if (!b) continue;
      c += l.qty;
      t += l.qty * b.price;
    }
    return { count: c, total: t };
  }, [lines]);

  return (
    <Ctx.Provider
      value={{ lines, count, total, add, setQty, remove, clear, open, setOpen, justAdded }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
}

/** Builds and submits a PayPal Payments Standard cart-upload form. */
export function payWithPayPal(
  items: { name: string; price: number; qty: number }[],
  opts?: { shipping?: number },
) {
  const form = document.createElement("form");
  form.action = "https://www.paypal.com/cgi-bin/webscr";
  form.method = "post";
  form.target = "_blank";
  form.rel = "noopener";
  form.style.display = "none";

  const hidden = (name: string, value: string) => {
    const i = document.createElement("input");
    i.type = "hidden";
    i.name = name;
    i.value = value;
    form.appendChild(i);
  };

  hidden("cmd", "_cart");
  hidden("upload", "1");
  hidden("business", PAYPAL_EMAIL);
  hidden("currency_code", "USD");
  hidden("no_note", "0");
  hidden("cn", "Dedication / signing request (optional)");
  hidden("no_shipping", "2");
  hidden("charset", "utf-8");
  hidden("rm", "1");
  hidden("return", `${window.location.origin}/thank-you`);
  hidden("cancel_return", window.location.href);

  items.forEach((it, idx) => {
    const n = idx + 1;
    hidden(`item_name_${n}`, it.name.slice(0, 127));
    hidden(`amount_${n}`, it.price.toFixed(2));
    hidden(`quantity_${n}`, String(it.qty));
  });

  if (opts?.shipping && opts.shipping > 0) {
    hidden("handling_cart", opts.shipping.toFixed(2));
  }

  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => form.remove(), 1000);
}

/** Single fixed-price PayPal payment (used for the consultation fee). */
export function payFixed(name: string, amount: number) {
  const form = document.createElement("form");
  form.action = "https://www.paypal.com/cgi-bin/webscr";
  form.method = "post";
  form.target = "_blank";
  form.rel = "noopener";
  form.style.display = "none";
  const hidden = (n: string, v: string) => {
    const i = document.createElement("input");
    i.type = "hidden";
    i.name = n;
    i.value = v;
    form.appendChild(i);
  };
  hidden("cmd", "_xclick");
  hidden("business", PAYPAL_EMAIL);
  hidden("item_name", name);
  hidden("amount", amount.toFixed(2));
  hidden("currency_code", "USD");
  hidden("no_shipping", "1");
  hidden("no_note", "0");
  hidden("charset", "utf-8");
  hidden("return", `${window.location.origin}/thank-you`);
  hidden("cancel_return", window.location.href);
  document.body.appendChild(form);
  form.submit();
  window.setTimeout(() => form.remove(), 1000);
}
