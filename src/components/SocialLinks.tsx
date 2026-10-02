import { SOCIALS } from "../data/site";

export default function SocialLinks({ dark = false }: { dark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {SOCIALS.map((s) => (
        <li key={s.label}>
          <a
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={`inline-block rounded-full border px-3.5 py-1.5 text-[0.78rem] transition-colors ${
              dark
                ? "border-white/30 text-white hover:border-white hover:bg-white/10"
                : "border-rule text-ink-soft hover:border-brick hover:text-brick"
            }`}
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
