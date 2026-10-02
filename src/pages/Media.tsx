import { ExternalLink } from "lucide-react";
import { PageHeader, Reveal } from "../components/Section";

const LINKS = [
  {
    label: "Five questions to Tulasi Acharya",
    note: "Pressadda / Janaboli, Kathmandu, Nepal (27 February 2025)",
    url: "https://www.pressadda.com/five-questions-to-tulasi-acharya/",
  },
  {
    label: "Tulasi Acharya | Podcast Episode on RSS.com",
    note: "Dialogues with Creators",
    url: "https://rss.com/podcasts/dialogues-with-creators/2083938/",
  },
];

// [videoId, startSeconds]
const VIDEOS: [string, number?][] = [
  ["GNxT5i73K74"],
  ["Dx-CUHfEiqk", 38],
  ["bdi2bGikukM"],
  ["B1bQiokor-k"],
  ["qNm7weyWZrg"],
  ["FPOOrZv0PP8", 41],
  ["698E4lRb_XA"],
  ["zjvD0DrRGSM"],
  ["_NsvBMQuJG8"],
  ["QBccc42_Of0", 1722],
];

export default function Media() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Interviews & podcasts"
        lede="Press interviews, podcast episodes and video conversations with Dr. Tulasi Acharya."
      />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <ul className="grid gap-4 md:grid-cols-2">
          {LINKS.map((l) => (
            <Reveal key={l.url}>
              <li className="card p-6">
                <p className="label text-brick">{l.note}</p>
                <a
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-[1.1rem] font-medium hover:text-brick"
                >
                  {l.label} <ExternalLink size={14} />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {VIDEOS.map(([id, start], i) => (
            <Reveal key={`${id}-${i}`} delay={0.03 * (i % 4)}>
              <div className="aspect-video w-full overflow-hidden border border-rule bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${id}${start ? `?start=${start}` : ""}`}
                  title={`Tulasi Acharya video ${i + 1}`}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
