import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const TestimonialCard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex space-x-4">
        <img
          src="https://picsum.photos/300/300"
          alt="testimonial"
          className="rounded-full w-16 h-16 object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold">Juan</h2>
          <p className="text-gray-400">Civil Engineer</p>
        </div>
      </div>
      <p className="text-gray-600 text-lg">
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s"
      </p>
      <div className="space-x-2">
        <button className="p-3 border-2 border-gray-300 rounded-full hover:text-white hover:bg-[#286F6C]">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button className="p-3 border-2 border-gray-300 rounded-full hover:text-white hover:bg-[#286F6C]">
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
