import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { subscribe } from "../lib/subscribers";

const MESSAGES = {
  invalid: "Please enter a valid email address.",
  unavailable: "Subscriptions are not available right now. Please try again later.",
  error: "Something went wrong. Please try again in a moment.",
};

export default function SubscribeForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [trap, setTrap] = useState(""); // honeypot: real people never fill this in
  const [state, setState] = useState<"idle" | "busy" | "done">("idle");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (trap) return setState("done"); // pretend success to bots
    setState("busy");
    setError("");
    const r = await subscribe(email);
    if (r === "ok") {
      setState("done");
      setEmail("");
    } else {
      setState("idle");
      setError(MESSAGES[r]);
    }
  };

  if (state === "done") {
    return (
      <p className={`text-[0.95rem] ${dark ? "text-white" : "text-ink"}`}>
        Thank you for subscribing. You will hear from Dr. Acharya about new books, events and posts.
      </p>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="relative block flex-1">
          <span className="sr-only">Email address</span>
          <Mail
            size={15}
            className={`pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 ${
              dark ? "text-white/60" : "text-muted"
            }`}
          />
          <input
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className={`w-full border py-2.5 pl-10 pr-3.5 text-[0.95rem] outline-none transition-colors ${
              dark
                ? "border-white/30 bg-white/10 text-white placeholder:text-white/55 focus:border-white"
                : "border-rule bg-white focus:border-brick"
            }`}
          />
        </label>
        {/* honeypot */}
        <input
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          name="company"
        />
        <button
          disabled={state === "busy"}
          className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60 ${
            dark ? "bg-white text-ink hover:bg-[#dcebfa]" : "bg-ink text-paper hover:bg-brick"
          }`}
        >
          {state === "busy" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {error && (
        <p role="alert" className={`mt-2 text-sm ${dark ? "text-[#ffd0c8]" : "text-brick-deep"}`}>
          {error}
        </p>
      )}
    </form>
  );
}
