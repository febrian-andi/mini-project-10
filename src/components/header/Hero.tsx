import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { HeroData } from "../../types/HeroData";

const Hero: React.FC = () => {
  const { data, error, loading } = useFetchData<HeroData>("/header");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="relative">
      <img
        src={data.banner}
        alt="header image"
        className="w-full h-[750px] md:h-full object-right object-cover"
      />
      <div className="px-10 md:px-0 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-12">
        <h1 className="text-3xl md:text-5xl font-bold">
          {data.title}
        </h1>
        <p>{data.description}</p>
        <button className="bg-white bg-opacity-50 backdrop-blur-sm text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-30 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
