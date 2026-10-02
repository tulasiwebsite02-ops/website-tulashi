import { bySection } from "../data/books";
import BookEntry from "../components/BookEntry";
import { PageHeader, Reveal } from "../components/Section";

export default function NonFiction() {
  const list = bySection("nonfiction");
  return (
    <>
      <PageHeader
        eyebrow="Non-fiction"
        title="Memoir, essays, and scholarship"
        lede="Ten works of non-fiction in English and Nepali — a Himalayan memoir of grief and devotion, studies of sex, gender and disability in South Asia, collections of newspaper writing, and reference books on professional writing."
      />

      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 border-b border-rule py-6 text-sm">
            {list.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className={`text-muted transition-colors hover:text-brick ${
                  b.language === "Nepali" ? "deva" : ""
                }`}
              >
                {b.title}
              </a>
            ))}
          </nav>
        </Reveal>

        {list.map((b) => (
          <BookEntry key={b.id} book={b} />
        ))}
      </div>
    </>
  );
}
