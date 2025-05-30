import React, { useEffect, useState } from "react";
import { mockCategories } from "../../restoData/restoData";
import { useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoFilter } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoFlame } from "react-icons/io5";
import { IoLeaf } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Context } from "../../Context/context";

const CategoryMoreDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const filterItemName = mockCategories.find((data) => {
    return data.id == id;
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  const quickLinks = [
    "Veg Pizza",
    "Non-Veg Pizza",
    "Cheese Pizza",
    "Paneer Pizza",
    "Margherita",
    "Farmhouse",
    "Peppy Paneer",
    "Chicken Tikka",
  ];
  const popularRestaurants = [
    {
      name: "Pizza Sounds",
      rating: 4.1,
      deliveryTime: "15-20 min",
      price: "₹200 for two",
    },
    {
      name: "Buckel's Burger",
      rating: 4.7,
      deliveryTime: "20-25 min",
      price: "₹250 for two",
    },
    {
      name: "Wal-Mart",
      rating: 4.4,
      deliveryTime: "10-15 min",
      price: "₹180 for two",
    },
    {
      name: "Mad Runner",
      rating: 4.5,
      deliveryTime: "25-30 min",
      price: "₹300 for two",
    },
  ];

  const deliveryTimes = [
    "10-15 mins",
    "15-20 mins",
    "20-25 mins",
    "25-30 mins",
  ];

  const offers = [
    "50% OFF up to ₹100",
    "FREE delivery on orders above ₹199",
    "Use code WELCOME50 for new users",
  ];

  const [filters, setFilters] = React.useState({
    sortBy: "relevance",
    deliveryTime: "",
    tenMinsDelivery: false,
    vegNonVeg: false,
    ratings: false,
    selectedCategories: [],
    selectedDeliveryTime: "",
  });

  const handleClose = () => {
    console.log("Applied Filters:", filters);
    setOpen(false);
  };

  const handleSortChange = (event) => {
    setFilters({ ...filters, sortBy: event.target.value });
  };

  const handleCategorySelect = (category) => {
    setFilters((prev) => {
      const newCategories = prev.selectedCategories.includes(category)
        ? prev.selectedCategories.filter((c) => c !== category)
        : [...prev.selectedCategories, category];
      return { ...prev, selectedCategories: newCategories };
    });
  };

  const handleDeliveryTimeSelect = (time) => {
    setFilters({ ...filters, selectedDeliveryTime: time });
  };

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen bg-amber-50/50">
          <div className="flex fixed inset-0 justify-center items-center">
            <div className="animate-ping rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        </div>
      ) : (
        <>
          <div className="min-h-screen bg-gray-50">
            <div className="relative h-64 md:h-80 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-10"></div>
              <img
                src={
                  filterItemName?.image ||
                  "/placeholder.svg?height=400&width=1200&query=delicious food banner"
                }
                alt={filterItemName?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 md:p-8">
                <div className="flex justify-between items-start">
                  {/* <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Top Rated
              </div> */}
                  {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                <div className="flex items-center gap-1 text-orange-600 font-bold">
                  <IoStar className="text-yellow-500" />
                  4.5
                </div>
              </div> */}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">
                    {filterItemName?.name || "Delicious Food"}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {offers.map((offer, index) => (
                      <div
                        key={index}
                        className="bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-sm font-medium flex items-center"
                      >
                        <IoFlame className="mr-1" /> {offer}
                      </div>
                    ))}
                  </div>
                  <p className="text-white/90 text-sm md:text-base">
                    Order Online Food for super-fuel delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-8">
              <div className="max-w-2xl mx-auto -mt-6 md:-mt-8 relative z-30 mb-8">
                <div className="flex shadow-lg rounded-lg overflow-hidden mt-3">
                  <input
                    type="text"
                    placeholder={`Search your ${
                      filterItemName?.name?.toLowerCase() || "food"
                    } 😋`}
                    className="w-full p-3 pr-12 border-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <button className="bg-green-600 px-4 text-white font-medium flex justify-center items-center gap-1">
                    <IoSearch size={22} />
                  </button>
                  <button
                    className="bg-gray-100 px-4 text-gray-700 font-medium flex justify-center items-center"
                    onClick={handleOpen}
                  >
                    <IoFilter size={22} />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <span className="mr-2">Quick Links</span>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </h2>
                <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-white rounded-full border border-gray-200 text-gray-700 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 transition-all duration-300 shadow-sm whitespace-nowrap"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="mr-2">Popular Near You</span>
                  <div className="h-px flex-grow bg-gray-200"></div>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {popularRestaurants.map((restaurant, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
                    >
                      <div className="relative">
                        <img
                          src={
                            filterItemName?.image ||
                            `/placeholder.svg?height=200&width=300&query=restaurant food ${index}`
                          }
                          alt={restaurant.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 bg-white rounded-lg px-2 py-1 flex items-center shadow-md">
                          <span className="text-yellow-500 mr-1">★</span>
                          <span className="font-medium">
                            {restaurant.rating}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                          <div className="flex gap-2">
                            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                              50% OFF
                            </span>
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                              <IoLeaf className="mr-1" size={12} /> Pure Veg
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-800 text-lg">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <IoTime className="mr-1" />
                            {restaurant.deliveryTime}
                          </div>
                          <div>{restaurant.price}</div>
                        </div>
                        <button className="w-full mt-3 py-2 bg-orange-50 text-orange-600 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                          Order Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <button className="px-6 py-2.5 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 flex items-center mx-auto">
                    Show More <IoChevronDown className="ml-1" />
                  </button>
                </div>
              </section>
            </div>
          </div>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="filter-dialog-title"
            fullWidth
            maxWidth="sm"
            scroll="paper"
            PaperProps={{
              style: {
                borderRadius: "16px",
              },
            }}
          >
            <DialogTitle
              id="filter-dialog-title"
              className="font-bold text-xl text-gray-800 flex justify-between items-center sticky top-0 bg-white z-10 border-b"
            >
              Filter & Sort
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </DialogTitle>
            <DialogContent dividers>
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 sticky top-0 bg-white z-10 pt-2">
                {filters.selectedCategories.length > 0 && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm whitespace-nowrap">
                    {filters.selectedCategories.length} Categories
                  </span>
                )}
                {filters.selectedDeliveryTime && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm whitespace-nowrap">
                    {filters.selectedDeliveryTime}
                  </span>
                )}
                {filters.tenMinsDelivery && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm whitespace-nowrap">
                    Fast Delivery
                  </span>
                )}
              </div>

              <div className="divide-y divide-gray-200 space-y-4">
                <div className="pt-4">
                  <Typography className="font-semibold text-gray-800 mb-3 text-lg">
                    Sort By
                  </Typography>
                  <RadioGroup
                    value={filters.sortBy}
                    onChange={handleSortChange}
                    className="space-y-2"
                  >
                    <FormControlLabel
                      value="relevance"
                      control={<Radio color="warning" />}
                      label={
                        <div className="flex items-center">
                          <span>Relevance</span>
                          {filters.sortBy === "relevance" && (
                            <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                              Default
                            </span>
                          )}
                        </div>
                      }
                      className="m-0"
                    />
                    <FormControlLabel
                      value="deliveryTime"
                      control={<Radio color="warning" />}
                      label="Delivery Time"
                      className="m-0"
                    />
                    <FormControlLabel
                      value="rating"
                      control={<Radio color="warning" />}
                      label="Rating"
                      className="m-0"
                    />
                    <FormControlLabel
                      value="costLowToHigh"
                      control={<Radio color="warning" />}
                      label="Price: Low to High"
                      className="m-0"
                    />
                    <FormControlLabel
                      value="costHighToLow"
                      control={<Radio color="warning" />}
                      label="Price: High to Low"
                      className="m-0"
                    />
                  </RadioGroup>
                </div>
                <div className="pt-4">
                  <Typography className="font-semibold text-gray-800 mb-3 text-lg">
                    Quick Filters
                  </Typography>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          tenMinsDelivery: !filters.tenMinsDelivery,
                        })
                      }
                      className={`p-3 rounded-lg border flex items-center justify-center ${
                        filters.tenMinsDelivery
                          ? "border-orange-300 bg-orange-50 text-orange-700"
                          : "border-gray-200 bg-white text-gray-700"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-medium flex items-center justify-center">
                          <IoTime className="mr-1" /> Fast Delivery
                        </div>
                        <div className="text-xs text-gray-500">10-15 mins</div>
                      </div>
                    </button>
                    <button
                      onClick={() =>
                        setFilters({
                          ...filters,
                          vegNonVeg: !filters.vegNonVeg,
                        })
                      }
                      className={`p-3 rounded-lg border flex items-center justify-center ${
                        filters.vegNonVeg
                          ? "border-green-300 bg-green-50 text-green-700"
                          : "border-gray-200 bg-white text-gray-700"
                      }`}
                    >
                      <div className="text-center">
                        <div className="font-medium flex items-center justify-center">
                          <IoLeaf className="mr-1" /> Veg Only
                        </div>
                        <div className="text-xs text-gray-500">Vegetarian</div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <Typography className="font-semibold text-gray-800 mb-3 text-lg">
                    Food Categories
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {quickLinks.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          filters.selectedCategories.includes(category)
                            ? "bg-orange-500 text-white shadow-sm"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <Typography className="font-semibold text-gray-800 mb-3 text-lg">
                    Delivery Time
                  </Typography>
                  <div className="grid grid-cols-2 gap-3">
                    {deliveryTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleDeliveryTimeSelect(time)}
                        className={`p-3 rounded-lg border flex items-center justify-center ${
                          filters.selectedDeliveryTime === time
                            ? "border-blue-300 bg-blue-50 text-blue-700"
                            : "border-gray-200 bg-white text-gray-700"
                        }`}
                      >
                        <div className="text-center">
                          <div className="font-medium">
                            {time.split("-")[0]} mins
                          </div>
                          <div className="text-xs text-gray-500">
                            avg. delivery
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
            <DialogActions className="border-t border-gray-200 p-3">
              <Button
                variant="outlined"
                onClick={() => {
                  setFilters({
                    sortBy: "relevance",
                    deliveryTime: "",
                    tenMinsDelivery: false,
                    vegNonVeg: false,
                    ratings: false,
                    selectedCategories: [],
                    selectedDeliveryTime: "",
                  });
                }}
                style={{
                  flex: 1,
                  backgroundColor: "#f8fafc",
                  color: "#475569",
                  padding: "10px",
                  fontWeight: 500,
                  borderColor: "#e2e8f0",
                }}
              >
                Reset All
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{
                  flex: 1,
                  backgroundColor: "#f97316",
                  color: "white",
                  padding: "10px",
                  fontWeight: 500,
                  boxShadow: "none",
                }}
              >
                Apply Filters
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default CategoryMoreDetails;
