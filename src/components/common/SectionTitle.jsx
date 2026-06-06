import GradientText from "../effects/GradientText/GradientText";

export default function SectionTitle({ eyebrow, children }) {
  return (
    <div className="section-title">
      <GradientText showBorder animationSpeed={9}>
        {eyebrow}
      </GradientText>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
