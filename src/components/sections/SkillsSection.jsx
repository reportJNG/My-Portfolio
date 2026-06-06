import { useEffect, useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import { languages } from "../../data/portfolioData";

const STEP = 420;
const LIT_DURATION = 360;
const LINE_DELAY = 80;

const skillColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  SQL: "#4479A1",
  PHP: "#777BB4",
  "C++": "#00599C",
  Pascal: "#E53935",
  React: "#61DAFB",
  "Next.js": "#FFFFFF",
  "Node.js": "#5FA04E",
  Express: "#D8DEE8",
  MongoDB: "#47A248",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  Python: "#3776AB",
  Java: "#F89820",
  Lua: "#2C2D72",
  Git: "#F05032",
  Linux: "#FCC624",
  Docker: "#2496ED",
  Firebase: "#FFCA28",
  Supabase: "#3ECF8E",
  Prisma: "#D8DEE8",
  "Tailwind CSS": "#06B6D4",
  Bootstrap: "#7952B3",
  Vite: "#646CFF",
  Vercel: "#FFFFFF",
};

export default function Skills() {
  const blockRefs = useRef([]);
  const lineRefs = useRef([]);

  useEffect(() => {
    const timeouts = new Set();
    let active = 0;
    const setManagedTimeout = (callback, delay) => {
      const timeout = window.setTimeout(() => {
        timeouts.delete(timeout);
        callback();
      }, delay);

      timeouts.add(timeout);
    };

    const tick = () => {
      const block = blockRefs.current[active];
      const line = lineRefs.current[active];

      block?.classList.add("lit");

      setManagedTimeout(() => {
        line?.classList.add("lit");
      }, LINE_DELAY);

      setManagedTimeout(() => {
        block?.classList.remove("lit");
        line?.classList.remove("lit");
      }, LIT_DURATION);

      active = (active + 1) % languages.length;
    };

    tick();
    const interval = window.setInterval(tick, STEP);

    return () => {
      window.clearInterval(interval);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
      timeouts.clear();
    };
  }, []);

  return (
    <section className="section shell" id="skills">
      <SectionTitle eyebrow="Stack">
        UI, server, data, auth, APIs, styling, deployment.
      </SectionTitle>

      <div className="skills-grid">
        <SpotlightCard className="skill-panel" spotlightColor="rgba(83, 74, 183, 0.14)">
          <h3>Languages</h3>
          <div className="skills-chain" aria-label="Technology skills">
            {languages.map(([name, years, iconClass], index) => (
              <div
                className="skill-hop"
                key={name}
                style={{ "--skill-color": skillColors[name] ?? "#AFA9EC" }}
              >
                <div
                  className="skill-block"
                  title={`${name} - ${years}`}
                  ref={(node) => {
                    blockRefs.current[index] = node;
                  }}
                >
                  <i className={iconClass} aria-hidden="true" />
                  <span>{name}</span>
                </div>
                {index < languages.length - 1 && (
                  <div
                    className="skill-line"
                    aria-hidden="true"
                    ref={(node) => {
                      lineRefs.current[index] = node;
                    }}
                  >
                    <span />
                  </div>
                )}
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
