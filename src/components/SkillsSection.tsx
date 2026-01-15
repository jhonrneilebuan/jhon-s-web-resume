const technicalSkills = [
  { name: "Frontend Development", level: 90 },
  { name: "Backend Development", level: 85 },
  { name: "Mobile Development", level: 88 },
  { name: "Software Development", level: 85 },
  { name: "Project Management", level: 80 },
];

const programmingLanguages = [
  "Java",
  "Python",
  "Kotlin",
  "JavaScript",
  "TypeScript",
  "Dart",
  "C#",
  "HTML & CSS",
];

const frameworks = [
  "ReactJS",
  "Flutter",
  "NodeJS",
  "Express",
  "Laravel",
  "Unity",
  "MongoDB",
  "Firebase",
];

const coreSkills = [
  "Leadership",
  "Trainability",
  "Computational Thinking",
  "Problem Solving",
  "Teamwork Collaboration",
  "Flexibility & Agility",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages & Frameworks */}
          <div className="space-y-6">
            {/* Languages */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {programmingLanguages.map((lang, index) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-default opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {frameworks.map((framework, index) => (
                  <span
                    key={framework}
                    className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-secondary/70 transition-colors cursor-default opacity-0 animate-fade-in"
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
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Core Work Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{skill}</span>
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
