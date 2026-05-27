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
import "./Dock.css";

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
      className={`dock-item ${className}`.trim()}
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
          className={`dock-label ${className}`.trim()}
          role="tooltip"
        >
          {children}
        </Motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return <div className={`dock-icon ${className}`.trim()}>{children}</div>;
}

export default function Dock({
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
      className="dock-outer"
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
        className={`dock-panel ${className}`.trim()}
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
