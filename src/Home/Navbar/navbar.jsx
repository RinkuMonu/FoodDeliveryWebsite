import React, { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiHelpCircle,
} from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import logo from "../../assets/img/foodlogo.png";
import { Link, Links, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const showUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/sign");
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const navLinks = [
    {
      path: "/offers",
      label: "Offer",
      icon: <BiSolidOffer className="w-5 h-5 text-orange-500" />,
    },
    {
      path: "#",
      label: "Search",
      icon: <FiSearch className="w-5 h-5 text-orange-500" />,
      onClick: handleSearchToggle,
    },
  ];

  const navClass = `sticky w-full top-0 z-50 transition-all duration-300 ${
    scrolled ? "bg-white shadow-md py-2" : "bg-white"
  }`;
  return (
    <>
      <nav className={navClass}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600 mt-1">
              <img src={logo} alt="foodlogo" className="h-15 w-15" />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="text-gray-800 hover:text-orange-600 font-medium transition-colors flex justify-center gap-1.5 items-center"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden relative md:flex items-center space-x-6">
              <button
                className="text-gray-800 hover:text-orange-600 transition-colors"
                onClick={showUserMenu}
              >
                <FiUser className="w-5 h-5" />
              </button>
              <button className="relative text-gray-800 hover:text-orange-600 transition-colors">
                <Link to={"/addtocart"}>
                  <FiShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
              </button>
              <button className="text-gray-800 hover:text-orange-600 transition-colors">
                <Link to={"/help"}>
                  <FiHelpCircle className="w-5 h-5" />
                </Link>
              </button>
            </div>
            {userMenuOpen && (
              <div className="top-10 absolute right-14 mt-2 w-30 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 flex justify-center flex-col">
                <button
                  onClick={showUserMenu}
                  className=" px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                >
                  <FaUser className="mr-2" />
                  <Link to={"/useraccount"}>Profile</Link>
                </button>
                <button
                  className=" px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                  onClick={showUserMenu}
                >
                  <FaWallet className="mr-2" />
                  <Link to={"/walletreport"}>Wallet</Link>
                </button>
                <button
                  onClick={logout}
                  className=" px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white flex items-center"
                >
                  <FaSignOutAlt className="mr-2" /> Sign out
                </button>
              </div>
            )}

            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={handleSearchToggle}
                className={`p-1 rounded-full ${
                  isSearchOpen
                    ? "bg-orange-100 text-orange-600"
                    : "text-gray-800"
                } transition-colors`}
                aria-label="Search"
              >
                <FiSearch className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsSearchOpen(false);
                }}
                className="text-gray-800 focus:outline-none"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300 ease-in-out ${
          isSearchOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={{ top: scrolled ? "3.5rem" : "4.5rem" }}
      >
        <div className="container mx-auto px-4 py-3">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-gray-100 rounded-full px-4 py-3"
          >
            <button
              type="button"
              onClick={handleSearchToggle}
              className="text-gray-500 mr-2"
            >
              <FiX className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for dishes, restaurants..."
              className="w-full bg-transparent outline-none text-gray-800"
              autoFocus
            />
            <button
              type="submit"
              className="ml-2 text-orange-600"
              aria-label="Submit search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-white transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: scrolled ? "3.5rem" : "4.5rem" }}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col space-y-4">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-800 hover:text-orange-600 font-medium text-lg py-3 border-b border-gray-100 flex items-center gap-2"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col space-y-4">
              <button
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link to={"/userAccount"} className="flex items-cente">
                  <FiUser className="w-5 h-5 mr-2" />
                  <span>Account</span>
                </Link>
              </button>
              <button
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link
                  to={"/addtocart"}
                  className="flex justify-center items-center gap-1"
                >
                  <FiShoppingCart className="w-5 h-5 mr-2" />
                  <span>Cart</span>
                  <span className="ml-auto bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
              </button>
              <button
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link
                  to={"/walletreport"}
                  className="flex justify-center items-center gap-1"
                >
                  <FaWallet className="w-5 h-5 mr-2" />
                  <span>Wallet</span>
                </Link>
              </button>
              <button
                className="flex items-center text-gray-800 hover:text-orange-600 transition-colors py-3 border-b border-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link to={"/help"} className="flex items-center">
                  <FiHelpCircle className="w-5 h-5 mr-2" />
                  <span>Help</span>
                </Link>
              </button>
            </div>

            <button
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-medium transition-colors mt-6 w-full"
              onClick={() => {
                logout();
              }}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
