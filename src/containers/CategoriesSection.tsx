import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import CategoryList from "../components/categories/CategoryList";

const CategoriesSection: React.FC = () => {
  return (
    <section className="px-20 py-10">
      <div className="flex flex-row gap-8">
        <div className="space-y-10 w-1/2">
          <h1 className="text-5xl font-bold">New In<br/> Store Now</h1>
          <p className="text-gray-500 text-lg">
            Get the latest items immediately with promo prices
          </p>
          <p>
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
