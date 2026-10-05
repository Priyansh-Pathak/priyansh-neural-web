import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const resumeUrl = "/resume-priyansh-pathak.pdf";

const ResumeViewer = () => {
  const navigate = useNavigate();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Priyansh_Pathak_CV.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div><h1 className="font-semibold">Priyansh Pathak</h1><p className="text-xs text-muted-foreground">Curriculum Vitae</p></div>
          <div className="flex items-center gap-2">
            <Button onClick={handleDownload} variant="outline"><Download className="mr-2 h-4 w-4" />Download</Button>
            <Button onClick={() => navigate("/")} variant="ghost" size="icon" aria-label="Close CV"><X className="h-5 w-5" /></Button>
          </div>
        </div>
      </header>
      <main className="h-screen pt-16"><iframe src={resumeUrl} className="h-full w-full border-0" title="Priyansh Pathak CV" /></main>
    </div>
  );
};

export default ResumeViewer;