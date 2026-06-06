import { createElement, useMemo } from "react";
import {
  Award,
  BriefcaseBusiness,
  Code2,
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
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Training", href: "#training", icon: Award },
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
        label: "Game",
        icon: createElement(Gamepad2, { size: 19 }),
        className: "dock-game",
        onClick: () => {
          window.open("https://hamzaremali.vercel.app/", "_blank", "noreferrer");
        },
      },
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
    ],
    [],
  );

  return (
    <>
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
