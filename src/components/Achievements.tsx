const Achievements = () => (
  <section id="achievements" className="border-b border-border bg-muted/20 px-6 py-20 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
        <div><p className="section-label">Recognition</p><h2 className="section-title">Achievements & leadership</h2></div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          <article className="bg-background p-6"><p className="text-xs text-primary">AMISE 5.0</p><h3 className="mt-3 font-semibold">Best Paper Award</h3><p className="mt-2 text-sm text-muted-foreground">AttendEase — accepted and in the publishing process.</p></article>
          <article className="bg-background p-6"><p className="text-xs text-primary">SRMKZILLA · 2023–Present</p><h3 className="mt-3 font-semibold">Associate Lead</h3><p className="mt-2 text-sm text-muted-foreground">Leading technical initiatives and open-source contributions in SRM IST’s developer community.</p></article>
        </div>
      </div>
    </div>
  </section>
);
export default Achievements;