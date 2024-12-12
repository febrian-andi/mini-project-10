import React from "react";
import RoomImage from "../assets/room-image-about.png";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20">
        <div className="my-auto space-y-10">
          <h1 className="text-5xl font-bold">
            The Best Furniture Manufacturer Of Your Choice
          </h1>
          <p className="text-xl">
            Furnitre power is a software as services for multiperpose business
            management system expecially for them who are running two or more
            business explore the future Furnitre power is a software as services
          </p>
        </div>
        <div>
          <img
            src={RoomImage}
            alt="feature"
            className="w-full md:h-[500px] md:object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
