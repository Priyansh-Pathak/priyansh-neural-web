import { useEffect, useState } from "react";

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Slow moving orbs - Layer 1 (slowest) */}
      <div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-glow-pulse"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-glow-pulse"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          animationDelay: "1.5s",
        }}
      />

      {/* Medium speed orbs - Layer 2 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/15 rounded-full blur-[150px] animate-pulse"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)`,
        }}
      />
      
      {/* Faster moving orbs - Layer 3 */}
      <div
        className="absolute top-[60%] left-[20%] w-80 h-80 bg-neon-cyan/15 rounded-full blur-[100px] animate-float"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div
        className="absolute top-[80%] right-[15%] w-72 h-72 bg-neon-purple/15 rounded-full blur-[100px] animate-float"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
          animationDelay: "2s",
        }}
      />

      {/* Additional ambient orbs */}
      <div
        className="absolute top-[40%] right-[30%] w-64 h-64 bg-neon-magenta/10 rounded-full blur-[120px] animate-pulse"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
          animationDelay: "3s",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
