import { ShieldCheck } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import { facts } from "../../data/portfolioData";

export default function About() {
  return (
    <section className="section shell" id="about">
      <SectionTitle eyebrow="Profile">
        Live projects, real flows, better versions.
      </SectionTitle>

      <div className="about-grid">
        <SpotlightCard className="about-main" spotlightColor="rgba(167, 243, 208, 0.12)">
          <ShieldCheck size={26} />
          <h3>How I work</h3>
          <p>
            I build apps that make sense fast: clear data, simple flows, useful
            dashboards, good forms, honest feedback, and code ready for the next
            version. I work across UI, backend, auth, databases, APIs, and
            deployment.
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
