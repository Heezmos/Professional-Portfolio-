import { useEffect, useRef, useState } from "react";

const services = [
  { n: "01", title: "Digital product thinking", body: "Shaping early ideas into clear product direction — understanding the people, problem, purpose and practical path to a useful first release.", tags: "PRODUCT DISCOVERY · ROADMAPS · PROTOTYPING" },
  { n: "02", title: "Business systems & software", body: "Coordinating the design and development of digital systems that organise information, improve workflows and support everyday operations.", tags: "WEB APPLICATIONS · BUSINESS SYSTEMS · WORKFLOWS" },
  { n: "03", title: "Data, insight & reporting", body: "Working with structured information, analysis and reporting to help teams understand performance and make better-informed decisions.", tags: "DATA ANALYSIS · REPORTING · BUSINESS INTELLIGENCE" },
  { n: "04", title: "Digital transformation", body: "Connecting business processes, people and technology to make services more accessible, operations more effective and change more manageable.", tags: "PROCESS IMPROVEMENT · COORDINATION · DIGITAL STRATEGY" },
  { n: "05", title: "AI & automation", body: "Exploring practical, responsible uses of AI and automation to reduce repetitive work, improve access to information and support better services.", tags: "AI-ENABLED SOLUTIONS · AUTOMATION · RESEARCH" },
];

const projects = [
  { n: "01", name: "Ecofarms", kind: "AGRIBUSINESS / DIGITAL AGRICULTURE", text: "An integrated agribusiness initiative connecting food production, partner farmers and market demand in Sierra Leone.", status: "PUBLIC WEBSITE", focus: "Food production · Farmer partnerships · Market access", url: "https://heezmos.github.io/Eco-farms-Limited/", repo: "https://github.com/Heezmos/Eco-farms-Limited", cls: "eco", symbol: "E", caption: "GROWING CONNECTIONS" },
  { n: "02", name: "Delight Holdings", kind: "VENTURE GROUP / DIGITAL SOLUTIONS", text: "A group website presenting business and digital service divisions alongside a portfolio of ventures across travel, education, payments, agriculture and healthcare.", status: "PUBLIC WEBSITE", focus: "Venture portfolio · Business services · Digital systems", url: "https://delight-ventures.vercel.app/", repo: "https://github.com/Heezmos/DELIGHT-VENTURES", cls: "delight", symbol: "D", caption: "IDEAS BUILT TO GROW" },
  { n: "03", name: "E-School Management", kind: "EDTECH / SCHOOL MANAGEMENT SAAS", text: "A multi-tenant school management platform designed around role-based access for administrators, teachers, parents or guardians, and students.", status: "ACTIVE MVP BUILD", focus: "Next.js · TypeScript · Supabase", url: "https://github.com/Heezmos/E-School-Management-System", cls: "school", symbol: "S", caption: "BETTER TOOLS FOR LEARNING" },
  { n: "04", name: "EZGo", kind: "TRAVEL TECHNOLOGY / BOOKING PLATFORM", text: "A travel platform bringing together ride bookings, regional-flight planning and local tour-guide experiences, supported by customer, partner and management workflows.", status: "WEB V1.0 RELEASE", focus: "Booking workflows · Partner operations · Payments", url: "https://ezgo-platform.vercel.app/", cls: "ezgo", symbol: "Z", caption: "MOVE WITH POSSIBILITY" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect(); }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? "shown" : ""} ${className}`}>{children}</div>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const links = [["Skills", "#skills"], ["About", "#about"], ["Portfolio", "#portfolio"], ["Journey", "#journey"], ["Contact", "#contact"]];
  return <header className="header"><a className="brand" href="#top">HM<span>®</span></a><button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/></button><nav className={open ? "nav open" : "nav"}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav><a className="nav-cta" href="#contact">LET'S TALK <b>↗</b></a></header>;
}
function HeroArtwork() {
  return <div className="hero-art">
    <img className="hero-portrait" src="/images/heez-mos.webp" alt="Heez Mos wearing a charcoal suit and red tie" width="512" height="512" fetchPriority="high" />
    <span className="art-caption caption-left">INDEPENDENT THINKING</span><span className="art-caption caption-right">FREETOWN · SIERRA LEONE</span>
  </div>;
}
function App() {
  const year = new Date().getFullYear();
  return <div className="site" id="top"><Header/><main>
    <section className="hero"><div className="hero-meta"><span>BUSINESS · TECHNOLOGY · DATA</span><span>PORTFOLIO / 2026</span></div><div className="hero-grid"><div className="hero-copy"><p className="eyebrow"><span/> BUILDER · SYSTEMS THINKER · PROBLEM SOLVER</p><h1>HEEZ<br/><em>MOS.</em></h1><p className="hero-line">Business in mind.<br/><i>Technology in motion.</i></p><p className="hero-description">I bring business understanding and technology together to shape useful digital products, systems and solutions.</p><div className="hero-actions"><a className="button button-orange" href="#portfolio">EXPLORE SELECTED WORK <b>↘</b></a><a className="text-link" href="#about">A LITTLE ABOUT ME <span>↗</span></a></div></div><HeroArtwork/></div><div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>01 — 06</span><span>© HEEZ MOS</span></div></section>

    <section className="skills section-pad" id="skills"><div className="section-intro"><div><p className="kicker">01 / WHAT I BRING</p><h2>What I do<br/><em>best.</em></h2></div><p className="intro-aside">A practical, cross-disciplinary approach to understanding challenges and turning them into meaningful digital outcomes.</p></div><div className="service-list">{services.map(s => <Reveal key={s.n}><article className="service-row"><span className="service-no">{s.n}</span><div className="service-copy"><h3>{s.title}</h3><p>{s.body}</p><small>{s.tags}</small></div><span className="service-arrow">↗</span></article></Reveal>)}</div></section>

    <section className="about section-pad" id="about"><div className="about-head"><p className="kicker">02 / BEHIND THE WORK</p><span className="about-mark">HM<span>®</span></span></div><div className="about-grid"><div className="about-title"><h2>Curious by nature.<br/><em>Practical by design.</em></h2><div className="about-visual"><div className="visual-lines"/><span>BUSINESS<br/>×<br/>TECHNOLOGY</span><small>THE SPACE IN BETWEEN</small></div></div><div className="about-copy"><p className="about-lead">I'm Heez Mos — a business-minded technology enthusiast interested in how thoughtful systems can solve real-world problems.</p><p>My background combines International Business and Trade with software engineering and practical experience supporting digital systems and payroll data processes.</p><p>I enjoy understanding how an organisation works — its people, processes and pressure points — then finding where technology can make a meaningful difference.</p><p>My work is guided by curiosity, clear thinking and a belief that useful technology should make life and work better.</p><a className="text-link" href="#journey">EXPLORE MY JOURNEY <span>↗</span></a></div></div></section>

    <section className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>BUSINESS THINKING ✳</span><span>PRODUCT DEVELOPMENT ✳</span><span>DATA & INSIGHT ✳</span><span>DIGITAL SYSTEMS ✳</span><span>AI & AUTOMATION ✳</span><span>BUSINESS THINKING ✳</span><span>PRODUCT DEVELOPMENT ✳</span><span>DATA & INSIGHT ✳</span></div></section>

    <section className="recognition section-pad"><div className="section-intro"><div><p className="kicker">03 / HOW I APPROACH IT</p><h2>Grounded in<br/><em>the real.</em></h2></div><p className="intro-aside">No borrowed accolades or inflated numbers. The focus is on the problems being solved, the work being done and the value created.</p></div><div className="recognition-grid"><Reveal><div className="recognition-card"><span>01 / UNDERSTAND</span><h3>Start with<br/>the problem.</h3><p>Listen, ask better questions and understand the context before choosing a technology or building a solution.</p></div></Reveal><Reveal><div className="recognition-card"><span>02 / BUILD</span><h3>Make it<br/>useful.</h3><p>Turn clear requirements into practical products and systems, with attention to people, workflows and real constraints.</p></div></Reveal><Reveal><div className="recognition-card"><span>03 / IMPROVE</span><h3>Keep moving<br/>forward.</h3><p>Learn from implementation, test assumptions and improve the experience as needs evolve.</p></div></Reveal></div></section>

    <section className="portfolio section-pad" id="portfolio"><div className="section-intro"><div><p className="kicker">04 / SELECTED WORK</p><h2>Ideas into<br/><em>action.</em></h2></div><p className="intro-aside">A selection of initiatives and digital products, with each project's current stage stated clearly. Open a project to explore more.</p></div><div className="project-list">{projects.map(p => <Reveal key={p.n}><article className={`project-card ${p.cls}`}><div className="project-heading"><span>PROJECT / {p.n}</span><span>{p.status}</span></div><div className="project-layout"><a className="project-image" href={p.url} target="_blank" rel="noreferrer" aria-label={`Open ${p.name}`}><div className="project-image-grid"/><div className="project-image-shape"/><span className="project-symbol">{p.symbol}</span><span className="project-image-caption">{p.caption}</span><span className="project-open">↗</span></a><div className="project-info"><p className="project-kind">{p.kind}</p><h3>{p.name}</h3><p className="project-description">{p.text}</p><div className="project-focus"><span>FOCUS</span><p>{p.focus}</p></div><div className="project-links"><a href={p.url} target="_blank" rel="noreferrer">{p.n === "03" ? "VIEW REPOSITORY" : "VIEW PROJECT"} <b>↗</b></a>{p.repo && <a href={p.repo} target="_blank" rel="noreferrer">SOURCE CODE <b>↗</b></a>}</div></div></div></article></Reveal>)}</div></section>

    <section className="journey section-pad" id="journey"><div className="section-intro"><div><p className="kicker">05 / EXPERIENCE & EDUCATION</p><h2>Learning by<br/><em>doing.</em></h2></div><p className="intro-aside">A developing professional journey shaped by business education, public-sector digital systems and continuous learning.</p></div><div className="timeline"><Reveal><article className="timeline-item"><span className="timeline-date">2023 — 2026</span><div><p className="kicker">PROJECT COORDINATION / DATA ANALYSIS</p><h3>Payroll & Payslip Systems</h3><h4>Ministry of Finance · Sierra Leone</h4><p>Coordinated activities during the development of government payroll and payslip systems, and participated in monthly payroll dataset analysis and report preparation before payment rollout.</p></div></article></Reveal><Reveal><article className="timeline-item"><span className="timeline-date">EDUCATION</span><div><p className="kicker">01 / DEGREE</p><h3>International Business & Trade</h3><p>Bachelor's degree · Second Class Lower (2:2)</p><p className="kicker education-kicker">02 / PROFESSIONAL CERTIFICATE</p><h3>Software Engineering</h3><p>Professional certificate</p></div></article></Reveal></div></section>

    <section className="reviews section-pad" id="reviews"><p className="kicker">06 / RECOMMENDATIONS</p><div className="review-grid"><h2>Trust is built<br/><em>through work.</em></h2><div><p>Professional recommendations and testimonials will appear here when they have been provided and approved for publication. I believe credibility should be earned — and represented honestly.</p><span className="review-status">GENUINE FEEDBACK · SHARED WITH PERMISSION</span></div></div></section>

    <section className="contact section-pad" id="contact"><div className="contact-top"><p className="kicker">HAVE A PROJECT OR AN IDEA?</p><span>OPEN TO MEANINGFUL COLLABORATION</span></div><h2>Let's build<br/><em>what matters.</em></h2><div className="contact-bottom"><p>Have a business challenge, a product idea or an opportunity to create something useful? Let's start a conversation.</p><a className="button button-dark" href="https://github.com/Heezmos" target="_blank" rel="noreferrer">CONNECT WITH ME <b>↗</b></a></div></section>
  </main><footer className="footer"><a className="brand" href="#top">HM<span>®</span></a><span>© {year} HEEZ MOS — BUSINESS IN MIND. TECHNOLOGY IN MOTION.</span><a href="#top">BACK TO TOP ↑</a></footer></div>;
}
export default App;
