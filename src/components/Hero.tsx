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
            }, {
              label: "Research",
              value: "AI/ML",
              color: "neon-magenta"
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

          {/* Enhanced Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative group">
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full blur-[80px] opacity-40 group-hover:opacity-70 group-hover:blur-[100px] transition-all duration-500 animate-glow-pulse" />
              
              {/* Image Container with animated border */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-magenta p-1 animate-border-flow" style={{ backgroundSize: "200% 200%" }}>
                  <div className="w-full h-full rounded-full bg-card overflow-hidden ring-2 ring-neon-cyan/30">
                    <img 
                      src={profilePhoto} 
                      alt="Priyansh Pathak" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Orbiting ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-cyan/20 animate-spin" style={{ animationDuration: "20s" }} />
              </div>

              {/* Enhanced Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 backdrop-blur-md border border-neon-cyan/50 shadow-[0_0_25px_rgba(0,255,255,0.5)] animate-float hover:shadow-[0_0_40px_rgba(0,255,255,0.8)] transition-all duration-300">
                <span className="text-sm font-bold text-neon-cyan">Python</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-purple/20 to-neon-magenta/20 backdrop-blur-md border border-neon-purple/50 shadow-[0_0_25px_rgba(168,85,247,0.5)] animate-float hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-300" style={{
              animationDelay: "1s"
            }}>
                <span className="text-sm font-bold text-neon-purple">TensorFlow</span>
              </div>
              <div className="absolute top-1/2 -left-8 px-4 py-2 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 backdrop-blur-md border border-neon-green/50 shadow-[0_0_20px_rgba(0,255,127,0.5)] animate-float hover:shadow-[0_0_35px_rgba(0,255,127,0.8)] transition-all duration-300" style={{
              animationDelay: "2s"
            }}>
                <span className="text-sm font-bold text-neon-green">AI/ML</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 rounded-full border-2 border-neon-cyan/60 flex items-start justify-center p-2 shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-300">
          <div className="w-1.5 h-4 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
        </div>
      </div>
    </section>;
};
export default Hero;