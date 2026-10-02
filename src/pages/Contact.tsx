import { useState } from "react";
import {
  BookOpen,
  Mail,
  Mic,
  PenLine,
  Send,
} from "lucide-react";
import { AUTHOR_PHOTO } from "../data/books";
import { AUTHOR } from "../data/site";
import { PageHeader, Reveal } from "../components/Section";
import SocialLinks from "../components/SocialLinks";
import { payFixed } from "../lib/cart";

const REASONS = [
  {
    icon: Mic,
    title: "Readings & speaking",
    body: "Invite Dr. Acharya to read, sit on a panel, or lead a workshop for your festival, library, club or campus.",
  },
  {
    icon: PenLine,
    title: "Writing consultation",
    body: "Professional, business and technical writing help \u2014 resumes, reports, proposals, grants, editing and mentoring.",
  },
  {
    icon: BookOpen,
    title: "Book orders & review copies",
    body: "Signed copies, bulk orders for bookstores and libraries, course adoption and press review requests.",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Readings & speaking");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${AUTHOR.email}?subject=${encodeURIComponent(
    `${subject} — message from ${name || "the website"}`,
  )}&body=${encodeURIComponent(
    `${message}\n\n—\nName: ${name}\nEmail: ${email}`,
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch!"
        lede="For readings, interviews, writing consultation, signed books or academic collaboration — Dr. Acharya answers every message personally."
      />

      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          {/* ------------------------------------------------------------ form */}
          <Reveal>
            <form
              className="card p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              }}
            >
              <p className="label text-brick">Send a message</p>
              <h2 className="mt-2 text-[1.6rem]">Write to the author</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="label text-muted">Your name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1.5 w-full border border-rule bg-white px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-brick"
                    placeholder="Full name"
                  />
                </label>
                <label className="block">
                  <span className="label text-muted">Your email</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5 w-full border border-rule bg-white px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-brick"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="label text-muted">Subject</span>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="mt-1.5 w-full border border-rule bg-white px-3.5 py-2.5 text-[0.95rem] outline-none transition-colors focus:border-brick"
                >
                  <option>Readings &amp; speaking</option>
                  <option>Writing consultation</option>
                  <option>Book order or signed copy</option>
                  <option>Bulk / review copies</option>
                  <option>Media &amp; interviews</option>
                  <option>Academic collaboration</option>
                  <option>Something else</option>
                </select>
              </label>

              <label className="mt-4 block">
                <span className="label text-muted">Message</span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full resize-y border border-rule bg-white px-3.5 py-2.5 text-[0.95rem] leading-relaxed outline-none transition-colors focus:border-brick"
                  placeholder="How can Dr. Acharya help?"
                />
              </label>

              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-brick"
              >
                <Send size={15} /> Send message
              </button>
              <p className="mt-3 text-xs text-muted">
                This opens your email app with the message ready to send to{" "}
                {AUTHOR.email}.
              </p>
            </form>
          </Reveal>

          {/* --------------------------------------------------------- details */}
          <div className="space-y-6">
            <Reveal delay={0.06}>
              <img
                src={AUTHOR_PHOTO}
                alt="Tulasi Acharya — Author. Professor. Researcher."
                className="w-full rounded-xl border border-rule bg-white object-contain p-2"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-6">
                <p className="label text-brick">Direct</p>
                <ul className="mt-3 space-y-2.5 text-sm">
                  <li className="flex items-start gap-2.5">
                    <Mail size={15} className="mt-1 shrink-0 text-muted" />
                    <a className="link-underline" href={`mailto:${AUTHOR.email}`}>
                      {AUTHOR.email}
                    </a>
                  </li>
                </ul>
                <div className="mt-5 border-t border-rule pt-4">
                  <SocialLinks />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="grid gap-3">
                {REASONS.map((r) => (
                  <div key={r.title} className="card flex gap-3 p-5">
                    <r.icon size={18} className="mt-0.5 shrink-0 text-brick" />
                    <div>
                      <p className="text-[0.95rem]">{r.title}</p>
                      <p className="text-[0.84rem] leading-relaxed text-muted">{r.body}</p>
                    </div>
                  </div>
                ))}
                <div className="card flex flex-wrap items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-[0.95rem]">Writing consultation fee</p>
                    <p className="text-[0.84rem] text-muted">$20.00, paid securely through PayPal</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => payFixed("Writing service consultation fee", 20)}
                    className="rounded-full bg-[#0070ba] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#005b96]"
                  >
                    Pay $20 with PayPal
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
