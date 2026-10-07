const profile = ["B.Tech CSE — AI/ML", "Computer vision systems", "8 technical roles", "2 accepted publications", "Open to AI/ML opportunities"];

const About = () => (
  <section id="about" className="border-b border-border px-6 py-24 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <div><p className="section-label">About</p><h2 className="section-title">Engineering practical AI systems.</h2></div>
        <div>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">I am an AI/ML engineer with a Computer Science background and hands-on experience building machine learning, deep learning, computer vision, and AI-powered applications. My work spans practical engineering and applied research.</p>
          <div className="mt-10 grid border-y border-border sm:grid-cols-2">
             {profile.map((item, index) => <div key={item} className={`group flex items-center gap-3 py-4 text-sm font-medium ${index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"} ${index < 3 ? "border-b border-border" : ""}`}><span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;