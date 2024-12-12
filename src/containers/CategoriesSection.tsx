import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import CategoryList from "../components/categories/CategoryList";

const CategoriesSection: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex flex-row lg:flex-col lg:space-y-10 items-center lg:items-start space-x-2 lg:space-x-0 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold">New In Store Now</h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Get the latest items immediately with promo prices
          </p>
          <p className="hidden lg:block">
            <a href="#" className="font-semibold text-lg underline">
              Cheek All
            </a>
            <ArrowRightIcon className="inline-block ml-2 w-6 h-6" />
          </p>
        </div>
        <div>
            <CategoryList />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
