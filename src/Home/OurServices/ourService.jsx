import React from "react";
import { FaMotorcycle, FaStar, FaClock, FaPercent } from "react-icons/fa";

const OurServices = () => {
  const offers = [
    {
      id: 1,
      title: "Free Delivery",
      description: "On all orders above ₹299",
      icon: <FaMotorcycle className="text-3xl text-orange-600" />,
    },
    {
      id: 2,
      title: "Top Rated",
      description: "4.8/5 from 10k+ reviews",
      icon: <FaStar className="text-3xl text-orange-600" />,
    },
    {
      id: 3,
      title: "Fast Delivery",
      description: "Delivered in ⏱30 minutes",
      icon: <FaClock className="text-3xl text-orange-600" />,
    },
    {
      id: 4,
      title: "Special Off",
      description: "20% off on first order",
      icon: <FaPercent className="text-3xl text-orange-600" />,
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Service's
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enjoy these amazing deals and make your dining experience even
            better
          </p>
        </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{offer.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600">{offer.description}</p>
              <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300">
                Order Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-600 hover:text-gray-700 transition-colors duration-300 shadow-md hover:ring-1">
            View All Offers
          </button>
        </div>
      </div>
    </section>
  );
};
export default OurServices;
