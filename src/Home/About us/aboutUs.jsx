import React from "react";
import {
  FaUserFriends,
  FaUtensils,
  FaShippingFast,
  FaUsers,
  FaLeaf,
  FaLightbulb,
  FaApple,
  FaAndroid,
  FaGithub,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Delivering deliciousness to your doorstep since 2015
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We believe that great food should be accessible to everyone,
              anytime. Our mission is to connect hungry customers with the best
              local restaurants and deliver exceptional dining experiences right
              to their doors.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img
              className="w-full rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Food delivery"
            />
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-orange-600">50K+</p>
              <p className="mt-2 text-base text-gray-500">Happy Customers</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-orange-600">500+</p>
              <p className="mt-2 text-base text-gray-500">
                Partner Restaurants
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-orange-600">15</p>
              <p className="mt-2 text-base text-gray-500">Cities Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-orange-600">24/7</p>
              <p className="mt-2 text-base text-gray-500">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            The passionate people behind your favorite food delivery service
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Niraj kumar",
              role: "Founder & CEO",
              image: "https://cdn-icons-png.flaticon.com/512/8792/8792047.png",
            },
            {
              name: "Niraj kumarr",
              role: "Head of Operations",
              image: "https://cdn-icons-png.flaticon.com/512/8792/8792047.png",
            },
            {
              name: "Niraj kumar ",
              role: "Technology Director",
              image: "https://cdn-icons-png.flaticon.com/512/8792/8792047.png",
            },
            {
              name: "Nirajj kumar",
              role: "Customer Experience",
              image: "https://cdn-icons-png.flaticon.com/512/8792/8792047.png",
            },
          ].map((person) => (
            <div key={person.name} className="pt-6">
              <div className="flow-root bg-gray-100 rounded-lg px-6 pb-8 h-full">
                <div className="-mt-6">
                  <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white shadow-md overflow-hidden mx-auto">
                    <img
                      className="h-full w-full object-cover"
                      src={person.image}
                      alt={person.name}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-base text-gray-600 text-center">
                    {person.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Customer First",
                  description:
                    "We put our customers at the center of everything we do, ensuring their satisfaction with every bite.",
                  icon: <FaUserFriends className="h-6 w-6 text-orange-600" />,
                },
                {
                  name: "Quality Food",
                  description:
                    "We partner only with restaurants that meet our high standards for quality and freshness.",
                  icon: <FaUtensils className="h-6 w-6 text-orange-600" />,
                },
                {
                  name: "Fast Delivery",
                  description:
                    "Our delivery network ensures your food arrives hot and fresh, exactly when you want it.",
                  icon: <FaShippingFast className="h-6 w-6 text-orange-600" />,
                },
                {
                  name: "Community Focus",
                  description:
                    "We support local businesses and give back to the communities we serve.",
                  icon: <FaUsers className="h-6 w-6 text-orange-600" />,
                },
                {
                  name: "Sustainability",
                  description:
                    "We're committed to eco-friendly packaging and reducing our environmental impact.",
                  icon: <FaLeaf className="h-6 w-6 text-orange-600" />,
                },
                {
                  name: "Innovation",
                  description:
                    "We constantly improve our technology to make ordering easier and delivery faster.",
                  icon: <FaLightbulb className="h-6 w-6 text-orange-600" />,
                },
              ].map((value) => (
                <div
                  key={value.name}
                  className="bg-white overflow-hidden shadow rounded-lg"
                >
                  <div className="p-5">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">{value.icon}</div>
                      <div className="ml-5 w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">
                          {value.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to order?</span>
            <span className="block">Download our app today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-orange-200">
            Available on Android. Get exclusive app-only deals!
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {/* <a
              href="#"
              className="inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-orange-700 bg-white hover:bg-orange-50"
            >
              <FaApple className="h-6 w-6 mr-2" />
              App Store
            </a> */}
            <a
              href="#"
              className="inline-flex items-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-800 hover:bg-orange-700"
            >
              <FaAndroid className="h-6 w-6 mr-2" />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
