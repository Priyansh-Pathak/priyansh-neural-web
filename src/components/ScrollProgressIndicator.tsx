import { useState, useEffect } from "react";

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / totalScrollableHeight) * 100;

      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta transition-all duration-150 ease-out shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
