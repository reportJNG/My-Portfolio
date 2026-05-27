import { ArrowUpRight, Download, Mail } from "lucide-react";

import profile from "../assets/me.png";
import BlurText from "../components/react-bits/BlurText/BlurText";
import GradientText from "../components/react-bits/GradientText/GradientText";
import SpotlightCard from "../components/react-bits/SpotlightCard/SpotlightCard";
import TiltedCard from "../components/react-bits/TiltedCard/TiltedCard";
import { stats } from "../data/portfolioData";

export default function Hero({ onDownload }) {
  return (
    <section className="hero shell" id="home">
      <div className="hero-copy">
        <GradientText showBorder animationSpeed={9}>
          Next.js developer / full-stack builder
        </GradientText>

        <BlurText
          text="I build the product, not just the screen."
          className="hero-title"
          delay={45}
          direction="bottom"
        />

        <p className="hero-lede">
          I am Hamza Remali, a 20-year-old developer from Algeria. I build
          dashboards, stores, admin panels, games, API tools, and full-stack apps
          with Next.js, React, TypeScript, databases, auth, and the right tools
          for the job.
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
          containerHeight="430px"
          imageHeight="430px"
          imageWidth="340px"
          overlayContent={
            <div className="profile-overlay">
              <strong>Remali Hamza</strong>
              <span>Next.js, React, APIs, databases, dashboards</span>
            </div>
          }
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
