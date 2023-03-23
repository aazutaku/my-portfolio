import React from "react";
import Project, { DataPropsType } from "./Project";
import styles from "./Portfolio.module.scss";

interface ProjectsPropsType {
  projects: DataPropsType[];
}

const Projects: React.FC<ProjectsPropsType> = ({ projects }) => {
  return (
    <div className={styles.portfolio__projects} data-aos="fade-up">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
