import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Acerca de <span className="text-primary"> mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador Backend Apasionado & Creador Tecnológico
            </h3>

            <p className="text-muted-foreground">
              Con más de 12 años de experiencia en desarrollo de software, me especializo en diseñar e
              implementar APIs robustas, microservicios escalables y arquitecturas seguras
              que impulsan productos digitales de alto rendimiento.
            </p>

            <p className="text-muted-foreground">
              Me apasiona construir soluciones elegantes para sistemas complejos, optimizar
              procesos y crear entornos tecnológicos preparados para crecer.
              Mantengo un aprendizaje constante para estar siempre a la vanguardia en el mundo backend y cloud.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contactame
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descarga mi CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desarrollo Backend</h4>
                  <p className="text-muted-foreground">
                    Diseño e implementación de APIs REST, microservicios y arquitecturas escalables con tecnologías modernas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Ecosistemas y Arquitecturas</h4>
                  <p className="text-muted-foreground">
                    Construcción de entornos robustos, optimización de rendimiento y despliegues.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestión de Proyectos</h4>
                  <p className="text-muted-foreground">
                    Liderazgo técnico en proyectos desde la concepción hasta la producción, aplicando metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
