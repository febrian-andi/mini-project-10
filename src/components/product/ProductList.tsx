import React from "react";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
