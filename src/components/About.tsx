const profile = ["B.Tech CSE — AI/ML", "AI-focused projects", "8 internship experiences", "2 accepted publications", "Open to AI/ML opportunities"];

const About = () => (
  <section id="about" className="border-b border-border px-6 py-24 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <div><p className="section-label">About</p><h2 className="section-title">Engineering practical AI systems.</h2></div>
        <div>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">I am a Computer Science student specializing in Artificial Intelligence and Machine Learning, with hands-on experience building machine learning, deep learning, computer vision, and AI-powered applications. I am interested in both practical engineering and applied research.</p>
          <div className="mt-10 grid border-y border-border sm:grid-cols-2">
            {profile.map((item, index) => <div key={item} className={`py-4 text-sm font-medium ${index % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"} ${index < 3 ? "border-b border-border" : ""}`}>{item}</div>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default About;