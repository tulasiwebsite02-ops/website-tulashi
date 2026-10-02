import { bySection } from "../data/books";
import BookEntry from "../components/BookEntry";
import { PageHeader } from "../components/Section";

export default function Poetry() {
  return (
    <>
      <PageHeader
        eyebrow="Poetry"
        title="Poems of love, life, and liberty"
        lede="Two collections — one in Nepali, one in English — carrying memory, migration, and the remnants of war."
      />
      <div className="mx-auto max-w-6xl px-5">
        {bySection("poetry").map((b) => (
          <BookEntry key={b.id} book={b} />
        ))}
      </div>
    </>
  );
}
