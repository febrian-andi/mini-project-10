import React from "react";
import { HiCheckCircle } from "react-icons/hi2";
import RoomImage from "../assets/room-image-features.png";

const FeaturesSection: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20">
        <div className="hidden md:block">
          <img
            src={RoomImage}
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
            <HiCheckCircle className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">Valuation Service</h2>
              <p className="text-lg">lorem ipsum</p>
            </div>
          </div>
          <div className="flex gap-4">
            <HiCheckCircle className="w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold">
                Development of Furniture Modelss
              </h2>
              <p className="text-lg">lorem ipsum</p>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <img
            src={RoomImage}
            alt="feature"
            className="w-full rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
