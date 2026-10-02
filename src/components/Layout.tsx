import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X, Mail, ChevronDown } from "lucide-react";
import { useCart } from "../lib/cart";
import { AUTHOR, DEGREES } from "../data/site";
import { TOPICS } from "../data/blog";
import CartDrawer from "./CartDrawer";
import SubscribeForm from "./SubscribeForm";
import SocialLinks from "./SocialLinks";

type NavItem = { to: string; label: string };

/** Always visible in the top bar. */
const primary: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/books", label: "Bookstore" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

/** Everything else lives under the "More" menu. */
const more: NavItem[] = [
  { to: "/non-fiction", label: "Non-fiction" },
  { to: "/fiction", label: "Fiction" },
  { to: "/poetry", label: "Poetry" },
  { to: "/translation", label: "Translation" },
  { to: "/publications", label: "Publications" },
  { to: "/research", label: "Research & projects" },
  { to: "/events", label: "Events" },
  { to: "/media", label: "Media" },
  { to: "/about", label: "About" },
];

/** Flat list for the mobile menu and the footer. */
const flatNav = [...primary, ...more];

export default function Layout({ children }: { children: React.ReactNode }) {
  const { count, setOpen } = useCart();
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobile(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-rule/80 bg-paper/88 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-center justify-between gap-4 py-3.5">
            <Link to="/" className="group flex items-baseline gap-2.5">
              <span className="display text-[1.35rem] sm:text-[1.55rem] font-semibold tracking-tight">
                Tulasi Acharya
              </span>
              <span className="hidden sm:inline label text-brick/80 pb-0.5">{DEGREES.join(" · ")}</span>
            </Link>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setOpen(true)}
                className="relative flex items-center gap-2 rounded-full border border-rule px-3.5 py-2 text-sm hover:border-brick hover:text-brick transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={16} />
                <span className="hidden sm:inline">Cart</span>
                {count > 0 && (
                  <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-brick px-1 text-[11px] font-semibold text-paper">
                    {count}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobile((v) => !v)}
                className="lg:hidden rounded-full border border-rule p-2.5 hover:border-brick hover:text-brick transition-colors"
                aria-label="Menu"
              >
                {mobile ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 pb-3">
            {primary.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `text-[0.82rem] uppercase tracking-[0.16em] transition-colors ${
                    isActive ? "text-brick" : "text-muted hover:text-ink"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}

            <div className="group relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-[0.82rem] uppercase tracking-[0.16em] transition-colors ${
                  more.some((m) => pathname.startsWith(m.to))
                    ? "text-brick"
                    : "text-muted hover:text-ink"
                }`}
                aria-haspopup="true"
              >
                More
                <ChevronDown size={12} />
              </button>
              <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="min-w-[14rem] border border-rule bg-paper py-2 shadow-lg">
                  {more.map((m) => (
                    <Link
                      key={m.to}
                      to={m.to}
                      className="block whitespace-nowrap px-4 py-2 text-[0.8rem] uppercase tracking-[0.14em] text-ink-soft hover:bg-paper-2 hover:text-brick"
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>

        {mobile && (
          <nav className="lg:hidden border-t border-rule bg-paper-2/95 px-5 py-3">
            <div className="grid grid-cols-2 gap-x-6 gap-y-1">
              {flatNav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  className={({ isActive }) =>
                    `py-2 text-sm uppercase tracking-[0.14em] border-b border-rule/60 ${
                      isActive ? "text-brick" : "text-ink-soft"
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 border-t border-rule bg-paper-2/70">
        <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
          <div>
            <p className="display text-2xl">Tulasi Acharya</p>
            <p className="mt-2 text-sm text-muted italic">{AUTHOR.tagline}</p>
            <p className="mt-4 text-sm text-muted">{AUTHOR.award}</p>
            <p className="label mt-6 text-brick">Subscribe</p>
            <div className="mt-2 max-w-sm">
              <SubscribeForm />
            </div>
          </div>

          <div>
            <p className="label text-brick">Contact</p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={15} className="mt-1 shrink-0 text-muted" />
                <a className="link-underline" href={`mailto:${AUTHOR.email}`}>
                  {AUTHOR.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs text-muted">
              Direct orders are processed securely by PayPal. Payments go to{" "}
              {AUTHOR.email}.
            </p>
          </div>

          <div>
            <p className="label text-brick">Browse</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1 text-sm">
              {flatNav.map((n) => (
                <li key={n.to}>
                  <Link className="link-underline text-ink-soft" to={n.to}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ------------------------------------------- topics & follow us */}
        <div className="border-t border-rule/70 bg-ink text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="label text-[#8dc2f5]">Topics</p>
              <ul className="mt-4 grid grid-cols-2 gap-y-2 text-[0.95rem] sm:grid-cols-3">
                {TOPICS.map((t) => (
                  <li key={t}>
                    <Link
                      to="/blog"
                      className="underline decoration-white/35 underline-offset-4 transition-colors hover:text-[#8dc2f5]"
                    >
                      {t}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-10">
              <p className="label text-[#8dc2f5]">Follow Us</p>
              <div className="mt-4">
                <SocialLinks dark />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-rule/70 py-5 text-center text-xs text-muted">
          © {new Date().getFullYear()} Tulasi Acharya. All rights reserved.
          <span className="mx-2">·</span>
          <Link className="link-underline hover:text-brick" to="/admin">
            Admin login
          </Link>
        </div>
      </footer>

      <CartDrawer />
    </div>
  );
}
