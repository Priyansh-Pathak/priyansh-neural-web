import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setLineProgress(100);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const experiences = [
    {
      title: "Research Intern",
      company: "IIT Mandi",
      location: "Himachal Pradesh, India",
      period: "May 2025 – Jul 2025",
      description: [
        "AI-based video attendance research with face recognition & Siamese networks",
        "Implemented pipelines using TensorFlow/Keras, MTCNN, triplet loss",
        "Dataset preprocessing, model evaluation, literature survey",
      ],
      tech: ["Python", "TensorFlow", "Keras", "MTCNN", "Siamese Networks", "OpenCV"],
      milestone: "🔬",
    },
    {
      title: "AI Intern",
      company: "AIEnsured",
      location: "Remote",
      period: "Jul 2025 – Sep 2025",
      description: [
        "Developed/fine-tuned ML models for fairness, robustness, explainability",
        "Automated model evaluation pipelines; documented results for auditability",
        "Integrated AI governance tools into client workflows",
      ],
      tech: ["Python", "Scikit-learn", "XAI", "Model Evaluation", "ML Pipelines"],
      milestone: "🤖",
    },
    {
      title: "AI/ML Intern",
      company: "Sky Brisk Technologies",
      location: "Remote",
      period: "2024",
      description: [
        "Built predictive analytics models; feature engineering & hyperparameter tuning",
        "Performance optimization; collaborated on deployment of AI solutions",
      ],
      tech: ["Python", "Machine Learning", "Feature Engineering", "Model Deployment"],
      milestone: "📊",
    },
  ];

  return (
    <section 
      ref={ref}
      id="experience" 
      className={`py-24 px-6 lg:px-8 bg-muted/30 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-neon-cyan/30">
            <span className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Career Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2">
            {/* Animated fill */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-magenta rounded-full transition-all duration-[2000ms] ease-out shadow-[0_0_15px_rgba(0,255,255,0.6)]"
              style={{ height: `${lineProgress}%` }}
            />
            {/* Glowing orb that travels down */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-neon-cyan rounded-full shadow-[0_0_20px_rgba(0,255,255,0.8),0_0_40px_rgba(0,255,255,0.4)] transition-all duration-[2000ms] ease-out"
              style={{ top: `${lineProgress}%`, opacity: lineProgress < 100 ? 1 : 0 }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } opacity-0 animate-fade-in`}
                style={{ animationDelay: `${0.5 + index * 0.3}s`, animationFillMode: "forwards" }}
              >
                {/* Milestone Marker */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 w-14 h-14 -translate-x-[7px] -translate-y-[7px] rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-30 blur-md animate-pulse" />
                  
                  {/* Main marker */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-card via-card to-muted border-2 border-neon-cyan/50 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.4)] group hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{exp.milestone}</span>
                    
                    {/* Rotating ring */}
                    <div className="absolute inset-[-4px] rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-purple animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  
                  {/* Connecting horizontal line */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r ${
                      index % 2 === 0 
                        ? 'left-full from-neon-cyan/60 to-transparent md:w-8' 
                        : 'right-full from-transparent to-neon-cyan/60 md:w-8'
                    } hidden md:block`}
                  />
                </div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'} ml-20 md:ml-0`}>
                  <Card className="group relative p-6 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                    <div className="relative space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-medium bg-gradient-to-r from-neon-purple to-neon-magenta bg-clip-text text-transparent">
                            {exp.company}
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-300">
                          <Briefcase className="w-5 h-5 text-neon-cyan" />
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 text-neon-cyan">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start gap-3">
                            <span className="text-neon-cyan mt-0.5 text-lg">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-neon-cyan/10">
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-muted/80 to-muted/40 text-xs font-medium border border-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* End marker */}
          <div className="absolute left-6 md:left-1/2 -translate-x-1/2 bottom-0 translate-y-8">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
