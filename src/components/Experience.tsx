import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "IIT Mandi",
      period: "May 2025 – Jul 2025",
      description: [
        "AI-based video attendance research with face recognition & Siamese networks",
        "Implemented pipelines using TensorFlow/Keras, MTCNN, triplet loss",
        "Dataset preprocessing, model evaluation, literature survey",
      ],
      tech: ["Python", "TensorFlow", "Keras", "MTCNN", "Siamese Networks", "OpenCV"],
    },
    {
      title: "AI Intern",
      company: "AIEnsured",
      period: "Jul 2025 – Sep 2025",
      description: [
        "Developed/fine-tuned ML models for fairness, robustness, explainability",
        "Automated model evaluation pipelines; documented results for auditability",
        "Integrated AI governance tools into client workflows",
      ],
      tech: ["Python", "Scikit-learn", "XAI", "Model Evaluation", "ML Pipelines"],
    },
    {
      title: "AI/ML Intern",
      company: "Sky Brisk Technologies",
      period: "2024",
      description: [
        "Built predictive analytics models; feature engineering & hyperparameter tuning",
        "Performance optimization; collaborated on deployment of AI solutions",
      ],
      tech: ["Python", "Machine Learning", "Feature Engineering", "Model Deployment"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-primary to-neural-blue bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-neural-blue rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-neural-blue to-secondary" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50 z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-8 md:ml-0`}>
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-muted-foreground">{exp.company}</p>
                        </div>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-sm text-primary">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
