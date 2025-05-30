import React, { useEffect, useState } from "react";
import { FaFire, FaRegClock, FaWineGlassAlt, FaStar } from "react-icons/fa";
import { IoFastFoodOutline, IoRestaurantOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { restaurants } from "../../restoData/restoData";
import api from "../../BaseUrl/baseUrl";

const AllRestaurantsPage = () => {
  const [filter, setFilter] = useState("all");
  const [allresto, setAllresto] = useState([]);
  console.log(filter);

  const filterResto = allresto
  
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
  

  return (
    <div
      className={`min-h-screen ${
        filterResto.length == 0 ? "bg-white" : "bg-gray-50"
      }`}
    >
      <div className="relative bg-gradient-to-r from-red-400 to-yellow-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Discover the Best Restaurants in Jaipur
          </h1>
          <p className="text-xl text-white opacity-90">
            Order from your favorite restaurants with just a few taps
          </p>
        </div>
      </div>

      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              className={`px-3 py-1   rounded-full text-sm font-medium ${
                filter == "all" ? "bg-orange-500" : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1   rounded-full text-sm font-medium ${
                filter == "Pure Veg"
                  ? "bg-orange-500"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Pure Veg")}
            >
              Pure Veg
            </button>
            <button
              className={`px-3 py-1   rounded-full text-sm font-medium ${
                filter == "Non-Veg"
                  ? "bg-orange-500"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Non-Veg")}
            >
              Non-Veg
            </button>
            <button
              className={`px-3 py-1   rounded-full text-sm font-medium ${
                filter == "Serves Alcohol"
                  ? "bg-orange-500"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Serves Alcohol")}
            >
              Serves Alcohol
            </button>
            <button
              className={`px-3 py-1   rounded-full text-sm font-medium ${
                filter == "Offer" ? "bg-orange-500" : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Offer")}
            >
              Offer
            </button>
            <button
              className={`px-3 py-1   rounded-full text-sm font-medium ${
                filter == "Fast Delivery"
                  ? "bg-orange-500"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Fast Delivery")}
            >
              Fast Delivery
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                {restaurant.discount && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {restaurant.discount}
                  </div>
                )}
                {restaurant.premium && (
                  <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Premium
                  </div>
                )}
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      {restaurant.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {restaurant.cuisine}
                    </p>
                  </div>
                  <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="font-medium text-sm">
                      {restaurant.rating}
                    </span>
                  </div>
                </div>

                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <span>{restaurant.location}</span>
                  <span className="mx-1">•</span>
                  <span>{restaurant.distance}</span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  {restaurant.deliveryTime} delivery
                </div>  

                <div className="mt-3 flex flex-wrap gap-1">
                  {restaurant.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 border-t pt-3">
                  {restaurant.offers.map((offer) => (
                    <div
                      key={offer.id}
                      className={`flex items-center text-sm mb-1 ${
                        offer.highlight ? "font-medium" : "text-gray-600"
                      }`}
                    >
                      <span className="mr-2">
                        {offer.icon || <FaFire className="text-orange-500" />}
                      </span>
                      <span>{offer.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {filterResto.length == 0 ? (
          <div className="text-gray-800 flex justify-center items-center">
            <img src="https://miro.medium.com/v2/resize:fit:996/1*C5oq4FeTlcpNXrXfnPpxTQ.gif" />
          </div>
        ) : null}
      </div>
      {filterResto.length < 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <button className="px-6 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-colors duration-300">
            Load More Restaurants
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default AllRestaurantsPage;
