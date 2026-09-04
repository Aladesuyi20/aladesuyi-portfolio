// This is the file to edit for your Work section and case-study pages.
//
// Each work item becomes one card on the homepage AND its own case-study
// page at /work/<slug>. Fields marked "WRITE THIS YOURSELF" are placeholders —
// replace them with your own words; that's what makes a case study
// actually valuable to a reader instead of generic filler.
//
// Leave "live" or "repo" as "" (empty string) if you don't have that link
// yet — the corresponding button just won't show up. Fill it in later and
// it appears automatically, no other code changes needed.

export type WorkItem = {
  slug: string; // used in the URL, e.g. /work/harvesthub — no spaces, lowercase
  category: "Data Analytics" | "Frontend";
  title: string;
  summary: string; // one line shown on the card
  tags: string[];
  live: string;
  repo: string;
  problem: string; // WRITE THIS YOURSELF
  approach: string; // WRITE THIS YOURSELF
  builtWith: string[];
  challenges: string[]; // WRITE THIS YOURSELF — a few bullet points
  whatLearned: string; // WRITE THIS YOURSELF
};

export const workItems: WorkItem[] = [
  {
    slug: "premier-league-analytics-dashboard",
    category: "Data Analytics",
    title: "Premier League Analytics Dashboard",
    summary:
      "Football analytics dashboard: team performance, player stats, and league trends via interactive visualizations.",
    tags: ["Python", "SQL", "Power BI"],
    live: "",
    repo: "",
    problem: "WRITE THIS YOURSELF — what problem was this dashboard solving, and for whom?",
    approach: "WRITE THIS YOURSELF — how did you go about building it, step by step?",
    builtWith: ["Python", "SQL", "Power BI"],
    challenges: ["WRITE THIS YOURSELF — a real obstacle you ran into"],
    whatLearned: "WRITE THIS YOURSELF — what changed in how you work because of this project?",
  },
  {
    slug: "sales-performance-dashboard",
    category: "Data Analytics",
    title: "Sales Performance Dashboard",
    summary:
      "Interactive Power BI dashboard monitoring KPIs, sales trends, and business performance in real time.",
    tags: ["Power BI", "Excel"],
    live: "",
    repo: "",
    problem: "WRITE THIS YOURSELF",
    approach: "WRITE THIS YOURSELF",
    builtWith: ["Power BI", "Excel"],
    challenges: ["WRITE THIS YOURSELF"],
    whatLearned: "WRITE THIS YOURSELF",
  },
  {
    slug: "harvesthub",
    category: "Frontend",
    title: "HarvestHub",
    summary: "Agri-tech marketplace interface connecting farmers and buyers.",
    tags: ["React", "HTML", "CSS", "JavaScript","Tailwind CSS","TypeScript"],
    live: "",
    repo: "",
    problem:
      "WRITE THIS YOURSELF — e.g. small agricultural businesses need a simple way to showcase and sell products online.",
    approach:
      "WRITE THIS YOURSELF — e.g. designed a responsive marketplace interface with product categories, filtering, product cards and a dynamic hero section.",
    builtWith: ["React", "HTML", "CSS", "JavaScript"],
    challenges: [
      "WRITE THIS YOURSELF — e.g. managing multiple interactive components",
      "WRITE THIS YOURSELF — e.g. responsive layouts",
      "WRITE THIS YOURSELF — e.g. JavaScript interaction conflicts",
    ],
    whatLearned: "WRITE THIS YOURSELF",
  },
  {
    slug: "pulsegym",
    category: "Frontend",
    title: "PulseGym",
    summary: "Responsive gym membership platform with class schedules and member accounts.",
    tags: ["React", "TanStack Start", "Supabase", "Tailwind CSS", "TypeScript"],
    live: "https://www.pulsegym.online/",
    repo: "https://github.com/Aladesuyi20/pulsegym-fitness-app",
    problem:  "Many local gyms struggle to present their services, membership options, and training programs clearly online. PulseGym was built to give potential members a simple way to understand what the gym offers and take the next step.",
    approach:  "I built a responsive website with a clean, fitness-focused interface, organizing the key services, membership information, and calls-to-action into an easy-to-navigate experience.",
    builtWith: ["React", "TanStack Start", "Supabase", "Tailwind CSS"],
    challenges:  ["Keeping the design visually strong without making it feel cluttered", "Making the layout work well across different screen sizes", "Organizing multiple gym services and sections into a simple user flow"],
    whatLearned:  "This project taught me to think more about the user journey instead of just how the interface looks. I also got better at keeping a design consistent while building responsive layouts.",
  },
  {
    slug: "personal-portfolio",
    category: "Frontend",
    title: "Personal Portfolio",
    summary: "This site — presenting my projects, skills, and professional profile.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    live: "", // fill in once deployed
    repo: "https://github.com/Aladesuyi20/aladesuyi-portfolio",
    problem:   "I needed a professional online space to showcase my projects, skills, and experience instead of relying only on a CV or GitHub. The portfolio was built to make it easier for recruiters and potential clients to understand what I can do.",
    approach:   "I built a responsive React portfolio with a clean, modern interface, organizing my work, skills, experience, and contact information into a simple user journey.",
    builtWith: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    challenges: ["Finding a balance between a modern design and keeping the portfolio easy to navigate", "Making the different sections feel consistent across screen sizes", "Presenting both my data and web development work without making the portfolio feel crowded"],
    whatLearned:  "I learned that a portfolio is more than just showing projects; it has to tell a clear story about what I can offer. It also made me more intentional about responsive design and how I present my work.",
  },
];

export const workCategories = ["Data Analytics", "Frontend"] as const;
