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
  status: "Public website / product ecosystem" | "Public website / group portfolio" | "Active MVP build" | "Web v1.0 release";
};

export const PROJECTS: Project[] = [
  { title: "Ecofarms", year: "2026", domains: ["Product", "Engineering", "Strategy"], summary: "An integrated agribusiness initiative connecting food production, partner farmers and market demand in Sierra Leone.", impact: "Public website and product ecosystem. Explore the public site for the current experience.", stack: ["Agribusiness", "Farmer network", "Market access"], link: "https://heezmos.github.io/Eco-farms-Limited/", status: "Public website / product ecosystem" },
  { title: "Delight Holdings", year: "2026", domains: ["Strategy", "Product", "Engineering"], summary: "A group website presenting business and digital service divisions alongside a portfolio of ventures.", impact: "Public repository and website source. A separately verified live URL is not listed.", stack: ["Venture portfolio", "Digital solutions", "Business services"], link: "https://github.com/Heezmos/DELIGHT-VENTURES", status: "Public website / group portfolio" },
  { title: "E-School Management", year: "2026", domains: ["Product", "Engineering", "Data"], summary: "A multi-tenant school management platform with role-based portals and core school administration workflows.", impact: "Active MVP build; not presented as a launched production service.", stack: ["Next.js", "TypeScript", "Supabase"], link: "https://github.com/Heezmos/E-School-Management-System", status: "Active MVP build" },
  { title: "EZGo", year: "2026", domains: ["Product", "Engineering", "Strategy"], summary: "A travel platform for ride bookings, regional-flight planning and local tour-guide experiences.", impact: "Web v1.0 release. Flight results remain illustrative until live airline inventory and ticketing are integrated.", stack: ["Travel technology", "Booking workflows", "Payments"], link: "https://ezgo-platform.vercel.app/", status: "Web v1.0 release" },
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
