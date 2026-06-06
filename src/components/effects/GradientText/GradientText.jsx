import { useState, useCallback, useEffect, useRef } from "react";
import {
  motion as Motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "motion/react";

export default function GradientText({
  children,
  className = "",
  colors = ["#f8fafc", "#67e8f9", "#a7f3d0"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef(null);
  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused || reducedMotion) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;
      progress.set(
        cycleTime < animationDuration
          ? (cycleTime / animationDuration) * 100
          : 100 - ((cycleTime - animationDuration) / animationDuration) * 100,
      );
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress, yoyo]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const backgroundPosition = useTransform(progress, (value) => {
    if (direction === "vertical") return `50% ${value}%`;
    return `${value}% 50%`;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  const gradientAngle =
    direction === "horizontal"
      ? "to right"
      : direction === "vertical"
        ? "to bottom"
        : "to bottom right";
  const gradientColors = [...colors, colors[0]].join(", ");

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: direction === "vertical" ? "100% 300%" : "300% 100%",
    backgroundRepeat: "repeat",
  };

  return (
    <Motion.div
      className={[
        "relative inline-flex max-w-fit items-center justify-center overflow-hidden rounded-full text-[0.82rem] font-bold",
        showBorder ? "px-[0.62rem] py-[0.3rem]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && (
        <Motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]"
          style={{ ...gradientStyle, backgroundPosition }}
        >
          <span className="absolute left-1/2 top-1/2 -z-10 h-[calc(100%-2px)] w-[calc(100%-2px)] -translate-x-1/2 -translate-y-1/2 rounded-[inherit] bg-[#090b0f]" />
        </Motion.div>
      )}
      <Motion.div
        className="relative z-10 inline-block bg-clip-text text-transparent [-webkit-background-clip:text]"
        style={{ ...gradientStyle, backgroundPosition }}
      >
        {children}
      </Motion.div>
    </Motion.div>
  );
}
