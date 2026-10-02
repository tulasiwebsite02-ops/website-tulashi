import type { ReactNode } from "react";

/** **bold** and *italic* only — everything else is rendered as plain text (no HTML injection). */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <em key={i}>{part.slice(1, -1)}</em>;
    return part;
  });
}

function lines(block: string): ReactNode[] {
  return block.split("\n").flatMap((ln, i, arr) => {
    const out: ReactNode[] = [...inline(ln)];
    if (i < arr.length - 1) out.push(<br key={`br${i}`} />);
    return out;
  });
}

/**
 * Tiny markdown-lite renderer:
 *   blank line   -> new paragraph
 *   ## Heading   -> section heading
 *   > quote      -> pull quote
 *   - item       -> bullet list
 */
export default function PostBody({ body }: { body: string }) {
  const blocks = body.replace(/\r\n/g, "\n").split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-5 text-[1.05rem] leading-[1.85] text-ink-soft">
      {blocks.map((b, i) => {
        if (/^#{1,3}\s+/.test(b)) {
          return (
            <h2 key={i} className="!mt-9 text-[1.5rem] leading-snug text-ink">
              {inline(b.replace(/^#{1,3}\s+/, ""))}
            </h2>
          );
        }
        if (/^>\s?/.test(b)) {
          return (
            <blockquote key={i} className="border-l-2 border-brick pl-5 italic text-ink">
              {lines(b.replace(/^>\s?/gm, ""))}
            </blockquote>
          );
        }
        if (b.split("\n").every((l) => /^[-*]\s+/.test(l))) {
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-6 marker:text-brick">
              {b.split("\n").map((l, j) => (
                <li key={j}>{inline(l.replace(/^[-*]\s+/, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{lines(b)}</p>;
      })}
    </div>
  );
}
