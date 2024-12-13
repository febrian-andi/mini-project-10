import React from "react";
import { CategoryData } from "../../types/CategoryData";

interface CategoryCardProps {
  category: CategoryData;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="relative flex-shrink-0">
      <img
        src={category.image}
        alt="category image"
        className="w-[280px] h-[400px] md:h-[450px] object-cover rounded-md hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold text-white">
          {category.title}
        </h1>
      </div>
    </div>
  );
};

export default CategoryCard;
