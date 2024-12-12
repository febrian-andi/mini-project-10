import React, { useState } from "react";
import TestimonialCard from "../components/testimonial/TestimonialCard";
import { useFetchData } from "../hooks/useFetchData";
import {
  TestimonialsResponse,
  TestimonialData,
} from "../types/TestimonialData";
import PaginationButton from "../components/testimonial/PaginationButton";
import RoomImage from "../assets/room-image-testimonial.png";

// Testimonial Section Component
const TestimonialSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, loading, error } = useFetchData<TestimonialsResponse>(
    `/testimonials?limit=1&page=${currentPage}`
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (data?.totalPages && currentPage < data.totalPages)
      setCurrentPage(currentPage + 1);
  };

  return (
    <section className="py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 my-auto">
          <h1 className="text-4xl font-bold mb-8">
            What People Are Saying About Us
          </h1>

          {loading && (
            <div className="flex space-x-2 justify-center h-[180px]">
              <div className="w-5 h-5 border-4 border-[#286F6C] border-t-transparent rounded-full animate-spin"></div>
              <p>Loading...</p>
            </div>
          )}

          {error && (
            <p className="text-red-500 text-center h-[180px]">
              Failed to load testimonials
            </p>
          )}

          {!loading && !data?.testimonials?.length && (
            <p className="text-center h-[180px]">No testimonials found</p>
          )}

          {data?.testimonials?.map((testimonial: TestimonialData) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.id} />
          ))}

          <div className="hidden md:block">
            <PaginationButton
              onPrev={handlePrevPage}
              onNext={handleNextPage}
              hasPrev={currentPage > 1}
              hasNext={!!(data?.totalPages && currentPage < data.totalPages)}
            />
          </div>
        </div>

        <div>
          <img
            src={RoomImage}
            alt="feature"
            className="w-full md:h-[350px] md:object-cover rounded-md"
          />
        </div>
        <div className="block md:hidden mx-auto">
          <PaginationButton
            onPrev={handlePrevPage}
            onNext={handleNextPage}
            hasPrev={currentPage > 1}
            hasNext={!!(data?.totalPages && currentPage < data.totalPages)}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
