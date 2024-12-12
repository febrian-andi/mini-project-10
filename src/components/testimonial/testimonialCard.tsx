import React from "react";
import { TestimonialData } from "../../types/TestimonialData";

interface TestimonialCardProps {
  testimonial: TestimonialData;
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="space-y-4 h-[180px]">
      <div className="flex space-x-4">
        <img
          src={testimonial.image}
          alt="testimonial"
          className="rounded-full w-16 h-16 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">{testimonial.name}</h2>
          <p className="text-gray-400">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-gray-600 text-lg h-[100px]">
        "{testimonial.message}"
      </p>
    </div>
  );
};

export default TestimonialCard;