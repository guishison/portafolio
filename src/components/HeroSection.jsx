import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* 🔥 Nueva sección de foto */}
      <div className="mb-8 z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-3xl opacity-50 animate-pulse"></div>

          {/* Imagen circular */}
          <img
            src="/foto3.jpg" // 🔹 Cambia por la ruta de tu foto
            alt="Guillermo Soliz Nagatoshi"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary shadow-lg shadow-purple-500/50"
          />
        </motion.div>
      </div>

      {/* Texto principal */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hola, Soy</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Guillermo
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Soliz Nagatoshi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Desarrollador backend especializado en arquitecturas escalables, APIs
            robustas y optimización de rendimiento. Transformo ideas en
            soluciones tecnológicas seguras y eficientes.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Mira mi trabajo
            </a>
          </div>
        </div>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
