import React from "react";
import { ProductData } from "../../types/ProductData";

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-3 hover:scale-105 cursor-pointer transition-transform duration-300">
      <div className="space-y-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[200px] lg:h-[300px] object-cover rounded-md"
        />
        <div>
          <h1 className="text-2xl font-semibold line-clamp-1">
            {product.title}
          </h1>
          <div className="flex space-x-3 items-center">
            <p className="text-lg font-semibold">
              $
              {product.price_after_discount
                ? product.price_after_discount
                : product.price}
            </p>

            {product.price_after_discount && (
              <p className="text-gray-400 line-through">
                ${product.price}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
