import React from "react";

const ProductCard: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="space-y-6">
        <img
          src="https://picsum.photos/200/300"
          alt="product"
          className="w-full h-[300px] object-cover rounded-md"
        />
        <div>
          <h1 className="text-2xl font-semibold line-clamp-1">Product Name</h1>
          <p className="text-lg font-semibold">Price</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
