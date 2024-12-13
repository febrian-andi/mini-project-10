import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

interface PaginationButtonProps {
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  hasPrev,
  hasNext,
  onPrev,
  onNext,
}) => {
  return (
    <div className="space-x-2">
      <button
        onClick={onPrev}
        disabled={!hasPrev}
        className={`p-3 border-2 border-gray-300 rounded-full hover:text-white hover:bg-[#286F6C] ${
          !hasPrev ? "opacity-50 cursor-not-allowed bg-gray-400" : ""
        }`}
      >
        <HiArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        disabled={!hasNext}
        className={`p-3 border-2 border-gray-300 rounded-full hover:text-white hover:bg-[#286F6C] ${
          !hasNext ? "opacity-50 cursor-not-allowed bg-gray-400" : ""
        }`}
      >
        <HiArrowRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default PaginationButton;
