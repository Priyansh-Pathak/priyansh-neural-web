import { useState, useMemo } from "react";
import { Code2, Globe, Wrench, Cpu, Search, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
      color: "primary",
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML", "CSS", "React.js", "Flask"],
      color: "neural-blue",
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["OpenCV", "Selenium", "MATLAB", "Git", "TensorFlow", "Keras"],
      color: "secondary",
    },
    {
      title: "Other Skills",
      icon: Cpu,
      skills: ["Responsive Design", "Testing", "API Integration", "Model Deployment"],
      color: "neural-purple",
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
            skill.toLowerCase().includes(searchQuery.toLowerCase())
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
              skill.toLowerCase().includes(searchQuery.toLowerCase())
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-neon-magenta/5 rounded-full blur-[100px] animate-float" />
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <div className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-neon-cyan/30">
            <span className="text-sm font-semibold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">Tech Arsenal</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-magenta rounded-full mx-auto shadow-[0_0_20px_rgba(0,255,255,0.5)] animate-border-flow" style={{ backgroundSize: "200% 200%" }} />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build intelligent, scalable solutions
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-10 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
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

          {/* Category Filter Buttons */}
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

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title}
                className="group relative p-8 bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-neon-cyan/20 hover:border-neon-cyan/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] opacity-0 animate-scale-in overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-neon-cyan/5 before:via-transparent before:to-neon-purple/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                style={{ animationDelay: `${0.3 + index * 0.15}s`, animationFillMode: "forwards" }}
              >
                {/* Holographic shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                
                <div className="relative space-y-6">
                  {/* Enhanced Header */}
                  <div className="flex items-center gap-4">
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 group-hover:from-neon-cyan/30 group-hover:to-neon-purple/30 transition-all duration-300 backdrop-blur-sm border border-neon-cyan/30">
                      <Icon className="w-7 h-7 text-neon-cyan group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-neon-cyan transition-colors duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Enhanced Skills Pills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => {
                      const isHighlighted = searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span 
                          key={skillIndex}
                          className={`px-4 py-2 rounded-lg backdrop-blur-sm border text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default relative overflow-hidden group/badge before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-neon-cyan/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700 ${
                            isHighlighted
                              ? "bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 border-neon-cyan/60 shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                              : "bg-gradient-to-br from-muted/80 to-muted/40 border-neon-cyan/20 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                          }`}
                        >
                          <span className="relative z-10">{skill}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* No Results Message */}
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

        {/* Enhanced Proficiency Note */}
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
    </section>
  );
};

export default Skills;
