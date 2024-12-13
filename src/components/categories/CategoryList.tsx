import React from "react";
import CategoryCard from "./CategoryCard";
import { useFetchData } from "../../hooks/useFetchData";
import { CategoriesResponse, CategoryData } from "../../types/CategoryData";
import "./CategoryList.css";

const CategoryList: React.FC = () => {
  const { data, error, loading } =
    useFetchData<CategoriesResponse>("/category");
    
  if (loading)
    return (
      <div className="flex space-x-2 justify-center">
        <div className="w-5 h-5 border-4 border-[#286F6C] border-t-transparent rounded-full animate-spin"></div>
        <p>Loading...</p>
      </div>
    );
  if (error) return <p className="text-red-500 text-center">Error</p>;
  if (!data || data.category.length === 0) return <p className="text-center">No data</p>;

  return (
    <div className="flex flex-row space-x-4 overflow-x-auto w-full py-6 no-scrollbar">
      {data.category.map((category: CategoryData, index: number) => (
        <CategoryCard key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
