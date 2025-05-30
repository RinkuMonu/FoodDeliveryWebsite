import React from "react";
import {restaurants} from "../../restoData/restoData"
import { bankOffers } from "../../restoData/restoData";
import {
  FiFilter,
  FiMapPin,
  FiClock,
  FiTag,
} from "react-icons/fi";
import {
  FaStar,
  FaWineGlassAlt,
  FaLeaf,
} from "react-icons/fa";

const OffersPage = () => {
 

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Order Online</h1>

          <div className="mt-4 flex space-x-3 overflow-x-auto pb-2 hide-scrollbar">
            <FilterButton icon={<FiFilter />} text="Sort By" active={true} />
            <FilterButton icon={<FiMapPin />} text="Near Me" />
            <FilterButton
              icon={<FaStar className="text-yellow-500" />}
              text="Top Rated"
            />
            <FilterButton
              icon={<FaLeaf className="text-green-600" />}
              text="Pure Veg"
            />
            <FilterButton
              icon={<FaWineGlassAlt className="text-purple-600" />}
              text="Bar"
            />
            <FilterButton
              icon={<FiClock className="text-blue-500" />}
              text="Fast Delivery"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FiTag className="text-orange-500 mr-2 text-xl" />
            <span>Exclusive Offers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bankOffers.map((offer, index) => (
              <BankOfferCard key={index} offer={offer} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const FilterButton = ({ icon, text, active = false }) => (
  <button
    className={`flex items-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
      active
        ? "bg-orange-100 text-orange-600 border border-orange-200"
        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
    }`}
  >
    <span className="mr-2">{icon}</span>
    {text}
  </button>
);

const RestaurantCard = ({ restaurant }) => (
  <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-orange-100">
    <div className="relative h-48 w-full">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute top-3 left-3 right-3 flex justify-between">
        {restaurant.discount && (
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-md">
            {restaurant.discount}
          </span>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
        <div className="flex justify-between items-end">
          <div>
            <h3 className="text-white font-bold text-lg">{restaurant.name}</h3>
            <p className="text-gray-200 text-sm">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center bg-white text-gray-800 px-2 py-1 rounded-full shadow-sm">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="font-medium text-sm">{restaurant.rating}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <FiMapPin className="mr-1 text-gray-400" />
          <span>{restaurant.location}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FiClock className="mr-1 text-gray-400" />
          <span>{restaurant.deliveryTime}</span>
        </div>
        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
          {restaurant.distance}
        </span>
      </div>

      <div className="space-y-3 mb-4">
        {restaurant.offers.map((offer) => (
          <div
            key={offer.id}
            className={`flex items-start p-2 rounded-lg ${
              offer.highlight
                ? "bg-orange-50 border border-orange-100"
                : "bg-gray-50"
            }`}
          >
            <span
              className={`text-lg mr-3 ${
                offer.highlight ? "text-orange-500" : "text-gray-500"
              }`}
            >
              {offer.icon}
            </span>
            <div>
              <p
                className={`text-sm ${
                  offer.highlight
                    ? "font-semibold text-orange-800"
                    : "text-gray-700"
                }`}
              >
                {offer.text}
              </p>
              {offer.highlight && (
                <p className="text-xs text-orange-600 mt-1">
                  Limited time offer
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {restaurant.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center"
          >
            {tag === "Pure Veg" && <FaLeaf className="text-green-600 mr-1" />}
            {tag === "Serves Alcohol" && (
              <FaWineGlassAlt className="text-purple-600 mr-1" />
            )}
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const BankOfferCard = ({ offer }) => (
  <div
    className={`${offer.color} rounded-xl p-4 border ${offer.textColor.replace(
      "text",
      "border"
    )} border-opacity-30 hover:shadow-sm transition-shadow`}
  >
    <div className="flex items-start">
      <div
        className={`p-2 rounded-lg ${offer.textColor} bg-white mr-3 shadow-sm`}
      >
        {offer.icon}
      </div>
      <div>
        <p className={`${offer.textColor} font-medium`}>{offer.text}</p>
        <p className="text-gray-600 text-sm mt-1">{offer.subtext}</p>
        {offer.text.includes("SAVECOUPON") && (
          <button className="mt-2 text-sm font-medium text-green-600 hover:text-green-800 flex items-center">
            Copy Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  </div>
);

export default OffersPage;












