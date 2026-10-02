import { bySection } from "../data/books";
import BookEntry from "../components/BookEntry";
import { PageHeader } from "../components/Section";

export default function Translation() {
  return (
    <>
      <PageHeader
        eyebrow="Translation"
        title="Carrying Shakespeare into Nepali"
        lede="Seven of Shakespeare's stories, as retold by Charles and Mary Lamb, translated for Nepali readers."
      />
      <div className="mx-auto max-w-6xl px-5">
        {bySection("translation").map((b) => (
          <BookEntry key={b.id} book={b} />
        ))}
      </div>
    </>
  );
}
