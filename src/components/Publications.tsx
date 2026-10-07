const publications = [
  {
    title: "AttendEase: Video-Based Classroom Attendance using Siamese Networks",
    venue: "AMISE 5.0",
    status: "Best Paper Award · Accepted · In publishing process",
  },
  {
    title: "Deep Learning-Based Skin Cancer Detection with Uncertainty Quantification",
    venue: "MICAD 2026 · MICCAI-Endorsed Event · Springer LNEE",
    status: "Accepted",
  },
];

const Publications = () => (
  <section id="publications" className="border-b border-border bg-muted/20 px-6 py-24 lg:px-8">
    <div className="container mx-auto max-w-7xl">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <div><p className="section-label">Research</p><h2 className="section-title">Publications</h2></div>
        <div className="divide-y divide-border border-t border-border">
          {publications.map((publication, index) => (
            <article key={publication.title} className="group grid gap-5 py-8 md:grid-cols-[3rem_1fr]">
              <span className="technical-label text-primary">0{index + 1}</span>
              <div>
                <h3 className="text-xl font-semibold leading-snug transition-colors group-hover:text-primary">{publication.title}</h3>
                <p className="mt-3 text-sm font-medium text-foreground">{publication.venue}</p>
                <p className="mt-2 text-sm text-muted-foreground">{publication.status}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Publications;