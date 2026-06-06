import { createElement, useMemo } from "react";
import {
  BriefcaseBusiness,
  Download,
  Gamepad2,
  Home,
  Mail,
} from "lucide-react";

import FloatingDock from "../navigation/FloatingDock/FloatingDock";
import cv from "../../assets/cv_remali.pdf";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  SkillsSection,
  TrainingSection,
  WorkSection,
} from "../sections";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function PortfolioPage() {
  const dockItems = useMemo(
    () => [
      ...navItems.map(({ label, href, icon }) => ({
        label,
        icon: createElement(icon, { size: 19 }),
        onClick: () => {
          document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
        },
      })),
      {
        label: "CV",
        icon: createElement(Download, { size: 19 }),
        onClick: () => {
          const link = document.createElement("a");
          link.href = cv;
          link.download = "Hamza_Remali_CV.pdf";
          link.click();
        },
      },
      {
        label: "Portfolio Game",
        icon: createElement(Gamepad2, { size: 19 }),
        onClick: () => {
          window.open(
            "https://mini-games-h.vercel.app/",
            "_blank",
            "noreferrer",
          );
        },
      },
    ],
    [],
  );

  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-[#090b0f] bg-[linear-gradient(180deg,rgba(103,232,249,0.065),transparent_360px),radial-gradient(circle_at_18%_0%,rgba(167,243,208,0.1),transparent_280px),linear-gradient(145deg,rgba(253,230,138,0.045),transparent_36%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_48px] [mask-image:linear-gradient(to_bottom,black_0,transparent_78%)]"
        aria-hidden="true"
      />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <SkillsSection />
        <TrainingSection />
        <ContactSection />
      </main>
      <FloatingDock items={dockItems} orientation="horizontal" />
    </>
  );
}
