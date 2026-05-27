import { ArrowUpRight, ExternalLink } from "lucide-react";

import SectionTitle from "../common/SectionTitle";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import { projects } from "../../data/portfolioData";

export default function Work() {
  const featured = projects.slice(0, 9);
  const rest = projects.slice(9);

  return (
    <section className="section shell" id="work">
      <SectionTitle eyebrow="Work" title="A broad portfolio, organized for quick review.">
        The bigger systems are first, followed by stores, finance tools,
        learning apps, games, API experiments, and compact utilities.
      </SectionTitle>

      <div className="featured-grid">
        {featured.map(({ title, type, description, link }) => (
          <SpotlightCard
            key={link}
            className="project-card featured"
            spotlightColor="rgba(255, 255, 255, 0.13)"
          >
            <span>{type}</span>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Open project
              <ExternalLink size={16} />
            </a>
          </SpotlightCard>
        ))}
      </div>

      <div className="compact-work">
        {rest.map(({ title, type, description, link }) => (
          <a key={link} href={link} target="_blank" rel="noopener noreferrer">
            <span>{type}</span>
            <strong>{title}</strong>
            <p>{description}</p>
            <ArrowUpRight size={15} />
          </a>
        ))}
      </div>
    </section>
  );
}
