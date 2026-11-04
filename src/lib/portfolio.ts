export type Domain = "Engineering" | "Design" | "Product" | "Data" | "Strategy";

export const DOMAINS: { id: Domain; label: string }[] = [
  { id: "Engineering", label: "Software & Systems" },
  { id: "Design", label: "Product & Experience" },
  { id: "Product", label: "Product Development" },
  { id: "Data", label: "Business & Data Analytics" },
  { id: "Strategy", label: "Digital Transformation" },
];

export const PROFILE = {
  name: "Heez Mos",
  email: "",
  linkedin: "",
  github: "https://github.com/Heezmos",
  location: "Sierra Leone",
};

export type Project = {
  title: string;
  year: string;
  domains: Domain[];
  summary: string;
  impact: string;
  stack: string[];
  link?: string;
  status: "Prototype / in development" | "Foundation / planning" | "Professional experience";
};

export const PROJECTS: Project[] = [
  {
    title: "EduBridge Africa",
    year: "2026",
    domains: ["Product", "Engineering", "Data"],
    summary: "A digital library and learning platform concept for university and college students, beginning with business and economics.",
    impact: "Prototype / in development. No public launch or usage metrics claimed.",
    stack: ["Education technology", "Digital library", "AI-assisted research"],
    status: "Prototype / in development",
  },
  {
    title: "Delight Ventures",
    year: "2026",
    domains: ["Strategy", "Product", "Engineering"],
    summary: "A technology venture studio foundation focused on owned digital products, AI-powered business solutions and venture incubation.",
    impact: "Foundation and planning stage. Not presented as a launched operating company.",
    stack: ["Venture building", "Digital products", "Business technology"],
    status: "Foundation / planning",
  },
  {
    title: "Government Payroll & Payslip Systems",
    year: "2023–2026",
    domains: ["Strategy", "Data", "Product"],
    summary: "Project coordination during system development, with participation in monthly payroll dataset analysis and report preparation before payment rollout.",
    impact: "Professional contribution. No unverified performance figures or outcomes claimed.",
    stack: ["Project coordination", "Payroll data analysis", "Reporting"],
    status: "Professional experience",
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
    role: "Project Coordination & Payroll Data Analysis",
    company: "Ministry of Finance, Sierra Leone",
    period: "2023 — 2026",
    domains: ["Strategy", "Data", "Product"],
    points: [
      "Coordinated activities during the development of government payroll and payslip systems.",
      "Participated in monthly payroll dataset analysis and preparation of reports before payment rollout.",
    ],
  },
];
