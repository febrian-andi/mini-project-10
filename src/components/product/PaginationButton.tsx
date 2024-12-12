import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface PaginationButtonProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}
const PaginationButton: React.FC<PaginationButtonProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`hover:text-[#286F6C] ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed text-gray-500" : ""
        }`}
      >
        <ArrowLeftIcon className="w-6 h-6" />
      </button>

      <div className="flex space-x-2">
        {pageNumbers.map((page) => (
          <span
            key={page}
            className={`w-2.5 h-2.5 rounded-full ${
              page === currentPage ? "bg-[#286F6C]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`hover:text-[#286F6C] ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed text-gray-500"
            : ""
        }`}
      >
        <ArrowRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PaginationButton;
