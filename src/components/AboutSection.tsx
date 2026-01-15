import { GraduationCap, Code, Smartphone } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BSIT Student",
      description: "Major in System Development at PHINMA University of Pangasinan (2022 - Present)",
    },
    {
      icon: Smartphone,
      title: "Mobile Developer",
      description: "Specializing in Flutter, React Native, and native Android development",
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building complete solutions with React, Node.js, and MongoDB",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Passionate <span className="text-gradient">Developer</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Profile Summary */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-card mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              I am a BSIT student majoring in System Development at PHINMA University of Pangasinan, 
              specializing in mobile and web development. Passionate about software development and 
              problem-solving, I build efficient, user-friendly applications. Skilled in programming, 
              databases, and modern frameworks, I continuously enhance my expertise to create 
              innovative and scalable solutions.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
