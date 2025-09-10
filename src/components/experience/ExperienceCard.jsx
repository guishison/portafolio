import React from "react";
import "./ExperienceCards.css";

export const ExperienceCard = ({ company, role, period, description, logo, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <img src={logo} alt={`${company} logo`} className="logo" />
      <h3>{company}</h3>
      <p className="role">{role}</p>
      <p className="period">{period}</p>
      <p className="desc">{description}</p>
    </div>
  );
};
