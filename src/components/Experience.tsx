import { useState } from "react";
import "../styles/Experience.css";

const experiences = [
    {
      id: 1,
      date: "2024 — Aujourd'hui",
      role: "Développeur Web",
      company: "Groupama Supports et Services (G2S)",
      description:
        "Développement et maintenance de solutions web basées sur Drupal et Symfony. Gestion du développmement avec Git et collaboration avec les équipes métier pour améliorer les différentes applications.",
      skills: ["Drupal", "Symfony", "Git"],
    },
    {
      id: 2,
      date: "2022 — 2025",
      role: "BUT Informatique",
      company: "IUT Marne-la-Vallée Champs-sur-Marne",
      description:
        "Formation en informatique avec une spécialisation en développement web et applications. Expériences pratiques en programmation, gestion de bases de données et développement d'interfaces utilisateur.",
      skills: ["JavaScript", "HTML", "CSS", "Java", "React"],
    },
    {
      id: 3,
      date: "2021 — 2022",
      role: "Licence Maths Informatique appliquées aux Sciences Humaines et Sociales",
      company: "Université Paris Nanterre",
      description:
        "Étude des mathématiques appliquées et de l’informatique, avec un focus sur la modélisation, l’analyse de données et le développement d’algorithmes en C et PHP.",
      skills: ["C", "PHP"],
    },
    {
      id: 4,
      date: "2019 — 2021",
      role: "Baccalauréat Général",
      company: "Lycée Gérard de Nerval de Noisiel",
      description:
        "Baccalauréat avec spécialisation en mathématiques et Numérique et Sciences de l'Informatique (NSI). Apprentissage des bases de la programmation, de l’algorithmique et de la gestion de bases de données.",
      skills: ["Python", "SQL"],
    },
  ];  

const Experience = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div id="EXPERIENCE" className="mb-5">
        <div className="experience-container">
        {experiences.map((exp) => (
            <div
            key={exp.id}
            className={`experience-card ${activeId === exp.id ? "active" : "inactive"}`}
            onMouseEnter={() => setActiveId(exp.id)}
            onMouseLeave={() => setActiveId(null)}
            >
            <p className="date">{exp.date}</p>
            <h3 className="role">
                {exp.role} · <span className="company">{exp.company}</span>
            </h3>
            <p className="description">{exp.description}</p>
            <div className="skills">
                {exp.skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                    {skill}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Experience;
