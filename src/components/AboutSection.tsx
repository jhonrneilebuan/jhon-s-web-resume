import { GraduationCap, Code, Smartphone, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BSIT Student",
      description: "Major in System Development at PHINMA University of Pangasinan (2022 - Present)",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Developer",
      description: "Specializing in Flutter, React Native, and native Android development",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Building complete solutions with React, Node.js, and MongoDB",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Passionate <span className="text-gradient">Developer</span>
            </h2>
          </div>

          {/* Profile Summary Card */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 mb-16 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 blur-3xl" />
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Who I Am</h3>
                <p className="text-sm text-muted-foreground">A passionate creator of digital solutions</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a BSIT student majoring in System Development at PHINMA University of Pangasinan, 
              specializing in mobile and web development. Passionate about software development and 
              problem-solving, I build efficient, user-friendly applications. Skilled in programming, 
              databases, and modern frameworks, I continuously enhance my expertise to create 
              innovative and scalable solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;