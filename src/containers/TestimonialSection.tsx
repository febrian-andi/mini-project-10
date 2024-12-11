import React from "react";
import TestimonialCard from "../components/testimonial/testimonialCard";

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8 my-auto">
          <h1 className="text-4xl font-bold">
            What People Are Saying About Us
          </h1>
          <TestimonialCard />
        </div>
        <div>
          <img
            src="https://picsum.photos/500/500"
            alt="feature"
            className="w-full h-[350px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
