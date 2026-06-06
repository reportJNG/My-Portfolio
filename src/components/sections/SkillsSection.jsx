import { useEffect, useRef } from "react";
import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import { languages } from "../../data/portfolioData";

const STEP = 520; // ms between each hop
const ENTER_DUR = 320; // ripple + shine burst
const ACTIVE_DUR = 260; // hold lit
const WIRE_DELAY = 200; // wire fires while block is still lit
const WIRE_DUR = 280; // wire travel time
const LEAVE_DUR = 500; // slow fade back to dim

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
  "Next.js": "#c8d0dc",
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
  Vercel: "#c8d0dc",
};

export default function Skills() {
  const boxRefs = useRef([]);
  const wireRefs = useRef([]);
  const timers = useRef([]);

  useEffect(() => {
    const after = (fn, ms) => {
      const t = window.setTimeout(fn, ms);
      timers.current.push(t);
      return t;
    };

    let cur = 0;

    const activate = (i) => {
      const box = boxRefs.current[i];
      const wire = wireRefs.current[i];
      if (!box) return;

      // Enter: ripple bursts, shine sweeps, icon lifts
      box.classList.remove("sk-leaving", "sk-active");
      box.classList.add("sk-entering");

      // Settle into active hold
      after(() => {
        box.classList.remove("sk-entering");
        box.classList.add("sk-active");
      }, ENTER_DUR);

      // Wire fires mid-active
      if (wire) {
        after(() => {
          wire.classList.remove("sk-firing");
          void wire.offsetWidth;
          wire.classList.add("sk-firing");
          after(() => wire.classList.remove("sk-firing"), WIRE_DUR);
        }, WIRE_DELAY);
      }

      // Leave: slow fade back to dim
      after(() => {
        box.classList.remove("sk-active");
        box.classList.add("sk-leaving");
        after(() => box.classList.remove("sk-leaving"), LEAVE_DUR);
      }, ENTER_DUR + ACTIVE_DUR);
    };

    const tick = () => {
      activate(cur);
      cur = (cur + 1) % languages.length;
    };

    tick();
    const interval = window.setInterval(tick, STEP);

    return () => {
      window.clearInterval(interval);
      timers.current.forEach(window.clearTimeout);
      timers.current = [];
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
                  className="skill-block"
                  title={`${name}${years ? ` · ${years}` : ""}`}
                  ref={(n) => {
                    boxRefs.current[index] = n;
                  }}
                >
                  <div className="skill-ripple" />
                  <div className="skill-shine" />
                  <div className="skill-dot" />
                  <i className={`${iconClass} skill-icon`} aria-hidden="true" />
                  <span className="skill-label">{name}</span>
                </div>

                {/* Connector wire */}
                {index < languages.length - 1 && (
                  <div
                    className="skill-wire"
                    aria-hidden="true"
                    ref={(n) => {
                      wireRefs.current[index] = n;
                    }}
                  >
                    <span className="skill-wire-fill" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </SpotlightCard>
      </div>

      <style>{`
        .skill-block {
          position: relative;
          display: inline-flex;
          width: 54px; height: 54px;
          flex: 0 0 54px;
          flex-direction: column;
          align-items: center; justify-content: center;
          gap: 5px;
          border-radius: 11px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.03);
          overflow: hidden;
          cursor: default;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .skill-icon {
          font-size: 17px; line-height: 1;
          color: rgba(255,255,255,0.2);
          transition: color 0.25s ease, transform 0.3s cubic-bezier(.22,1,.36,1);
          position: relative; z-index: 1;
        }
        .skill-label {
          font-size: 8px; font-weight: 600; letter-spacing: 0.05em;
          color: rgba(255,255,255,0.2);
          line-height: 1; text-align: center;
          max-width: 50px; overflow: hidden;
          text-overflow: ellipsis; white-space: nowrap;
          transition: color 0.25s ease;
          position: relative; z-index: 1;
        }
        .skill-ripple {
          position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(circle at 50% 50%, var(--skill-color) 0%, transparent 70%);
          opacity: 0; transform: scale(0.3); pointer-events: none;
        }
        .skill-shine {
          position: absolute; top: 0; left: -70%;
          width: 45%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent);
          transform: skewX(-18deg); opacity: 0; pointer-events: none;
        }
        .skill-dot {
          position: absolute; top: 5px; right: 5px;
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--skill-color); opacity: 0;
          transition: opacity 0.2s ease;
        }

        .sk-entering {
          border-color: color-mix(in srgb, var(--skill-color) 45%, transparent) !important;
          background: color-mix(in srgb, var(--skill-color) 11%, #0d1014) !important;
        }
        .sk-entering .skill-icon  { color: var(--skill-color) !important; transform: scale(1.14) !important; }
        .sk-entering .skill-label { color: var(--skill-color) !important; }
        .sk-entering .skill-dot   { opacity: 0.75 !important; }
        .sk-entering .skill-ripple { animation: sk-ripple-in 0.38s cubic-bezier(.22,1,.36,1) forwards; }
        .sk-entering .skill-shine  { animation: sk-shine 0.42s ease forwards 0.04s; }

        .sk-active {
          border-color: color-mix(in srgb, var(--skill-color) 38%, transparent) !important;
          background: color-mix(in srgb, var(--skill-color) 9%, #0d1014) !important;
        }
        .sk-active .skill-icon  { color: var(--skill-color) !important; transform: scale(1.08) !important; }
        .sk-active .skill-label { color: var(--skill-color) !important; }
        .sk-active .skill-dot   { opacity: 0.65 !important; }
        .sk-active .skill-ripple { opacity: 0.13; transform: scale(1); }

        .sk-leaving {
          border-color: rgba(255,255,255,0.07) !important;
          background: rgba(255,255,255,0.03) !important;
          transition: border-color 0.5s ease, background 0.5s ease !important;
        }
        .sk-leaving .skill-icon  { color: rgba(255,255,255,0.2) !important; transform: scale(1) !important; transition: color 0.5s ease, transform 0.5s ease !important; }
        .sk-leaving .skill-label { color: rgba(255,255,255,0.2) !important; transition: color 0.5s ease !important; }
        .sk-leaving .skill-dot   { opacity: 0 !important; transition: opacity 0.4s ease !important; }
        .sk-leaving .skill-ripple { animation: sk-ripple-out 0.45s ease forwards !important; }

        .skill-wire {
          width: 18px; height: 2px; flex: 0 0 18px;
          border-radius: 2px; background: rgba(255,255,255,0.065);
          position: relative; overflow: hidden;
          transition: background 0.18s ease, box-shadow 0.18s ease;
        }
        .skill-wire-fill {
          position: absolute; top: 0; left: 0;
          height: 100%; width: 0%;
          border-radius: inherit;
          background: var(--skill-color);
          opacity: 0;
          box-shadow: 0 0 8px var(--skill-color);
        }
        .sk-firing {
          background: color-mix(in srgb, var(--skill-color) 18%, rgba(255,255,255,0.08));
          box-shadow: 0 0 10px color-mix(in srgb, var(--skill-color) 45%, transparent);
        }
        .sk-firing .skill-wire-fill {
          animation: sk-wire 0.28s cubic-bezier(.4,0,.2,1) forwards;
        }

        @keyframes sk-ripple-in {
          0%   { opacity: 0;    transform: scale(0.3); }
          55%  { opacity: 0.22; transform: scale(1.08); }
          100% { opacity: 0.13; transform: scale(1); }
        }
        @keyframes sk-ripple-out {
          0%   { opacity: 0.13; transform: scale(1); }
          100% { opacity: 0;    transform: scale(0.4); }
        }
        @keyframes sk-shine {
          0%   { opacity: 0; left: -70%; }
          35%  { opacity: 1; }
          100% { opacity: 0; left: 120%; }
        }
        @keyframes sk-wire {
          0%   { width: 0%;   left: 0; opacity: 0; }
          20%  { opacity: 1; }
          100% { width: 100%; left: 0; opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          .skill-ripple, .skill-shine, .skill-wire-fill { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
