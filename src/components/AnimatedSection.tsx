import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade" | "rotate" | "blur" | "slide-up" | "bounce";
  delay?: number;
}

const AnimatedSection = ({
  children,
  id,
  className = "",
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getInitialStyles = (): React.CSSProperties => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: "translateY(0) translateX(0) scale(1) rotate(0deg)",
        filter: "blur(0px)",
        transitionDelay: `${delay}ms`,
      };
    }

    switch (animation) {
      case "fade-up":
        return { opacity: 0, transform: "translateY(60px)" };
      case "fade-left":
        return { opacity: 0, transform: "translateX(-80px)" };
      case "fade-right":
        return { opacity: 0, transform: "translateX(80px)" };
      case "scale":
        return { opacity: 0, transform: "scale(0.8)" };
      case "rotate":
        return { opacity: 0, transform: "rotate(-5deg) translateY(40px)" };
      case "blur":
        return { opacity: 0, filter: "blur(20px)", transform: "translateY(30px)" };
      case "slide-up":
        return { opacity: 0, transform: "translateY(100px) scale(0.95)" };
      case "bounce":
        return { opacity: 0, transform: "translateY(80px) scale(0.9)" };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  // Subtle parallax transform based on scroll
  const parallaxStyle: React.CSSProperties = isVisible
    ? {
        transform: `translateY(${(1 - scrollY) * 15}px)`,
      }
    : {};

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${className}`}
      style={{
        ...getInitialStyles(),
        ...parallaxStyle,
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
