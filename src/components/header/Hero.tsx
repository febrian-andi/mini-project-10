import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <img
        src="https://ik.imagekit.io/lumoshiveAcademy/Furniture/8f82d2c087c3c1808660cf2b4c6dc4a5.webp"
        alt="header"
        className="w-full h-[750px] md:h-full object-right object-cover"
      />
      <div className="px-10 md:px-0 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-12">
        <h1 className="text-3xl md:text-5xl font-bold">
          Let's create something great together.
        </h1>
        <p>lorem ipsum</p>
        <button className="bg-white bg-opacity-50 backdrop-blur-sm text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-30 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
