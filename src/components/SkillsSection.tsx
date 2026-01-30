import { Cpu, Code2, Wrench, Users } from "lucide-react";

const technicalSkills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "Mobile Development", level: 88 },
  { name: "Software Development", level: 85 },
  { name: "Project Management", level: 80 },
];

const programmingLanguages = [
  "Java", "Python", "Kotlin", "JavaScript", "TypeScript", "Dart", "C#", "HTML & CSS",
];

const frameworks = [
  "ReactJS", "Flutter", "NodeJS", "Express", "Laravel", "Unity", "MongoDB", "Firebase",
];

const coreSkills = [
  { name: "Leadership", icon: "👑" },
  { name: "Trainability", icon: "📚" },
  { name: "Computational Thinking", icon: "🧠" },
  { name: "Problem Solving", icon: "💡" },
  { name: "Teamwork", icon: "🤝" },
  { name: "Flexibility", icon: "🔄" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and competencies I've developed through years of dedicated learning and practice
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Technical Skills with Progress Bars */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Frameworks */}
          <div className="space-y-6">
            {/* Languages */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {programmingLanguages.map((lang, index) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-secondary/80 hover:bg-primary/20 text-foreground hover:text-primary rounded-xl text-sm font-medium transition-all duration-300 cursor-default opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Frameworks & Tools</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <span
                    key={framework}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors cursor-default opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    {framework}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Work Skills */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Core Work Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-secondary/50 hover:bg-secondary rounded-2xl transition-colors opacity-0 animate-fade-in group"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;