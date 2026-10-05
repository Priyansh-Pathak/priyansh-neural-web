import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import BackToTop from "@/components/BackToTop";
import AnimatedSection from "@/components/AnimatedSection";

import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";

const Index = () => {
  const sections = ["hero", "about", "projects", "experience", "skills", "publications", "education", "achievements", "github", "contact"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSectionIndex = 0;

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          if (scrollPosition >= elementTop) {
            currentSectionIndex = index;
          }
        }
      });

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
        const nextSection = document.getElementById(sections[nextIndex]);
        nextSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex = Math.max(currentSectionIndex - 1, 0);
        const prevSection = document.getElementById(sections[prevIndex]);
        prevSection?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgressIndicator />
      <Navigation />
      
      <section id="hero">
        <Hero />
      </section>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={50}>
        <Projects />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={50}>
        <Experience />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={50}>
        <Skills />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={50}>
        <Publications />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={50}>
        <Education />
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay={50}>
        <Achievements />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={50}>
        <GitHub />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={50}>
        <Contact />
      </AnimatedSection>
      
      <Footer />
      <FloatingActionButton />
      <BackToTop />
    </div>
  );
};

export default Index;
