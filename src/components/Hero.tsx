import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import resumeAsset from "@/assets/CV_Priyansh-2.pdf.asset.json";

const profilePhoto = "/website_photo.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeAsset.url;
    link.download = "Priyansh_Pathak_CV.pdf";
    link.click();
  };

  return (
    <section className="relative flex min-h-[92vh] items-center border-b border-border px-6 pb-16 pt-28 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              AI/ML Researcher & Engineer
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] text-foreground sm:text-6xl lg:text-7xl">
              Priyansh Pathak
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground lg:text-2xl">
              Computer science undergraduate working across computer vision, deep learning, robot learning, and intelligent systems.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              Research experience at Carnegie Mellon University, IIT Ropar, DRDO CAIR, and IIT Mandi, with peer-reviewed work in attendance systems and medical imaging.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                View selected work <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/resume")}>View CV</Button>
              <Button size="lg" variant="ghost" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>

            <dl className="mt-14 grid max-w-2xl grid-cols-3 border-y border-border py-5">
              <div><dt className="text-xs uppercase text-muted-foreground">CGPA</dt><dd className="mt-1 text-xl font-semibold">9.23</dd></div>
              <div className="border-l border-border pl-6"><dt className="text-xs uppercase text-muted-foreground">Experience</dt><dd className="mt-1 text-xl font-semibold">8 roles</dd></div>
              <div className="border-l border-border pl-6"><dt className="text-xs uppercase text-muted-foreground">Publications</dt><dd className="mt-1 text-xl font-semibold">2 accepted</dd></div>
            </dl>
          </div>

          <div className="mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
            <div className="aspect-[4/5] overflow-hidden border border-border bg-card p-2">
              <img src={profilePhoto} alt="Priyansh Pathak" className="h-full w-full object-cover object-top" />
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