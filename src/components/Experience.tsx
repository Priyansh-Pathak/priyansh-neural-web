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
      title: "Research Intern — Robot Learning & Embodied AI",
      company: "Carnegie Mellon University — Xu Lab",
      location: "Remote",
      period: "Apr 2026 – Sept 2026",
      description: [
        "Developing educational Jupyter notebooks on Diffusion Policy and RLBench for the xulabs/edu repository",
        "Implementing hands-on experiments in imitation learning, task and motion planning, and manipulation benchmarks",
        "Contributing to reproducible open curriculum infrastructure and exploring vision-language models for robot manipulation",
      ],
      tech: ["Python", "Jupyter", "Diffusion Policy", "RLBench", "Imitation Learning", "Vision-Language Models"],
      milestone: "🤖",
    },
    {
      title: "Research Intern — School of AI & Data Engineering",
      company: "Indian Institute of Technology Ropar",
      location: "Ropar, India",
      period: "Jun 2026 – Aug 2026",
      description: [
        "Researched bacteriophage–host interaction prediction using deep learning on protein sequence datasets",
        "Designed and conducted experiments end-to-end, generating and evaluating experimental results",
        "Compared approaches, analyzed outcomes, and derived observations on model effectiveness",
      ],
      tech: ["Python", "Deep Learning", "Protein Sequences", "Computational Biology", "Model Evaluation"],
      milestone: "🧬",
    },
    {
      title: "AI/ML Intern — Document Automation",
      company: "QX Global Group",
      location: "Remote",
      period: "May 2026 – Jul 2026",
      description: [
        "Built an invoice verification pipeline from scanned documents to structured data through OCR labelling and extraction",
        "Used LayoutLM for layout-aware document understanding beyond plain text extraction",
        "Worked with real-world document variation where labelling quality drives downstream model quality",
      ],
      tech: ["Python", "OCR", "LayoutLM", "Document Understanding", "Model Training"],
      milestone: "📄",
    },
    {
      title: "Research Intern — AI Navigation & Path Planning",
      company: "DRDO CAIR",
      location: "Remote",
      period: "Jan 2026 – Mar 2026",
      description: [
        "Developing spatially-aware ML models for intelligent route planning in defense navigation systems",
        "Implementing and benchmarking graph-based and reinforcement learning algorithms for path optimization",
        "Reproducing and extending recent research algorithms to establish comparative baselines",
      ],
      tech: ["Python", "Graph Algorithms", "Reinforcement Learning", "Path Planning", "Research"],
      milestone: "🧭",
    },
    {
      title: "Research Intern — Computer Vision & Deep Learning",
      company: "Indian Institute of Technology Mandi",
      location: "Mandi, Himachal Pradesh",
      period: "May 2025 – Jul 2025",
      description: [
        "Built an end-to-end video attendance system using MTCNN and Siamese networks with triplet loss",
        "Performed comparative evaluation against baseline face recognition models and prepared classroom video data",
        "Investigated metric learning improvements for low-quality, unconstrained video conditions",
      ],
      tech: ["Python", "PyTorch", "MTCNN", "Siamese Networks", "Triplet Loss", "OpenCV"],
      milestone: "🔬",
    },
    {
      title: "AI Research Intern — Fairness & Robustness",
      company: "AIEnsured",
      location: "Remote",
      period: "Research Internship",
      description: [
        "Built model evaluation pipelines focused on fairness metrics, bias detection, and explainability",
        "Conducted experimental analysis of model behaviour under distribution shift and label imbalance",
      ],
      tech: ["Python", "Scikit-learn", "Fairness", "Robustness", "Explainable AI"],
      milestone: "⚖️",
    },
    {
      title: "Machine Learning Intern",
      company: "Skybrisk Technologies",
      location: "Remote",
      period: "Feb 2025 – Aug 2025",
      description: [
        "Developed predictive models and end-to-end data preprocessing pipelines for real-world structured datasets",
        "Built AI-driven decision systems and contributed to production-ready deployments",
      ],
      tech: ["Python", "Machine Learning", "Data Preprocessing", "Predictive Modeling", "Deployment"],
      milestone: "📊",
    },
    {
      title: "Computer Vision Intern",
      company: "CodTech IT Solutions",
      location: "Remote",
      period: "Dec 2024 – Jan 2025",
      description: [
        "Implemented CNN-based image classification pipelines using TensorFlow and Keras",
        "Applied augmentation and evaluation workflows to improve image model performance",
      ],
      tech: ["Python", "TensorFlow", "Keras", "CNNs", "Computer Vision"],
      milestone: "👁️",
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
            <span className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Research & Industry</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            Experience
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
