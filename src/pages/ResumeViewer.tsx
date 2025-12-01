import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResumeViewer = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume-priyansh-pathak.pdf";
    link.download = "Priyansh_Pathak_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-lg">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            Resume - Priyansh Pathak
          </h1>
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDownload}
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              size="icon"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="pt-16 h-screen">
        <iframe
          src="/resume-priyansh-pathak.pdf"
          className="w-full h-full border-0"
          title="Priyansh Pathak Resume"
        />
      </div>
    </div>
  );
};

export default ResumeViewer;
