import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryList: React.FC = () => {
  return (
    <div className="flex flex-row space-x-4 overflow-x-auto w-full py-4">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
};

export default CategoryList;
