import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";

const restaurantData = [
  {
    id: 1,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/5f6e978c-de31-43d0-b3ed-566b6c086090_513065.jpg",
    name: "Burger King",
    rating: 4.4,
    time: "20-25 mins",
    cuisines: ["Burgers", "American"],
    location: "Jagatpura",
    offer: "60% OFF UPTO ₹120",
    deliveryFee: "₹30 delivery fee",
    promoted: true,
  },
  {
    id: 2,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/5514a3a3-451a-4b60-82c0-fe117eef56fa_47598.jpg",
    name: "Pizza Hut",
    rating: 4.1,
    time: "35-40 mins",
    cuisines: ["Pizzas"],
    location: "Malviya Nagar",
    offer: "ITEMS AT ₹79",
    deliveryFee: "Free delivery",
    promoted: false,
  },
  {
    id: 3,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    name: "Chees Noodls",
    rating: 4.3,
    time: "25-30 mins",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    location: "Jagatpura",
    offer: "ITEMS AT ₹129",
    deliveryFee: "₹25 delivery fee",
    promoted: true,
  },
  {
    id: 4,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c6f56042-c8df-4b00-8fa3-31fed7a7eeb9_261286.jpg",
    name: "NIC Ice Creams",
    rating: 4.7,
    time: "20-25 mins",
    cuisines: ["Ice Cream", "Desserts"],
    location: "Malviya Nagar",
    offer: "60% OFF UPTO ₹120",
    deliveryFee: "Free delivery",
    promoted: false,
  },
  {
    id: 5,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "McDonald's",
    rating: 4.2,
    time: "15-20 mins",
    cuisines: ["Burgers", "Fast Food"],
    location: "Vaishali Nagar",
    offer: "50% OFF UPTO ₹100",
    deliveryFee: "₹40 delivery fee",
    promoted: true,
  },
  {
    id: 6,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c6f56042-c8df-4b00-8fa3-31fed7a7eeb9_261286.jpg",
    name: "Domino's Pizza",
    rating: 4.1,
    time: "30-35 mins",
    cuisines: ["Pizzas", "Italian"],
    location: "Tonk Road",
    offer: "BUY 1 GET 1 FREE",
    deliveryFee: "Free delivery",
    promoted: false,
  },
  {
    id: 7,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    name: "Chees Noodls",
    rating: 4.3,
    time: "25-30 mins",
    cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
    location: "Jagatpura",
    offer: "ITEMS AT ₹129",
    deliveryFee: "₹25 delivery fee",
    promoted: true,
  },
  {
    id: 8,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c6f56042-c8df-4b00-8fa3-31fed7a7eeb9_261286.jpg",
    name: "NIC Ice Creams",
    rating: 4.7,
    time: "20-25 mins",
    cuisines: ["Ice Cream", "Desserts"],
    location: "Malviya Nagar",
    offer: "60% OFF UPTO ₹120",
    deliveryFee: "Free delivery",
    promoted: false,
  },
  {
    id: 9,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    name: "McDonald's",
    rating: 4.2,
    time: "15-20 mins",
    cuisines: ["Burgers", "Fast Food"],
    location: "Vaishali Nagar",
    offer: "50% OFF UPTO ₹100",
    deliveryFee: "₹40 delivery fee",
    promoted: true,
  },
  {
    id: 10,
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/c6f56042-c8df-4b00-8fa3-31fed7a7eeb9_261286.jpg",
    name: "Domino's Pizza",
    rating: 4.1,
    time: "30-35 mins",
    cuisines: ["Pizzas", "Italian"],
    location: "Tonk Road",
    offer: "BUY 1 GET 1 FREE",
    deliveryFee: "Free delivery",
    promoted: false,
  },
];
const NearByResto = () => {
  const [moreLoad, setMoreload] = useState(8);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Restaurants with online food delivery in Jaipur
        </h1>
        <p className="text-gray-600">Discover the best restaurants near you</p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {["Delivery Time", "Rating", "Cost: Low to High", "Pure Veg"].map(
          (filter) => (
            <button
              key={filter}
              className="px-3 py-1 font-[500] bg-gray-300 text-gray-700 rounded-full text-sm hover:bg-gray-300 transition-colors"
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {restaurantData.slice(0, moreLoad).map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          >
            <div className="relative">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              {restaurant.promoted && (
                <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  PROMOTED
                </div>
              )}
              {restaurant.offer && (
                <div className="absolute bottom-2 left-2 bg-gray-100 text-gray-800 text-xs font-bold px-2 py-1 rounded max-w-[90%] truncate">
                  {restaurant.offer}
                </div>
              )}
            </div>
            <div className="p-4 flex-grow">
              <h2 className="text-lg font-semibold mb-1 truncate">
                {restaurant.name}
              </h2>
              <div className="flex items-center mb-2">
                <span className=" text-yellow-500 flex items-center justify-center -mr-1">
                  <FaStar className="text-[16px]" />
                  <FaRegStarHalf className="text-[16px]" />
                </span>

                <span className="bg-green-700 text-white text-xs px-1.5 py-0.5 rounded flex items-center mr-2 tracking-wider font-bold">
                  {restaurant.rating}
                </span>
                <span className="text-xs text-gray-600">{restaurant.time}</span>
              </div>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {restaurant.cuisines.join(", ")}
              </p>
              <p className="text-xs text-gray-500 mb-2 truncate">
                {restaurant.location}
              </p>
              <p className="text-xs font-medium text-gray-700">
                {restaurant.deliveryFee}
              </p>
            </div>
          </div>
        ))}
      </div>

      {restaurantData.length >= moreLoad ? (
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2.5 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 flex items-center mx-auto"
            onClick={() => setMoreload(moreLoad + 3)}
          >
            Show More <IoChevronDown className="ml-1" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default NearByResto;
