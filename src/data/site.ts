export const AUTHOR = {
  name: "Tulasi Acharya",
  credential: "PhD, MFA, MA, MAPW, MSW",
  tagline:
    'Author of "Running from the Dreamland," "Sex, Gender, and Disability in Nepal," and "Mochan."',
  award: "Recipient of the International Nepali Literary Society Homanath Subedi Diaspora Best Literary Award",
  email: "tulasi.acharya1@gmail.com",
  links: {
    website: "https://tulasiacharya.wordpress.com/",
    facebook: "https://www.facebook.com/apersonwithbhav",
    x: "https://x.com/tulsirames",
    routledge:
      "https://www.routledge.com/authors/i19199-tulasi-acharya",
    amazon: "https://us.amazon.com/stores/author/B00HKXBT8W/about",
    bookshop: "https://bookshop.org/shop/tulasiacharya",
    goodreads: "https://www.goodreads.com/author/list/7921657.Tulasi_Acharya",
  },
};

/** Shown after the name in the header and on the home page. */
export const DEGREES = ["PhD", "MFA", "MA", "MAPW", "MSW"];

export const LANGUAGES = ["English", "Nepali", "Hindi"];

/** Highlighted on the home page. */
export const HOME_AWARDS: { year: string; title: string; note?: string }[] = [
  {
    year: "2025",
    title: "INLS Homanath Subedi Diaspora Best Literary Award",
    note: "International Nepali Literary Society",
  },
  {
    year: "2026",
    title: "Georgia Independent Author Association Award",
    note: "Memoir category · Like Water on Leaves of Taro",
  },
];

/** Every social / profile link, used in the footer, contact page and home page. */
export const SOCIALS: { label: string; url: string }[] = [
  { label: "Facebook", url: "https://www.facebook.com/apersonwithbhav" },
  { label: "Instagram", url: "https://www.instagram.com/tulasiacharya/" },
  { label: "YouTube", url: "https://www.youtube.com/@tacharya1" },
  { label: "X", url: "https://x.com/tulsirames" },
  { label: "TikTok", url: "https://www.tiktok.com/@tulasiacharya4" },
  { label: "Bluesky", url: "https://bsky.app/profile/tulasiacharya.bsky.social" },
  { label: "Goodreads", url: "https://www.goodreads.com/author/list/7921657.Tulasi_Acharya" },
  { label: "Amazon", url: "https://www.amazon.com/stores/Tulasi-Acharya/author/B00HKXBT8W" },
  { label: "Bookshop.org", url: "https://bookshop.org/shop/tulasiacharya" },
  { label: "Routledge", url: "https://www.routledge.com/authors/i19199-tulasi-acharya" },
  { label: "Blog", url: "https://tulasiacharya.wordpress.com/" },
];

export type Project = {
  id: string;
  title: string;
  org: string;
  status: string;
  role: string;
  summary: string[];
  funder: string;
  funderUrl: string;
  coInvestigators: string[];
  assistants: string[];
  site: string;
  image: string;
  url: string;
  timeline: { when: string; what: string }[];
  media: { label: string; url: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "senior-citizen-care",
    title: "Senior Citizen Care (SCC) Project",
    org: "Nexus Institute of Research and Innovation (NIRI), Nepal",
    status: "Ongoing",
    role: "Principal Investigator",
    summary: [
      "The Senior Citizen Care project tests a practical way to improve the well-being of older people in Nepal by working with the local government and with Female Community Health Volunteers (FCHVs).",
      "The team surveys every resident over 65 in Lo Manthang Rural Municipality, Upper Mustang, to measure frailty and disability. The FCHVs then receive specialised training in elderly care, so that support is affordable, timely and fits local culture.",
    ],
    funder: "Kalasha Foundation, Switzerland",
    funderUrl: "https://kalasha.ch/english/",
    coInvestigators: [
      "Dr. Puspa Mani Kharal",
      "Mr. Suraj Parajuli",
      "Dr. Puspa Raj Pant",
      "Dr. Hem Raj Dhakal",
      "Dr. Serena Hartmann",
    ],
    assistants: ["Ms. Nima Chhetin Gurun", "Ms. Karsang Chime Gurung"],
    site: "Lo Manthang Rural Municipality, Upper Mustang, Nepal (3,800 m)",
    image: "https://nirinepal.org/wp-content/uploads/2025/04/SCC.jpeg",
    url: "https://nirinepal.org/senior-citizen-care-scc-project/",
    timeline: [
      { when: "Jan 2025", what: "Collaboration agreement signed with Kalasha Foundation" },
      { when: "Feb 2025", what: "Municipality approval and research tools prepared" },
      { when: "Mar 2025", what: "Nepal Health Research Council approval; stakeholder meeting and questionnaire pretest" },
      { when: "Apr 2025", what: "Social Welfare Council approval; research assistants recruited" },
      { when: "May 2025", what: "Training for FCHVs and research assistants in Lo Manthang" },
      { when: "Jun 2025", what: "Data collection under way" },
    ],
    media: [
      {
        label: "Business 360: NIRI conducts senior citizen care training in Lomanthang",
        url: "https://www.b360nepal.com/detail/25242/niri-conducts-senior-citizen-care-training-for-health-volunteers-in-lomanthang-upper-mustang",
      },
      {
        label: "Arthik Awaj: लोमान्थाङमा स्वयंसेविकाहरूलाई जेष्ठ नागरिक स्याहार तालिम",
        url: "https://arthikawaj.com/senior-citizens-in-lomanthang/",
      },
      {
        label: "Samaya Samachar (Facebook)",
        url: "https://www.facebook.com/share/p/16WYxSvqbf/",
      },
    ],
  },
];

export const BIO: string[] = [
  "Tulasi Acharya, PhD, originally from Nepal, began his American journey in 2008. He holds a Master's in Professional Writing from Kennesaw State University, a Master's in Women's Studies, and a PhD in Public Administration from Florida Atlantic University. He also earned an MFA in Creative Writing from Georgia College. Dr. Acharya currently teaches English at South Georgia State College.",
  "An accomplished multilingual author who also knows Hindi alongside English and Nepali, Dr. Acharya has published over a dozen books across multiple genres. His debut English novel, Running from the Dreamland, received critical acclaim, and his bestselling Nepali novels, Mochan and Swapnabhumi, reflect his literary versatility in both Nepali and English. His academic and creative work has been published by leading publishers, including Routledge and Bloomsbury Academic.",
  "Dr. Acharya's short stories have earned honors such as the Certificate of Excellence from the University of New Hampshire and have appeared in numerous literary journals and newspapers, including The Kathmandu Post, The Himalayan Times, The Rising Nepal, and the MSU Roadrunner Review. In recognition of his literary achievements in the global Nepali community, he received the INLS (International Nepali Literary Society) Homanath Subedi Diaspora Best Literary Award.",
  "In his most recent book titled, Like Water on Leaves of Taro, Acharya extends an invitation to readers to witness mourning as both personal and communal, grounded in ancient tradition yet deeply relevant in today's fractured world.",
  "His writing is driven by an unwavering passion for storytelling, cultural connection, and the written word.",
];

export const TESTIMONIALS = [
  {
    text: "Customers find Acharya's content interesting and heart-touching. They also appreciate the plot, which is descriptive, well-plotted, and wonderful. Readers say the writing is amazing and gets their attention from the beginning. They find the characters interesting and their dialogue interesting. Customers say the book explores human emotions and adapting to a new society beautifully.",
    note: "AI-generated from the text of customer reviews",
    source: "AMAZON",
    url: "https://www.amazon.com/Running-Dreamland-Tulasi-Acharya/dp/0988733293",
  },
  {
    text: "Tulasi's poems ooze out of the poet's experience and perception looking at people and the world around him. Most of the poems are on the theme of love, life, and liberty. They cover a decade long time period in the Himalayan country of Nepal that was affected by People's war. All poems carry emotions, human sentiments, and remnants of war, poverty, and loss of lives. Brilliant poetry, strong images, very poetic!",
    source: "Kay Traille, author of Hearing Their Voices.",
    url: "https://www.amazon.com/Hearing-their-Voices-Teaching-Students/dp/1475855559",
  },
  {
    text: "Tulasi's novel \u201cRunning from the Dreamland\u201d sees America through the eyes of a visiting student from Kathmandu as he struggles to make a life in his new land. . . . Importantly, this story gives us insight into the immigrant experience and the difficulties and joys of adjusting to a new culture.",
    source: "Anthony grooms, author of Trouble No More Bombinham",
    url: "https://www.amazon.com/Anthony-Grooms/e/B001H6KHKO",
  },
];

const WP = "https://tulasiacharya.wordpress.com/wp-content/uploads";

export type Event = {
  date: string;
  text: string;
  images: string[];
  link?: { label: string; url: string };
};

export const EVENTS: Event[] = [
  {
    date: "September 12, 2026 · Valdosta, GA",
    text: 'Dr. Tulasi Acharya signs his books \u201cLike Water on Leaves of Taro\u201d and \u201cRunning from the Dreamland\u201d at the event called the 2026 Turner Center Beyond the Book \u2013 A Literary Event that was held in the Turner Center Galleries, 527 N. Patterson St. in Valdosta. Dated Sept 12th, 2026. \u201c',
    images: [
      `${WP}/2026/09/image-1.png`,
      `${WP}/2026/09/image-3.png`,
      `${WP}/2026/09/image-2.png`,
      `${WP}/2026/09/image-4.png`,
      `${WP}/2026/09/image-5.png`,
      `${WP}/2026/09/image-6.png`,
    ],
  },
  {
    date: "May 2, 2026 · Atlanta, GA",
    text: "Tulasi Acharya offered talks on two topics at the Atlanta Writers Conference in Atlanta: Research in Memoir and Writing Across languages and Cultures. The discussion mainly focused on how research helps strengthen writing in memoir and how it authenticates and deepens human emotions and narrative voice and expands human memory. Similarly, the topic on writing across languages and cultures brought up Dr. Acharya's own writing experiences prompting the readers and writers in the hall to share their own research and writing experiences and challenges. The discussion touched on the risks and challenges of translating writing into a second language. The discussion was insightful and intriguing. The event was organized on the 2nd of May, 2026 by Atlanta Writers Club.",
    images: [`${WP}/2026/05/6-1.jpg`],
  },
  {
    date: "March 14, 2026 · West Palm Beach, FL",
    text: "Tulasi Acharya read from his book \u201cLike Water on Leaves of Taro\u201d followed by questions answers at the Wellington Library, West Palm Beach, Florida on the 14th of March 2026. Around twenty distinguished guests from Fort Myers to West Palm Beach participated in this talk session followed by the book signing ceremony.",
    images: [`${WP}/2026/03/image-5.png`],
  },
  {
    date: "March 4–8, 2026 · Baltimore, MD",
    text: "From the AWP conference in March4-8, 2026 in Baltimore. Author Dr. Tulasi Acharya is signing his book Like Water on Leaves of Taro: A Himalayan Memoir.",
    images: [`${WP}/2026/03/image-4.png`],
  },
  {
    date: "June 21, 2025 · Kennesaw, GA",
    text: "Reading and Signing Book \u201cRunning from the Dreamland\u201d on the 21st of June 2025 at 2nd & Charles Independent Author Book Fair, Kennesaw, Georgia.",
    images: [`${WP}/2025/10/1-1.jpg`],
  },
  {
    date: "March 22, 2025 · Atlanta, GA",
    text: "Speaking at the Atlanta self-publishing conference dated March 22, 2025",
    images: [
      `${WP}/2025/03/tulasi-image1-1.jpg`,
      `${WP}/2025/03/tulasi-image5.jpg`,
      `${WP}/2025/03/tulasi-image4.jpg`,
      `${WP}/2025/03/tulasi-image3.jpg`,
      `${WP}/2025/03/tulasi-image2.jpg`,
    ],
    link: {
      label: "atlantaselfpublishingconference.com",
      url: "https://www.atlantaselfpublishingconference.com/",
    },
  },
  {
    date: "April 2024 · Author encounters",
    text: "With Chika Unigwe (author of On Black Sisters’ Street), Anthony Grooms (author of Bombingham) and Poet Laureate Billy Collins (author of Aimless Love).",
    images: [
      `${WP}/2024/04/with-chika-unigwe_author-of-on-black-sisters-street-1.jpg`,
      `${WP}/2024/04/with-anthony-grooms_-author-of-bombingham.jpg`,
      `${WP}/2024/04/with-poet-laurate-billy-collins.jpg`,
    ],
  },
  {
    date: "April 2024 · Book signing",
    text: "Book signing event photographs.",
    images: [
      `${WP}/2024/04/book-signing-event-3.png`,
      `${WP}/2024/04/1.jpg`,
      `${WP}/2024/04/2.jpg`,
      `${WP}/2024/04/3.jpg`,
    ],
  },
  {
    date: "January 20 · Acworth, GA",
    text: "Acworth Bookstore is proud to host a book signing with Dr Tulasi Acharya on Saturday January 20th from 1-5 pm. Tulasi Acharya, a resident of Georgia, is a dedicated writer and professor. With a passion for storytelling, Tulasi has authored over a dozen books in both Nepali and English, spanning across various genres in both fiction and nonfiction. He will be signing his current title, \u201cRunning from the Dreamland\u201d, set in Georgia.",
    images: [`${WP}/2024/03/image.png`],
  },
];

export const SERVICES_INTRO =
  "If you need any help with Professional, Business, and Technical Writing, please contact here. We will guide, advise, and mentor you. Do you need to write a resume, or a cover letter, or to prepare and organize a report effectively? Or are you looking  for one or more of the services below? Please contact us.  Or pay the consultation fee $20 via PayPal below.";

export const SERVICES: string[] = [
  "write a memo letter, a business letter, query letter",
  "write for nonprofit or business organizations or for the press: short profile, short feature article, press release, fact kit, public service announcement, news release",
  "pitch stories, conduct interviews, write profiles",
  "Write an analysis paper",
  "know rhetorical analysis—ethos, pathos, logos",
  "refine and edit work, format, and organize",
  "prepare a portfolio",
  "analyze voice, tone, language, and format (e.g., essay, autobiography, report, editorial, case study, inquiry, fiction and non-fiction and research)",
  "write a long report or a proposal or business proposal that has a clear argument",
  "create brochures",
  "write position papers",
  "request for proposals (RFPs)",
  "write a grant proposal",
  "write blogs",
  "write academic papers",
  "creative writing",
  "technical and business topics in literature",
];

export const AWARDS: string[] = [
  "2026 Georgia Independent Author Association Award",
  "2026 Georgia Author of the Year (only nominated for the book \u201cLike Water on Leaves of Taro)",
  "2025 INLS Best Literary Diaspora Award ($1000)",
  "2024 Research Award $1000 (South Georgia State College)",
  "\u201cOne of the Best Communication, Journalism and Technical Writing Books (2023)\u201d\u2014 Book Authority)",
  "2022 INLS-Kenya Literary Contest Fellowship in Partnership with Fence and the DiTrapano Foundation for Literature and Arts",
  "2019 Excellent Teaching Award. University of New Hampshire, NH.",
  "2019 Excellent Writing Award. University of New Hampshire, NH.",
];
