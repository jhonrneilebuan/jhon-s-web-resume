import { Mail, Phone, MapPin, Send, Download, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+63 950 823 0467",
      href: "tel:+639508230467",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jhonebuan@gmail.com",
      href: "mailto:jhonebuan@gmail.com",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bantayan, Mangaldan, Pangasinan",
      href: null,
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-6 text-center hover:border-primary/40 transition-all duration-500 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{info.label}</h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group/link"
                    >
                      {info.value}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="relative bg-card/50 backdrop-blur-sm border border-primary/30 rounded-3xl p-10 md:p-14 text-center overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {/* Decorative gradients */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Work <span className="text-gradient">Together!</span>
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
                I'm currently open to new opportunities and exciting projects. 
                Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary px-8 rounded-full">
                  <a href="mailto:jhonebuan@gmail.com">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground rounded-full">
                  <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;