import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const links = [["Home", "hero"], ["About", "about"], ["Projects", "projects"], ["Experience", "experience"], ["Skills", "skills"], ["Research", "publications"], ["Education", "education"], ["Contact", "contact"]] as const;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  useEffect(() => { const update = () => setScrolled(window.scrollY > 16); window.addEventListener("scroll", update, { passive: true }); return () => window.removeEventListener("scroll", update); }, []);
  const move = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled || open ? "border-border bg-background/95" : "border-transparent bg-background/80"}`}>
    <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
      <Button variant="ghost" onClick={() => move("hero")} className="h-auto gap-3 p-0 font-semibold hover:bg-transparent"><span className="node-mark" />Priyansh Pathak</Button>
      <div className="hidden items-center gap-5 lg:flex">{links.map(([label, id]) => <button key={id} onClick={() => move(id)} className="text-sm text-muted-foreground hover:text-foreground">{label}</button>)}<Button size="sm" variant="outline" onClick={() => navigate("/resume")}>Resume</Button><Button size="icon" variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme"><Sun className="h-4 w-4 dark:hidden" /><Moon className="hidden h-4 w-4 dark:block" /></Button></div>
      <div className="flex items-center gap-1 lg:hidden"><Button size="icon" variant="ghost" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme"><Sun className="h-4 w-4 dark:hidden" /><Moon className="hidden h-4 w-4 dark:block" /></Button><Button size="icon" variant="ghost" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button></div>
    </div>
    {open && <div className="border-t border-border bg-background px-4 py-4 lg:hidden">{links.map(([label, id]) => <button key={id} onClick={() => move(id)} className="block w-full border-b border-border py-3 text-left text-sm">{label}</button>)}<Button className="mt-4 w-full" variant="outline" onClick={() => navigate("/resume")}>Resume</Button></div>}
  </nav>;
};
export default Navigation;