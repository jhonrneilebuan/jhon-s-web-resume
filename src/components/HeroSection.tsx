import { ArrowDown, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative opacity-0 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-primary opacity-20 blur-xl animate-pulse" />
              
              {/* Profile container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/40 glow-primary">
                <img
                  src={profileImage}
                  alt="Jhon R-Neil C. Ebuan"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-gradient-primary rounded-full flex items-center gap-2 text-primary-foreground font-semibold text-sm shadow-lg">
                <Sparkles className="w-4 h-4" />
                BSIT
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Available for opportunities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Hi, I'm{" "}
              <span className="text-gradient block lg:inline">Jhon R-Neil</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="text-foreground font-medium">Mobile Developer</span> & System Development Specialist
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              BSIT student at PHINMA University of Pangasinan, passionate about building efficient, user-friendly applications that make a difference.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <a
                href="tel:+639508230467"
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Phone className="w-4 h-4" />
                +63 950 823 0467
              </a>
              <a
                href="mailto:jhonebuan@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
              >
                <Mail className="w-4 h-4" />
                jhonebuan@gmail.com
              </a>
              <span className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Mangaldan, Pangasinan
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary px-8 rounded-full">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;