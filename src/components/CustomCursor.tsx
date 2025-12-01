import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail point
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-8); // Keep last 8 trail points
      });

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest('input[type="button"]') ||
        target.closest('input[type="submit"]') ||
        target.closest(".cursor-pointer");

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-300"
          style={{
            left: point.x,
            top: point.y,
            width: `${4 + index * 2}px`,
            height: `${4 + index * 2}px`,
            transform: "translate(-50%, -50%)",
            opacity: (index + 1) / trail.length * 0.3,
            background: isHovering
              ? `radial-gradient(circle, hsl(var(--neon-magenta)) 0%, transparent 70%)`
              : `radial-gradient(circle, hsl(var(--neon-cyan)) 0%, transparent 70%)`,
          }}
        />
      ))}

      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div
          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? "border-neon-magenta shadow-[0_0_20px_rgba(255,0,255,0.6)]"
              : "border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.6)]"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHovering ? "bg-neon-magenta" : "bg-neon-cyan"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
