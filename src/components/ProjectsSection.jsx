import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { ProjectCarouselModal } from "./ProjectCarouselModal";

const projects = [
  {
    id: 1,
    title: "Sistems Compra Ventas Inventario Facturacion",
    description:
      "Sistema encargado de gestionar compras, ventas, inventario y facturación para una tienda automatizando procesos y mejorando la eficiencia operativa.",
    images: ["/projects/Proyecto2.png", "/projects/Proyecto2_1.png"],
    tags: [".net Framework", "Bootstrap", "Sql Server"],
  },
  {
    id: 2,
    title: "Redencion de Vales de Programa de Beneficios",
    description:
      "Aplicación web para la redención de vales en un programa de beneficios, permitiendo a los comercios redimir los vales de manera sencilla y segura.",
    images: ["/projects/Proyecto1.png","/projects/Proyecto1_1.png","/projects/Proyecto1_2.png"],
    tags: ["React", "Microservices", "MongoDB"],
  },
  {
    id: 3,
    title: "Afiliaciones y Comisiones",
    description:
      "Sistema de venta de tiempo compartido que gestiona afiliaciones, comisiones, callcenter y pagos recurrentes, optimizando la administración y seguimiento de las ventas.",
    images: [
      "/projects/Proyecto3.png",
      "/projects/Proyecto3_1.png",
      "/projects/Proyecto3_2.png",
    ],
    tags: ["asp.net", "Telerik", "Sql Server"],
  },
  {
    id: 4,
    title: "Backend para Programa de Fidelizacion VAMOS!",
    description:
      "Se realizo todo el backend para el programa de fidelización VAMOS!, incluyendo la integración con sistemas de terceros, gestión de usuarios y recompensas.",
    images: [
      "/projects/Proyecto4.jpeg",
      "/projects/Proyecto4_1.jpeg",
      "/projects/Proyecto4_2.jpeg",
      "/projects/Proyecto4_3.jpeg",
    ],
    tags: ["NestJS", "Oracle", "Kafka", "Docker", "Kubernetes"],
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí se muestran algunos de mis proyectos recientes. Cada uno fue
          desarrollado con un enfoque en arquitecturas escalables, APIs robustas
          y alto rendimiento, asegurando soluciones confiables y eficientes para
          problemas complejos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    aria-label={`Ver imágenes de ${project.title}`}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProjectCarouselModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/guishison"
          >
            Mira mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
