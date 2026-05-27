import { createElement, useMemo, useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

import profile from "./assets/me.png";
import BlurText from "./components/react-bits/BlurText/BlurText";
import Dock from "./components/react-bits/Dock/Dock";
import GradientText from "./components/react-bits/GradientText/GradientText";
import SpotlightCard from "./components/react-bits/SpotlightCard/SpotlightCard";
import TiltedCard from "./components/react-bits/TiltedCard/TiltedCard";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Training", href: "#training", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

const stats = [
  ["3+", "years experience"],
  ["28", "live projects"],
  ["13", "languages"],
  ["Algeria", "based in"],
];

const facts = [
  ["Age", "20 Years"],
  ["Country", "Algeria"],
  ["Experience", "3 Years"],
  ["Focus", "Full-stack websites, systems, and useful tools"],
];

const projects = [
  ["SONATRACH Nautique Manager", "Enterprise", "https://nautique-1.vercel.app/"],
  ["Mobilis Fleet Manager", "Enterprise", "https://mobilis-gestion-du-parc-automobile.vercel.app/"],
  ["Enterprise Banking", "Finance", "https://bank-eight-woad.vercel.app/"],
  ["Crypting Password", "Security", "https://crypting-password.vercel.app/"],
  ["Shop Manager Pro", "Operations", "https://shop-manager-x3o9.vercel.app/"],
  ["E-Clothes Store", "Commerce", "https://e-commerce-shop-seven-pearl.vercel.app/"],
  ["Equation Calc Game", "Game", "https://equation-two.vercel.app/"],
  ["Simple CRUD App", "Full-stack", "https://crud-auth-gray.vercel.app/"],
  ["Dice vs Bot", "Game", "https://dice-web-game.vercel.app/"],
  ["Mini Games Hub", "Game", "https://mini-games-h.vercel.app/"],
  ["Guess the Word", "Game", "https://abrain.vercel.app/"],
  ["Pokemon Battle", "Game", "https://pokemon-battel.vercel.app/"],
  ["Guess Who", "API", "https://geuss-who.vercel.app/"],
  ["NotePad Pro", "Productivity", "https://notepad-azure-xi.vercel.app/"],
  ["To-Do Manager", "Productivity", "https://to-do-app-puce-three.vercel.app/"],
  ["Password Generator Pro", "Security", "https://password-generator-tan-iota.vercel.app/"],
  ["Counter App", "Utility", "https://timer-conter.vercel.app/"],
  ["Money Transfer", "Finance", "https://transfer-money-two.vercel.app/"],
  ["World Explorer", "API", "https://world-info-omega.vercel.app/"],
  ["Weather Forecast", "API", "https://dev-weather-hamza.vercel.app/"],
  ["Random User Generator", "API", "https://get-alot-random-users.vercel.app/"],
  ["Email Generator", "Utility", "https://random-free-email.vercel.app/"],
  ["Daily Quotes", "Utility", "https://quote-day.vercel.app/"],
  ["Joke Generator", "Utility", "https://joke-gen-ten.vercel.app/"],
  ["Cat Images", "API", "https://cats-gen.vercel.app/"],
  ["Syrian Delights", "Restaurant", "https://syrien.vercel.app/"],
  ["Meet & Meat", "Restaurant", "https://meet-meat-alg.vercel.app/"],
  ["Discord Community", "Community", "https://algerian-discored.vercel.app/"],
];

const languages = [
  ["HTML", "3 Years", "devicon-html5-plain"],
  ["CSS", "3 Years", "devicon-css3-plain"],
  ["JavaScript", "2 Years", "devicon-javascript-plain"],
  ["SQL", "2 Years", "devicon-mysql-plain"],
  ["PHP", "2 Years", "devicon-php-plain"],
  ["C++", "2 Years", "devicon-cplusplus-plain"],
  ["Pascal", "2 Years", "devicon-c-plain"],
  ["React", "1 Year", "devicon-react-original"],
  ["Node.js", "1 Year", "devicon-nodejs-plain"],
  ["MongoDB", "1 Year", "devicon-mongodb-plain"],
  ["Python", "1 Year", "devicon-python-plain"],
  ["Java", "1 Year", "devicon-java-plain"],
  ["Lua", "1 Year", "devicon-lua-plain"],
];

const skills = [
  "Installing/Configuring Software",
  "Linux Tools",
  "Windows & Linux OS",
  "File Systems & Backups",
  "Virtual Machines",
  "Git",
  "System Troubleshooting",
  "Command Line Bash",
  "PC Maintenance & Cleanup",
  "Typing & Productivity Tools",
  "Networking Basics",
];

function Header({ onDownload }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span>RX</span>
        Hamza
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <nav className={open ? "nav open" : "nav"}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <button type="button" onClick={onDownload}>
          <Download size={16} />
          CV
        </button>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <GradientText showBorder animationSpeed={7}>
        {eyebrow}
      </GradientText>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function Hero({ onDownload }) {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <GradientText showBorder animationSpeed={6}>
          Full-stack developer / freelance builder
        </GradientText>

        <BlurText
          text="Clean web products with real structure."
          className="hero-title"
          delay={55}
          direction="bottom"
        />

        <p className="hero-lede">
          I build portfolio sites, dashboards, business systems, API tools, and
          useful web apps with a focus on clarity, speed, and maintainable code.
        </p>

        <div className="hero-actions">
          <a className="button dark" href="#work">
            See work
            <ArrowUpRight size={17} />
          </a>
          <a className="button light" href="#contact">
            Contact
            <Mail size={17} />
          </a>
          <button className="button ghost" type="button" onClick={onDownload}>
            Download CV
            <Download size={17} />
          </button>
        </div>
      </div>

      <div className="hero-card-wrap">
        <TiltedCard
          imageSrc={profile}
          altText="Remali Hamza"
          captionText="Remali Hamza"
          containerHeight="430px"
          imageHeight="430px"
          imageWidth="340px"
          overlayContent={
            <div className="profile-overlay">
              <strong>Remali Hamza</strong>
              <span>Available for full-stack builds</span>
            </div>
          }
          displayOverlayContent
        />
      </div>

      <div className="stats">
        {stats.map(([value, label]) => (
          <SpotlightCard
            className="stat"
            spotlightColor="rgba(103, 232, 249, 0.12)"
            key={label}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section shell" id="about">
      <SectionTitle eyebrow="Profile" title="Practical, direct, and focused on the build.">
        A small snapshot of who I am and how I work.
      </SectionTitle>

      <div className="about-grid">
        <SpotlightCard className="about-main" spotlightColor="rgba(167, 243, 208, 0.12)">
          <ShieldCheck size={26} />
          <h3>What makes the work better</h3>
          <p>
            I care about usable interfaces, clean flows, organized data, and
            details that make an app feel serious instead of thrown together.
          </p>
        </SpotlightCard>

        <div className="fact-list">
          {facts.map(([label, value]) => (
            <SpotlightCard className="fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const featured = projects.slice(0, 6);
  const rest = projects.slice(6);

  return (
    <section className="section shell" id="work">
      <SectionTitle eyebrow="Work" title="A cleaner showcase, not a noisy wall.">
        The strongest business and product builds are featured first, with the
        rest kept scannable.
      </SectionTitle>

      <div className="featured-grid">
        {featured.map(([name, type, link]) => (
          <SpotlightCard
            key={link}
            className="project-card featured"
            spotlightColor="rgba(255, 255, 255, 0.13)"
          >
            <span>{type}</span>
            <h3>{name}</h3>
            <p>
              A live project with a clear workflow, published link, and
              production-facing interface.
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Open project
              <ExternalLink size={16} />
            </a>
          </SpotlightCard>
        ))}
      </div>

      <div className="compact-work">
        {rest.map(([name, type, link]) => (
          <a key={link} href={link} target="_blank" rel="noopener noreferrer">
            <span>{type}</span>
            <strong>{name}</strong>
            <ArrowUpRight size={15} />
          </a>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section shell" id="skills">
      <SectionTitle eyebrow="Stack" title="Tools and skills, organized for scanning.">
        No inflated badges. Just the stack and technical strengths.
      </SectionTitle>

      <div className="skills-grid">
        <SpotlightCard className="skill-panel">
          <h3>Languages</h3>
          <div className="language-grid">
            {languages.map(([name, years, icon]) => (
              <div className="language" key={name}>
                <i className={icon} aria-hidden="true" />
                <span>{name}</span>
                <small>{years}</small>
              </div>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard className="skill-panel">
          <h3>Technical Skills</h3>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}

function Training() {
  return (
    <section className="section shell" id="training">
      <SectionTitle eyebrow="Training" title="Database engineering foundation.">
        Academic training at Sonatrach, grounded in databases and backend logic.
      </SectionTitle>

      <SpotlightCard className="training-card" spotlightColor="rgba(250, 204, 21, 0.12)">
        <div>
          <span>Sonatrach</span>
          <h3>Database Engineering (Academic Training)</h3>
          <p>
            Completed 3 years of academic training focused on SQL database
            design, relational modeling, query optimization, PHP backend
            development, Java EE, OOP, algorithms, and full-stack structure.
          </p>
        </div>
        <aside>
          <p>
            <MapPin size={16} />
            Algiers, Algeria
          </p>
          <p>
            <Award size={16} />
            3 years
          </p>
        </aside>
      </SpotlightCard>
    </section>
  );
}

function Contact() {
  return (
    <footer className="footer shell" id="contact">
      <SectionTitle eyebrow="Contact" title="Let’s build the clean version.">
        Bring the idea. I’ll help turn it into a sharper working product.
      </SectionTitle>

      <div className="contact-grid">
        <a href="mailto:Hamzaremali10@gmail.com">
          <Mail size={18} />
          Hamzaremali10@gmail.com
        </a>
        <a href="tel:0774273861">
          <Phone size={18} />
          0774273861
        </a>
        <a href="https://github.com/reportJNG" target="_blank" rel="noopener noreferrer">
          <Code2 size={18} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/as-sky-6b3782375/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <UserRound size={18} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const pageRef = useRef(null);

  const handleDownload = () => {
    if (!pageRef.current) return;

    html2pdf()
      .from(pageRef.current)
      .set({
        margin: 0.35,
        filename: "Hamza_Portfolio.pdf",
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save();
  };

  const dockItems = useMemo(
    () =>
      navItems.map(({ label, href, icon }) => ({
        label,
        icon: createElement(icon, { size: 19 }),
        onClick: () => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        },
      })),
    [],
  );

  return (
    <>
      <Header onDownload={handleDownload} />
      <main ref={pageRef}>
        <Hero onDownload={handleDownload} />
        <About />
        <Work />
        <Skills />
        <Training />
        <Contact />
      </main>
      <Dock items={dockItems} />
    </>
  );
}
