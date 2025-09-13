import { experienceData } from "./experience/experienceData";
import { motion } from "framer-motion";
import "./experience/ExperienceTimelineAlt.css";
export const ExperienceSection = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Experiencia Profesional</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <div className="logo-container">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>
              <h3>{exp.role} <span className="company">@ {exp.company}</span></h3>
              <span className="location">{exp.location}</span>
              <span className="period">{exp.period}</span>

              <div className="section-block">
                <strong>Responsabilidades:</strong>
                {exp.responsibilities.map((r, idx) => (
                  <div key={idx} className="line-item">➤ {r}</div>
                ))}
              </div>

              <div className="section-block">
                <strong>Logros:</strong>
                {exp.achievements.map((a, idx) => (
                  <div key={idx} className="line-item">✔ {a}</div>
                ))}
              </div>

              <div className="tech-stack">
                <strong>Tecnologías:</strong>
                <div className="tech-tags">
                  {exp.tech.map((t, idx) => (
                    <span key={idx} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};