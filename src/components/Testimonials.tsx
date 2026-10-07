import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useMouseGlow from "@/hooks/useMouseGlow";

const testimonials = [
  {
    role: "Research Supervisor, IIT Mandi",
    content:
      "Priyansh demonstrated exceptional aptitude in AI research. His work on face recognition systems showed both technical depth and innovative thinking.",
  },
  {
    role: "Team Lead, AIEnsured",
    content:
      "A dedicated intern who quickly grasped complex ML concepts. His contributions to our FATE framework were invaluable and showed great attention to detail.",
  },
  {
    role: "Project Manager, Sky Brisk Technologies",
    content:
      "Priyansh's ability to optimize ML models and collaborate effectively made him stand out. He consistently delivered quality work ahead of deadlines.",
  },
  {
    role: "Faculty, SRM Institute",
    content:
      "Priyansh stands out in AI/ML. His project work demonstrates a rare combination of theoretical knowledge and practical implementation skills.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { ref, glowStyle, isHovering } = useMouseGlow<HTMLDivElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Recommendations
          </span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          What people say about working with me
        </p>

        {/* Testimonial Card */}
        <div className="relative">
          <div
            ref={ref}
            style={glowStyle}
            className={`relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 md:p-12 transition-all duration-300 overflow-hidden ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            } ${isHovering ? "border-neon-cyan/30" : ""}`}
          >
            {/* Mouse glow effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                background: `radial-gradient(600px circle at var(--glow-x) var(--glow-y), hsl(var(--neon-cyan) / 0.15), transparent 40%)`,
                opacity: `var(--glow-opacity)`,
              }}
            />
            
            <Quote className="w-12 h-12 text-neon-cyan/30 mb-6 relative z-10" />

            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 min-h-[100px] relative z-10">
              "{testimonials[currentIndex].content}"
            </p>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Quote className="w-6 h-6 text-background" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-card/80 border border-border/50 text-foreground hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-200 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-neon-cyan to-neon-purple"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
