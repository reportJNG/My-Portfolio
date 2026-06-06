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
import GradientText from "../effects/GradientText/GradientText";
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
    document
      .querySelector("#work")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="mx-auto w-[min(calc(100%-28px),1080px)] py-16 max-md:w-[min(calc(100%-24px),1080px)] max-md:py-[58px]"
      id="work"
    >
      <div className="mb-3 flex items-center justify-between gap-4 text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-[#9da6b4] [&_span:last-child]:normal-case [&_span:last-child]:tracking-normal">
        <GradientText showBorder animationSpeed={9}>
          Work{" "}
        </GradientText>
        <span>Selected </span>
        <span>
          {visibleWorks.length} of {works.length} projects
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
        {visibleWorks.map(
          ({ icon: Icon, color, title, type, description, year, link }) => {
            const token = colors[color];

            return (
              <article
                className="flex min-h-[170px] flex-col gap-3 rounded-xl border border-white/10 bg-[#101318] p-4 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#151922]"
                key={link}
                style={{
                  "--work-color-bg": token.bg,
                  "--work-color-text": token.text,
                }}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-[var(--work-color-bg)] text-[var(--work-color-text)]"
                    aria-hidden="true"
                  >
                    <Icon size={16} strokeWidth={2} />
                  </span>
                  <span className="inline-flex max-w-full items-center whitespace-nowrap rounded-full border border-[color:color-mix(in_srgb,var(--work-color-text)_24%,transparent)] bg-[var(--work-color-bg)] px-[7px] py-1 text-[10px] font-bold leading-none text-[var(--work-color-text)]">
                    {type}
                  </span>
                </div>

                <div className="grid gap-1.5">
                  <h3 className="m-0 text-[13px] font-semibold leading-[1.25] tracking-normal text-[#f7f7f2]">
                    {title}
                  </h3>
                  <p className="m-0 min-h-[33px] overflow-hidden text-[11px] font-medium leading-normal text-[#9da6b4] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                    {description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-3">
                  <span className="text-[10px] font-bold leading-none text-[#9da6b4]">
                    {year}
                  </span>
                  <a
                    className="inline-flex min-h-6 items-center justify-center gap-1 rounded-[5px] border border-white/10 bg-white/[0.035] px-2 py-1 text-[10px] font-medium leading-none text-[#f7f7f2] no-underline transition-[border-color,background-color] duration-200 hover:border-white/20 hover:bg-white/[0.065]"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
        <div className="mt-3.5 flex justify-center gap-2">
          {remainingCount > 0 ? (
            <button
              className="inline-flex min-h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[7px] border border-white/10 bg-white/[0.035] px-3 text-[11px] font-bold leading-none text-[#f7f7f2] transition-[transform,border-color,background-color] duration-200 hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.065]"
              type="button"
              onClick={showMoreProjects}
            >
              Show more
            </button>
          ) : null}

          {visibleCount > PROJECT_BATCH_SIZE ? (
            <button
              className="inline-flex min-h-[34px] cursor-pointer items-center justify-center gap-2 rounded-[7px] border border-white/10 bg-white/[0.035] px-3 text-[11px] font-bold leading-none text-[#f7f7f2] transition-[transform,border-color,background-color] duration-200 hover:-translate-y-px hover:border-white/20 hover:bg-white/[0.065]"
              type="button"
              onClick={showLessProjects}
            >
              Show less
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
