import styles from "./Portfolio.module.scss";
import Projects from "./Projects";
import ProjectsCategories from "./ProjectsCategories";
import data from "./data";
import { useState } from "react";
import { Container } from "@mui/material";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category: string) => {
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section className={styles.portfolio__root}>
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the different categories.
      </p>
      <Container maxWidth="xl">
        <div className={styles.portfolio__container} data-aos="flip-right">
          <ProjectsCategories
            categories={uniqueCategories}
            onFilterProjects={filterProjectsHandler}
          />
          <Projects projects={projects} />
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
