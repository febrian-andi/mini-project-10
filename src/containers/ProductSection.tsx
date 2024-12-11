import React from "react";
import ProductList from "../components/product/ProductList";

const ProductSection: React.FC = () => {
  return (
    <section className="py-20 px-20">
      <div className="mx-auto w-1/2 text-center space-y-6">
        <h1 className="text-5xl font-bold">All Product</h1>
        <p className="text-lg">
          The products we provide only for you as our service are selected from
          the best products with numbwr 1 quality in the world
        </p>
      </div>
      <div>
        <ProductList />
      </div>
    </section>
  );
};

export default ProductSection;
