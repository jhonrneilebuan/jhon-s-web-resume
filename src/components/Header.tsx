import { Download, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gradient relative group">
            JE
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary rounded-full px-6">
              <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in bg-background/95 backdrop-blur-xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-xl transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 w-full rounded-full">
                  <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;