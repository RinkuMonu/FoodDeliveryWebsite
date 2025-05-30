import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import api from "../../BaseUrl/baseUrl";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CategorySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [visibleItems, setVisibleItems] = useState(5);
  const itemWidth = 180;
  const totalItems = categories.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleItems(9);
      } else if (window.innerWidth >= 1024) {
        setVisibleItems(7);
      } else if (window.innerWidth >= 768) {
        setVisibleItems(5);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= totalItems - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return Math.max(0, totalItems - visibleItems);
      }
      return prevIndex - 1;
    });
  };

  useEffect(() => {
    const cateApi = async () => {
      try {
        const response = await api.get("/categories");
        // console.log("Fetched categories:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    cateApi();
  }, []);

  // const loopedCategories = [...categories, ...categories];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-0">
            What's on your mind?
          </h2>
          <div className="flex items-center space-x-3">
            <button className="bg-green-800 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 text-sm md:text-base">
              <Link to="/allcategory">View All Categories</Link>
            </button>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                aria-label="Previous categories"
              >
                <IoIosArrowBack />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300"
                aria-label="Next categories"
              >
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>


        <div className="overflow-hidden p-1">
          <div
            className="transition-transform flex duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${totalItems * itemWidth * 2}px`,
            }}
          >
            {categories.map((cat, idx) => (
              <Link
                to={`/categoryMoreDetails/${cat._id}`}
                key={idx}
                className="text-center flex-shrink-0 px-2"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="hover:scale-105 transition-transform duration-300 ">
                  <img
                    src={
                      cat.image ||
                      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                    }
                    // alt={cat.name}
                    className="flex justify-center items-center w-28 h-28 rounded-full object-cover shadow-md mx-auto border-2 border-white hover:border-green-500 transition-colors duration-300"
                  />
                  <p className="mt-3 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-300">
                    {cat.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
