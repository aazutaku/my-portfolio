import React from "react";
import { Card } from "../../parts";
import styles from "./Portfolio.module.scss";

export interface DataPropsType {
  id: number;
  category: string;
  image: string;
  title: string;
  desc: string;
  demo: string;
  github: string;
}

export interface ProjectPropsType {
  project: DataPropsType;
}

const Project: React.FC<ProjectPropsType> = ({ project }) => {
  return (
    <Card className={styles.portfolio__project}>
      <div className={styles.portfolio__project_image}>
        <img src={project.image} alt="Portfolio Project Image" width="300" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className={styles.portfolio__project_cta}>
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopner noreferrer"
        >
          Gitbub
        </a>
      </div>
    </Card>
  );
};

export default Project;
