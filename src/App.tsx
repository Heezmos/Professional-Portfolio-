import { useEffect, useRef, useState } from "react";

const skills = [
  ["01", "Digital product development", "Turning business needs and early ideas into useful digital products, from problem definition and planning through prototyping and delivery.", "PRODUCT STRATEGY · PROTOTYPING · DELIVERY"],
  ["02", "Software & business systems", "Designing and coordinating practical systems that help organisations manage information, services and day-to-day operations.", "WEB APPLICATIONS · WORKFLOWS · SYSTEMS"],
  ["03", "Business & data analysis", "Working with business information, structured datasets and reporting to support clearer decisions and better operational understanding.", "DATA ANALYSIS · REPORTING · BI"],
  ["04", "Digital transformation", "Connecting people, processes and technology to improve how organisations work and how services reach the people who need them.", "PROCESS DESIGN · COORDINATION · CHANGE"],
  ["05", "AI-enabled solutions", "Exploring responsible ways to apply AI and automation to business processes, information access and digital services.", "AI APPLICATIONS · AUTOMATION · RESEARCH"],
];

const projects = [
  { n:"01", title:"Ecofarms", type:"AGRIBUSINESS · DIGITAL AGRICULTURE", description:"An integrated agribusiness initiative connecting food production, partner farmers and market demand in Sierra Leone.", stage:"PUBLIC WEBSITE", detail:"The wider concept brings together food production, farmer partnerships and improved routes to market. The public site and Farmers Connect experience communicate the current initiative.", stack:"AGRIBUSINESS / FARMER NETWORK / MARKET ACCESS", url:"https://heezmos.github.io/Eco-farms-Limited/", repo:"https://github.com/Heezmos/Eco-farms-Limited", slug:"ecofarms" },
  { n:"02", title:"Delight Holdings", type:"VENTURE GROUP · DIGITAL SOLUTIONS", description:"A group website presenting business and digital service divisions alongside a portfolio of ventures across travel, education, payments, agriculture and healthcare.", stage:"PUBLIC WEBSITE", detail:"The site brings together group positioning, service information, venture presentation and a prospective-client enquiry pathway. The public repository documents the implementation.", stack:"VENTURE PORTFOLIO / BUSINESS SERVICES / DIGITAL SYSTEMS", url:"https://delight-ventures.vercel.app/", repo:"https://github.com/Heezmos/DELIGHT-VENTURES", slug:"delight-holdings" },
  { n:"03", title:"E-School Management", type:"EDTECH · SCHOOL MANAGEMENT SAAS", description:"A multi-tenant school management platform designed around role-based access for administrators, teachers, parents or guardians, and students.", stage:"ACTIVE MVP BUILD", detail:"The current foundations cover school and user access, student and teacher records, classes, attendance, assessments and report-card workflows. This is an active MVP build, not a launched production service.", stack:"NEXT.JS / TYPESCRIPT / SUPABASE", url:"https://github.com/Heezmos/E-School-Management-System", slug:"e-school" },
  { n:"04", title:"EZGo", type:"TRAVEL TECHNOLOGY · BOOKING PLATFORM", description:"A travel platform bringing together ride bookings, regional-flight planning and local tour-guide experiences, supported by customer, partner and management workflows.", stage:"WEB V1.0 RELEASE", detail:"The platform includes customer journeys, partner and management areas, booking workflows and hosted payment integration. Flight results are illustrative planning options until live airline inventory and ticketing are integrated.", stack:"BOOKING WORKFLOWS / PARTNER OPERATIONS / PAYMENTS", url:"https://ezgo-platform.vercel.app/", slug:"ezgo" },
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
  const links = [["Skills","#skills"],["About","#about"],["Portfolio","#portfolio"],["Reviews","#reviews"],["Contact","#contact"]];
  return <header className="header">
    <a className="logo" href="#top" aria-label="Heez Mos home">HM<span>®</span></a>
    <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><i/><i/></button>
    <nav className={open ? "nav open" : "nav"}>{links.map(([label,href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <a className="header-cta" href="#contact">LET'S CONNECT <span>↗</span></a>
  </header>;
}

function HeroVisual() {
  return <div className="hero-visual" aria-label="Abstract motion graphic">
    <div className="visual-grain"/>
    <div className="visual-ring ring-a"/><div className="visual-ring ring-b"/><div className="visual-ring ring-c"/>
    <div className="visual-core"><span>H</span></div>
    <div className="visual-note note-top">BUSINESS / TECHNOLOGY / DATA</div>
    <div className="visual-note note-bottom">IDEAS INTO SYSTEMS INTO IMPACT</div>
    <div className="visual-cross">✳</div>
  </div>;
}

function App() {
  const year = new Date().getFullYear();
  return <div className="site" id="top">
    <Header/>
    <main>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="live-dot"/> INDEPENDENT BUILDER · SIERRA LEONE</p>
            <h1>HEEZ<br/><em>MOS.</em></h1>
            <div className="hero-subline"><span>BUSINESS IN MIND.</span><span>TECHNOLOGY IN MOTION.</span></div>
            <p className="hero-description">I work at the intersection of business, technology and data — turning ideas and operational challenges into useful digital solutions.</p>
            <div className="hero-buttons"><a className="button button-solid" href="#portfolio">EXPLORE MY WORK <b>↘</b></a><a className="under-link" href="#about">GET TO KNOW ME <span>↗</span></a></div>
          </div>
          <HeroVisual/>
        </div>
        <div className="hero-bottom"><span>STRATEGY / SYSTEMS / PRODUCT</span><span>SCROLL TO DISCOVER ↓</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <Reveal><div className="section-kicker">01 — A LITTLE ABOUT ME</div></Reveal>
        <div className="intro-grid">
          <Reveal><h2>Curious by nature.<br/><em>Practical by design.</em></h2></Reveal>
          <Reveal><div className="intro-copy"><p>I'm Heez Mos. My background brings together International Business and Trade, software engineering, and hands-on work supporting digital systems and payroll data processes.</p><p>I enjoy understanding how a business or organisation really works — its people, processes and pain points — then exploring where technology can make a meaningful difference.</p><a className="under-link" href="#journey">MORE ABOUT MY JOURNEY <span>↗</span></a></div></Reveal>
        </div>
      </section>

      <section className="skills section-pad" id="skills">
        <div className="section-head"><div><div className="section-kicker">02 — CAPABILITIES</div><h2>What I do<br/><em>best.</em></h2></div><p className="section-aside">A cross-disciplinary approach to solving real problems — from the first business question to the systems and decisions that follow.</p></div>
        <div className="skill-list">{skills.map(([n,title,copy,tags]) => <Reveal key={n}><article className="skill-row"><span className="skill-number">{n}</span><div className="skill-main"><h3>{title}</h3><p>{copy}</p><small>{tags}</small></div><span className="skill-arrow">↗</span></article></Reveal>)}</div>
      </section>

      <section className="portfolio section-pad" id="portfolio">
        <div className="section-head"><div><div className="section-kicker">03 — SELECTED PROJECTS</div><h2>Work in<br/><em>progress.</em></h2></div><p className="section-aside">A selection of initiatives and products. Each project is shown with its current status and scope — no inflated claims, just the work.</p></div>
        <div className="project-list">{projects.map(p => <Reveal key={p.n}><article className="project">
          <div className="project-top"><span>PROJECT / {p.n}</span><span>{p.stage}</span></div>
          <div className="project-body">
            <div className="project-art"><div className="art-grid"/><span className="art-letter">{p.title.charAt(0)}</span><span className="art-label">HEEZ MOS / SELECTED WORK</span></div>
            <div className="project-info"><p className="project-type">{p.type}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><div className="project-detail"><span>OVERVIEW</span><p>{p.detail}</p></div><div className="project-detail"><span>FOCUS</span><p>{p.stack}</p></div><div className="project-links"><a href={p.url} target="_blank" rel="noreferrer">{p.n === "03" ? "VIEW REPOSITORY" : "VISIT PROJECT"} <b>↗</b></a>{p.repo && <a href={p.repo} target="_blank" rel="noreferrer">SOURCE CODE <b>↗</b></a>}</div></div>
          </div>
        </article></Reveal>)}</div>
      </section>

      <section className="journey section-pad" id="journey">
        <div className="section-head"><div><div className="section-kicker">04 — EXPERIENCE & EDUCATION</div><h2>Learning by<br/><em>doing.</em></h2></div><p className="section-aside">A developing professional journey shaped by business, public-sector systems and continuous learning.</p></div>
        <div className="journey-grid"><Reveal><div className="experience"><span className="period">2023 — 2026</span><div><p className="experience-label">PROJECT COORDINATION / DATA ANALYSIS</p><h3>Payroll & Payslip Systems</h3><h4>Ministry of Finance · Sierra Leone</h4><p>Coordinated activities during the development of government payroll and payslip systems, and participated in monthly payroll dataset analysis and report preparation before payment rollout.</p></div></div></Reveal><Reveal><div className="education"><p className="experience-label">EDUCATION</p><div><span>01 / DEGREE</span><h3>International Business & Trade</h3><p>Bachelor's degree · Second Class Lower (2:2)</p></div><div><span>02 / CERTIFICATE</span><h3>Software Engineering</h3><p>Professional certificate</p></div></div></Reveal></div>
      </section>

      <section className="reviews section-pad" id="reviews">
        <div className="section-kicker">05 — WORDS & RECOMMENDATIONS</div>
        <div className="review-content"><h2>Good work speaks.<br/><em>People speak too.</em></h2><div><p>I'm keeping this space for genuine recommendations and feedback that can be shared with permission. No invented testimonials or unattributed quotes.</p><span className="review-note">AUTHENTIC TESTIMONIALS TO BE ADDED WITH APPROVAL</span></div></div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="contact-top"><div className="section-kicker">06 — HAVE SOMETHING IN MIND?</div><span>OPEN TO THOUGHTFUL COLLABORATION</span></div>
        <h2>Let's make<br/><em>it matter.</em></h2>
        <p>Have a business challenge, a product idea or an opportunity to build something useful? I'd be glad to connect.</p>
        <a className="button button-light" href="https://github.com/Heezmos" target="_blank" rel="noreferrer">CONNECT ON GITHUB <b>↗</b></a>
      </section>
    </main>
    <footer className="footer"><a className="logo" href="#top">HM<span>®</span></a><span>© {year} HEEZ MOS · BUSINESS IN MIND. TECHNOLOGY IN MOTION.</span><a href="#top">BACK TO TOP ↑</a></footer>
  </div>;
}
export default App;
