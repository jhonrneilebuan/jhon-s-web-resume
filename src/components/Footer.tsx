import { Heart, ArrowUp, Github, Linkedin, Facebook } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/jhonrneilebuan", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jhon-r-neil/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/jhonrneil.calimlim.04", icon: Facebook, label: "Facebook" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border bg-secondary/10 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-3xl font-bold text-gradient block mb-2">JE</span>
            <p className="text-sm text-muted-foreground flex items-center gap-1.5 justify-center md:justify-start">
              © {currentYear} Made with
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              by Jhon
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/50 hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary transition-all hover:scale-110"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
