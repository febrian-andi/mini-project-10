import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const FeaturesSection: React.FC = () => {
  return (
    <section className="px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src="https://picsum.photos/500/500"
            alt="feature"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>
        <div className="space-y-8 my-auto">
          <h1 className="text-6xl font-bold">
            We Create Your Home More Aestetic
          </h1>
          <p className="text-xl">
            Furnitre power is a software as services for multiperpose business
            management system.
          </p>
          <div className="flex gap-4">
            <CheckCircleIcon className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">Valuation Service</h2>
              <p className="text-lg">lorem ipsum</p>
            </div>
          </div>
          <div className="flex gap-4">
            <CheckCircleIcon className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">
                Development of Furniture Modelss
              </h2>
              <p className="text-lg">lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
