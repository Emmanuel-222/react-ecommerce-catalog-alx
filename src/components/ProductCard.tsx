import { ShoppingCart } from "lucide-react";
import type { Product } from "../interfaces";

const ProductCard: React.FC<Product> = ({ title, category, image, price }) => {
  return (
    <div className="product-card bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          alt="Product Image"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">${price}</span>
          <button className="bg-indigo-600 font-medium text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors flex cursor-pointer">
            <ShoppingCart className="mr-1" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
