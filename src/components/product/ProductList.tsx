import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useFetchData } from "../../hooks/useFetchData";
import { ProductsResponse, ProductData } from "../../types/ProductData";
import PaginationButton from "./PaginationButton";

const ProductList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, error } = useFetchData<ProductsResponse>(
    `/products?limit=8&page=${currentPage}`
  );

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (data && currentPage < data.totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading)
    return (
      <div className="flex space-x-2 justify-center h-[300px]">
        <div className="w-5 h-5 border-4 border-[#286F6C] border-t-transparent rounded-full animate-spin"></div>
        <p>Loading...</p>
      </div>
    );
  if (error) return <p className="text-red-500 text-center">Error!</p>;
  if (!data || data.products.length === 0)
    return <p className="text-center">No data</p>;

  return (
    <div>
      {/* Product grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {data.products.map((product: ProductData, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

      {/* Pagination buttons */}
      <PaginationButton
        currentPage={currentPage}
        totalPages={data.totalPages}
        onPrev={handlePrevPage}
        onNext={handleNextPage}
      />
    </div>
  );
};

export default ProductList;
