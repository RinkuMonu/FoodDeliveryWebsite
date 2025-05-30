import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  
  return (
    <Link
      to={`/categoryMoreDetails/${category.id}`}
      className="block group relative"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
        <div className="relative pb-[75%] overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="absolute h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
            {category.name}
          </h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600 text-sm">{`${category.itemCount} items`}</p>
            <span className="text-xs bg-blue-100 font-medium text-green-700 py-1 px-2 rounded-full">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CategoryCard;
