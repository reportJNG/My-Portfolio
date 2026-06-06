import { useRef, useState } from "react";
import { motion as Motion, useMotionValue, useSpring } from "motion/react";

const springValues = {
  damping: 32,
  stiffness: 140,
  mass: 1.1,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "360px",
  containerWidth = "100%",
  imageHeight = "360px",
  imageWidth = "320px",
  scaleOnHover = 1.02,
  rotateAmplitude = 6,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });
  const [lastY, setLastY] = useState(0);

  function handleMouse(event) {
    if (
      !ref.current ||
      window.matchMedia("(max-width: 760px), (pointer: coarse), (prefers-reduced-motion: reduce)")
        .matches
    ) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    rotateFigcaption.set(-(offsetY - lastY) * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative m-0 flex h-full w-full items-center justify-center [contain:layout_paint] [perspective:800px] max-md:mt-6 max-md:[perspective:none]"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Motion.div
        className="relative max-w-full overflow-hidden rounded-lg border border-white/10 bg-[#101318] shadow-[0_22px_70px_rgba(0,0,0,0.3)] will-change-transform [transform-style:preserve-3d] max-md:!h-[min(390px,110vw)] max-md:!w-full max-md:!max-w-full max-md:!transform-none"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <Motion.img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 block object-cover [transform:translateZ(0)] max-md:!h-[min(390px,110vw)] max-md:!w-full max-md:!max-w-full"
          style={{ width: imageWidth, height: imageHeight }}
        />
        {displayOverlayContent && overlayContent ? (
          <Motion.div className="absolute inset-x-3.5 bottom-3.5 z-20 [transform:translateZ(32px)]">
            {overlayContent}
          </Motion.div>
        ) : null}
      </Motion.div>

      {showTooltip ? (
        <Motion.figcaption
          className="pointer-events-none absolute left-0 top-0 z-30 rounded-full border border-white/10 bg-slate-50 px-2.5 py-1 text-[0.72rem] font-bold text-[#0b0d10]"
          style={{ x, y, opacity, rotate: rotateFigcaption }}
        >
          {captionText}
        </Motion.figcaption>
      ) : null}
    </figure>
  );
}
