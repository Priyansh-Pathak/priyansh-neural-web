import { BookOpen, ExternalLink, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const publications = [
  {
    title: "AttendEase: Video-Based Classroom Attendance using Siamese Networks",
    venue: "AMISE 5.0",
    status: "Best Paper Award, Accepted; In Publishing Process",
    icon: Award,
  },
  {
    title: "Deep Learning-Based Skin Cancer Detection with Uncertainty Quantification",
    venue: "Computers in Biology and Medicine",
    status: "Under Review",
    icon: BookOpen,
  },
];

const Publications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      id="publications"
      className={`relative overflow-hidden px-6 py-24 transition-all duration-1000 lg:px-8 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-2">
            <span className="text-sm font-semibold text-primary">Research Output</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-5xl">Publications</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Research contributions spanning computer vision, deep learning, and intelligent attendance systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((publication, index) => {
            const Icon = publication.icon;

            return (
              <Card
                key={publication.title}
                className="group relative overflow-hidden border-primary/20 bg-card/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[var(--shadow-card)]"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />
                <div className="flex items-start gap-5">
                  <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                      {publication.title}
                    </h3>
                    <p className="mt-3 font-medium text-secondary">{publication.venue}</p>
                    <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      <span>{publication.status}</span>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;