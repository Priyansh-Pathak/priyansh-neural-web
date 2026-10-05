const Education = () => (
  <section id="education" className="border-b border-border px-6 py-20 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
        <div><p className="section-label">Education</p><h2 className="section-title">Academic foundation</h2></div>
        <div className="divide-y divide-border border-y border-border">
          <article className="grid gap-3 py-6 md:grid-cols-[1fr_auto]"><div><h3 className="font-semibold">B.Tech — Computer Science & Engineering</h3><p className="mt-1 text-sm text-muted-foreground">Artificial Intelligence & Machine Learning · SRM Institute of Science and Technology</p></div><div className="text-sm text-muted-foreground md:text-right"><p>Aug 2023 – May 2027</p><p className="mt-1 font-medium text-foreground">CGPA 9.23 / 10</p></div></article>
          <article className="grid gap-3 py-6 md:grid-cols-[1fr_auto]"><div><h3 className="font-semibold">Major in Artificial Intelligence</h3><p className="mt-1 text-sm text-muted-foreground">Indian Institute of Technology Ropar</p></div><p className="text-sm text-muted-foreground">Sept 2024 – Feb 2026</p></article>
        </div>
      </div>
    </div>
  </section>
);
export default Education;