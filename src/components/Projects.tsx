import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { title: "Video-Based Face Recognition Attendance System", stack: "PyTorch · MTCNN · Triplet Loss · OpenCV", description: "Production-oriented classroom video pipeline using Siamese networks for embedding-based recognition and automated attendance logging." },
  { title: "Skin Cancer Detection Web Application", stack: "TensorFlow · EfficientNetB3 · Flask · Grad-CAM", description: "Dermoscopic image classifier with an AUC of 0.826, sensitivity of 0.916, visual explanations, and a deployable Flask interface." },
  { title: "Real-Time Face Mask Detection", stack: "TensorFlow · MobileNetV2 · OpenCV · SSD", description: "Two-stage real-time detection pipeline optimized with batched inference across all faces in each frame." },
  { title: "PCB Defect Detection System", stack: "YOLOv5s · 693 Images · 6 Defect Classes", description: "Manufacturing defect detection pipeline supported by a structured risk plan and sprint-based production testing framework." },
  { title: "AI Culture Storytelling Generator", stack: "Gemini 1.5 Flash · Streamlit · gTTS", description: "Multimodal application that turns uploaded imagery into contextual cultural stories with downloadable text and audio narration." },
];

const Projects = () => (
  <section id="projects" className="border-b border-border bg-muted/20 px-6 py-24 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="section-label">Selected work</p><h2 className="section-title">Applied research & engineering</h2></div>
        <Button variant="outline" onClick={() => window.open("https://github.com/pripat1008", "_blank")}>GitHub profile <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
      </div>
      <div className="grid gap-px bg-border border border-border md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="group bg-background p-7 transition-colors hover:bg-card">
            <div className="flex items-start justify-between gap-5"><span className="text-xs text-muted-foreground">0{index + 1}</span><ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
            <h3 className="mt-12 text-xl font-semibold leading-snug">{project.title}</h3>
            <p className="mt-4 min-h-20 text-sm leading-6 text-muted-foreground">{project.description}</p>
            <p className="mt-6 border-t border-border pt-4 text-xs font-medium text-foreground">{project.stack}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;