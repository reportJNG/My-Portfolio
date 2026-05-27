import { ShieldCheck } from "lucide-react";

import SpotlightCard from "../components/react-bits/SpotlightCard/SpotlightCard";
import SectionTitle from "../components/ui/SectionTitle";
import { facts } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section shell" id="about">
      <SectionTitle eyebrow="Profile" title="Real projects, real practice, real fixes.">
        I learn by building complete apps, shipping them, breaking things,
        fixing them, and making the next version cleaner.
      </SectionTitle>

      <div className="about-grid">
        <SpotlightCard className="about-main" spotlightColor="rgba(167, 243, 208, 0.12)">
          <ShieldCheck size={26} />
          <h3>How I work</h3>
          <p>
            I like apps that make sense from the first click: clear data,
            simple flows, useful dashboards, good forms, honest feedback, and
            code that can grow after the first version. I work across frontend,
            backend, auth, database structure, API connections, and deployment.
          </p>
        </SpotlightCard>

        <div className="fact-list">
          {facts.map(([label, value]) => (
            <SpotlightCard className="fact" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
