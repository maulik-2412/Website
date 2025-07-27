import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Telehealth",
      description:
        "A full-stack telehealth app built with Express, React and Firebase. Features includes user authentication, doctor locator, and diagnosis tool.",
      image: "/telehealth.png",
      technologies: ["React", "Node.js", "Firebase", "External APIs"],
      liveUrl: "https://genesis-azure.vercel.app/",
      githubUrl: "https://github.com/maulik-2412/telehealth",
    },
    {
      title: "ENVA 2024",
      description:
        "A comprhensive platform for ENVA 2024, featuring event details, and real-time updates.",
      image: "/enva24.png",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind"],
      liveUrl: "https://enva2k24.vercel.app/",
      githubUrl: "https://github.com/maulik-2412/enva2k24",
    },
    {
      title: "Comment App",
      description:
        "A backend focused application that allows users to post comments, edit and delete them, with allowing notifications for replies.",
      image: "/comment_app.png",
      technologies: ["Next.js", "Nets.js", "PostgreSQL", "Docker"],
      liveUrl: "https://sanctityai-frontend.onrender.com/",
      githubUrl: "https://github.com/maulik-2412/Comment-App",
    },
    {
      title: "Historical Token Price Oracle",
      description:
        "A polygon/ethereum oracle that provides historical token prices for any given date, built with Next.js, Alchemy, Express, and MongoDB.",
      image: "/oracle.png",
      technologies: [
        "Next.js",
        "Redis",
        "Express",
        "MongoDB",
        "BullMQ",
        "Alchemy",
      ],
      liveUrl: "https://historical-price-oracle-olive.vercel.app/",
      githubUrl: "https://github.com/maulik-2412/historical-price-oracle",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FFD60A] text-shadow-gold mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transform hover:scale-105 button-glow text-[#FFD60A] bg-[#001D3D]"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-shadow-gold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white text-shadow-gold">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs button-glow bg-[#000814]"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex items-center gap-2 button-glow bg-[#000814]"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4  " />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 button-glow bg-transparent bg-[#000814]"
                    asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
