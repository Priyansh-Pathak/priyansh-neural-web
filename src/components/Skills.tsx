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
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-to-r from-primary to-neural-blue bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-neural-blue rounded-full mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Proficiency Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Proficient in building end-to-end AI/ML solutions from research to deployment
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-neural-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Skills;
