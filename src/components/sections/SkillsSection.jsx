import { useEffect, useState } from "react";
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
  "Next.js": "#E2E8F0",
  "Node.js": "#5FA04E",
  Express: "#D8DEE8",
  MongoDB: "#47A248",
  PostgreSQL: "#4169E1",
  MySQL: "#4479A1",
  Python: "#3776AB",
  Java: "#F89820",
  Lua: "#6E7BB5",
  Git: "#F05032",
  Linux: "#FCC624",
  Docker: "#2496ED",
  Firebase: "#FFCA28",
  Supabase: "#3ECF8E",
  Prisma: "#D8DEE8",
  "Tailwind CSS": "#06B6D4",
  Bootstrap: "#7952B3",
  Vite: "#646CFF",
  Vercel: "#E2E8F0",
};

export default function Skills() {
  const [activeBlock, setActiveBlock] = useState(0);
  const [activeLine, setActiveLine] = useState(null);

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
      setActiveBlock(active);
      setActiveLine(null);

      setManagedTimeout(() => {
        setActiveLine(active);
      }, LINE_DELAY);

      setManagedTimeout(() => {
        setActiveLine(null);
      }, LIT_DURATION);

      active = (active + 1) % languages.length;
    };

    tick();
    const interval = window.setInterval(tick, STEP);

    return () => {
      window.clearInterval(interval);
      timeouts.forEach((t) => window.clearTimeout(t));
      timeouts.clear();
    };
  }, []);

  return (
    <section
      className="mx-auto w-[min(calc(100%-28px),1080px)] pt-[70px] max-md:w-[min(calc(100%-24px),1080px)] max-md:pt-[58px]"
      id="skills"
    >
      <SectionTitle eyebrow="Stack">
        UI, server, data, auth, APIs, styling, deployment.
      </SectionTitle>

      <div className="grid grid-cols-1">
        <SpotlightCard
          className="p-[22px] max-[420px]:p-[16px]"
          spotlightColor="rgba(83, 74, 183, 0.12)"
        >
          {/* Panel header */}
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/30">
              Languages &amp; tools
            </span>
            <div className="h-px flex-1 bg-white/[0.07]" />
            <span className="text-[10px] font-bold tabular-nums text-white/20">
              {languages.length}
            </span>
          </div>

          {/* Inner container */}
          <div className="rounded-[10px] border border-white/[0.05] bg-white/[0.02] p-4">
            <div
              className="flex flex-wrap items-center gap-y-[10px]"
              aria-label="Technology skills"
            >
              {languages.map(([name, years, iconClass], index) => (
                <div
                  className="inline-flex items-center"
                  key={name}
                  style={{ "--skill-color": skillColors[name] ?? "#AFA9EC" }}
                >
                  {/* Skill block */}
                  <div
                    className={[
                      "group relative inline-flex h-[50px] w-[54px] flex-none cursor-default flex-col items-center justify-center gap-[5px] rounded-[10px] border transition-[transform,border-color,background-color,color] duration-[180ms] ease-out",
                      activeBlock === index
                        ? "-translate-y-[2px] border-[color:color-mix(in_srgb,var(--skill-color)_40%,transparent)] bg-[color-mix(in_srgb,var(--skill-color)_11%,#0d1014)] text-[var(--skill-color)]"
                        : "border-white/[0.07] bg-white/[0.03] text-white/[0.22]",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    title={`${name}${years ? ` · ${years}` : ""}`}
                  >
                    <i
                      className={`${iconClass} text-[17px] leading-none text-current`}
                      aria-hidden="true"
                    />
                    <span className="max-w-[48px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-[8px] font-[600] leading-none tracking-[0.05em] text-current">
                      {name}
                    </span>

                    {/* Lit glow dot — top-right corner */}
                    {activeBlock === index && (
                      <span className="absolute right-[5px] top-[5px] h-[4px] w-[4px] rounded-full bg-[var(--skill-color)] opacity-70" />
                    )}
                  </div>

                  {/* Connector line */}
                  {index < languages.length - 1 && (
                    <div
                      className="relative h-[1.5px] w-[16px] flex-none overflow-hidden rounded-full bg-white/[0.05]"
                      aria-hidden="true"
                    >
                      <span
                        className={[
                          "absolute top-0 h-full w-full rounded-[inherit] bg-[var(--skill-color)] transition-[left] duration-[180ms] ease-out",
                          activeLine === index ? "left-0" : "left-[-100%]",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        style={{
                          boxShadow:
                            activeLine === index
                              ? "0 0 5px var(--skill-color)"
                              : "none",
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
