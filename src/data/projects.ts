// Add or edit projects here. For each project:
//   - "live"  = link to the live/deployed site (leave as "" if none yet)
//   - "repo"  = link to the GitHub repo (leave as "" if none yet)
// If either is left empty, that button simply won't be shown on the card.

export type Project = {
  title: string;
  description: string;
  tags: string[];
  live: string;
  repo: string;
};

export const projects: Project[] = [
  {
    title: "Premier League Analytics Dashboard",
    description:
      "Football analytics dashboard: team performance, player stats, and league trends via interactive visualizations.",
    tags: ["Python", "SQL", "Power BI"],
    live: "",
    repo: "",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive Power BI dashboard monitoring KPIs, sales trends, and business performance in real time.",
    tags: ["Power BI", "Excel"],
    live: "",
    repo: "",
  },
  {
    title: "HarvestHub Website",
    description:
      "A responsive agri-tech marketplace connecting farmers and buyers through a modern web platform.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    live: "",
    repo: "",
  },
  {
    title: "Pulse Gym Website",
    description:
      "Modern fitness website with membership features, class schedules, and responsive design.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    live: "https://www.pulsegym.online/#home",
    repo: "https://github.com/Aladesuyi20/pulsegym-fitness-app",
  },
];
