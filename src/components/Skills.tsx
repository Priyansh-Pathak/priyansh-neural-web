import { Code2, Globe, Wrench, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
      color: "primary",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Flask"],
      color: "neural-blue",
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["OpenCV", "Selenium", "MATLAB", "Git", "TensorFlow", "Keras"],
      color: "secondary",
    },
    {
      title: "Other Skills",
      icon: Cpu,
      skills: ["Responsive Design", "Testing", "API Integration", "Model Deployment"],
      color: "neural-purple",
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-magenta/5 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-neon-cyan/30">
            <span className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Tech Arsenal</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent animate-neon-glow">Skills</span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)] animate-border-flow" style={{ backgroundSize: "200% 200%" }} />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build intelligent, scalable solutions
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="group relative p-8 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Animated Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                
                <div className="relative space-y-6">
                  {/* Enhanced Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300 backdrop-blur-sm border border-neon-cyan/30">
                      <Icon className="w-7 h-7 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Enhanced Skills Pills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="group/pill relative px-5 py-2.5 rounded-lg bg-gradient-to-r from-muted/80 to-muted/60 backdrop-blur-sm border border-border/50 hover:border-neon-cyan/50 text-sm font-semibold hover:text-neon-cyan transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:scale-105"
                      >
                        <span className="relative z-10">{skill}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-lg opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300" />
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Proficiency Note */}
        <div className="mt-16 text-center">
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-xl border border-neon-purple/20 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <p className="text-foreground/90 font-medium">
              🚀 Proficient in building <span className="text-neon-cyan font-bold">end-to-end AI/ML solutions</span> from research to deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
