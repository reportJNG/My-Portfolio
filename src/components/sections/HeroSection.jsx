import { ArrowUpRight, Download, Gamepad2, Mail } from "lucide-react";

import cv from "../../assets/cv_remali.pdf";
import profile from "../../assets/me.png";
import GradientText from "../effects/GradientText/GradientText";
import SpotlightCard from "../effects/SpotlightCard/SpotlightCard";
import TiltedCard from "../effects/TiltedCard/TiltedCard";
import { stats } from "../../data/portfolioData";

export default function Hero() {
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
          <a className="button ghost" href={cv} download="Hamza_Remali_CV.pdf">
            Download CV
            <Download size={17} />
          </a>
          <a
            className="button game"
            href="https://hamzaremali.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="game-button-bg" aria-hidden="true" />
            <Gamepad2 size={18} />
            Game portfolio
            <ArrowUpRight size={17} />
          </a>
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
