import { useState } from "react";
import { FileDown, Github, Mail, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: FileDown,
      label: "Download Resume",
      onClick: () => {
        window.open("/resume-priyansh-pathak.pdf", "_blank");
      },
      color: "from-neon-cyan to-neon-purple",
    },
    {
      icon: Github,
      label: "GitHub Profile",
      onClick: () => {
        window.open("https://github.com/Priyansh-Pathak", "_blank");
      },
      color: "from-neon-purple to-neon-magenta",
    },
    {
      icon: Mail,
      label: "Contact Me",
      onClick: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
      color: "from-neon-magenta to-neon-cyan",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse items-end gap-4">
      {/* Action Buttons */}
      {isOpen && (
        <div className="flex flex-col-reverse gap-3 animate-fade-in">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={index}
                onClick={action.onClick}
                className="group flex items-center gap-3 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="px-4 py-2 rounded-full bg-card/90 backdrop-blur-md border border-border/50 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  {action.label}
                </span>
                <div className={`p-3 rounded-full bg-gradient-to-r ${action.color} shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Main FAB Toggle Button */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta shadow-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 hover:scale-110 ${
          isOpen ? "rotate-90" : ""
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>
    </div>
  );
};

export default FloatingActionButton;
