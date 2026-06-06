import { useEffect, useRef } from "react";

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.16)",
}) => {
  const divRef = useRef(null);
  const frameRef = useRef(null);
  const pointerRef = useRef({ x: "50%", y: "50%" });

  const handleMouseMove = (event) => {
    if (!divRef.current || event.pointerType === "touch") return;

    const rect = divRef.current.getBoundingClientRect();
    pointerRef.current = {
      x: `${event.clientX - rect.left}px`,
      y: `${event.clientY - rect.top}px`,
    };

    if (frameRef.current) return;

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null;
      divRef.current?.style.setProperty("--mouse-x", pointerRef.current.x);
      divRef.current?.style.setProperty("--mouse-y", pointerRef.current.y);
      divRef.current?.style.setProperty("--spotlight-color", spotlightColor);
    });
  };

  useEffect(
    () => () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  return (
    <div
      ref={divRef}
      onPointerMove={handleMouseMove}
      className={[
        "relative overflow-hidden rounded-lg border border-white/10 bg-[#101318] transition-[border-color,background-color,transform] duration-200",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_72%)] before:opacity-0 before:transition-opacity before:duration-300",
        "hover:border-white/20 hover:before:opacity-100 focus-within:before:opacity-100",
        "[--mouse-x:50%] [--mouse-y:50%] [--spotlight-color:rgba(255,255,255,0.16)]",
        "[&>*]:relative [&>*]:z-10",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
