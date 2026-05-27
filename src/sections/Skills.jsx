import SpotlightCard from "../components/react-bits/SpotlightCard/SpotlightCard";
import SectionTitle from "../components/ui/SectionTitle";
import { languages, skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section className="section shell" id="skills">
      <SectionTitle eyebrow="Stack" title="The stack I use to build complete apps.">
        Next.js is my main lane, but I work across the full product: UI, server
        logic, databases, auth, APIs, styling systems, and deployment.
      </SectionTitle>

      <div className="skills-grid">
        <SpotlightCard className="skill-panel">
          <h3>Languages</h3>
          <div className="language-grid">
            {languages.map(([name, years, icon]) => (
              <div className="language" key={name}>
                <i className={icon} aria-hidden="true" />
                <span>{name}</span>
                <small>{years}</small>
              </div>
            ))}
          </div>
        </SpotlightCard>

        <SpotlightCard className="skill-panel">
          <h3>Build Skills</h3>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
