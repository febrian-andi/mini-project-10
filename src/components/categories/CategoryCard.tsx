import React from "react";

const CategoryCard: React.FC = () => {
  return (
    <div className="relative flex-shrink-0">
      <img
        src="https://picsum.photos/500/500"
        alt="category"
        className="w-[300px] h-[400px] md:h-[450px] object-cover"
      />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-bold text-white">
          Category
        </h1>
      </div>
    </div>
  );
};

export default CategoryCard;
