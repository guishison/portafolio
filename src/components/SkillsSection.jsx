import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // 🔹 Backend
  { name: "Node.js", level: 90, category: "backend" },
  { name: "NestJS", level: 90, category: "backend" },
  { name: "Express", level: 80, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  { name: "Microservicios", level: 90, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "SOAP", level: 60, category: "backend" },
  { name: ".NET Framework", level: 90, category: "backend" },
  { name: "VB.NET", level: 90, category: "backend" },

  // 🔹 Bases de Datos
  { name: "MongoDB", level: 90, category: "database" },
  { name: "Oracle", level: 85, category: "database" },
  { name: "PostgreSQL", level: 80, category: "database" },
  { name: "MySQL", level: 95, category: "database" },
  { name: "SQL Server", level: 85, category: "database" },
  { name: "Redis", level: 75, category: "database" },

  // 🔹 Frontend (lo básico para complementar)
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 95, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "Next.js", level: 60, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },

  // 🔹 DevOps & Cloud
  { name: "Docker", level: 85, category: "devops" },
  { name: "Kubernetes", level: 70, category: "devops" },
  { name: "Azure DevOps", level: 75, category: "devops" },
  { name: "CI/CD", level: 80, category: "devops" },
  { name: "Kafka", level: 85, category: "devops" },

  // 🔹 Control de Versiones
  { name: "Git", level: 90, category: "tools" },
  { name: "GitHub", level: 90, category: "tools" },
  { name: "GitLab", level: 90, category: "tools" },
  { name: "SVN", level: 70, category: "tools" },
  { name: "TypeORM", level: 80, category: "tools" },
  { name: "Mongoose", level: 85, category: "tools" },

  // 🔹 Otras herramientas
  { name: "VS Code", level: 95, category: "tools" },

  // 🔹 Metodologías
  { name: "Scrum", level: 95, category: "methodology" },
  { name: "Kanban", level: 80, category: "methodology" },
];

const categories = ["backend", "frontend", "database", "tools", "devops", "methodology", "all"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("backend");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mis <span className="text-primary"> Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
