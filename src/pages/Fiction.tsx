import { bySection } from "../data/books";
import BookEntry from "../components/BookEntry";
import { PageHeader } from "../components/Section";

export default function Fiction() {
  return (
    <>
      <PageHeader
        eyebrow="Fiction"
        title="Novels between two continents"
        lede="Immigrant longing, love and its undoing — three novels written in English and Nepali, set between Kathmandu and the American South."
      />
      <div className="mx-auto max-w-6xl px-5">
        {bySection("fiction").map((b) => (
          <BookEntry key={b.id} book={b} />
        ))}
      </div>
    </>
  );
}
