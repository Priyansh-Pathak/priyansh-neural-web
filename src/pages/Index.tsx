import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import ParallaxBackground from "@/components/ParallaxBackground";
import FloatingActionButton from "@/components/FloatingActionButton";

import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";

const Index = () => {
  const sections = ["hero", "about", "experience", "skills", "projects", "github", "contact"];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Get current section
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

      // Navigate with arrow keys
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
    <div className="min-h-screen bg-background/80 text-foreground relative z-[2]">
      <LoadingScreen />
      <ScrollProgressIndicator />
      <ParallaxBackground />
      <ParticlesBackground />
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="github">
        <GitHub />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Index;
