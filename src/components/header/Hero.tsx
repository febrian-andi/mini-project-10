import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { HeroData } from "../../types/HeroData";

const Hero: React.FC = () => {
  const { data, error, loading } = useFetchData<HeroData>("/header");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <img
        src={data.banner}
        alt="header image"
        className="w-full h-[800px] lg:h-[900px] object-right object-cover"
      />
      <div className="px-10 md:px-0 w-full lg:w-[60%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-12">
        <h1 className="text-5xl md:text-6xl font-bold">{data.title}</h1>
        <p className="text-xl lg:w-[60%] mx-auto">{data.description}</p>
        <button className="bg-white bg-opacity-50 backdrop-blur-sm text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-30 transition duration-300">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
