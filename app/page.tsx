"use client";

import { FormEvent, useEffect, useState } from "react";

const projects = [
  { number:"01", title:"CX Workspace", type:"Web Application · Product Design", description:"A centralized internal workspace built around real Customer Experience operations, from concern logging and escalation to fraud monitoring, scheduling, CCF generation, audit trails, and configurable workflows.", tools:["React","TypeScript","Firebase","Firestore","UI/UX"], status:"Private case study" },
  { number:"02", title:"CX Process Policies & Digital Forms", type:"Service Design · Documentation", description:"A system of operational policies, process flows, and standardized forms that makes customer concern, fraud investigation, escalation, and case-handling procedures clearer and more consistent.", tools:["Process Mapping","Google Docs","Google Sheets","Workflow Design"], status:"Internal project" },
  { number:"03", title:"Production Tracker", type:"No-code App · Workflow Automation", description:"An AppSheet-based productivity tracker that transforms spreadsheet-based recording into a structured, user-friendly application for daily monitoring and reporting.", tools:["AppSheet","Google Sheets","No-code","UI/UX"], status:"Private case study" },
];

const experience = [
  { years:"Aug 2025 — Present", role:"Fraud Investigation Assistant", company:"OwnBank", description:"Investigates fraud-related cases, monitors suspicious transactions, supports AML processes, and coordinates case resolution while identifying opportunities to improve internal workflows." },
  { years:"Mar 2025 — Jul 2025", role:"Secretary", company:"LG Unitech Inc.", description:"Managed administrative and company secretarial tasks, maintained documentation and records, and supported operations using AutoCAD and organizational tools." },
  { years:"Oct 2023 — Dec 2024", role:"Verification Specialist", company:"OwnBank", description:"Performed identity verification and data validation, reviewed customer information for accuracy and compliance, and supported secure customer onboarding processes." },
];

const certificates = [
  { year:"2025", name:"Targeted Financial Sanctions (TFS)", issuer:"Anti-Money Laundering Council", link:"https://amlctftrainings.thinkific.com/certificates/js6a8vomdt" },
  { year:"2025", name:"AMLC Registration and Reporting Guidelines", issuer:"Anti-Money Laundering Council", link:"https://amlctftrainings.thinkific.com/certificates/ovgnbh867j" },
  { year:"2024", name:"AML/CTF Fundamentals", issuer:"Anti-Money Laundering Council", link:"https://amlctftrainings.thinkific.com/certificates/rowbvpskeb" },
];

const nav = ["About","Projects","Experience","Skills","Certifications","Education","Contact"];

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [dark,setDark] = useState(false);
  useEffect(() => { const saved=localStorage.getItem("portfolio-theme"); const next=saved ? saved==="dark" : matchMedia("(prefers-color-scheme: dark)").matches; setDark(next); document.documentElement.dataset.theme=next?"dark":"light"; },[]);
  function toggleTheme(){ const next=!dark; setDark(next); document.documentElement.dataset.theme=next?"dark":"light"; localStorage.setItem("portfolio-theme",next?"dark":"light"); }
  function sendMessage(event:FormEvent<HTMLFormElement>){ event.preventDefault(); const data=new FormData(event.currentTarget); const name=String(data.get("name")||""); const email=String(data.get("email")||""); const message=String(data.get("message")||""); location.href=`mailto:lanzxtech@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${name}`)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)}`; }
  return <div className="site-shell">
    <header className="mobile-header"><a href="#about" className="wordmark">LM<span>.</span></a><button className="icon-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen?"Close":"Menu"}</button></header>
    <aside className={`sidebar ${menuOpen?"is-open":""}`}>
      <div><a href="#about" className="wordmark" onClick={()=>setMenuOpen(false)}>Lanz Miguel<span>.</span></a><p className="side-role">UI/UX Designer<br/>AI Automation</p></div>
      <nav aria-label="Portfolio sections">{nav.map((item,index)=><a key={item} href={`#${item.toLowerCase()}`} onClick={()=>setMenuOpen(false)}><span>{String(index+1).padStart(2,"0")}</span>{item}</a>)}</nav>
      <div className="side-footer"><button className="theme-toggle" onClick={toggleTheme}><span>{dark?"Light mode":"Dark mode"}</span><span>{dark?"☼":"◐"}</span></button><p>Based in Pasig City<br/>Philippines</p><a href="mailto:lanzxtech@gmail.com">lanzxtech@gmail.com ↗</a></div>
    </aside>
    <main>
      <section id="about" className="hero reveal">
        <div className="hero-copy"><p className="eyebrow">Portfolio · 2026</p><h1>Lanz Miguel<br/>Acosta</h1><p className="hero-lead">I design useful digital experiences and automate the work behind them.</p><p className="hero-body">A web developer and UI/UX designer with a background in fraud investigation, combining operational experience with technology to improve workflows and solve everyday problems.</p><div className="hero-links"><a href="mailto:lanzxtech@gmail.com">Email ↗</a><a href="https://www.linkedin.com/in/lanz-miguel-acosta-215261255/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/lanzmiguelac" target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
        <div className="portrait-wrap"><img src="/lanz-acosta.jpg" alt="Lanz Miguel Acosta" className="portrait"/><div className="portrait-label"><span>Available for opportunities</span><span>●</span></div></div>
        <div className="hero-metrics"><div><strong>03</strong><span>Featured projects</span></div><div><strong>2+</strong><span>Years in operations</span></div><div><strong>IT</strong><span>Associate degree</span></div><div><strong>PH</strong><span>Pasig City</span></div></div>
      </section>
      <section className="section about-detail"><SectionHead number="01" title="About"/><div className="about-grid"><p className="statement">From understanding the problem to designing the experience and building the solution.</p><div className="prose"><p>My journey into development started from a real-world challenge. While working in fraud investigation, I saw opportunities to improve how our team manages cases, workflows, escalations, and day-to-day operations.</p><p>Instead of simply adapting to the existing process, I began applying my technical skills to build a centralized workspace designed around our team&apos;s actual needs.</p><p>I enjoy turning complex processes into simple interfaces and building solutions that are visually considered, functional, and genuinely useful.</p></div></div></section>
      <section id="projects" className="section"><SectionHead number="02" title="Selected projects"/><div className="projects-list">{projects.map(p=><article className="project-card" key={p.title}><div className="project-index">{p.number}</div><div className="project-main"><p className="project-type">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tools.map(t=><span key={t}>{t}</span>)}</div></div><div className="project-status">{p.status}</div></article>)}</div></section>
      <section id="experience" className="section"><SectionHead number="03" title="Experience"/><div className="timeline">{experience.map(item=><article key={item.role}><time>{item.years}</time><div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.description}</p></div></article>)}</div></section>
      <section id="skills" className="section"><SectionHead number="04" title="Skills & tools"/><div className="skills-grid"><SkillGroup title="Design" items={["UI/UX Design","Wireframing","Workflow Design","Process Mapping","Information Architecture"]}/><SkillGroup title="Development" items={["React","TypeScript","HTML / CSS","Firebase","Firestore","Git / GitHub"]}/><SkillGroup title="Automation" items={["AppSheet","Google Sheets","No-code Development","AI-assisted Development","Workflow Automation"]}/><SkillGroup title="Professional" items={["Problem Solving","Critical Thinking","Communication","Adaptability","Fraud Investigation"]}/></div></section>
      <section id="certifications" className="section"><SectionHead number="05" title="Certifications"/><div className="certificate-list">{certificates.map(c=><a key={c.name} href={c.link} target="_blank" rel="noreferrer"><span className="cert-year">{c.year}</span><span><strong>{c.name}</strong><small>{c.issuer}</small></span><span className="verify">Verify ↗</span></a>)}</div></section>
      <section id="education" className="section"><SectionHead number="06" title="Education"/><div className="education-grid"><article><time>2022 — 2024</time><h3>Associate in Information Technology</h3><p>Saint John Bosco I.A.S.</p></article><article><time>2020 — 2022</time><h3>Humanities and Social Sciences</h3><p>Sitero Francisco Memorial National High School</p></article></div><a className="resume-link" href="/Lanz-Miguel-Acosta-Resume.pdf" download>Download résumé <span>↓</span></a></section>
      <section id="contact" className="section contact-section"><SectionHead number="07" title="Let’s work together"/><div className="contact-grid"><div><h2>Have a workflow to improve or an idea to build?</h2><p>I&apos;m open to UI/UX, web development, AI automation, and collaborative opportunities.</p><a href="mailto:lanzxtech@gmail.com" className="email-link">lanzxtech@gmail.com ↗</a></div><form onSubmit={sendMessage}><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" required placeholder="you@example.com"/></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me about your project"/></label><button type="submit">Open email draft <span>↗</span></button></form></div></section>
      <footer><span>© 2026 Lanz Miguel Acosta</span><a href="#about">Back to top ↑</a></footer>
    </main>
  </div>;
}

function SectionHead({number,title}:{number:string;title:string}){ return <div className="section-head"><span>{number}</span><h2>{title}</h2></div>; }
function SkillGroup({title,items}:{title:string;items:string[]}){ return <article><h3>{title}</h3><div>{items.map(item=><span key={item}>{item}</span>)}</div></article>; }
