import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import styles from "./Portfolio.module.scss";

interface ProjectsCategoriesPropsType {
  categories: string[];
  onFilterProjects: (activeCategory: string) => void;
}

const ProjectsCategories: React.FC<ProjectsCategoriesPropsType> = ({
  categories,
  onFilterProjects,
}) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const changeCategoryHandler = (activeCat: string) => {
    setActiveCategory(activeCat);
    onFilterProjects(activeCat);
  };

  return (
    <div className={styles.portfolio__categories}>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={styles.cat__btn + " btn"}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
