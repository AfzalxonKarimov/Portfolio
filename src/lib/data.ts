// ---------------------------------------------------------------------------
// Central content store for the portfolio.
// Keeping copy + structured data here keeps components presentational and
// makes it trivial to update information without touching markup.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Afzalxon",
  fullTagline: "Building software that helps people become more disciplined.",
  location: "Uzbekistan",
  status: "Gap year \u00b7 Preparing for university",
  telegram: "https://t.me/afzalto",
  github: "https://github.com/AfzalxonKarimov",
  linkedin: "https://www.linkedin.com/in/afzalxon-karimov",
  resumeHref: "/resume.pdf",
};

export const stats = [
  { label: "GPA", value: "4.0", suffix: "/4.0", detail: "Unweighted" },
  { label: "SAT", value: "1420", suffix: "", detail: "Superscore" },
  { label: "IELTS", value: "7.5", suffix: "/9", detail: "Academic" },
] as const;

export const about = {
  eyebrow: "About",
  heading: "From curiosity to craft.",
  paragraphs: [
    "I'm Afzalxon, a gap-year student from Uzbekistan preparing to study Computer Science abroad. Instead of treating this year as a pause, I've spent it building — first small scripts, then a Telegram bot, and now a full mobile app.",
    "The honest starting point was a personal problem: I'm consistent for a while, then I'm not, and generic habit trackers made that worse by wiping out my streak the moment I slipped. That frustration is what led to TheAnchor — an app built around recovering momentum instead of punishing a missed day.",
    "Before that, I built a Telegram bot for IELTS students while studying for the exam myself, because I needed focused daily practice more than another app to install. Both projects came from the same place: build the tool I actually needed, then see if it helps anyone else.",
    "Right now I'm splitting my time three ways — building TheAnchor, preparing my Computer Science university applications, and working through data structures, algorithms, and the fundamentals of AI on my own.",
  ],
} as const;

export type CurrentFocusItem = {
  title: string;
  description: string;
};

export const currentFocus: CurrentFocusItem[] = [
  {
    title: "Building TheAnchor",
    description:
      "Designing and building a recovery-first habit app end to end — product decisions, mobile engineering, and the backend behind it.",
  },
  {
    title: "University applications",
    description:
      "Preparing my applications to study Computer Science abroad, alongside the projects on this page.",
  },
  {
    title: "DSA & AI",
    description:
      "Working through data structures, algorithms, and the fundamentals of AI on my own, outside of any coursework.",
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  featured: boolean;
  role: string;
  status: string;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
  gradient: string; // Tailwind gradient classes used for the card artwork
};

export const projects: Project[] = [
  {
    slug: "the-anchor",
    name: "TheAnchor",
    tagline: "Recovery-first habit tracking for the days motivation runs out.",
    description:
      "Most habit trackers punish a missed day by wiping your streak back to zero — right when someone needs support, not guilt. TheAnchor is built around the opposite idea: you pick daily routines (\"Anchors\") like working out, reading, journaling or coding, and instead of a streak counter, the app tracks a Momentum score that dips when you slip and is designed to climb back up rather than reset. It's still under active development — the core loop of choosing anchors, checking in, and watching momentum recover is working, and I'm continuing to build it out.",
    featured: true,
    role: "Designer & Full-stack developer",
    status: "In active development",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL"],
    features: [
      "Anchor routines — workout, meditate, read, journal, code, walk, or a custom one — each with a day and time target",
      "A Momentum score (0–100) that dips after a missed day and is built to recover, not reset to zero",
      "A separate Recovery score that measures how quickly you bounce back after a slip",
      "A 6-month consistency calendar and an achievements list to make progress visible",
      "Account-wide XP and rank progression, starting from Spark",
      "Google sign-in, with data export and appearance settings",
    ],
    github: "https://github.com/AfzalxonKarimov",
    demo: "#",
    gradient: "from-accent/25 via-recover/10 to-transparent",
  },
  {
    slug: "ielts-telegram-bot",
    name: "IELTS Prep Bot",
    tagline: "A Telegram bot that gives IELTS students focused daily practice.",
    description:
      "A Telegram bot built for IELTS students preparing for the exam I was preparing for myself. It delivers structured practice \u2014 vocabulary, writing prompts, and listening drills \u2014 directly in a chat interface students already check every day, removing the friction of a separate app or website.",
    featured: false,
    role: "Solo developer",
    status: "Shipped",
    stack: ["Python", "Telegram Bot API", "PostgreSQL"],
    features: [
      "Daily practice prompts across reading, writing and listening",
      "Progress tracking per student inside the chat",
      "Zero-install distribution through Telegram",
    ],
    github: "https://github.com/AfzalxonKarimov",
    gradient: "from-recover/20 via-accent/10 to-transparent",
  },
];

export type TechItem = {
  name: string;
  category: "Frontend" | "Mobile" | "Backend" | "Tooling";
};

export const techStack: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Expo", category: "Mobile" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub", category: "Tooling" },
  { name: "VS Code", category: "Tooling" },
];

export type JourneyItem = {
  date: string;
  title: string;
  description: string;
  active?: boolean;
};

export const journey: JourneyItem[] = [
  {
    date: "Year 1",
    title: "Started programming",
    description:
      "Picked up my first language out of curiosity, not obligation \u2014 and kept going long after the tutorial ended.",
  },
  {
    date: "Year 2",
    title: "Built the IELTS Telegram bot",
    description:
      "Shipped my first real product for real users: a Telegram bot that helped fellow students practice for the exam I was studying for.",
  },
  {
    date: "Now",
    title: "Building TheAnchor",
    description:
      "Designing and building a cross-platform habit app end to end \u2014 product thinking, mobile engineering, and a real backend.",
    active: true,
  },
  {
    date: "Next",
    title: "Preparing for university",
    description:
      "Applying to study Computer Science abroad, with a portfolio of shipped work instead of just a transcript.",
  },
];

export const contactLinks = [
  { label: "Telegram", value: "@afzalto", href: profile.telegram },
  { label: "GitHub", value: "AfzalxonKarimov", href: profile.github },
  { label: "LinkedIn", value: "afzalxon-karimov", href: profile.linkedin },
] as const;
