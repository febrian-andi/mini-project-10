import React from "react";
import StatisticCard from "../components/header/StatisticCard";
import Hero from "../components/header/Hero";

const HeaderSection: React.FC = () => {
  return (
    <section>
      <Hero />
      <StatisticCard />
    </section>
  );
};

export default HeaderSection;
