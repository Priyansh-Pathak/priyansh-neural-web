import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const profilePhoto = "/website_photo.jpeg";
const resumeUrl = "/resume-priyansh-pathak.pdf";

const Hero = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Priyansh_Pathak_CV.pdf";
    link.click();
  };

  return (
    <section className="relative flex min-h-[92vh] items-center border-b border-border px-6 pb-16 pt-28 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              AI/ML Engineer & Computer Science Student
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              Priyansh Pathak
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground lg:text-2xl">
              Building practical AI and machine learning systems across Computer Vision, Deep Learning, and intelligent applications.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              I combine hands-on AI engineering, software fundamentals, internship experience, and applied research to build useful technical systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View selected work <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-5 text-sm text-muted-foreground">
              <a className="flex items-center gap-1.5 hover:text-primary" href="https://github.com/pripat1008" target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a>
              <a className="flex items-center gap-1.5 hover:text-primary" href="https://linkedin.com/in/pripat1008" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
              <a className="flex items-center gap-1.5 hover:text-primary" href="mailto:pripat1008@gmail.com"><Mail className="h-4 w-4" />Email</a>
              <button className="hover:text-primary" onClick={() => navigate("/resume")}>View CV</button>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 border-y border-border py-5">
              <div><dt className="text-xs uppercase text-muted-foreground">CGPA</dt><dd className="mt-1 text-xl font-semibold">9.23</dd></div>
              <div className="border-l border-border pl-6"><dt className="text-xs uppercase text-muted-foreground">Experience</dt><dd className="mt-1 text-xl font-semibold">8 roles</dd></div>
              <div className="border-l border-border pl-6"><dt className="text-xs uppercase text-muted-foreground">Publications</dt><dd className="mt-1 text-xl font-semibold">2 accepted</dd></div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div className="aspect-[4/5] overflow-hidden border border-border bg-card p-2">
              <img src={profilePhoto} alt="Priyansh Pathak" loading="eager" decoding="async" className="h-full w-full object-cover object-top" />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>Chennai, India</span>
              <span>Open to research collaborations</span>
            </div>
          </div>
        </div>
      </div>
      <button aria-label="Scroll to profile" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground">
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;