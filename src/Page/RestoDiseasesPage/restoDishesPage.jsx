import React, { useEffect, useState } from "react";
import { FiPlus, FiMinus, FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import api from "../../BaseUrl/baseUrl";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaLeaf, FaPepperHot, FaClock, FaUtensils } from "react-icons/fa";

const RestaurantDishes = () => {
  const [quantities, setQuantities] = useState({});
  const [resto, setResto] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedDish, setSelectedDish] = useState(false);
  const { id } = useParams();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchOneRestaurant = async () => {
      const res = await api.get(`/restaurants/${id}`);
      setResto(res.data.data);
    };
    fetchOneRestaurant();
  }, [id]);
  console.log(resto);

  const handleQuantityChange = (dishId, change) => {
    setQuantities((prev) => ({
      ...prev,
      [dishId]: Math.max(0, (prev[dishId] || 0) + change),
    }));
  };

  const addToCart = (dish) => {
    const quantity = quantities[dish.id] || 1;
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === dish.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...dish, quantity }];
      }
    });
    setQuantities((prev) => ({ ...prev, [dish.id]: 0 }));
  };

  const openDishDetails = (dish) => {
    setSelectedDish(!selectedDish);
  };

  const closeDishDetails = () => {
    setSelectedDish(!selectedDish);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src={
            resto?.image ||
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641"
          }
          alt={resto?.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-1 bg-black/30 bg-opacity-50 flex items-end p-6">
          <div className="text-gray-900">
            <h1 className="text-3xl md:text-4xl font-bold text-black-900 tracking-wide text-gray-100">
              {resto?.name}
            </h1>
            <span className="text-gray-100">{resto?.description}</span>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <span className="text-sm md:text-base flex flex-wrap items-center gap-1 bg-gray-50 py-1 px-2 rounded-full font-medium">
                <IoFastFoodOutline className="w-4 h-4 text-red-500" />
                {resto?.cuisine?.map((data, index) => (
                  <span key={data._id || index}>
                    {data.name}
                    {index < resto.cuisine.length - 1 ? ", " : ""}
                  </span>
                ))}
              </span>
              <span className="flex items-center justify-center bg-gray-50 py-1 px-1.5 rounded-full font-medium">
                <FaStar className="w-4 h-4 text-yellow-500" />
                {resto?.rating}
              </span>
              <span className="flex items-center justify-center bg-gray-50 py-1 px-1.5 rounded-full font-medium gap-1">
                <IoMdStopwatch className="w-4 h-4 text-green-500" />
                {resto?.deliveryTime}
              </span>
              <span className="flex items-center justify-center bg-gray-50 py-1 px-1.5 rounded-full font-medium gap-1">
                <CiDiscount1 className="w-4 h-4 text-purple-500" />
                {resto?.discount}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === "all"
                  ? "bg-orange-500 text-white"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === "Pure veg"
                  ? "bg-orange-500 text-white"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Pure veg")}
            >
              Pure veg
            </button>
            {resto?.tags?.map((tag, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  filter === tag
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-black"
                }`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
            <button
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                filter === "Fast Delivery"
                  ? "bg-orange-500 text-white"
                  : "bg-orange-100 text-black"
              }`}
              onClick={() => setFilter("Fast Delivery")}
            >
              Fast Delivery
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-700 px-4">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {resto?.menu?.map((dish, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => openDishDetails(dish)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={
                    dish.image ||
                    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  }
                  alt={dish.name}
                  className="w-full h-full object-cover"
                />
                {dish.isAvailable && (
                  <div className="absolute  top-0 left-0 flex justify-between w-full">
                    <div className=" bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-br-md">
                      Available
                    </div>
                    <div className="bg-orange-400 rounded-bl-md text-white text-xs font-bold px-2 py-1">{dish?.preparationTime}min</div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{dish.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {dish.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    {dish.discountedPrice ? (
                      <>
                        <span className="text-sm font-bold text-gray-400 line-through">
                          ${dish.price.toFixed(2)}
                        </span>
                        <span className="text-lg font-bold text-green-600">
                          ${dish.discountedPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-gray-800">
                        ${dish.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDish && (
        <div className="fixed inset-0 bg-blur-md flex items-center justify-center p-4 z-50">
          {resto?.menu?.map((info) => {
            return (
              <>
                <div className="bg-white rounded-xl shadow-xl max-w-[50vh] w-full max-h-[70vh] overflow-y-auto">
                  <button
                    onClick={closeDishDetails}
                    className="absolute top-20 right-50 bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={
                        info?.image ||
                        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                      }
                      alt={info?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-800">
                          {info?.name}
                        </h2>
                        <p className="text-gray-600 mt-1">
                          {info?.description}
                        </p>
                      </div>
                      <div className="text-right">
                        {info?.discountedPrice ? (
                          <>
                            <span className="text-xl font-bold text-green-600">
                              ${info?.discountedPrice.toFixed(2)}
                            </span>
                            <span className="text-sm line-through text-gray-500 ml-2 block">
                              ${info?.price.toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="text-xl font-bold text-gray-800">
                            ${info?.price}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dietary Info */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span
                        className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          info?.veg
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {info?.veg ? (
                          <>
                            <FaLeaf className="mr-1" /> Vegetarian
                          </>
                        ) : (
                          <>
                            <FaUtensils className="mr-1" /> Non-Vegetarian
                          </>
                        )}
                      </span>
                      <span className="flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        <FaPepperHot className="mr-1" />{" "}
                        {info?.spicyLevel || "Mild"}
                      </span>
                      <span className="flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        <FaClock className="mr-1" />{" "}
                        {info?.preparationTime || 20} mins
                      </span>
                    </div>

                    {/* Details Section */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Serving Size
                        </h3>
                        <p className="text-gray-800">
                          {info?.serveSize || "Regular"}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-1">
                          Availability
                        </h3>
                        <p
                          className={`font-medium ${
                            info?.isAvailable
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {info?.isAvailable ? "Available" : "Not Available"}
                        </p>
                      </div>
                    </div>

                    {/* Nutritional Information */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Nutritional Information
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <span className="block font-bold text-gray-800">
                            {info?.nutritionalInfo?.calories || "N/A"}
                          </span>
                          <span className="text-xs text-gray-600">
                            Calories
                          </span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <span className="block font-bold text-gray-800">
                            {info?.nutritionalInfo?.protein || "N/A"}g
                          </span>
                          <span className="text-xs text-gray-600">Protein</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <span className="block font-bold text-gray-800">
                            {info?.nutritionalInfo?.carbs || "N/A"}g
                          </span>
                          <span className="text-xs text-gray-600">Carbs</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <span className="block font-bold text-gray-800">
                            {info?.nutritionalInfo?.fat || "N/A"}g
                          </span>
                          <span className="text-xs text-gray-600">Fat</span>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg text-center">
                          <span className="block font-bold text-gray-800">
                            {info?.nutritionalInfo?.fiber || "N/A"}g
                          </span>
                          <span className="text-xs text-gray-600">Fiber</span>
                        </div>
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Ingredients
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {info?.ingredients?.map((ingredient, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Allergens */}
                    {info?.allergens?.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Allergens
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {info?.allergens.map((allergen, index) => (
                            <span
                              key={index}
                              className="bg-yellow-100 px-3 py-1 rounded-full text-sm text-yellow-800"
                            >
                              {allergen}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Customizations */}
                    {resto?.menu?.customizations?.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                          Customizations
                        </h3>
                        {resto?.menu?.customizations.map(
                          (customization, index) => (
                            <div key={index} className="mb-4">
                              <h4 className="font-medium text-gray-700 mb-2">
                                {customization.name}
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {customization.options.map(
                                  (option, optIndex) => (
                                    <label
                                      key={optIndex}
                                      className="flex items-center space-x-2 cursor-pointer"
                                    >
                                      <input
                                        type="checkbox"
                                        className="rounded text-green-600 focus:ring-green-500"
                                        name={`customization-${index}`}
                                      />
                                      <span className="text-gray-700">
                                        {option}
                                      </span>
                                    </label>
                                  )
                                )}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}

                    {/* Add to Cart Section */}
                    <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() =>
                              handleQuantityChange(resto?.menu?.id, -1)
                            }
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <FiMinus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {quantities[resto?.menu?.id] || 1}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(resto?.menu?.id, 1)
                            }
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                          >
                            <FiPlus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            addToCart(resto?.menu);
                            closeDishDetails();
                          }}
                          className="flex-1 ml-4 flex items-center justify-center py-1 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors font-medium"
                        >
                          <FiShoppingCart className="mr-2" />
                          Add to Cart - ${info?.price?.toFixed(2)}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}

      {/* Cart Summary (floating) */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-40">
          <div className="flex items-center">
            <FiShoppingCart className="text-green-600 mr-2" />
            <span className="font-semibold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} items
            </span>
          </div>
          <button className="mt-2 text-sm bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition-colors">
            View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantDishes;
