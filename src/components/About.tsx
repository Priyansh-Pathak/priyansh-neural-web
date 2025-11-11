import { GraduationCap, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
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
    <section id="about" className="py-24 px-6 lg:px-8 relative overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-neural-blue bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-neural-blue rounded-full mx-auto" />
        </div>

        {/* Bio */}
        <div className="mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <p className="text-lg text-foreground/90 leading-relaxed text-center">
            Passionate and driven CS undergraduate specializing in AI/ML. Experienced in responsive 
            web applications and deploying AI models using industry-standard tools. Multiple internships 
            and hackathons demonstrating adaptability, problem-solving, and strong coding skills. 
            Seeking impactful software development and research roles.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-muted-foreground mb-2">{edu.degree}</p>
                      <p className="text-sm text-primary font-medium">{edu.period}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-muted text-xs font-medium border border-border/50"
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

      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-neural-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default About;
