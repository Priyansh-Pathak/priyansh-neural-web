import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    
    // Add a visual ripple effect when toggling
    const button = document.activeElement as HTMLElement;
    if (button) {
      button.style.transform = "scale(0.9)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden group border-primary/30 hover:border-primary/60 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icons with smooth transition */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-in-out dark:-rotate-90 dark:scale-0 relative z-10 text-foreground" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 z-10 text-foreground" />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-md shadow-[0_0_15px_rgba(0,255,255,0.3)] opacity-0 group-hover:opacity-100 dark:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-opacity duration-300" />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
