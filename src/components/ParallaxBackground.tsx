const ParallaxBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Slow moving orbs - Layer 1 (slowest) */}
      <div
        className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-glow-pulse"
        style={{ animationDuration: "24s" }}
      />
      <div
        className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[120px] animate-glow-pulse"
        style={{ animationDelay: "1.5s", animationDuration: "28s" }}
      />

      {/* Medium speed orbs - Layer 2 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/15 rounded-full blur-[150px] animate-pulse"
        style={{ animationDuration: "32s" }}
      />
      
      {/* Faster moving orbs - Layer 3 */}
      <div
        className="absolute top-[60%] left-[20%] w-80 h-80 bg-neon-cyan/15 rounded-full blur-[100px] animate-float"
        style={{ animationDuration: "22s" }}
      />
      <div
        className="absolute top-[80%] right-[15%] w-72 h-72 bg-neon-purple/15 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "2s", animationDuration: "26s" }}
      />

      {/* Additional ambient orbs */}
      <div
        className="absolute top-[40%] right-[30%] w-64 h-64 bg-neon-magenta/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "3s", animationDuration: "30s" }}
      />
    </div>
  );
};

export default ParallaxBackground;
