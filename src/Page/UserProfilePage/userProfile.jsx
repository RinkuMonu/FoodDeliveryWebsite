import React, { useContext, useEffect } from "react";
import { useState } from "react";
import {
  FiUser,
  FiMapPin,
  FiCreditCard,
  FiClock,
  FiHeart,
  FiLogOut,
  FiEdit,
  FiArrowLeft,
} from "react-icons/fi";
import { FaRegSmileWink } from "react-icons/fa";
import { Context } from "../../Context/context";
import api from "../../BaseUrl/baseUrl";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaHeart } from "react-icons/fa";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userProfile, userToken, fetchUserProfile } = useContext(Context);
  const [loadingFavorites, setLoadingFavorites] = useState({});
  const [userOrder, setUserOrder] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (userProfile.user) {
      reset({
        name: userProfile.user.fullName || "",
        email: userProfile.user.email || "",
        mobileNumber: userProfile.user.mobileNumber || "",
      });
    }
  }, [userProfile, reset]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await api.get("/users/favorites");
          const favoritesdata = response.data.data;
          console.log(response);

          const favoriteIds = (response.data.data || []).map(
            (restaurant) => restaurant._id
          );
          setFavorites(favoritesdata);
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, []);
  // console.log(favorites);

  const toggleFavorite = async (restaurantId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/sign");
        return;
      }

      setLoadingFavorites((prev) => ({ ...prev, [restaurantId]: true }));

      const isFav = favorites.some((fav) => fav._id === restaurantId);

      if (isFav) {
        await api.delete(`/users/favorites/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFavorites((prev) => prev.filter((fav) => fav._id !== restaurantId));
        toast.success("Removed from favorites");
      } else {
        await api.post(
          `/users/favorites/${restaurantId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const restaurantToAdd = allresto.find((r) => r._id === restaurantId);
        if (restaurantToAdd) {
          setFavorites((prev) => [...prev, restaurantToAdd]);
          toast.success("Added to favorites");
        }
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
      toast.error("Failed to update favorites");
    } finally {
      setLoadingFavorites((prev) => ({ ...prev, [restaurantId]: false }));
    }
  };
  useEffect(() => {
    const orderApi = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      try {
        const response = await api.get("/orders/myorders");
        console.log("orders",response.data);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };

    orderApi();
  }, []);

  const isFavorite = (restaurantId) => {
    return favorites.some((fav) => fav._id === restaurantId);
  };

  // const isFavorite = (restaurantId) => favorites.includes(restaurantId);

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (!userToken) return;

    try {
      const response = await api.put(
        "/users/profile/text",
        {
          name: data.name,
          email: data.email,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );

      toast.success("Profile updated successfully!");
      setIsLoading(false);
      await fetchUserProfile();
      setEditMode(!editMode);
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <button
              className="flex items-center text-gray-600 hover:text-gray-900"
              onClick={() => window.history.back()}
            >
              <FiArrowLeft className="mr-2" />
              <span className="font-medium">Back</span>
            </button>
            <h1 className="text-xl font-bold text-gray-900 flex items-center justify-center gap-1.5">
              Hello! {userProfile.user?.fullName || "Niraj Kumar"}{" "}
              <FaRegSmileWink />
            </h1>
            <div className="w-8"></div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm p-4 h-fit sticky top-6">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full  flex items-center justify-center mb-4">
                  {userProfile.user?.profilePic ? (
                    <img
                      src={
                        `http://localhost:4080${userProfile?.user?.profilePicture}` || (
                          <FiUser className="text-4xl text-gray-400" />
                        )
                      }
                      alt="Profile"
                      className="rounded-full"
                    />
                  ) : (
                    <FiUser className="text-4xl text-gray-400" />
                  )}
                </div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {userProfile.user?.fullName || "Niraj Kumar"}
                </h2>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === "profile"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiUser className="mr-3" />
                  <span>Personal Info</span>
                </button>
                <button
                  onClick={() => setActiveTab("address")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === "address"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiMapPin className="mr-3" />
                  <span>Address</span>
                </button>
                <button
                  onClick={() => setActiveTab("payment")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === "payment"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiCreditCard className="mr-3" />
                  <span>Payment Methods</span>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === "orders"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiClock className="mr-3" />
                  <span>Order History</span>
                </button>
                <button
                  onClick={() => setActiveTab("favorites")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg ${
                    activeTab === "favorites"
                      ? "bg-orange-100 text-orange-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FiHeart className="mr-3" />
                  <span>Favorites</span>
                </button>
                <button className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100">
                  <FiLogOut className="mr-3" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
              {activeTab === "profile" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Personal Information
                    </h2>
                    <button
                      onClick={() => setEditMode(!editMode)}
                      className="flex items-center text-orange-600 hover:text-orange-700"
                    >
                      <FiEdit className="mr-2" />
                      {editMode ? "Cancel" : "Edit"}
                    </button>
                  </div>

                  {editMode ? (
                    <form
                      className="space-y-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          {...register("name", {
                            required: "Full name is required",
                            minLength: {
                              value: 3,
                              message:
                                "Full name must be at least 3 characters",
                            },
                            pattern: {
                              value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/,
                              message:
                                "Each name must start with an uppercase letter",
                            },
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                          placeholder={userProfile?.user?.email}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="mobileNumber"
                          {...register("mobileNumber", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[0-9]{10,15}$/,
                              message: "Invalid phone number",
                            },
                          })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                        {errors.mobileNumber && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.mobileNumber.message}
                          </p>
                        )}
                      </div>
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={`px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                            isLoading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {isLoading ? "Saving..." : "Save Changes"}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="text-gray-900">
                          {userProfile?.user?.fullName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-gray-900">
                          {userProfile.user?.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="text-gray-900">
                          {userProfile.user?.mobileNumber}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "address" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Delivery Address
                    </h2>
                    <button
                      className="flex items-center text-orange-600 hover:text-orange-700"
                      onClick={() => setEditMode(!editMode)}
                    >
                      <FiEdit className="mr-2" />
                      {editMode ? "Cancel" : "Edit"}
                    </button>
                  </div>
                  {editMode ? (
                    <>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            current address
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={userProfile.user.addresses[0].address}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="defaultaddress"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Default Address
                          </label>
                          <div className="mt-1">
                            <select
                              id="defaultaddress"
                              className="appearance-none block w-full px-4 py-3 border border-gray-300
                             rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200"
                              value={userProfile.user.addresses[0].label}
                            >
                              <option value="">Select</option>
                              <option value="home">Home</option>
                              <option value="work">Work</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="pt-2">
                          <button
                            type="button"
                            className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                          >
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-gray-900">
                          {userProfile.user.addresses[0].address}
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <strong>Defalut address</strong>
                        <p className="text-gray-900">
                          {userProfile.user.addresses[0].label}
                        </p>
                      </div>
                    </>
                  )}
                  <button className="mt-6 px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Add New Address
                  </button>
                </div>
              )}

              {activeTab === "payment" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-gray-900">
                      Payment Methods
                    </h2>
                    <button className="flex items-center text-orange-600 hover:text-orange-700">
                      <FiEdit className="mr-2" />
                      Edit
                    </button>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                    <p className="text-gray-900">{userData.paymentMethod}</p>
                  </div>
                  <button className="px-6 py-2 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                    Add New Payment Method
                  </button>
                </div>
              )}

              {activeTab === "orders" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Order History
                  </h2>
                  <div className="space-y-4">
                    {/* {userData.orderHistory.map((order) => (
                      <div
                        key={order.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium text-gray-900">
                            {order.restaurant}
                          </h3>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <p>{order.date}</p>
                          <p className="font-medium">{order.amount}</p>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </div>
              )}

              {activeTab === "favorites" && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Your Favorite Restaurants
                  </h2>

                  {favorites.length === 0 ? (
                    <div className="text-center py-12">
                      <FiHeart className="mx-auto h-12 w-12 text-gray-400" />
                      <h3 className="mt-2 text-lg font-medium text-gray-900">
                        No favorites yet
                      </h3>
                      <p className="mt-1 text-gray-500">
                        Start adding restaurants to your favorites!
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                      {favorites.map((restaurant) => (
                        <div
                          key={restaurant._id}
                          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 relative"
                        >
                          {/* Heart Icon to Remove Favorite */}
                          <button
                            onClick={() => toggleFavorite(restaurant._id)}
                            className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                            disabled={loadingFavorites[restaurant._id]}
                            aria-label="Remove from favorites"
                          >
                            {loadingFavorites[restaurant._id] ? (
                              <div className="w-4 h-4 border-2 border-gray-300 border-t-green-800 rounded-full animate-spin"></div>
                            ) : (
                              <FaHeart className="w-5 h-5 text-red-500" />
                            )}
                          </button>

                          {/* Restaurant Image */}
                          <div className="h-48 w-full bg-gray-100 overflow-hidden">
                            <img
                              src={
                                restaurant.image ||
                                "https://images.unsplash.com/photo-1565557623262-b51c2513a641"
                              }
                              alt={restaurant.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Restaurant Info */}
                          <div className="p-4">
                            <div className="flex justify-between items-start">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {restaurant.name}
                              </h3>
                              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                {restaurant.distance || "0.5"}
                              </span>
                            </div>

                            {/* Cuisine Tags */}
                            <div className="mt-2 flex flex-wrap gap-1">
                              {restaurant?.cuisine?.map((cuisine, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                                >
                                  {cuisine.name}
                                </span>
                              ))}
                            </div>

                            {/* Rating */}
                            <div className="mt-3 flex items-center">
                              <div className="flex items-center text-yellow-400">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    className={`w-4 h-4 ${
                                      star <= Math.round(restaurant.rating || 0)
                                        ? "fill-current"
                                        : ""
                                    }`}
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                              <span className="text-sm text-gray-500 ml-1">
                                ({restaurant.rating?.toFixed(1) || "0.0"})
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserProfile;
