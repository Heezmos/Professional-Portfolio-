import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.12;
    mesh.current.rotation.y += delta * 0.2;
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.55) * 0.12;
  });
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.35}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, 32]} />
        <MeshDistortMaterial color="#e45c32" roughness={0.18} metalness={0.22} distort={0.34} speed={1.5} />
      </mesh>
    </Float>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Abstract animated 3D form">
      <div className="art-index">FIG. 01 — BUILDING AT THE INTERSECTION</div>
      <Canvas camera={{ position: [0, 0, 4.6], fov: 38 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#fff0df" />
        <pointLight position={[-3, -2, 2]} intensity={2} color="#e45c32" />
        <Orb />
        <Stars radius={9} depth={5} count={220} factor={1.5} saturation={0} fade speed={0.3} />
      </Canvas>
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <span className="art-caption">IDEAS → SYSTEMS → IMPACT</span>
    </div>
  );
}

const disciplines = [
  { n: "01", title: "Software & Systems", copy: "Building practical digital systems that solve real operational problems.", tags: "Software engineering · APIs · Systems thinking" },
  { n: "02", title: "Product Development", copy: "Turning an early idea into a useful, testable product with a clear path forward.", tags: "Product thinking · Prototyping · Delivery" },
  { n: "03", title: "Business & Data", copy: "Working with business information, analysis and reporting to support better decisions.", tags: "Data analysis · Reporting · Business intelligence" },
  { n: "04", title: "Digital Transformation", copy: "Connecting people, processes and technology to improve how organisations work.", tags: "Process improvement · Coordination · Change" },
];

const projects = [
  { number: "01", title: "Ecofarms", type: "Agribusiness & digital agriculture", status: "PUBLIC WEBSITE / PRODUCT ECOSYSTEM", copy: "An integrated agribusiness initiative connecting food production, partner farmers and market demand in Sierra Leone.", focus: "Public website, farmer connection experience and the wider digital agriculture ecosystem.", note: "Explore the public site and Farmers Connect experience to understand the current concept.", tags: ["Agribusiness", "Farmer network", "Market access"], links: [{ label: "Visit website", href: "https://heezmos.github.io/Eco-farms-Limited/" }, { label: "View source", href: "https://github.com/Heezmos/Eco-farms-Limited" }] },
  { number: "02", title: "Delight Holdings", type: "Venture group & digital solutions", status: "PUBLIC WEBSITE / GROUP PORTFOLIO", copy: "A group website presenting business and digital service divisions alongside a portfolio of ventures spanning travel, education, payments, agriculture and healthcare.", focus: "Group positioning, venture presentation, service information and an enquiry pathway for prospective clients.", note: "Visit the live group website to review its services, venture portfolio and enquiry experience.", tags: ["Venture portfolio", "Digital solutions", "Business services"], links: [{ label: "Visit live website", href: "https://delight-ventures.vercel.app/" }, { label: "View source", href: "https://github.com/Heezmos/DELIGHT-VENTURES" }] },
  { number: "03", title: "E-School Management", type: "Education management SaaS", status: "ACTIVE MVP BUILD", copy: "A multi-tenant school management platform designed around role-based access for school administrators, teachers, parents or guardians, and students.", focus: "School and user access foundations, student and teacher records, classes, attendance, assessments and report-card workflows.", note: "The repository describes this as an active MVP build, not a launched production service.", tags: ["Next.js", "TypeScript", "Supabase"], links: [{ label: "Explore project repository", href: "https://github.com/Heezmos/E-School-Management-System" }] },
  { number: "04", title: "EZGo", type: "Travel booking platform", status: "WEB V1.0 RELEASE", copy: "A travel platform bringing together ride bookings, regional-flight planning and local tour-guide experiences, supported by customer, partner and management workflows.", focus: "Booking journeys, customer accounts, partner operations, management tools and hosted payment workflows.", note: "Flight results are illustrative planning options until live airline inventory and ticketing are integrated.", tags: ["Travel technology", "Booking workflows", "Payments"], links: [{ label: "Visit live platform", href: "https://ezgo-platform.vercel.app/" }] },
];


function ProjectGallery({ number, title }: { number: string; title: string }) {
  const slug = number === "01" ? "ecofarms" : number === "02" ? "delight-holdings" : number === "03" ? "e-school" : "ezgo";
  const [failed, setFailed] = useState([false, false, false]);
  return (
    <div className="case-gallery" aria-label={title + " visual evidence"}>
      {[1, 2, 3].map((n, i) => (
        <figure className="case-gallery-frame" key={n}>
          {!failed[i] && <img src={`/images/projects/${slug}-0${n}.webp`} alt={`${title} project screen ${n}`} loading="lazy" onError={() => setFailed((old) => old.map((v, index) => index === i ? true : v))} />}
          {failed[i] && <div className="gallery-pending"><span>VISUAL EVIDENCE / 0{n}</span><strong>{title}</strong><small>Original project screenshot to be added</small></div>}
          <figcaption>SCREEN 0{n} <span>{title.toUpperCase()}</span></figcaption>
        </figure>
      ))}
    </div>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={visible ? "reveal is-visible" : "reveal"} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Heez Mos home">HM<span>®</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {[["About", "#about"], ["Capabilities", "#capabilities"], ["Projects", "#work"], ["Journey", "#journey"]].map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <span>↗</span></a>
      </nav>
    </header>
  );
}

function App() {
  const [year] = useState(new Date().getFullYear());
  return (
    <div className="site-shell" id="top">
      <Header />
      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SIERRA LEONE · WORKING ACROSS DISCIPLINES</p>
            <h1>Business in mind.<br /><em>Technology</em> in motion.</h1>
            <p className="hero-intro">I'm Heez Mos — I work where business, technology and data meet, helping turn complex ideas and operational needs into useful digital solutions.</p>
            <div className="hero-actions"><a className="button button-dark" href="#work">Explore selected work <span>↘</span></a><a className="text-link" href="#about">A little about me <span>↓</span></a></div>
          </div>
          <HeroArtwork />
          <div className="hero-foot"><span>INDEPENDENT THINKING / PRACTICAL BUILDING</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <div className="ticker" aria-label="Areas of focus"><div className="ticker-track">{Array.from({ length: 2 }).flatMap((_, i) => ["SOFTWARE", "PRODUCT", "DATA", "DIGITAL TRANSFORMATION", "BUSINESS SYSTEMS"].map((word, j) => <span key={i + "-" + j}>{word}<b>✳</b></span>))}</div></div>

        <section className="section-wrap intro-section" id="about">
          <Reveal><p className="eyebrow">01 / THE THROUGH-LINE</p><h2>I connect the dots between <em>how business works</em> and what technology can make possible.</h2></Reveal>
          <Reveal delay={100}><div className="intro-aside"><p>My background combines international business and trade with software engineering and hands-on experience supporting digital systems and payroll data work. I enjoy understanding the real problem before deciding what to build.</p><a className="text-link" href="#journey">Explore my journey <span>↘</span></a></div></Reveal>
        </section>

        <section className="capabilities section-wrap" id="capabilities">
          <div className="section-heading"><div><p className="eyebrow">02 / WHAT I BRING</p><h2>One perspective.<br /><em>Multiple disciplines.</em></h2></div><p className="section-note">I like working across boundaries — from the business question to the system, and from the data to the next decision.</p></div>
          <div className="capability-list">{disciplines.map((d) => <Reveal key={d.n}><article className="capability-row"><span className="cap-number">{d.n}</span><div><h3>{d.title}</h3><p>{d.copy}</p><small>{d.tags}</small></div><span className="row-arrow">↗</span></article></Reveal>)}</div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading"><div><p className="eyebrow">03 / SELECTED WORK & INITIATIVES</p><h2>Ideas becoming<br /><em>real-world work.</em></h2></div><p className="section-note">A curated look at four projects and their current capabilities. Project descriptions explain what each product does; personal responsibilities are stated only where confirmed.</p></div>
          <div className="project-grid">{projects.map((p) => <Reveal key={p.number}><article className="project-card"><div className="project-visual"><span>{p.number}</span><div className="visual-mark">{p.title === "Ecofarms" ? "E" : p.title === "Delight Holdings" ? "D" : p.title === "E-School Management" ? "S" : "Z"}</div><span className="visual-caption">HEEZ MOS / PROJECT NOTES</span></div><div className="project-meta"><span>{p.type}</span><span>{p.status}</span></div><h3>{p.title}</h3><p>{p.copy}</p><div className="project-detail"><span>PROJECT FOCUS</span><p>{p.focus}</p></div><div className="project-detail project-evidence"><span>STATUS & SCOPE NOTE</span><p>{p.note}</p></div><div className="tag-list">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={"#case-" + p.number}>Read case study <span>↓</span></a>{p.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span>↗</span></a>)}</div></article></Reveal>)}</div><div className="case-study-list">{projects.map((p) => <Reveal key={"case-" + p.number}><article className="case-study" id={"case-" + p.number}><div className="case-index"><span>CASE STUDY / {p.number}</span><span>{p.status}</span></div><div className="case-heading"><div><p className="eyebrow">PROJECT DEEP DIVE</p><h3>{p.title}</h3><p className="case-lede">{p.copy}</p></div><div className="case-symbol" aria-hidden="true">{p.number === "01" ? "E" : p.number === "02" ? "D" : p.number === "03" ? "S" : "Z"}</div></div><ProjectGallery number={p.number} title={p.title} /><div className="case-columns"><div><span>THE IDEA</span><p>{p.focus}</p></div><div><span>WHAT TO REVIEW</span><p>{p.number === "01" ? "Explore the public website structure, agribusiness positioning and farmer connection pathway." : p.number === "02" ? "Review the group positioning, service divisions, venture portfolio, enquiry journey and documented lead-management backend." : p.number === "03" ? "Review role-based portals, tenant-aware school access, student and teacher records, attendance, assessments and report-card foundations." : "Explore the customer booking experience, account area, partner portal, management workflows and hosted payment journey."}</p></div><div><span>TECHNOLOGY / IMPLEMENTATION</span><p>{p.number === "01" ? "The repository contains a responsive public website and supporting Farmers Connect experience. Specific framework claims are intentionally omitted." : p.number === "02" ? "Public website with a Supabase-backed enquiry and lead pipeline; Edge Function and Resend integration are documented, with production email dependent on configured secrets." : p.number === "03" ? "Next.js, React, TypeScript, Supabase Auth, PostgreSQL and Row Level Security." : "Web platform with customer, partner and management areas and Monime hosted checkout; live airline inventory is not yet integrated."}</p></div><div><span>STAGE & TRANSPARENCY</span><p>{p.note}</p></div></div><div className="case-links">{p.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></article></Reveal>)}</div>
        </section>

        <section className="journey section-wrap" id="journey">
          <div className="section-heading"><div><p className="eyebrow">04 / EXPERIENCE & LEARNING</p><h2>Grounded in work.<br /><em>Growing by design.</em></h2></div><p className="section-note">A developing professional journey across business, systems and technology.</p></div>
          <div className="journey-grid">
            <Reveal><div className="timeline-item"><span className="timeline-date">2023 — 2026</span><div><h3>Payroll & Payslip Systems</h3><p className="timeline-org">Ministry of Finance · Sierra Leone</p><p>Coordinated activities during the development of government payroll and payslip systems, and contributed to monthly payroll dataset analysis and report preparation before payment rollout.</p><span className="timeline-label">PROJECT COORDINATION / DATA ANALYSIS</span></div></div></Reveal>
            <Reveal delay={120}><div className="education-card"><p className="eyebrow">EDUCATION</p><h3>International Business & Trade</h3><p>Bachelor's degree · Second Class Lower (2:2)</p><div className="education-line" /><h3>Software Engineering</h3><p>Professional certificate</p></div></Reveal>
          </div>
        </section>

        <section className="closing section-wrap" id="contact">
          <Reveal><p className="eyebrow">05 / THE NEXT CHAPTER</p><h2>Have a meaningful<br />problem to <em>solve?</em></h2><p className="closing-copy">I'm interested in thoughtful collaborations, digital product work and opportunities where business and technology come together.</p><a className="button button-light" href="https://github.com/Heezmos" target="_blank" rel="noreferrer">Find me on GitHub <span>↗</span></a></Reveal>
          <div className="closing-orbit" aria-hidden="true"><span>LET'S MAKE SOMETHING USEFUL</span></div>
        </section>
      </main>
      <footer className="site-footer"><a className="wordmark" href="#top">HM<span>®</span></a><span>© {year} HEEZ MOS · BUILT WITH INTENTION</span><a href="#top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

export default App;
