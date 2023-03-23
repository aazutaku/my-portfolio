import React from "react";

interface CategoryButtonPropsType {
  category: string;
  className: string;
  onChangeCategory: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonPropsType> = ({
  category,
  className,
  onChangeCategory,
}) => {
  return (
    <button className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </button>
  );
};

export default CategoryButton;
