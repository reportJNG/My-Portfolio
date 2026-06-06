import { ArrowUpRight, Download, Gamepad2, Mail } from "lucide-react";

import bgButton from "../../assets/bg-button.gif";
import cv from "../../assets/cv_remali.pdf";
import profile from "../../assets/me.png";
import { stats } from "../../data/portfolioData";
import GradientText from "../effects/GradientText/GradientText";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import TiltedCard from "../effects/TiltedCard/TiltedCard";

export default function HeroSection() {
  const buttonBase =
    "inline-flex min-h-10 items-center justify-center gap-[9px] rounded-lg border px-[13px] text-[0.92rem] font-extrabold no-underline transition-[transform,border-color,background-color,color,box-shadow] duration-150 hover:-translate-y-px max-md:w-full";

  return (
    <section
      className="mx-auto grid min-h-[88svh] w-[min(calc(100%-28px),1080px)] grid-cols-[minmax(0,1fr)_minmax(280px,360px)] items-center gap-[clamp(28px,5vw,54px)] py-[42px] pb-[34px] max-lg:min-h-0 max-lg:grid-cols-1 max-lg:gap-7 max-md:block max-md:w-[min(calc(100%-24px),1080px)] max-md:overflow-hidden max-md:pt-[34px]"
      id="home"
    >
      <div className="min-w-0 max-md:w-full">
        <GradientText showBorder animationSpeed={9}>
          Full-stack Next.js developer
        </GradientText>

        <p className="mt-3.5 max-w-[470px] text-[0.86rem] font-semibold leading-[1.46] text-[#c7ced8] max-md:w-full max-md:max-w-[38rem] max-md:[overflow-wrap:anywhere]">
          Hamza Remali. Clean dashboards, stores, admin panels, API tools, and
          full-stack products with real business flow.
        </p>

        <div className="mt-[18px] flex flex-wrap gap-2.5 max-md:grid max-md:w-full">
          <a
            className={`${buttonBase} border-transparent bg-[#f7f7f2] text-[#080a0d]`}
            href="#work"
          >
            See work
            <ArrowUpRight size={17} />
          </a>
          <a
            className={`${buttonBase} border-white/20 bg-white/[0.06] text-[#f7f7f2]`}
            href="#contact"
          >
            Contact
            <Mail size={17} />
          </a>
          <a
            className={`${buttonBase} border-yellow-200/35 bg-yellow-200/[0.06] text-yellow-200`}
            href={cv}
            download="Hamza_Remali_CV.pdf"
          >
            Download CV
            <Download size={17} />
          </a>
          <a
            aria-label="Open portfolio game"
            className="group relative isolate inline-flex min-h-10 items-center justify-center gap-2 overflow-hidden rounded-lg border border-cyan-200/35 bg-cover bg-center bg-no-repeat px-3.5 text-[0.78rem] font-black uppercase leading-none tracking-[0.08em] text-white no-underline shadow-[0_10px_28px_rgba(35,211,238,0.16),inset_0_0_0_1px_rgba(255,255,255,0.16)] transition-[transform,border-color,box-shadow] duration-150 [font-family:'Trebuchet_MS',Inter,system-ui,sans-serif] [text-shadow:0_2px_8px_rgba(0,0,0,0.95)] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.34)_48%,rgba(0,0,0,0.68))] before:content-[''] hover:-translate-y-px hover:border-cyan-100/70 hover:shadow-[0_14px_34px_rgba(35,211,238,0.22),inset_0_0_0_1px_rgba(255,255,255,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-100 max-md:w-full"
            href="https://hamzaremali.vercel.app/"
            rel="noopener noreferrer"
            style={{ backgroundImage: `url(${bgButton})` }}
            target="_blank"
          >
            <span className="relative z-10">Portfolio game</span>
            <span
              className="relative z-10 inline-flex h-[23px] w-[23px] items-center justify-center rounded-md border border-white/25 bg-black/35 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
              aria-hidden="true"
            >
              <Gamepad2 size={15} strokeWidth={2.4} />
            </span>
          </a>
        </div>
      </div>

      <div className="w-[min(100%,360px)] justify-self-end max-lg:justify-self-start max-md:mt-[26px] max-md:w-full">
        <TiltedCard
          imageSrc={profile}
          altText="Remali Hamza"
          captionText="Remali Hamza"
          containerHeight="360px"
          imageHeight="360px"
          imageWidth="290px"
          displayOverlayContent
        />
      </div>

      <div className="col-span-full grid grid-cols-4 gap-2.5 max-lg:grid-cols-2 max-md:mt-[26px] max-md:grid-cols-1">
        {stats.map(([value, label]) => (
          <SpotlightCard
            className="grid min-h-[86px] gap-[5px] p-[15px] [&_span]:text-[0.88rem] [&_span]:font-bold [&_span]:text-[#9da6b4] [&_strong]:text-[1.52rem] [&_strong]:font-black"
            key={label}
            spotlightColor="rgba(103, 232, 249, 0.12)"
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
