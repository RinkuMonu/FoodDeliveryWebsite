import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./categoryCard";
import { FiSearch, FiArrowLeft } from "react-icons/fi";
import OurServices from "../../Home/OurServices/ourService";
import { Context } from "../../Context/context";

const CategoriesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const mockCategories = [
          {
            id: 1,
            name: "Burgers",
            image:
              "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
            itemCount: 24,
          },
          {
            id: 2,
            name: "Pizza",
            image:
              "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
            itemCount: 18,
          },
          {
            id: 3,
            name: "Sushi",
            image:
              "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
            itemCount: 15,
          },
          {
            id: 4,
            name: "Pasta",
            image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
            itemCount: 12,
          },
          {
            id: 5,
            name: "Salads",
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
            itemCount: 8,
          },
          {
            id: 6,
            name: "Desserts",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
            itemCount: 14,
          },
          {
            id: 7,
            name: "Drinks",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
            itemCount: 20,
          },
          {
            id: 8,
            name: "Breakfast",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
            itemCount: 10,
          },
          {
            id: 9,
            name: "Lunch",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
            itemCount: 14,
          },
          {
            id: 10,
            name: "Dinner",
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
            itemCount: 20,
          },
          {
            id: 11,
            name: "Craving",
            image:
              "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
            itemCount: 10,
          },
        ];
        setCategories(mockCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <>
      {isLoading ? (
        <div className="min-h-screen ">
          <div className="flex fixed inset-0 justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 ">
          <header className="bg-white shadow-sm sticky top-0 z-10">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => window.history.back()}
                    className="mr-4 p-2 rounded-full hover:bg-gray-100"
                  >
                    <FiArrowLeft className="text-gray-600 text-xl" />
                  </button>
                  <h1 className="text-xl font-bold text-gray-800">
                    All Food Categories
                  </h1>
                </div>

                <div className="mt-4 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search categories..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </header>
          <main className="container mx-auto px-4 py-8 ">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
            ) : (
              <>
                {filteredCategories.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500">
                      No categories found matching your search.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {filteredCategories.map((category) => (
                      <CategoryCard key={category.id} category={category} />
                    ))}
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      )}
      <OurServices />
    </>
  );
};

export default CategoriesPage;
