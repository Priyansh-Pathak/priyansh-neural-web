import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FloatingActionButton = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/resume")} className="fixed bottom-6 right-6 z-40 shadow-md" aria-label="View resume"><FileText className="mr-2 h-4 w-4" />Resume</Button>;
};
export default FloatingActionButton;