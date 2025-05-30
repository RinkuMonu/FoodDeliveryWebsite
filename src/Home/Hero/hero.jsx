import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-50 pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-orange-50 transform -skew-x-12 -translate-x-1/4"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Delicious Food <span className="text-orange-600">Delivered</span>{" "}
              To Your Doorstep
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Order from your favorite restaurants with just a few taps. Fast
              delivery, fresh meals, and endless options for every craving.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors text-center shadow-lg hover:shadow-orange-200"
              >
                Order Now
              </Link>
              <Link
                to={"/restaurants"}
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors text-center"
              >
                Browse Restaurants
              </Link>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Happy customer"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-800 font-medium ml-1">4.9</span>
                    <span className="text-gray-500 ml-1">(2.5k+ reviews)</span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Join 10,000+ happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Delicious food delivery"
                className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex items-center">
                  <div className="bg-orange-100 p-3 rounded-full mr-3">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Fast Delivery</p>
                    <p className="text-sm text-gray-500">30-45 min delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
