import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, ToolCase } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: ["Java", "Python", "TypeScript","JavaScript", "C++","C", "SQL"],
    },
    {
      title: "Backend & Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: ["React.js", "Node.js", "Express","Nest.js", "REST APIs", "BullMQ", "OAuth","Next.js", "Zustand"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Mongoose", "DuckDB","DynamoDB"],
    },
    {
      title: "Other Tools",
      icon: <ToolCase className="h-6 w-6" />,
      skills: ["AWS S3","Unix", "Git", "Docker", "Postman", "Firebase","AWS Lambda" ],
    },
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#FFD60A] text-shadow-gold mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="transform hover:scale-105 button-glow text-[#FFD60A] bg-[#001D3D]">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3  rounded-full w-fit">{category.icon}</div>
                  <CardTitle className="text-xl text-shadow-gold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-[#000814]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
