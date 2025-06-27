import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodExpress</h3>
            <p className="text-gray-400 mb-4">
              Delivering delicious meals to your doorstep since 2015.
            </p>
            <div className="flex space-x-4">
              <Link
                to={""}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                to={""}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                to={""}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
              <Link
                to={""}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={""}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/offers"}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={""}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p className="mb-2">
                1Plot No 97, Dakshinpuri - I Shrikishan, Sanganer, Jagatpura,
                Jaipur, Shri Kishanpura, Rajasthan 302017
              </p>
              <p className="mb-2">Rajasthan 302017, India</p>
              <p className="mb-2">Phone: +91 9875679876</p>
              <p>Email: foodexpress.com</p>
            </address>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new restaurants and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md text-gray-100 w-full border-1 border-x-0 border-amber-100"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FoodExpress. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to={"/privacy"}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/termsofuse"}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to={"/refundandcancel"}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Refund And Cancellation
            </Link>
            <Link
              to={""}
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
