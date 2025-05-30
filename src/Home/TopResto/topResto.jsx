import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FiStar, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import api from "../../BaseUrl/baseUrl";

const TopResto = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const itemWidth = 280;
  const navigate = useNavigate();
  const [allresto, setAllresto] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loadingFavorites, setLoadingFavorites] = useState({});
  const totalItems = allresto.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleItems(4);
      else if (window.innerWidth >= 1024) setVisibleItems(3);
      else if (window.innerWidth >= 768) setVisibleItems(2);
      else setVisibleItems(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= totalItems - visibleItems + 1 ? 0 : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? totalItems - visibleItems : newIndex;
    });
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await api.get("/restaurants");
        setAllresto(response.data.data);
        
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);
  console.log(allresto);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await api.get("/users/favorites");
          const favoritesdata = response.data.data;
          // console.log(favoritesdata);

          const favoriteIds = (response.data.data || []).map(
            (restaurant) => restaurant._id
          );
          setFavorites(favoriteIds);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);

  const toggleFavorite = async (restaurantId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/sign");
        return;
      }

      setLoadingFavorites((prev) => ({ ...prev, [restaurantId]: true }));

      const isFav = favorites.includes(restaurantId);
      let updatedFavorites;

      if (isFav) {
        await api.delete(`/users/favorites/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        updatedFavorites = favorites.filter((id) => id !== restaurantId);
      } else {
        await api.post(
          `/users/favorites/${restaurantId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        updatedFavorites = [...favorites, restaurantId];
      }

      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("Error updating favorites:", error);
    } finally {
      setLoadingFavorites((prev) => ({ ...prev, [restaurantId]: false }));
    }
  };

  const isFavorite = (restaurantId) => favorites.includes(restaurantId);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Top Restaurants in Jaipur
          </h2>
          <div className="flex items-center space-x-3">
            <button className="bg-green-800 text-white px-3 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 text-sm md:text-base">
              <Link to="/restaurants">View All Restaurants</Link>
            </button>
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center transition-colors duration-300"
              >
                <IoIosArrowBack className="text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 flex items-center justify-center transition-colors duration-300"
              >
                <IoIosArrowForward className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${totalItems * itemWidth}px`,
            }}
          >
            {allresto.map((restaurant) => (
              <div
                key={restaurant?._id}
                className="flex-shrink-0 px-3"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full relative">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFavorite(restaurant._id);
                    }}
                    className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 z-10 cursor-pointer"
                    aria-label={
                      isFavorite(restaurant._id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    {loadingFavorites[restaurant._id] ? (
                      <div className="w-4 h-4 border-2 border-gray-300 border-t-green-800 rounded-full animate-spin"></div>
                    ) : isFavorite(restaurant._id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FiHeart className="text-gray-700" />
                    )}
                  </button>
                  <Link to={`/restodishes/${restaurant?._id}`}>
                    <div className="relative h-48 w-full">
                      <img
                        src={
                          restaurant?.image ||
                          "https://images.unsplash.com/photo-1565557623262-b51c2513a641"
                        }
                        alt={restaurant?.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-3 bg-green-100 bg-opacity-60 text-gray-800 px-2 py-1 rounded flex items-center">
                        <FiStar className="text-yellow-500 mr-1" />
                        <span className="font-medium">
                          {restaurant?.rating || 4.2}
                        </span>
                      </div>
                      <span className="absolute font-medium top-3 right-3 bg-orange-300 text-white text-xs px-2 py-1 rounded">
                        {restaurant?.distance || "0.8 km"}
                      </span>
                    </div>
                    <div className="p-2">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {restaurant?.name}
                      </h3>
                      {restaurant?.cuisine?.map((cuisineItem, idx) => (
                        <p key={idx} className="text-gray-600 text-sm font-medium">
                          {cuisineItem?.name}
                        </p>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopResto;





















