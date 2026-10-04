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
        threshold: 0.06,
        rootMargin: "0px 0px -40px 0px",
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
        return { opacity: 0, transform: "translateY(18px)" };
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

  return (
    <section
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        ...getInitialStyles(),
      }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
