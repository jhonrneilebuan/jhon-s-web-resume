import { ArrowDown, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
              <img
                src={profileImage}
                alt="Jhon R-Neil C. Ebuan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
              BSIT
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <p className="text-primary font-mono text-sm mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Jhon R-Neil C. <span className="text-gradient">Ebuan</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              Mobile Developer | System Development
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              BSIT student at PHINMA University of Pangasinan, specializing in mobile and web development. Passionate about building efficient, user-friendly applications.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <a
                href="tel:+639508230467"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                +63 950 823 0467
              </a>
              <span className="text-border hidden sm:inline">|</span>
              <a
                href="mailto:jhonebuan@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                jhonebuan@gmail.com
              </a>
              <span className="text-border hidden sm:inline">|</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Mangaldan, Pangasinan
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary px-8">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="text-xs">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
