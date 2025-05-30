import React, { useState } from "react";
import { FiFilter, FiStar, FiMapPin, FiClock, FiTag } from "react-icons/fi";
import { FaStar, FaUtensils, FaWineGlassAlt, FaLeaf } from "react-icons/fa";
import { restaurants } from "../../restoData/restoData";
import { bankOffers } from "../../restoData/restoData";
import { IoChevronDown } from "react-icons/io5";

const OffersPage = () => {
  const [showMore, setShowMore] = useState(6);
  return (
    <div className="bg-gray-50 min-h-screen pb-8">
      <header className="bg-white sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Special <span className="text-orange-700">Offer</span> on these
            restaurants
          </h1>

          <div className="mt-4 flex space-x-3 overflow-x-auto pt-4 pb-2 hide-scrollbar">
            <FilterButton icon={<FiFilter />} text="Sort By" />
            <FilterButton icon={<FiMapPin />} text="Within 5km" />
            <FilterButton
              icon={<FaStar className="text-yellow-500" />}
              text="Rating 4+"
            />
            <FilterButton
              icon={<FaLeaf className="text-green-600" />}
              text="Pure Veg"
            />
            <FilterButton
              icon={<FaWineGlassAlt className="text-purple-600" />}
              text="Serves Alcohol"
            />
            <FilterButton
              icon={<FaUtensils className="text-orange-500" />}
              text="Fast Delivery"
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {restaurants.slice(0, showMore).map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        {restaurants.length >= showMore ? (
          <div className="mt-6 text-center">
            <button
              className="px-6 py-2.5 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 flex items-center mx-auto"
              onClick={() => setShowMore(showMore + 3)}
            >
              Show More <IoChevronDown className="ml-1" />
            </button>
          </div>
        ) : null}

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FiTag className="text-orange-500 mr-2" /> Bank & Coupon Offers
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

const FilterButton = ({ icon, text }) => (
  <button className="flex items-center whitespace-nowrap px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors">
    <span className="mr-2">{icon}</span>
    {text}
  </button>
);

const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 w-full">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />

          <div className="absolute top-3 left-3 space-y-2">
            {restaurant.promoted && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Promoted
              </span>
            )}
            {restaurant.trending && (
              <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Trending
              </span>
            )}
            {restaurant.discount && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                {restaurant.discount}
              </span>
            )}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-white font-bold text-lg">
                  {restaurant.name}
                </h3>
                <p className="text-gray-200 text-sm">{restaurant.cuisine}</p>
              </div>
              <div className="flex items-center bg-black/70 text-white px-2 py-1 rounded-full">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="font-medium text-sm">{restaurant.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center text-gray-600 text-sm">
              <FiMapPin className="mr-1" />
              <span>{restaurant.location}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <FiClock className="mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {restaurant.distance}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {restaurant.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center"
              >
                {tag === "Pure Veg" && (
                  <FaLeaf className="text-green-600 mr-1" />
                )}
                {tag === "Serves Alcohol" && (
                  <FaWineGlassAlt className="text-purple-600 mr-1" />
                )}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const BankOfferCard = ({ offer }) => (
  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 hover:shadow-md transition-shadow">
    <p className="text-blue-800 font-medium">{offer.text}</p>
    {offer.bank && <p className="text-blue-600 text-sm mt-1">{offer.bank}</p>}
    {offer.code && (
      <div className="mt-2 flex justify-between items-center">
        <span className="font-mono bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm">
          {offer.code}
        </span>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          Copy Code
        </button>
      </div>
    )}
  </div>
);

export default OffersPage;
