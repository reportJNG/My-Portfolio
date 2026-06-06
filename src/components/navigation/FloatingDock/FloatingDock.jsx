import {
  AnimatePresence,
  motion as Motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";

function DockItem({
  children,
  className = "",
  label,
  onClick,
  pointerPosition,
  spring,
  distance,
  magnification,
  baseItemSize,
  orientation,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(pointerPosition, (value) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: baseItemSize,
      height: baseItemSize,
    };

    if (orientation === "vertical") {
      return value - rect.y - rect.height / 2;
    }

    return value - rect.x - rect.width / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );
  const size = useSpring(targetSize, spring);
  const itemSize =
    typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
      ? baseItemSize
      : size;

  return (
    <Motion.div
      ref={ref}
      style={{ width: itemSize, height: itemSize }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
      className={[
        "relative inline-flex flex-none cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.065] text-[#f7f7f2] outline-none transition-[border-color,background-color,box-shadow] duration-150",
        "hover:border-cyan-300/40 hover:bg-white/10 hover:shadow-[0_10px_34px_rgba(103,232,249,0.14)] focus-visible:border-cyan-300/40 focus-visible:bg-white/10 focus-visible:shadow-[0_10px_34px_rgba(103,232,249,0.14)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      tabIndex={0}
      role="button"
      aria-label={label}
    >
      {Children.map(children, (child) => cloneElement(child, { isHovered }))}
    </Motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <Motion.div
          initial={{ opacity: 0, y: 6, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.96 }}
          transition={{ duration: 0.16 }}
          className={[
            "absolute bottom-[calc(100%+8px)] left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-full border border-white/20 bg-slate-50 px-[0.52rem] py-[0.22rem] text-[0.68rem] font-extrabold leading-none text-[#0b0d10] max-md:hidden",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
          role="tooltip"
        >
          {children}
        </Motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={["relative z-10 flex items-center justify-center", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

export default function FloatingDock({
  items,
  className = "",
  spring = { mass: 0.12, stiffness: 170, damping: 18 },
  magnification = 54,
  distance = 120,
  baseItemSize = 44,
  orientation = "horizontal",
}) {
  const pointerPosition = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);
  const panelScale = useSpring(useTransform(isHovered, [0, 1], [0.98, 1]), spring);

  return (
    <Motion.nav
      className="pointer-events-none fixed inset-x-0 bottom-[max(14px,env(safe-area-inset-bottom))] z-[999] flex w-full max-w-full justify-center max-md:bottom-[max(12px,env(safe-area-inset-bottom))]"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Portfolio navigation"
    >
      <Motion.div
        onPointerMove={(event) => {
          if (event.pointerType === "touch") return;

          isHovered.set(1);
          pointerPosition.set(orientation === "vertical" ? event.clientY : event.clientX);
        }}
        onPointerLeave={() => {
          isHovered.set(0);
          pointerPosition.set(Infinity);
        }}
        className={[
          "pointer-events-auto flex max-w-[calc(100vw-24px)] origin-center items-center justify-center gap-[0.35rem] rounded-[14px] border border-white/15 bg-[#080a0e]/70 p-[0.42rem] shadow-[0_18px_60px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl backdrop-saturate-[1.16] max-md:max-w-[calc(100vw-18px)] max-md:overflow-x-auto max-md:[scrollbar-width:none] max-[420px]:gap-[0.28rem] [&::-webkit-scrollbar]:hidden",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        data-orientation={orientation}
        style={{ scale: panelScale }}
        role="toolbar"
      >
        {items.map((item, index) => (
          <DockItem
            key={item.label ?? index}
            label={item.label}
            onClick={item.onClick}
            className={item.className}
            pointerPosition={pointerPosition}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            orientation={orientation}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </Motion.div>
    </Motion.nav>
  );
}
