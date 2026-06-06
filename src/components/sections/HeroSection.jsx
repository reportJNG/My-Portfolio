import { ArrowUpRight, Download, Mail } from "lucide-react";

import profile from "../../assets/me.png";
import GradientText from "../effects/GradientText/GradientText";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import TiltedCard from "../effects/TiltedCard/TiltedCard";
import { stats } from "../../data/portfolioData";

export default function Hero({ onDownload }) {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <GradientText showBorder animationSpeed={9}>
          Full-stack Next.js developer
        </GradientText>

        <p className="hero-lede">
          Hamza Remali. Clean dashboards, stores, admin panels, API tools, and
          full-stack products with real business flow.
        </p>

        <div className="hero-actions">
          <a className="button dark" href="#work">
            See work
            <ArrowUpRight size={17} />
          </a>
          <a className="button light" href="#contact">
            Contact
            <Mail size={17} />
          </a>
          <button className="button ghost" type="button" onClick={onDownload}>
            Download CV
            <Download size={17} />
          </button>
        </div>
      </div>

      <div className="hero-card-wrap">
        <TiltedCard
          imageSrc={profile}
          altText="Remali Hamza"
          captionText="Remali Hamza"
          containerHeight="360px"
          imageHeight="360px"
          imageWidth="290px"
          displayOverlayContent
        />
      </div>

      <div className="stats">
        {stats.map(([value, label]) => (
          <SpotlightCard
            className="stat"
            spotlightColor="rgba(103, 232, 249, 0.12)"
            key={label}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
