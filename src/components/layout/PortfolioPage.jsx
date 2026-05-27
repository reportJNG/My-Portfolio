import { createElement, useMemo } from "react";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  Home,
  Mail,
} from "lucide-react";

import FloatingDock from "../navigation/FloatingDock/FloatingDock";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  SkillsSection,
  TrainingSection,
  WorkSection,
} from "../sections";
import { usePortfolioPdf } from "../../hooks/usePortfolioPdf";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Training", href: "#training", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function PortfolioPage() {
  const { pageRef, isExporting, exportPdf } = usePortfolioPdf();

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
        onClick: exportPdf,
      },
    ],
    [exportPdf],
  );

  return (
    <>
      <main ref={pageRef} aria-busy={isExporting}>
        <HeroSection onDownload={exportPdf} />
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
