export const todayISO = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

export const isSafeImageUrl = (url: string) => /^https?:\/\/\S+$/i.test(url.trim());

/** Plain-text summary used on the blog listing cards. */
export function makeExcerpt(body: string, max = 180) {
  const plain = body
    .replace(/^#{1,3}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*]\s+/gm, "")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
  return plain.length > max ? `${plain.slice(0, max).trimEnd()}…` : plain;
}

export function readingTime(body: string) {
  const words = body.trim() ? body.trim().split(/\s+/).length : 0;
  return { words, minutes: Math.max(1, Math.round(words / 200)) };
}
