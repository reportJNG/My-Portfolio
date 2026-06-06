import GradientText from "../effects/GradientText/GradientText";

export default function SectionTitle({ eyebrow, children }) {
  return (
    <div className="mb-3.5 max-w-[440px]">
      <GradientText showBorder animationSpeed={9}>
        {eyebrow}
      </GradientText>
      {children ? (
        <p className="mt-2 max-w-[420px] text-[0.8rem] font-semibold leading-[1.4] text-[#9da6b4]">
          {children}
        </p>
      ) : null}
    </div>
  );
}
