import { useState, useEffect } from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Priyansh Pathak - AI/ML Engineer";

  useEffect(() => {
    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start fade out after typing is complete
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-1000 ${
        text === fullText ? "opacity-0" : "opacity-100"
      }`}
      style={{
        pointerEvents: text === fullText ? "none" : "auto",
      }}
    >
      <div className="text-center">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
              {text}
            </span>
            <span className="animate-pulse">|</span>
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta blur-3xl opacity-20 -z-10" />
        </div>

        {/* Loading dots animation */}
        <div className="flex justify-center gap-2 mt-8">
          <div
            className="w-3 h-3 rounded-full bg-neon-cyan animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-neon-purple animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-3 h-3 rounded-full bg-neon-magenta animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
