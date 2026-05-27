import { createElement, useCallback, useMemo, useRef, useState } from "react";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  Download,
  Home,
  Mail,
} from "lucide-react";

import Dock from "./components/react-bits/Dock/Dock";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Training from "./sections/Training";
import Work from "./sections/Work";

const navItems = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Work", href: "#work", icon: BriefcaseBusiness },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Training", href: "#training", icon: Award },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function App() {
  const pageRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = useCallback(async () => {
    if (!pageRef.current || isExporting) return;

    setIsExporting(true);
    try {
      const { default: html2pdf } = await import("html2pdf.js");

      await html2pdf()
        .from(pageRef.current)
        .set({
          margin: 0.35,
          filename: "Hamza_Portfolio.pdf",
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        })
        .save();
    } finally {
      setIsExporting(false);
    }
  }, [isExporting]);

  const dockItems = useMemo(
    () =>
      [
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
          onClick: handleDownload,
        },
      ],
    [handleDownload],
  );

  return (
    <>
      <main ref={pageRef} aria-busy={isExporting}>
        <Hero onDownload={handleDownload} />
        <About />
        <Work />
        <Skills />
        <Training />
        <Contact />
      </main>
      <Dock items={dockItems} orientation="horizontal" />
    </>
  );
}
