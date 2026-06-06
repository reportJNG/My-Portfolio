import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  BadgeDollarSign,
  BookOpen,
  BriefcaseBusiness,
  ChartNoAxesColumn,
  Code2,
  Globe2,
  Gamepad2,
  KeyRound,
  Landmark,
  Package,
  Palette,
  PenTool,
  ShieldCheck,
  Store,
  Users,
  Utensils,
} from "lucide-react";

import { projects } from "../../data/portfolioData";

const PROJECT_BATCH_SIZE = 6;

const colors = {
  purple: { bg: "rgba(83, 74, 183, 0.18)", text: "#C9C4FF" },
  teal: { bg: "rgba(15, 110, 86, 0.2)", text: "#8FE5CC" },
  coral: { bg: "rgba(153, 60, 29, 0.22)", text: "#F4B49F" },
  blue: { bg: "rgba(24, 95, 165, 0.2)", text: "#9FCCF5" },
  amber: { bg: "rgba(133, 79, 11, 0.24)", text: "#F6CB82" },
  green: { bg: "rgba(59, 109, 17, 0.22)", text: "#BEEA94" },
};

const typeMeta = {
  API: { icon: Globe2, color: "blue" },
  Business: { icon: BriefcaseBusiness, color: "teal" },
  Commerce: { icon: Store, color: "green" },
  Community: { icon: Users, color: "purple" },
  Enterprise: { icon: ChartNoAxesColumn, color: "blue" },
  Finance: { icon: BadgeDollarSign, color: "green" },
  "Full-stack": { icon: Code2, color: "purple" },
  Game: { icon: Gamepad2, color: "purple" },
  Inventory: { icon: Package, color: "amber" },
  Learning: { icon: BookOpen, color: "coral" },
  Operations: { icon: BadgeCheck, color: "teal" },
  Portfolio: { icon: PenTool, color: "coral" },
  Productivity: { icon: Landmark, color: "teal" },
  Restaurant: { icon: Utensils, color: "amber" },
  Security: { icon: ShieldCheck, color: "blue" },
  Showcase: { icon: Palette, color: "coral" },
  Utility: { icon: KeyRound, color: "amber" },
};

const getProjectYear = (index) => {
  if (index < 12) return "2024";
  if (index < 26) return "2023";
  return "2022";
};

export default function Work() {
  const [visibleCount, setVisibleCount] = useState(PROJECT_BATCH_SIZE);
  const works = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        ...(typeMeta[project.type] ?? typeMeta.Utility),
        year: getProjectYear(index),
      })),
    [],
  );
  const visibleWorks = works.slice(0, visibleCount);
  const remainingCount = works.length - visibleWorks.length;

  const showMoreProjects = () => {
    setVisibleCount((count) =>
      Math.min(count + PROJECT_BATCH_SIZE, works.length),
    );
  };

  const showLessProjects = () => {
    setVisibleCount(PROJECT_BATCH_SIZE);
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="section shell works-section" id="work">
      <div className="works-header">
        <span>Selected works</span>
        <span>
          {visibleWorks.length} of {works.length} projects
        </span>
      </div>

      <div className="works-grid">
        {visibleWorks.map(
          (
            { icon: Icon, color, title, type, description, year, link },
            index,
          ) => {
            const token = colors[color];

            return (
              <article
                className="work-card"
                key={link}
                style={{
                  "--work-color-bg": token.bg,
                  "--work-color-text": token.text,
                  "--work-delay": `${40 + index * 55}ms`,
                }}
              >
                <div className="work-card-top">
                  <span className="work-icon-wrap" aria-hidden="true">
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="work-tag">{type}</span>
                </div>

                <div className="work-card-body">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>

                <div className="work-card-bottom">
                  <span>{year}</span>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    View
                    <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                </div>
              </article>
            );
          },
        )}
      </div>

      {remainingCount > 0 || visibleCount > PROJECT_BATCH_SIZE ? (
        <div className="works-more">
          {remainingCount > 0 ? (
            <button type="button" onClick={showMoreProjects}>
              Show more
            </button>
          ) : null}

          {visibleCount > PROJECT_BATCH_SIZE ? (
            <button type="button" onClick={showLessProjects}>
              Show less
            </button>
          ) : null}
        </div>
      ) : null}

      <style>{`
        .works-section {
          padding: 4rem 0;
        }

        .works-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 12px;
          color: var(--muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .works-header span:last-child {
          letter-spacing: 0;
          text-transform: none;
        }

        .works-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 8px;
        }

        .work-card {
          display: flex;
          min-height: 170px;
          flex-direction: column;
          gap: 12px;
          padding: 16px;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: var(--surface);
          opacity: 0;
          transform: translateY(12px);
          animation: work-card-enter 680ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--work-delay);
          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            background-color 0.18s ease;
        }

        .work-card:hover {
          animation-name: none;
          border-color: var(--line-strong);
          background: var(--surface-2);
          opacity: 1;
          transform: translateY(-2px);
        }

        .work-card-top,
        .work-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .work-icon-wrap {
          display: inline-flex;
          width: 32px;
          height: 32px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: var(--work-color-bg);
          color: var(--work-color-text);
        }

        .work-tag {
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          padding: 4px 7px;
          border: 1px solid color-mix(in srgb, var(--work-color-text) 24%, transparent);
          border-radius: 999px;
          background: var(--work-color-bg);
          color: var(--work-color-text);
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
          white-space: nowrap;
        }

        .work-card-body {
          display: grid;
          gap: 6px;
        }

        .work-card h3 {
          margin: 0;
          color: var(--text);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0;
          line-height: 1.25;
        }

        .work-card p {
          display: -webkit-box;
          min-height: 33px;
          margin: 0;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          color: var(--muted);
          font-size: 11px;
          font-weight: 500;
          line-height: 1.5;
        }

        .work-card-bottom {
          margin-top: auto;
          padding-top: 12px;
          border-top: 0.5px solid var(--line);
        }

        .work-card-bottom span {
          color: var(--muted);
          font-size: 10px;
          font-weight: 700;
          line-height: 1;
        }

        .work-card-bottom a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          min-height: 24px;
          padding: 4px 8px;
          border: 1px solid var(--line);
          border-radius: 5px;
          background: rgba(255, 255, 255, 0.035);
          color: var(--text);
          font-size: 10px;
          font-weight: 500;
          line-height: 1;
          text-decoration: none;
          transition:
            border-color 0.18s ease,
            background-color 0.18s ease;
        }

        .work-card-bottom a:hover {
          border-color: var(--line-strong);
          background: rgba(255, 255, 255, 0.065);
        }

        .works-more {
          display: flex;
          justify-content: center;
          margin-top: 14px;
        }

        .works-more button {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 12px;
          border: 1px solid var(--line);
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.035);
          color: var(--text);
          cursor: pointer;
          font-size: 11px;
          font-weight: 700;
          line-height: 1;
          transition:
            transform 0.18s ease,
            border-color 0.18s ease,
            background-color 0.18s ease;
        }

        .works-more button:hover {
          border-color: var(--line-strong);
          background: rgba(255, 255, 255, 0.065);
          transform: translateY(-1px);
        }

        .works-more span {
          color: var(--muted);
          font-size: 10px;
          font-weight: 700;
        }

        @keyframes work-card-enter {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 980px) {
          .works-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .works-section {
            padding: 58px 0;
          }

          .works-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .work-card {
            animation-duration: 0.01ms;
            animation-delay: 0ms;
          }
        }
      `}</style>
    </section>
  );
}
