import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
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
    <section className="lattice-surface relative flex min-h-[94vh] items-center border-b border-border px-6 pb-20 pt-28 lg:px-8">
      <div className="pointer-events-none absolute left-[8%] top-32 hidden h-20 w-px bg-primary/30 lg:block" />
      <div className="pointer-events-none absolute left-[calc(8%-3px)] top-52 hidden h-1.5 w-1.5 rounded-full bg-primary lg:block" />
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-7 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-3 py-2">
              <span className="node-mark" />
              <p className="technical-label text-primary">AI/ML Engineer · Computer Vision · Deep Learning</p>
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
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
                View selected work <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <a className="flex items-center gap-1.5 hover:text-primary" href="https://github.com/pripat1008" target="_blank" rel="noreferrer"><Github className="h-4 w-4" />GitHub</a>
              <a className="flex items-center gap-1.5 hover:text-primary" href="https://linkedin.com/in/pripat1008" target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" />LinkedIn</a>
              <a className="flex items-center gap-1.5 hover:text-primary" href="mailto:pripat1008@gmail.com"><Mail className="h-4 w-4" />Email</a>
              <Button variant="link" className="h-auto p-0 text-muted-foreground hover:text-primary" onClick={() => navigate("/resume")}>View CV</Button>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 border-y border-border py-6">
              <div><dt className="technical-label">CGPA</dt><dd className="mt-2 text-2xl font-semibold">9.23</dd></div>
              <div className="border-l border-border pl-5 sm:pl-8"><dt className="technical-label">Experience</dt><dd className="mt-2 text-2xl font-semibold">8 <span className="text-sm font-normal text-muted-foreground">roles</span></dd></div>
              <div className="border-l border-border pl-5 sm:pl-8"><dt className="technical-label">Publications</dt><dd className="mt-2 text-2xl font-semibold">2 <span className="text-sm font-normal text-muted-foreground">accepted</span></dd></div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:mx-0 lg:ml-auto">
            <div className="tech-corners">
              <div className="pointer-events-none absolute -inset-4 border border-border/60" />
              <div className="relative aspect-[4/5] overflow-hidden border border-border bg-card p-2">
              <img src={profilePhoto} alt="Priyansh Pathak" loading="eager" decoding="async" className="h-full w-full object-cover object-top" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between border-t border-border/70 bg-background/90 px-3 py-3">
                  <div><p className="technical-label">Location</p><p className="mt-1 text-xs font-medium">Chennai, India</p></div>
                  <p className="technical-label text-primary">Available</p>
                </div>
              </div>
            </div>
            <div className="mt-7 grid grid-cols-[auto_1fr] items-center gap-4 border-l border-primary/40 pl-4 text-sm text-muted-foreground">
              <span className="node-mark" />
              <span>Open to AI/ML roles and applied research collaborations</span>
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