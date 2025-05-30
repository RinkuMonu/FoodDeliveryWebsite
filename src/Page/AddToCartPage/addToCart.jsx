import React, { useEffect } from "react";
import { useState } from "react";
import { FaFire, FaRegClock, FaTrash } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoRestaurantOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import api from "../../BaseUrl/baseUrl";

const CartPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      restaurantId: 1,
      restaurantName: "Laxmi Misthan Bhandar",
      name: "Dal Baati Churma",
      price: 183,
      quantity: 2,
      image:
        "https://media.istockphoto.com/id/1458973879/photo/rajasthani-traditional-cuisine-dal-baati.jpg?s=612x612&w=0&k=20&c=bBspCwj57CtdD0m66dZpNpNU_Dou3o7l1PscMUsijQc=",
    },
    {
      id: 2,
      restaurantId: 1,
      restaurantName: "Laxmi Misthan Bhandar",
      name: "Dessert",
      price: 120,
      quantity: 1,
      image:
        "https://t3.ftcdn.net/jpg/03/01/97/86/360_F_301978652_O0aPwap1JaEVaAhj3mIlbqNnJGmRyCzC.jpg",
    },
    {
      id: 3,
      restaurantId: 3,
      restaurantName: "The Jaipur Dhaba",
      name: "Paneer Butter Masala",
      price: 220,
      quantity: 1,
      image:
        "https://images.pexels.com/photos/30858402/pexels-photo-30858402/free-photo-of-delicious-paneer-tikka-masala-dish-close-up.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      restaurantId: 1,
      restaurantName: "Laxmi Misthan Bhandar",
      name: "Dal Baati Churma",
      price: 183,
      quantity: 2,
      image:
        "https://media.istockphoto.com/id/1458973879/photo/rajasthani-traditional-cuisine-dal-baati.jpg?s=612x612&w=0&k=20&c=bBspCwj57CtdD0m66dZpNpNU_Dou3o7l1PscMUsijQc=",
    },
  ]);

  useEffect(() => {
    setIsLoading(true);
    const cartApi = async () => {
      try {
        const res = await api.get("/cart");
        setCartItems(res.data);
        console.log(res.data.data);
        
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    cartApi();
  }, []);

  const deliveryFee = 30;
  const platformFee = 5;
  const gst = 19;

  // const subtotal = cartItems.reduce(
  //   (total, item) => total + item.price * item.quantity,
  //   0
  // );

  // console.log(subtotal);
  // const tax = (subtotal * gst) / 100;
  // console.log(tax);
  // const total = subtotal + tax + deliveryFee + platformFee;
  // console.log(total);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-orange-100">
      <main className="max-w-6xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-4  flex justify-center items-center gap-1">
              Your Cart <IoRestaurantOutline className="text-orange-600" />(
              {cartItems.length})
            </h2>

            {cartItems.length === 0 ? (
              <div className="bg-gray-100 rounded-lg shadow p-8 text-center">
                <FaCartShopping className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">
                  Looks like you haven't added anything to your cart yet
                </p>
                <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
                  <Link to={"/"}>Browse Restaurants</Link>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-100 rounded-lg shadow overflow-hidden"
                  >
                    <div className="divide-y">
                      <div key={item.id} className="p-4 flex">
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <div className="flex justify-between">
                            <h4 className="font-medium">{item.name}</h4>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <FaTrash />
                            </button>
                          </div>
                          <p className="text-orange-500 font-semibold mt-1">
                            ₹{item.price.toFixed(2)}
                          </p>
                          <div className="mt-3 flex items-center">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="w-8 h-8 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div> */}

          {cartItems.length > 0 && (
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow p-6 sticky top-8">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    {/* <span>₹{subtotal}</span> */}
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fee</span>
                    <span>₹{platformFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST ({gst}%)</span>
                    {/* <span>₹{tax.toFixed(2)}</span> */}
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      {/* <span>₹{total.toFixed(2)}</span> */}
                    </div>
                  </div>
                </div>
                <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition">
                  Proceed to Checkout
                </button>
                <div className="mt-4 flex items-center gap-1 text-sm text-gray-500">
                  <FaRegClock />
                  Delivery in 25-35 mins
                </div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 mt-6">
                <h2 className="text-xl font-bold mb-4">Available Offers</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <FaFire className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">10% off on first order</h4>
                      <p className="text-sm text-gray-600">
                        Use code WELCOME10
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <IoFastFoodOutline className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Free delivery above ₹200</h4>
                      <p className="text-sm text-gray-600">No code required</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartPage;
