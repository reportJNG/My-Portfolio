import { ArrowUpRight, Download, Gamepad2, Mail } from "lucide-react";

import cv from "../../assets/cv_remali.pdf";
import profile from "../../assets/me.png";
import GradientText from "../effects/GradientText/GradientText";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import TiltedCard from "../effects/TiltedCard/TiltedCard";
import { stats } from "../../data/portfolioData";

export default function Hero() {
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
          <a className={`${buttonBase} border-transparent bg-[#f7f7f2] text-[#080a0d]`} href="#work">
            See work
            <ArrowUpRight size={17} />
          </a>
          <a className={`${buttonBase} border-white/20 bg-white/[0.06] text-[#f7f7f2]`} href="#contact">
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
            className={`${buttonBase} relative isolate min-w-44 overflow-hidden border-cyan-300/40 bg-[#101318] text-[#f7f7f2] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_10px_28px_rgba(103,232,249,0.08)] [perspective:120px] before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(90deg,transparent,rgba(167,243,208,0.22),transparent),linear-gradient(135deg,rgba(103,232,249,0.34),transparent_42%),linear-gradient(315deg,rgba(253,230,138,0.22),transparent_46%)] before:opacity-70 after:absolute after:inset-0 after:-z-10 after:bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] after:bg-[length:10px_10px] after:opacity-10 hover:border-emerald-200/75 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08),0_14px_36px_rgba(103,232,249,0.16)] [&_svg]:drop-shadow-[0_0_7px_rgba(103,232,249,0.45)]`}
            href="https://hamzaremali.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute inset-0 -z-10 overflow-hidden [transform-style:preserve-3d]" aria-hidden="true">
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(253,230,138,0.52)_0_4px,transparent_5px),linear-gradient(180deg,rgba(103,232,249,0.28),rgba(16,19,24,0.2)_60%)]" />
              <span className="absolute bottom-[9px] left-[-16px] right-[-16px] h-6 animate-pulse bg-[radial-gradient(32px_20px_at_18%_100%,rgba(167,243,208,0.46)_0_68%,transparent_70%),radial-gradient(42px_24px_at_48%_100%,rgba(103,232,249,0.34)_0_68%,transparent_70%),radial-gradient(34px_22px_at_82%_100%,rgba(167,243,208,0.4)_0_68%,transparent_70%)] drop-shadow-[0_5px_10px_rgba(0,0,0,0.18)] [transform:translateZ(-22px)_scale(1.18)]" />
              <span className="absolute bottom-[-10px] left-[-12px] right-[-12px] h-[21px] bg-[repeating-linear-gradient(90deg,rgba(253,230,138,0.34)_0_8px,rgba(167,243,208,0.28)_8px_16px),linear-gradient(180deg,rgba(167,243,208,0.46),rgba(103,232,249,0.18))] shadow-[0_-5px_14px_rgba(167,243,208,0.14)] [transform-origin:bottom] [transform:rotateX(58deg)_translateY(2px)_translateZ(14px)]" />
              <span className="absolute bottom-[11px] left-[26px] h-2 w-2 animate-bounce border border-[#f7f7f2]/50 bg-yellow-200/60 shadow-[3px_3px_0_rgba(103,232,249,0.26),0_0_10px_rgba(253,230,138,0.32)] [transform:rotateX(48deg)_rotateZ(45deg)]" />
              <span className="absolute bottom-[11px] right-[30px] h-2 w-2 animate-bounce border border-[#f7f7f2]/50 bg-yellow-200/60 shadow-[3px_3px_0_rgba(103,232,249,0.26),0_0_10px_rgba(253,230,138,0.32)] [animation-delay:160ms] [transform:rotateX(48deg)_rotateZ(45deg)]" />
              <span className="absolute bottom-[15px] left-1/2 h-[9px] w-[9px] -translate-x-1/2 animate-bounce rounded-b-[5px] rounded-t-sm bg-[#f7f7f2] shadow-[0_-6px_0_-2px_rgba(103,232,249,0.9),0_0_14px_rgba(103,232,249,0.48)]" />
            </span>
            <Gamepad2 size={18} />
            Game portfolio
            <ArrowUpRight size={17} />
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
