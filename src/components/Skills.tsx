import { useState, useMemo, useEffect } from "react";
import { Code2, Globe, Wrench, Cpu, Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SkillWithProficiency {
  name: string;
  proficiency: number;
}

const CircularProgress = ({ skill, delay, isParentVisible }: { skill: SkillWithProficiency; delay: number; isParentVisible: boolean }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isParentVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.proficiency);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isParentVisible, skill.proficiency, delay]);

  const circumference = 2 * Math.PI * 36;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90">
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="6"
            fill="none"
            className="text-muted/30"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="url(#gradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              filter: "drop-shadow(0 0 6px rgba(0, 255, 255, 0.6))",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(180, 100%, 50%)" />
              <stop offset="100%" stopColor="hsl(280, 90%, 65%)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-neon-cyan">{progress}%</span>
        </div>
        <div className="absolute inset-0 rounded-full bg-neon-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <span className="text-xs font-medium text-center max-w-[80px] group-hover:text-neon-cyan transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
};

const ProgressBar = ({ skill, delay, isHighlighted, isParentVisible }: { skill: SkillWithProficiency; delay: number; isHighlighted: boolean; isParentVisible: boolean }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (isParentVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.proficiency);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isParentVisible, skill.proficiency, delay]);

  return (
    <div 
      className={`group px-4 py-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-[1.02] ${
        isHighlighted
          ? "bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border-neon-cyan/60 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
          : "bg-gradient-to-br from-muted/60 to-muted/30 border-neon-cyan/20 hover:border-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]"
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium group-hover:text-neon-cyan transition-colors duration-300">
          {skill.name}
        </span>
        <span className="text-xs font-bold text-neon-cyan">{progress}%</span>
      </div>
      <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple blur-sm opacity-60" />
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"bars" | "circles">("bars");

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "Java", proficiency: 80 },
        { name: "C", proficiency: 75 },
        { name: "C++", proficiency: 78 },
        { name: "JavaScript", proficiency: 85 },
        { name: "SQL", proficiency: 82 },
      ],
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML", proficiency: 92 },
        { name: "CSS", proficiency: 88 },
        { name: "React.js", proficiency: 85 },
        { name: "Flask", proficiency: 80 },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: [
        { name: "OpenCV", proficiency: 88 },
        { name: "Selenium", proficiency: 75 },
        { name: "MATLAB", proficiency: 70 },
        { name: "Git", proficiency: 90 },
        { name: "TensorFlow", proficiency: 85 },
        { name: "Keras", proficiency: 87 },
      ],
    },
    {
      title: "Other Skills",
      icon: Cpu,
      skills: [
        { name: "Responsive Design", proficiency: 88 },
        { name: "Testing", proficiency: 78 },
        { name: "API Integration", proficiency: 85 },
        { name: "Model Deployment", proficiency: 82 },
      ],
    },
  ];

  const filterButtons = [
    { label: "All", value: null },
    { label: "Languages", value: "Languages" },
    { label: "Web", value: "Web Technologies" },
    { label: "Tools", value: "Tools & Frameworks" },
    { label: "Other", value: "Other Skills" },
  ];

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((category) => {
        if (activeCategory && category.title !== activeCategory) return false;
        if (searchQuery) {
          const hasMatchingSkill = category.skills.some((skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
          const titleMatches = category.title.toLowerCase().includes(searchQuery.toLowerCase());
          return hasMatchingSkill || titleMatches;
        }
        return true;
      })
      .map((category) => ({
        ...category,
        skills: searchQuery
          ? category.skills.filter((skill) =>
              skill.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
          : category.skills,
      }))
      .filter((category) => category.skills.length > 0 || !searchQuery);
  }, [searchQuery, activeCategory]);

  const allSkillsCount = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const filteredSkillsCount = filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section 
      ref={ref} 
      id="skills" 
      className={`py-24 px-6 lg:px-8 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-neon-cyan/30">
            <span className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Tech Arsenal</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)]" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build intelligent, scalable solutions
          </p>
        </div>

        {/* Controls */}
        <div className="mb-10 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 py-3 bg-card/60 backdrop-blur-xl border-neon-cyan/20 focus:border-neon-cyan/60 rounded-xl transition-all duration-300 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex rounded-xl overflow-hidden border border-neon-cyan/20 backdrop-blur-sm">
              <button
                onClick={() => setViewMode("bars")}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  viewMode === "bars"
                    ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-background"
                    : "bg-card/40 hover:bg-card/60"
                }`}
              >
                Bars
              </button>
              <button
                onClick={() => setViewMode("circles")}
                className={`px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  viewMode === "circles"
                    ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-background"
                    : "bg-card/40 hover:bg-card/60"
                }`}
              >
                Circles
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterButtons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => setActiveCategory(btn.value)}
                className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 border ${
                  activeCategory === btn.value
                    ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-background border-transparent shadow-[0_0_25px_rgba(0,255,255,0.5)]"
                    : "bg-card/40 backdrop-blur-sm border-neon-cyan/20 hover:border-neon-cyan/50 hover:bg-card/60"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-sm text-muted-foreground">
            Showing <span className="text-neon-cyan font-semibold">{filteredSkillsCount}</span> of{" "}
            <span className="font-semibold">{allSkillsCount}</span> skills
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="group relative p-8 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] opacity-0 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: "forwards" }}
              >
                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                
                <div className="relative space-y-6">
                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300 backdrop-blur-sm border border-neon-cyan/30">
                      <Icon className="w-7 h-7 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress */}
                  {viewMode === "bars" ? (
                    <div className="grid gap-3">
                      {category.skills.map((skill, skillIndex) => {
                        const isHighlighted = searchQuery && skill.name.toLowerCase().includes(searchQuery.toLowerCase());
                        return (
                          <ProgressBar
                            key={skill.name}
                            skill={skill}
                            delay={skillIndex * 100}
                            isHighlighted={isHighlighted}
                            isParentVisible={isVisible}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <div className="grid grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <CircularProgress
                          key={skill.name}
                          skill={skill}
                          delay={skillIndex * 100}
                          isParentVisible={isVisible}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">No skills found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory(null);
              }}
              className="mt-4 px-6 py-2 rounded-lg bg-neon-cyan/20 border border-neon-cyan/40 hover:bg-neon-cyan/30 transition-all duration-300"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Footer Note */}
        {filteredCategories.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-xl border border-neon-purple/20 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <p className="text-foreground/90 font-medium">
                🚀 Proficient in building <span className="text-neon-cyan font-bold">end-to-end AI/ML solutions</span> from research to deployment
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Shimmer animation keyframe */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
