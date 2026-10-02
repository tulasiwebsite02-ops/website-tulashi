import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "../lib/cart";

export default function ThankYou() {
  const { clear } = useCart();
  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-28 text-center">
      <CheckCircle2 size={48} className="text-moss" />
      <h1 className="mt-6 text-[2.2rem] leading-tight sm:text-[2.8rem]">Thank you for your order</h1>
      <p className="mt-5 text-[1.02rem] leading-[1.9] text-ink-soft">
        Your payment has been sent to the author through PayPal. A PayPal receipt
        is on its way to your email. Books are signed and shipped by Tulasi
        Acharya — if you asked for a dedication, it will be written exactly as you
        noted at checkout.
      </p>
      <p className="mt-4 text-sm text-muted">
        Questions about an order? Write to{" "}
        <a className="text-brick link-underline" href="mailto:tulasi.acharya1@gmail.com">
          tulasi.acharya1@gmail.com
        </a>
        .
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link
          to="/books"
          className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-brick"
        >
          Back to the bookstore
        </Link>
        <Link
          to="/"
          className="rounded-full border border-rule px-6 py-3 text-sm hover:border-brick hover:text-brick"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
