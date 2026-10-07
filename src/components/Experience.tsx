import { Calendar, MapPin } from "lucide-react";

const experiences = [
  ["Research Intern — Robot Learning & Embodied AI", "Carnegie Mellon University · Xu Lab", "Apr 2026 – Sept 2026", "Remote", "Diffusion Policy and RLBench educational resources; reproducible imitation-learning experiments; vision-language models for robot manipulation.", ["Diffusion Policy", "RLBench", "Imitation Learning"]],
  ["Research Intern — School of AI & Data Engineering", "Indian Institute of Technology Ropar", "Jun 2026 – Aug 2026", "Ropar, India", "Deep-learning research on bacteriophage–host prediction using protein sequence datasets, including experimental design and model evaluation.", ["Deep Learning", "Computational Biology", "Protein Sequences"]],
  ["AI/ML Intern — Invoice Document Automation", "QX Global Group", "May 2026 – Jul 2026", "Remote", "Invoice verification pipeline spanning OCR labelling, structured extraction, and LayoutLM-based document understanding.", ["OCR", "LayoutLM", "Document Intelligence"]],
  ["Research Intern — AI Navigation & Path Planning", "DRDO CAIR", "Jan 2026 – Mar 2026", "Remote", "Graph-based and reinforcement-learning approaches for spatially aware route planning in defense navigation systems.", ["Reinforcement Learning", "Graph Algorithms", "Path Planning"]],
  ["Research Intern — Computer Vision & Deep Learning", "Indian Institute of Technology Mandi", "May 2025 – Jul 2025", "Mandi, India", "Video attendance system using MTCNN and Siamese networks with triplet loss, evaluated against face-recognition baselines.", ["PyTorch", "MTCNN", "Metric Learning"]],
  ["AI Research Intern — Fairness & Robustness", "AIEnsured", "Jul 2025 – Sept 2025", "Remote", "Model evaluation pipelines focused on fairness metrics, bias detection, robustness, and explainability.", ["Model Evaluation", "Fairness", "Explainable AI"]],
  ["Machine Learning Intern", "Skybrisk Technologies", "Feb 2025 – Aug 2025", "Remote", "Predictive models, structured-data preprocessing pipelines, and production-oriented AI decision systems.", ["Machine Learning", "Data Pipelines", "Deployment"]],
  ["Computer Vision Intern", "CodTech IT Solutions", "Dec 2024 – Jan 2025", "Remote", "CNN image-classification pipelines using TensorFlow and Keras, with augmentation and systematic evaluation.", ["TensorFlow", "Keras", "Computer Vision"]],
] as const;

const Experience = () => (
  <section id="experience" className="border-b border-border bg-muted/20 px-6 py-24 lg:px-8">
    <div className="container mx-auto max-w-7xl">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <div><p className="section-label">Career</p><h2 className="section-title">Research & industry experience</h2></div>
        <div className="relative border-t border-border before:absolute before:bottom-0 before:left-[1.47rem] before:top-0 before:w-px before:bg-border">
          {experiences.map(([title, company, period, location, description, tech], index) => (
            <article key={`${company}-${title}`} className="group relative grid gap-5 border-b border-border py-8 md:grid-cols-[3rem_1fr]">
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-[0.65rem] text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-1 text-sm font-medium text-primary">{company}</p></div>
                  <div className="shrink-0 text-sm text-muted-foreground md:text-right"><p className="flex items-center gap-2 md:justify-end"><Calendar className="h-3.5 w-3.5" />{period}</p><p className="mt-1 flex items-center gap-2 md:justify-end"><MapPin className="h-3.5 w-3.5" />{location}</p></div>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-6 text-muted-foreground">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{tech.map((item) => <span key={item} className="border border-border bg-background px-2 py-1 text-xs text-muted-foreground">{item}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;