import { ExternalLink, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: string;
  role: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "DisabilityCareers",
    description: "A job-matching platform that connects persons with disabilities (PWDs) to inclusive employers. It helps PWDs find accessible job opportunities while guiding companies on inclusive hiring and workplace accessibility.",
    tech: ["ReactJS", "MongoDB", "NodeJS"],
    year: "2024 - 2025",
    role: "Full Stack Developer",
    highlights: [
      "Job postings from companies committed to disability inclusion",
      "Filters to match job seekers with roles based on skills and needs",
      "Successfully developed a mobile application for the project"
    ],
  },
  {
    title: "A&J AutoFix",
    description: "A comprehensive online platform designed to streamline and enhance the vehicle repair and maintenance booking process. The platform provides a seamless and efficient experience for both vehicle owners and service providers.",
    tech: ["Flutter", "Dart", "MongoDB", "NodeJS", "Firebase"],
    year: "2024",
    role: "Full Stack Developer",
    highlights: [
      "User-friendly interface for web and mobile platforms",
      "Notification, customer reviews and ratings, geolocation services"
    ],
  },
  {
    title: "Gear Brawl",
    description: "A multiplayer action game developed using Unity and C# with 3D assets created in Blender.",
    tech: ["Unity", "C#", "Blender"],
    year: "2025",
    role: "Full Stack Developer",
    highlights: [
      "3D game development with Unity engine",
      "Custom 3D assets and animations"
    ],
  },
  {
    title: "Bibilibeads",
    description: "An e-commerce platform that lets you shop for colorful beads and customize unique accessories! Mix and match designs to create stunning bracelets, necklaces, and charms.",
    tech: ["Android Studio", "Kotlin", "Laravel"],
    year: "2023",
    role: "Full Stack Developer",
    highlights: [
      "Customizable accessories creation",
      "Drag-and-drop customization feature"
    ],
  },
  {
    title: "Weastern Oceanic Grandeur",
    description: "A restaurant reservation website that allows users to book a table, select the number of guests, and explore the menu including appetizers, drinks, and main dishes.",
    tech: ["HTML", "CSS"],
    year: "2022",
    role: "Front-End Developer",
    highlights: [
      "Simple reservation system with capacity selection",
      "Responsive & user-friendly design"
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                    <span>•</span>
                    <span>{project.role}</span>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mb-6 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
