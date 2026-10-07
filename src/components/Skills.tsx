import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const groups = [
  ["Core Areas", ["Computer Vision", "Deep Learning", "Metric Learning", "Medical Imaging", "NLP", "AI Navigation", "HRI"]],
  ["ML / DL", ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face Transformers"]],
  ["Vision", ["OpenCV", "MTCNN", "Grad-CAM", "DICOM", "YOLOv5", "EfficientNet", "ResNet", "MediaPipe"]],
  ["Programming", ["Python", "C++", "Java", "SQL", "JavaScript"]],
  ["Engineering", ["Flask", "Streamlit", "FastAPI", "Docker", "Redis", "Git / GitHub"]],
  ["Data", ["NumPy", "Pandas", "Matplotlib", "Seaborn", "PostgreSQL", "MySQL", "Firebase"]],
] as const;

const Skills = () => {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => groups.map(([name, skills]) => [name, skills.filter((skill) => skill.toLowerCase().includes(query.toLowerCase()))] as const).filter(([, skills]) => skills.length), [query]);

  return (
    <section id="skills" className="border-b border-border px-6 py-24 lg:px-8">
       <div className="container mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div><p className="section-label">Capabilities</p><h2 className="section-title">Technical skills</h2><p className="mt-5 max-w-sm text-muted-foreground">Tools used across research, experimentation, and deployment.</p></div>
          <div>
            <div className="relative mb-8 max-w-sm"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" /><Input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter technologies" className="pl-10" /></div>
             <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {filtered.map(([name, skills]) => (
                 <div key={name} className="group bg-background p-6 transition-colors hover:bg-card">
                   <div className="mb-5 flex items-center justify-between"><h3 className="font-semibold text-foreground">{name}</h3><span className="technical-label text-primary">{String(skills.length).padStart(2, "0")}</span></div>
                   <div className="flex flex-wrap gap-2">{skills.map((skill) => <span key={skill} className="border border-border bg-muted/20 px-3 py-1.5 text-sm text-muted-foreground transition-colors group-hover:border-primary/30">{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;