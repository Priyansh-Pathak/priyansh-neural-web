import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    degree: "B.Tech in Computer Science & Engineering — AI/ML Specialization",
    period: "Aug 2023 – May 2027",
    detail: "CGPA: 9.23 / 10",
  },
  {
    institution: "Indian Institute of Technology Ropar",
    location: "Remote",
    degree: "Major in Artificial Intelligence",
    period: "Sept 2024 – Feb 2026",
    detail: "Advanced study in machine learning, deep learning, and computer vision",
  },
];

const About = () => (
  <section id="about" className="border-b border-border px-6 py-24 lg:px-8">
    <div className="container mx-auto max-w-6xl">
      <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
        <div>
          <p className="section-label">Profile</p>
          <h2 className="section-title">Research-minded engineering, grounded in real systems.</h2>
        </div>
        <div>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
            I work at the intersection of machine learning research and applied engineering. My experience spans embodied AI, computational biology, document intelligence, defense navigation, fairness, and computer vision. I value reproducible experiments, careful evaluation, and systems that remain useful outside controlled benchmarks.
          </p>

          <div className="mt-14 flex items-center gap-3 border-b border-border pb-4">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Education</h3>
          </div>
          <div className="divide-y divide-border">
            {education.map((item) => (
              <article key={item.institution} className="grid gap-3 py-7 md:grid-cols-[1fr_auto]">
                <div>
                  <h4 className="font-semibold text-foreground">{item.institution}</h4>
                  <p className="mt-2 text-muted-foreground">{item.degree}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                </div>
                <div className="text-left text-sm text-muted-foreground md:text-right">
                  <p>{item.period}</p><p className="mt-1">{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;