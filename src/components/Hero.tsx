import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import NeuralNetwork from "@/components/NeuralNetwork";
import heroBg from "@/assets/hero-neural-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-tech-darker via-background to-tech-dark" />
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon-cyan/30 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon-purple/30 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-magenta/20 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Neural Network Animation */}
      <NeuralNetwork />

      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-md border border-neon-cyan/30 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
              <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">AI/ML Engineer</span>
            </div>

            {/* Enhanced Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="text-foreground drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Priyansh</span>
                <span className="block bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent animate-neon-glow">
                  Pathak
                </span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full shadow-[0_0_20px_rgba(0,255,255,0.6)] animate-border-flow" style={{ backgroundSize: "200% 200%" }} />
            </div>

            {/* Enhanced Tagline */}
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              AI/ML-focused Computer Science undergrad building{" "}
              <span className="text-neon-cyan font-bold drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">intelligent systems</span> &{" "}
              <span className="text-neon-purple font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">production-ready web apps</span>.
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">Passionate CS undergraduate specializing in AI/ML. Experienced in responsive web applications and deploying AI models using industry-standard tools. Multiple internships and hackathons demonstrating adaptability and strong coding skills.</p>

            {/* Enhanced Stats */}
            <div className="flex flex-wrap gap-8">
              {[{
              label: "Internships",
              value: "9+",
              color: "neon-cyan"
            }, {
              label: "Projects",
              value: "15+",
              color: "neon-purple"
            }].map(stat => <div key={stat.label} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative px-6 py-4 rounded-xl border border-neon-cyan/30 bg-card/50 backdrop-blur-sm hover:border-neon-cyan/60 transition-all duration-300">
                    <div className={`text-3xl font-bold bg-gradient-to-br from-${stat.color} to-neon-purple bg-clip-text text-transparent`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                </div>)}
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group relative bg-gradient-to-r from-neon-cyan to-neon-purple text-background font-bold overflow-hidden hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300 border-0"
                onClick={() => {
                  const projectsSection = document.querySelector("#projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-purple/50 hover:border-neon-purple hover:bg-neon-purple/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 backdrop-blur-sm bg-card/30"
                onClick={() => window.open("https://online.flippingbook.com/view/796388929/", "_blank")}
              >
                View Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-neon-magenta/50 hover:border-neon-magenta hover:bg-neon-magenta/10 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 backdrop-blur-sm bg-card/30"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume-priyansh-pathak.pdf";
                  link.download = "Priyansh_Pathak_Resume.pdf";
                  link.click();
                }}
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Classy Glass Morphism Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="relative group">
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 via-neon-purple/20 to-neon-magenta/20 rounded-3xl blur-[60px] opacity-50 transition-opacity duration-500" />
              
              {/* Glass morphism container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Inner glow border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-purple/10" />
                  
                  {/* Image */}
                  <div className="absolute inset-2 rounded-2xl overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Priyansh Pathak - AI/ML Engineer" 
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Minimal accent corners */}
                <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-neon-cyan/40 rounded-tl-lg" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-neon-purple/40 rounded-br-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-neon-cyan/50 flex justify-center p-2 backdrop-blur-sm bg-card/20 shadow-[0_0_20px_rgba(0,255,255,0.3)]">
          <div className="w-1.5 h-3 bg-gradient-to-b from-neon-cyan to-transparent rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default Hero;