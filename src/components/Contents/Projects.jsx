import React from "react";
import { projects } from "../../projects";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card">
            <img src={project.src} alt="project" />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            {/* gh link here */}
            {/* live demo link here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
