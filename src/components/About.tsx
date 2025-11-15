import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import GlitchText from "@/components/GlitchText";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science (AI & ML)",
      period: "Aug 2023 – May 2027",
      coursework: ["Machine Learning", "Data Structures", "Software Engineering", "DBMS"],
    },
    {
      institution: "IIT Ropar",
      degree: "Minor in Artificial Intelligence",
      period: "Expected 2025",
      coursework: ["Deep Learning", "Neural Networks", "Computer Vision"],
    },
  ];

  return (
    <section 
      ref={ref}
      id="about" 
      className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-magenta/10 backdrop-blur-sm border border-neon-purple/30">
            <span className="text-sm font-semibold bg-gradient-to-r from-neon-purple to-neon-magenta bg-clip-text text-transparent">My Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            About <GlitchText text="Me" className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent" />
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full mx-auto shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-border-flow" style={{ backgroundSize: "200% 200%" }} />
        </div>

        {/* Enhanced Bio */}
        <div className="mb-20 max-w-3xl mx-auto animate-fade-in-up">
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-neon-cyan/20 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 rounded-2xl" />
            <p className="relative text-lg text-foreground/90 leading-relaxed text-center">
              Passionate and driven CS undergraduate specializing in <span className="text-neon-cyan font-bold">AI/ML</span>. Experienced in responsive 
              web applications and deploying AI models using industry-standard tools. Multiple internships 
              and hackathons demonstrating <span className="text-neon-purple font-bold">adaptability</span>, problem-solving, and strong coding skills. 
              Seeking impactful software development and research roles.
            </p>
          </div>
        </div>

        {/* Enhanced Education Timeline */}
        <div className="space-y-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-magenta/20 backdrop-blur-sm border border-neon-purple/30">
              <GraduationCap className="w-7 h-7 text-neon-purple" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-neon-purple to-neon-magenta bg-clip-text text-transparent">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="group relative p-8 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-neon-purple/20 hover:border-neon-purple/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-purple/20 to-neon-magenta/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                
                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-magenta/20 group-hover:from-neon-purple/30 group-hover:to-neon-magenta/30 transition-all duration-300 backdrop-blur-sm border border-neon-purple/30">
                      <BookOpen className="w-6 h-6 text-neon-purple group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-magenta/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 group-hover:text-neon-purple transition-colors duration-300">
                        {edu.institution}
                      </h4>
                      <p className="text-foreground/80 mb-3 font-medium">{edu.degree}</p>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-magenta/10 border border-neon-purple/30">
                        <span className="text-sm text-neon-purple font-semibold">{edu.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-neon-purple/20">
                    <p className="text-sm text-muted-foreground mb-3 font-medium">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2.5">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm text-sm font-medium border border-border/50 hover:border-neon-purple/50 hover:text-neon-purple transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
