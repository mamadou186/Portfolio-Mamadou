import { useState } from "react";
import "../styles/Projects.css";
import { projects } from "../data/ProjectsData";

const skills = [
  { id: "realiser", name: "Réaliser", color: "#D32F2F", description: "Développer, concevoir, coder et tester une solution informatique." },
  { id: "optimiser", name: "Optimiser", color: "#F57C00", description: "Proposer des solutions optimisées en termes de performance et de ressources." },
  { id: "administrer", name: "Administrer", color: "#FBC02D", description: "Installer, configurer et maintenir des infrastructures et réseaux." },
  { id: "gerer", name: "Gérer", color: "#388E3C", description: "Exploiter les données de l’entreprise pour un bon pilotage." },
  { id: "conduire", name: "Conduire", color: "#1976D2", description: "Organiser et piloter un projet informatique avec des méthodes adaptées." },
  { id: "collaborer", name: "Collaborer", color: "#212121", description: "Développer des aptitudes pour travailler efficacement en équipe." }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleProjectClick = (project: any) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);
  const handleSkillClick = (skill: string) => setSelectedSkill(skill === selectedSkill ? null : skill);

  const filteredProjects = selectedSkill
    ? projects.filter((project) => project.skills.includes(selectedSkill))
    : projects;

  return (
    <div id="PROJECTS" className="projects-container">
      {/* Filtres par compétences */}
      <div className="filters-container">
        <span className="filters-label">
          Compétences
        </span>

        <div className="filters">
          {skills.map((skill) => (
            <button
              key={skill.id}
              style={{ backgroundColor: skill.color }}
              className={`filter-button ${selectedSkill === skill.id ? "active" : ""}`}
              onClick={() => handleSkillClick(skill.id)}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projets affichés */}
      <div className="projects-list">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${activeId === project.id ? "active" : "inactive"}`}
            onMouseEnter={() => setActiveId(project.id)}
            onMouseLeave={() => setActiveId(null)}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="description">{project.description}</p>
              <div className="skills">
                {project.skills.map((skillId) => {
                  const skill = skills.find((s) => s.id === skillId);
                  return (
                    <span key={skillId} className="skill-badge project-skill-badge" style={{ backgroundColor: skill?.color }}>
                      {skill?.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modale projet */}
      {selectedProject && (
        <div className="project-modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedProject.details }} />
            <button className="close-btn" onClick={handleCloseModal}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
