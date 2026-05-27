import { useEffect, useRef } from "react";
import "./SpotlightCard.css";

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
      className={`card-spotlight ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
