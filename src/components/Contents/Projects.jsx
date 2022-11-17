import React from "react";
import { projects } from "../../projects";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card">
            <img src={project.src} alt="project" />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="links">
              {project.gh_link && (
                <a href={project.gh_link} target="_blank" rel="noreferrer">
                  <AiFillGithub size={"50px"} />
                </a>
              )}
              {project.live_link && (
                <a href={project.live_link} target="_blank" rel="noreferrer">
                  <BiLinkExternal size={"50px"} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
