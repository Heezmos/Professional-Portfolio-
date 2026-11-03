export type Domain = "Engineering" | "Design" | "Product" | "Data" | "Strategy";

export const DOMAINS: { id: Domain; label: string }[] = [
  { id: "Engineering", label: "Software Engineering" },
  { id: "Design", label: "UI/UX & Product Design" },
  { id: "Product", label: "Full-Stack Product" },
  { id: "Data", label: "Business & Data Analytics" },
  { id: "Strategy", label: "Digital Transformation Strategy" },
];

export const PROFILE = {
  name: "Heez Mos",
  email: "hello@heezmos.com",
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/",
  location: "Available remote & on-site",
};

export type Project = {
  title: string;
  year: string;
  domains: Domain[];
  summary: string;
  impact: string;
  stack: string[];
  link?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Paperless Ops Transformation",
    year: "2026",
    domains: ["Strategy", "Data"],
    summary: "Led a digital transformation roadmap moving a 300-person logistics firm from paper workflows to cloud tools.",
    impact: "Processing time down 55%; 92% staff adoption within 6 months.",
    stack: ["Roadmapping", "Change management", "Process mapping", "KPIs"],
  },
  {
    title: "Ledgerline — Finance Ops Platform",
    year: "2026",
    domains: ["Engineering", "Product"],
    summary: "End-to-end invoicing and reconciliation tool for small finance teams, from schema to UI.",
    impact: "Cut month-end close time by 40% for pilot customers.",
    stack: ["TypeScript", "React", "PostgreSQL", "Node"],
  },
  {
    title: "Wayfind Mobile Redesign",
    year: "2025",
    domains: ["Design"],
    summary: "Research-led redesign of a transit app's trip-planning flow and design system.",
    impact: "Task success up from 62% to 91% in usability testing.",
    stack: ["Figma", "User research", "Design systems"],
  },
  {
    title: "Churn Signal Dashboard",
    year: "2025",
    domains: ["Data", "Engineering"],
    summary: "Predictive churn model and executive dashboard built on product usage events.",
    impact: "Flagged at-risk accounts 3 weeks earlier; saved ~$180k ARR.",
    stack: ["Python", "SQL", "dbt", "Looker"],
  },
  {
    title: "Pantry — Food Rescue Marketplace",
    year: "2024",
    domains: ["Product", "Design", "Engineering"],
    summary: "Shipped a two-sided marketplace MVP connecting restaurants with local shelters.",
    impact: "12 partners and 4,000 meals redirected in the first quarter.",
    stack: ["Next.js", "Stripe", "Figma", "Supabase"],
  },
  {
    title: "Pricing Experiment Framework",
    year: "2024",
    domains: ["Data", "Product"],
    summary: "Designed and analyzed A/B tests for a SaaS pricing page overhaul.",
    impact: "+18% trial-to-paid conversion on the winning variant.",
    stack: ["Statistics", "Amplitude", "SQL"],
  },
  {
    title: "Component Library & Tokens",
    year: "2023",
    domains: ["Design", "Engineering"],
    summary: "Unified a fragmented UI into an accessible, themeable component library.",
    impact: "Reduced UI bug reports by 35%; WCAG AA across core flows.",
    stack: ["React", "Storybook", "Tokens"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  domains: Domain[];
  points: string[];
};

export const JOBS: Job[] = [
  {
    role: "Digital Transformation Strategist",
    company: "Atlas Advisory",
    period: "2025 — Present",
    domains: ["Strategy", "Product"],
    points: [
      "Advise leadership teams on modernizing operations, tooling and data culture.",
      "Translate business goals into phased technology roadmaps with clear ROI.",
    ],
  },
  {
    role: "Full-Stack Product Engineer",
    company: "Northwind Labs",
    period: "2024 — Present",
    domains: ["Engineering", "Product"],
    points: [
      "Own features from discovery to production across a React/Node stack.",
      "Lead weekly product reviews with design and customer success.",
    ],
  },
  {
    role: "Product Designer",
    company: "Brightpath Studio",
    period: "2022 — 2024",
    domains: ["Design", "Product"],
    points: [
      "Designed web and mobile experiences for 8 client products.",
      "Ran user interviews and usability studies to shape roadmaps.",
    ],
  },
  {
    role: "Business & Data Analyst",
    company: "Meridian Retail Group",
    period: "2020 — 2022",
    domains: ["Data"],
    points: [
      "Built KPI dashboards used by leadership in weekly planning.",
      "Modeled inventory demand, reducing overstock by 22%.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Cobalt Systems",
    period: "2019",
    domains: ["Engineering"],
    points: ["Shipped internal tooling that automated release notes for 30+ engineers."],
  },
];