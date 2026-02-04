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
    <section id="about" className="py-16 md:py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/5 rounded-full blur-[120px] md:blur-[150px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Passionate <span className="text-gradient">Developer</span>
            </h2>
          </div>

          {/* Profile Summary Card */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 mb-10 md:mb-16 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-gradient-primary opacity-5 blur-3xl" />
            
            <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-0.5 md:mb-1">Who I Am</h3>
                <p className="text-xs md:text-sm text-muted-foreground">A passionate creator of digital solutions</p>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I am a BSIT student majoring in System Development at PHINMA University of Pangasinan, 
              specializing in mobile and web development. Passionate about software development and 
              problem-solving, I build efficient, user-friendly applications. Skilled in programming, 
              databases, and modern frameworks, I continuously enhance my expertise to create 
              innovative and scalable solutions.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl md:rounded-2xl p-5 md:p-6 hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-1.5 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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