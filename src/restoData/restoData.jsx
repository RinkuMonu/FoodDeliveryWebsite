import React from "react";
import { FiTag, FiShoppingBag } from "react-icons/fi";
import { FaWineGlassAlt, FaFire, FaRegClock } from "react-icons/fa";
import { IoFastFoodOutline, IoRestaurantOutline } from "react-icons/io5";

 
export const restaurants = [
  {
    id: 1,
    name: "Laxmi Misthan Bhandar",
    cuisine: "Sweets, Street Food",
    location: "Lal khoti, Jaipur",
    distance: "0.7 km",
    deliveryTime: "25-35 min",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    offers: [
      {
        id: 1,
        text: "10% off on walk-in",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "ZAKO for two",
        icon: <IoFastFoodOutline className="text-blue-500" />,
      },
    ],
    tags: ["Pure Veg"],
    discount: "10% OFF",
  },
  {
    id: 2,
    name: "Suvarna Mahal",
    cuisine: "Fine Dining, Indian",
    image: "https://img.restaurantguru.com/rc8a-TAJ-MAHAL-DHABA-facade.jpg",
    location: "Vaishali Nagar, Jaipur",
    distance: "1.2 km",
    deliveryTime: "30-40 min",
    rating: 4.5,
    offers: [
      {
        id: 1,
        text: "50% off on pre-booking",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Zinwo special",
        icon: <FiShoppingBag className="text-green-500" />,
      },
    ],
    tags: ["Serves Alcohol"],
  },
  {
    id: 3,
    name: "The Jaipur Dhaba",
    cuisine: "North Indian, Chinese, Street Food",
    location: "jaipur Choupati, Jaipur",
    distance: "1.1 km",
    deliveryTime: "20-30 min",
    rating: 4.1,
    image:
      "https://b.zmtcdn.com/data/pictures/0/18454570/5cc986c2489be89a59377817a86525a9.jpg?fit=around|960:500&crop=960:500;*,*",
    offers: [
      {
        id: 1,
        text: "20% off on pre-booking",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "ZAKO for two",
        icon: <IoFastFoodOutline className="text-blue-500" />,
      },
    ],
    tags: ["Serves Alcohol"],
    discount: "15% OFF",
  },
  {
    id: 4,
    name: "Hanuman Dhaba",
    cuisine: "North Indian",
    location: "MI Road, Jaipur",
    distance: "2.3 km",
    deliveryTime: "35-45 min",
    rating: 4.4,
    image:
      "https://lh3.googleusercontent.com/gdFj8JC-t8NIUntPvLnG4oa21WVcdn2ppfBfJ-ZJPbsHm1Xn2jTLunOtiBe9HoJbPtMEOPdNYgzFaYuJ7fkzsQJSoos5mn2C1O2pBWX6=w300-rw",
    offers: [
      {
        id: 1,
        text: "Free dessert with thali",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Family combo",
        icon: <IoRestaurantOutline className="text-red-500" />,
      },
    ],
    tags: ["Pure Veg"],
    discount: "15% OFF",
  },
  {
    id: 5,
    name: "Khandelwal Dhaba",
    cuisine: "North Indian, Rajasthani",
    location: "C-Scheme, Jaipur",
    distance: "1.5 km",
    deliveryTime: "15-25 min",
    rating: 4.3,
    image:
      "https://b.zmtcdn.com/data/pictures/8/18941228/49541a9f78dcdab8377aa48f1870ea44.jpg?fit=around|750:500&crop=750:500;*,*",
    offers: [
      {
        id: 1,
        text: "Buy 1 Get 1 on tea",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Evening special",
        icon: <FaRegClock className="text-orange-500" />,
      },
    ],
    tags: ["Serves Alcohol"],
  },
  {
    id: 6,
    name: "Roop Basant Dhaba",
    cuisine: "North Indian, Biryani",
    location: "Amer Road, Jaipur",
    distance: "4.2 km",
    deliveryTime: "40-50 min",
    rating: 4.7,
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/5d64d7f48cec8a4c2442d6a1687544f0/cc592037c936600295e9961933037e19.jpeg",
    offers: [
      {
        id: 1,
        text: "Royal thali discount",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Complimentary drink",
        icon: <FaWineGlassAlt className="text-orange-500" />,
      },
    ],
    tags: ["Pure Veg"],
    premium: true,
  },
  {
    id: 7,
    name: "The Deshi Dhaba",
    cuisine: "North Indian, Mughlai, Seafood, Rajasthani",
    location: "Amer Road, Jaipur",
    distance: "4.2 km",
    deliveryTime: "40-50 min",
    rating: 4.7,
    image:
      "https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1602464376803-191WKRJ9WSMDIGDPLLV0/image-asset.jpeg",
    offers: [
      {
        id: 1,
        text: "Royal thali discount",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Complimentary drink",
        icon: <FaWineGlassAlt className="text-orange-500" />,
      },
    ],
    tags: ["Pure Veg"],
    premium: true,
  },
  {
    id: 8,
    name: "Tapri Central",
    cuisine: "Cafe, Continental",
    location: "Amer Road, Jaipur",
    distance: "4.2 km",
    deliveryTime: "40-50 min",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    offers: [
      {
        id: 1,
        text: "Royal thali discount",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Complimentary drink",
        icon: <FaWineGlassAlt className="text-orange-500" />,
      },
    ],
    tags: ["Pure Veg"],
    premium: true,
  },
  {
    id: 9,
    name: "JBB Dhaba",
    cuisine: "North Indian",
    location: "Amer Road, Jaipur",
    distance: "4.2 km",
    deliveryTime: "40-50 min",
    rating: 4.7,
    image:
      "https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1602464429600-6F3PBVDA3ZX3N0KC4RAS/Sweety20985.jpg",
    offers: [
      {
        id: 1,
        text: "Royal thali discount",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Complimentary drink",
        icon: <FaWineGlassAlt className="text-orange-500" />,
      },
    ],
    tags: ["Pure Veg"],
    premium: true,
  },
  {
    id: 10,
    name: "Rajasthani Dhaba",
    cuisine: "Veg, Rajasthani, North Indian",
    location: "Amer Road, Jaipur",
    distance: "4.2 km",
    deliveryTime: "40-50 min",
    rating: 4.7,
    image:
      "https://udaipurdarpan.com/wp-content/uploads/2023/09/Bahubali-Dhaba-1024x942.webp",
    offers: [
      {
        id: 1,
        text: "Royal thali discount",
        highlight: true,
        icon: <FaFire className="text-orange-500" />,
      },
      {
        id: 2,
        text: "Complimentary drink",
        icon: <FaWineGlassAlt className="text-orange-500" />,
      },
    ],
    tags: ["Pure Veg"],
    premium: true,
  },
];
export const bankOffers = [
  {
    text: "Up to 10% off with bank offers",
    subtext: "HDFC, ICICI, SBI Cards",
    icon: <FiTag className="text-blue-600 text-xl" />,
    color: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    text: "Get extra 10% off using SAVECOUPON",
    subtext: "Use code: SAVECOUPON",
    icon: <FiShoppingBag className="text-green-600 text-xl" />,
    color: "bg-green-50",
    textColor: "text-green-700",
  },
];

export const mockCategories = [
  {
    id: 1,
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    itemCount: 24,
  },
  {
    id: 2,
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    itemCount: 18,
  },
  {
    id: 3,
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a",
    itemCount: 15,
  },
  {
    id: 4,
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb",
    itemCount: 12,
  },
  {
    id: 5,
    name: "Salads",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1",
    itemCount: 8,
  },
  {
    id: 6,
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    itemCount: 14,
  },
  {
    id: 7,
    name: "Drinks",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    itemCount: 20,
  },
  {
    id: 8,
    name: "Breakfast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    itemCount: 10,
  },
  {
    id: 9,
    name: "Lunch",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    itemCount: 14,
  },
  {
    id: 10,
    name: "Dinner",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    itemCount: 20,
  },
  {
    id: 11,
    name: "Craving",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929",
    itemCount: 10,
  },
];
