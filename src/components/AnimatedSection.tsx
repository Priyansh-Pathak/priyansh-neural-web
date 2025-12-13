import { ReactNode, useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
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
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-12`;
        case "fade-left":
          return `${baseClasses} opacity-0 -translate-x-12`;
        case "fade-right":
          return `${baseClasses} opacity-0 translate-x-12`;
        case "scale":
          return `${baseClasses} opacity-0 scale-95`;
        case "fade":
          return `${baseClasses} opacity-0`;
        default:
          return `${baseClasses} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <section
      ref={ref}
      id={id}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
