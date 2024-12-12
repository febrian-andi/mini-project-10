import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { StatisticData } from "../../types/StatisticData";

const StatisticCard: React.FC = () => {
  const { data, loading, error } = useFetchData<StatisticData>("/data");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="px-6 md:px-20">
      <div className="bg-[#286F6C] py-10 grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 justify-items-center rounded-3xl">
        <div>
          <h1 className="text-4xl text-white font-bold text-center">{data.experience}</h1>
          <p className="text-white">Year Experience</p>
        </div>
        <div className="border-l-2 md:border-x-2 w-full">
          <h1 className="text-4xl text-white font-bold text-center">{data.country}</h1>
          <p className="text-white text-center">Opened in the country</p>
        </div>
        <div className="border-r-2 w-full">
          <h1 className="text-4xl text-white font-bold text-center">{data.sold}</h1>
          <p className="text-white text-center">Furniture sold</p>
        </div>
        <div>
          <h1 className="text-4xl text-white font-bold text-center">{data.variant}</h1>
          <p className="text-white">Variant Furniture</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
