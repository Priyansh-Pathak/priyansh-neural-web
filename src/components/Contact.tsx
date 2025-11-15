import { Mail, Phone, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';
import GlitchText from "@/components/GlitchText";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2kfszee',
        'template_kd3n7tc',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'U85-nMUV6KmM-D1fd'
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={ref}
      id="contact" 
      className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <GlitchText text="Intelligent" className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent" />
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
          <p className="text-muted-foreground mt-4">
            Have a project in mind? Let's collaborate and create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:pripat1008@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pripat1008@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+919868782025" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-9868782025
                  </a>
                </div>
              </div>
            </Card>

            {/* Quick Info */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-neural-blue/10 border border-primary/20">
              <h3 className="font-bold text-lg mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Available for internships & collaborations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Passionate about AI/ML research
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  Open to full-time opportunities (2027)
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input 
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input 
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
                size="lg"
              >
                <Send className="mr-2 w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-neural-blue/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Contact;
