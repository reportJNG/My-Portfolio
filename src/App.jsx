import { useRef } from 'react';
import html2pdf from 'html2pdf.js';

import Navbar from './components/Topnavbar';
import Footer from './components/Footer';
import Welcome from './Pages/Welcome';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Skills from './Pages/Skill';
import Certificates from './Pages/Certificates';

export default function App() {
  const pageRef = useRef();

  const handleDownload = () => {
    const element = pageRef.current;
    html2pdf().from(element).set({
      margin: 0.5,
      filename: 'Hamza_Portfolio.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).save();
  };

  return (
    <>
      <Navbar handleDownload={handleDownload} />

      <div ref={pageRef}>
        <div id="welcome">
          <Welcome />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="certificates">
          <Certificates />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
