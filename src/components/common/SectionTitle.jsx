import GradientText from "../effects/GradientText/GradientText";

export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="section-title">
      <GradientText showBorder animationSpeed={9}>
        {eyebrow}
      </GradientText>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
