import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Quote } from "lucide-react";
import { AUTHOR_PHOTO, findBook } from "../data/books";
import { DEGREES, EVENTS, HOME_AWARDS, LANGUAGES, TESTIMONIALS } from "../data/site";
import { AddToCart } from "../components/BookCard";
import { Reveal } from "../components/Section";
import SubscribeForm from "../components/SubscribeForm";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  const memoir = findBook("like-water-on-leaves-of-taro")!;
  const shelf = [
    "running-from-the-dreamland",
    "sex-desire-and-taboo-in-south-asia",
    "mochan",
    "sex-gender-and-disability-in-nepal",
    "dinbhari-pani-parirahanchha",
    "swapnabhumi",
  ]
    .map((id) => findBook(id)!)
    .filter(Boolean);

  const event = EVENTS[0];

  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden bg-[linear-gradient(160deg,#0a1f3c_0%,#123e73_46%,#1257a3_100%)] text-white">
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="label text-[#8dc2f5]"
              >
                {DEGREES.join(" · ")}
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.07 }}
                className="mt-4"
              >
                <span className="block text-[2.7rem] leading-[0.95] sm:text-[4.2rem]">
                  Tulasi Acharya
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                className="mt-5 text-[0.95rem] uppercase tracking-[0.18em] text-[#c6ddf2]"
              >
                Novelist · Memoirist · Poet · Professor
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24 }}
                className="mt-6 max-w-xl text-[1.1rem] leading-[1.8] text-[#e3eef9]"
              >
                Scholar, university professor and author of over a dozen books of
                fiction, non-fiction and poetry.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link
                  to="/books"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-lg shadow-[#03142b]/30 transition-transform hover:-translate-y-0.5"
                >
                  Buy the books <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
                >
                  <BookOpen size={16} /> About the author
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md"
            >
              <img
                src={AUTHOR_PHOTO}
                alt="Tulasi Acharya — Author. Professor. Researcher."
                className="w-full rounded-xl bg-white object-contain p-2 shadow-[0_34px_70px_-32px_rgba(3,20,43,0.95)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- awards + at a glance */}
      <section className="border-b border-rule bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-4 md:grid-cols-2">
            {HOME_AWARDS.map((a) => (
              <div key={a.title} className="flex items-start gap-4 border border-rule bg-paper-2/40 p-5">
                <Award size={22} className="mt-0.5 shrink-0 text-saffron" />
                <div>
                  <p className="label text-brick">{a.year}</p>
                  <p className="mt-1 text-[1.02rem] leading-snug">{a.title}</p>
                  {a.note && <p className="mt-1 text-sm text-muted">{a.note}</p>}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[0.82rem] uppercase tracking-[0.14em] text-muted">
            16 books · 500+ articles · {LANGUAGES.join(", ")}
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------- featured book */}
      <section className="bg-paper-2/45">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <Reveal>
            <img
              src={memoir.cover}
              alt="Like Water on Leaves of Taro cover"
              className="book-shadow mx-auto w-52 md:w-full"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label text-brick">New · Memoir</p>
            <h2 className="mt-3 text-[2rem] leading-tight sm:text-[2.5rem]">
              Like Water on Leaves of Taro
            </h2>
            <p className="mt-1 italic text-muted">{memoir.subtitle}</p>
            <p className="mt-5 text-[1.02rem] leading-[1.9] text-ink-soft">{memoir.paragraphs[0]}</p>
            <blockquote className="mt-6 border-l-2 border-brick/45 pl-5">
              <p className="italic text-ink-soft">
                “His prose is mesmerizing—soft, lyrical, and deeply affecting.”
              </p>
              <cite className="mt-1 block text-xs not-italic text-muted">— The Book Life Prize</cite>
            </blockquote>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <AddToCart book={memoir} />
              <Link
                to="/non-fiction"
                className="text-sm uppercase tracking-[0.15em] text-brick hover:text-brick-deep"
              >
                Read more →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------- the shelf */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[1.9rem] sm:text-[2.3rem]">Books in English and Nepali</h2>
            <Link
              to="/books"
              className="text-sm uppercase tracking-[0.15em] text-brick hover:text-brick-deep"
            >
              All titles →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {shelf.map((b, i) => (
            <Reveal key={b.id} delay={i * 0.05}>
              <Link to={`/${b.section === "nonfiction" ? "non-fiction" : b.section}#${b.id}`}>
                <img
                  src={b.cover}
                  alt={b.title}
                  loading="lazy"
                  className="book-shadow aspect-[2/3] w-full object-cover transition-transform duration-500 hover:-translate-y-1.5"
                />
                <p className={`mt-3 text-[0.86rem] leading-snug ${b.language === "Nepali" ? "deva" : ""}`}>
                  {b.title}
                </p>
                <p className="text-xs text-muted">${b.price.toFixed(2)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ what people say */}
      <section className="border-y border-rule bg-paper-2/45">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Reveal>
            <h2 className="text-center text-[1.9rem] sm:text-[2.3rem]">What readers say</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="card h-full p-6">
                  <Quote size={20} className="text-saffron" />
                  <blockquote className="mt-3 line-clamp-6 text-[0.93rem] italic leading-[1.8] text-ink-soft">
                    {t.text}
                  </blockquote>
                  <figcaption className="mt-3 text-xs text-muted">
                    <a href={t.url} target="_blank" rel="noreferrer" className="link-underline">
                      {t.source}
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ subscribe */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-[1.7rem] sm:text-[2rem]">Stay in touch</h2>
            <p className="mt-2 text-[#c6ddf2]">
              Get news of new books, readings and blog posts from Dr. Acharya.
            </p>
          </div>
          <SubscribeForm dark />
        </div>
      </section>

      {/* -------------------------------------------------------- latest event */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <p className="label text-brick">Latest event</p>
            <h2 className="mt-3 text-[1.7rem] leading-tight sm:text-[2rem]">{event.date}</h2>
            <p className="mt-4 line-clamp-5 text-[1rem] leading-[1.85] text-ink-soft">{event.text}</p>
            <Link
              to="/events"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-rule px-5 py-2.5 text-sm hover:border-brick hover:text-brick"
            >
              All events <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={event.images[0]}
              alt="Latest event"
              loading="lazy"
              className="max-h-80 w-full border border-rule object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------------- follow */}
      <section className="border-t border-rule bg-paper-2/45">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center">
          <p className="label text-brick">Follow Dr. Acharya</p>
          <div className="mt-4 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </section>
    </>
  );
}
