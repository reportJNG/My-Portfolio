import { useCallback, useRef, useState } from "react";

const pdfOptions = {
  margin: 0.35,
  filename: "Hamza_Portfolio.pdf",
  html2canvas: { scale: 2, useCORS: true },
  jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
};

export function usePortfolioPdf() {
  const pageRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);

  const exportPdf = useCallback(async () => {
    if (!pageRef.current || isExporting) return;

    setIsExporting(true);
    try {
      const { default: html2pdf } = await import("html2pdf.js");
      await html2pdf().from(pageRef.current).set(pdfOptions).save();
    } finally {
      setIsExporting(false);
    }
  }, [isExporting]);

  return { pageRef, isExporting, exportPdf };
}
