import { useEffect, useRef, useState } from "react";

interface GlowPosition {
  x: number;
  y: number;
}

export const useMouseGlow = <T extends HTMLElement>() => {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState<GlowPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const glowStyle = {
    "--glow-x": `${position.x}px`,
    "--glow-y": `${position.y}px`,
    "--glow-opacity": isHovering ? "1" : "0",
  } as React.CSSProperties;

  return { ref, glowStyle, isHovering, position };
};

export default useMouseGlow;
