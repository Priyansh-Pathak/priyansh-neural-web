import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import projectAttendance from "@/assets/project-attendance.jpg";
import projectStoryteller from "@/assets/project-storyteller.jpg";
import projectFaceRecog from "@/assets/project-facerecog.jpg";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "AI-Powered Video Attendance System",
      description: "Flask-based system using Siamese neural networks, MTCNN, and triplet loss for face recognition in classroom videos. Automates preprocessing, model training, and attendance logging.",
      tech: ["Python", "Flask", "TensorFlow", "Keras", "OpenCV", "MTCNN"],
      image: projectAttendance,
      highlight: "Research-oriented pipeline with automated detection & matching",
      github: "https://github.com/Priyansh-Pathak",
      demo: "#",
    },
    {
      title: "Smart Cultural Storyteller",
      description: "AI app that narrates cultural stories from user-uploaded images using Google Generative AI with JSON-based cultural datasets and a Streamlit interface.",
      tech: ["Python", "Streamlit", "Generative AI", "Image Processing"],
      image: projectStoryteller,
      highlight: "Combines computer vision with cultural knowledge",
      github: "https://github.com/Priyansh-Pathak",
      demo: "#",
    },
    {
      title: "Face Recognition Attendance System",
      description: "Python Tkinter + OpenCV desktop app with password-protected training, real-time recognition, and CSV-based attendance logging.",
      tech: ["Python", "Tkinter", "OpenCV", "CSV"],
      image: projectFaceRecog,
      highlight: "User-friendly GUI with secure training module",
      github: "https://github.com/Priyansh-Pathak",
      demo: "#",
    },
  ];

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`py-24 px-6 lg:px-8 bg-muted/30 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
          <p className="text-muted-foreground mt-4">Building intelligent solutions from research to production</p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-xl border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] group animate-scale-in relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-neon-cyan/5 before:via-transparent before:to-neon-purple/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                
                {/* Glassmorphism Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary/90 hover:bg-primary shadow-lg"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="mr-2 w-4 h-4" />
                    GitHub
                  </Button>
                  {project.demo !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/50 bg-card/50 backdrop-blur-sm hover:bg-primary/10"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/80 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlight */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    ✨ {project.highlight}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open("https://github.com/Priyansh-Pathak", "_blank")}
          >
            <Github className="mr-2 w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
