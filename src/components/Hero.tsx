import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-neural-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.3 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI/ML Engineer</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Priyansh
                <span className="block bg-gradient-to-r from-primary via-neural-blue to-secondary bg-clip-text text-transparent">
                  Pathak
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-neural-blue rounded-full" />
            </div>

            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-foreground/90 leading-relaxed">
              AI/ML-focused Computer Science undergrad building{" "}
              <span className="text-primary font-semibold">intelligent systems</span> &{" "}
              <span className="text-neural-blue font-semibold">production-ready web apps</span>.
            </p>

            {/* Bio */}
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Passionate CS undergraduate specializing in AI/ML. Experienced in responsive web applications 
              and deploying AI models using industry-standard tools. Multiple internships and hackathons 
              demonstrating adaptability and strong coding skills.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: "Internships", value: "3+" },
                { label: "Projects", value: "15+" },
                { label: "Research", value: "AI/ML" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all"
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="/Priyansh_Resume.pdf" download="Priyansh_Pathak_Resume.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-neural-blue rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity animate-glow-pulse" />
              
              {/* Image Container */}
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-neural-blue to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted to-card flex items-center justify-center text-6xl font-bold text-primary">
                      PP
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/30 shadow-lg animate-float">
                <span className="text-sm font-semibold text-primary">Python</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-neural-blue/30 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-sm font-semibold text-neural-blue">TensorFlow</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
