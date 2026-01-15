import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+63 950 823 0467",
      href: "tel:+639508230467",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jhonebuan@gmail.com",
      href: "mailto:jhonebuan@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bantayan, Mangaldan, Pangasinan",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{info.label}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together!
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              I'm currently open to new opportunities and exciting projects. 
              Feel free to reach out if you want to collaborate or just say hello!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary px-8">
                <a href="mailto:jhonebuan@gmail.com">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="/resume/CV_EBUAN_JHON_R-NEIL_C.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
