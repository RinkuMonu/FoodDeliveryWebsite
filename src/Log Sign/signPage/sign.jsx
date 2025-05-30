import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../BaseUrl/baseUrl";
import singImg from "../../assets/authPageImg/loginImg.png";
import { motion } from "framer-motion";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [userExists, setUserExists] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    getValues,
  } = useForm({
    defaultValues: {
      mobileNumber: "",
      otp: "",
      fullname: "",
      email: "",
      address: "",
      defaultaddress: "",
      favorite: "",
      acceptedTerms: false,
    },
  });
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadProfilePicture(file);
      if (imageUrl) {
        setUploadedImageUrl(imageUrl);
      }
    }
  };

  const sendOtp = async () => {
    if (resendDisabled) return;

    const isValid = await trigger("mobileNumber");
    if (!isValid) return;

    try {
      setIsLoading(true);
      const res = await api.post("/users/send-otp", {
        mobileNumber: getValues("mobileNumber"),
      });

      if (res.status === 200) {
        setUserExists(res.data.existing ? "true" : "false");
        toast.success("OTP sent to your phone!");
        setStep(2);
        setResendDisabled(true);
        setTimer(30);

        const interval = setInterval(() => {
          setTimer((prev) => {
            if (prev <= 1) {
              clearInterval(interval);
              setResendDisabled(false);
              return 30;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        toast.error("Failed to send OTP");
      }
    } catch {
      toast.error("Please try again later & check your number");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    const isValid = await trigger("otp");
    if (!isValid) return;

    setIsLoading(true);
    try {
      const res = await api.post("/users/verify-otp", {
        mobileNumber: getValues("mobileNumber"),
        otp: getValues("otp"),
      });

      const userToken = res.data.data?.token;
      if (res.status === 200) {
        toast.success("OTP Verify successfully");
        localStorage.setItem("token", userToken);
        if (userExists == "true") {
          navigate("/");
        } else {
          setStep(3);
        }
      }
    } catch {
      toast.error("Failed to verify OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const uploadProfilePicture = async (file) => {
    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      const res = await api.put("/users/profile/photo", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        toast.success("Image uploaded successfully!");
        return res.data.imageUrl;
      } else {
        toast.error("Image upload failed");
        return null;
      }
    } catch (error) {
      toast.error("Failed to upload image");
      return null;
    }
  };
  const completeProfile = async () => {
    setIsLoading(true);

    try {
      const address = getValues("address");
      const encodedAddress = encodeURIComponent(address);
      const apiKey = "AIzaSyCklkVV3ho7yawqRP-imgtd1OtfbrH_akU";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${apiKey}`;

      const response = await axios.get(url);
      const geoData = response.data;

      let latitude = null;
      let longitude = null;

      if (geoData.status === "OK") {
        latitude = geoData.results[0].geometry.location.lat;
        longitude = geoData.results[0].geometry.location.lng;
      } else {
        toast.error("Could not retrieve coordinates from Google Maps.");
        setIsLoading(false);
        return;
      }

      const res = await api.put("/users/profile/text", {
        name: getValues("fullname"),
        email: getValues("email"),
        addresses: [
          {
            label: getValues("defaultaddress"),
            address: getValues("address"),
            latitude,
            longitude,
          },
        ],
        profilePicture: uploadedImageUrl,
        favorite: getValues("favorite"),
      });

      if (res.status === 200) {
        toast.success("Account created successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to complete profile"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async () => {
    if (step === 1) {
      if (!getValues("acceptedTerms")) {
        toast.error("Please accept the Terms and Privacy Policy");
        return;
      }
      await sendOtp();
    } else if (step === 2) {
      await verifyOtp();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const formVariants = {
    hidden: { x: 70, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8 w-full">
        <Toaster />

        <motion.div
          className="sm:mx-auto sm:w-full sm:max-w-md"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {step === 1 && "Create your account"}
            {step === 2 && "Verify your phone"}
            {step === 3 && "Complete your profile"}
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-2 w-8 rounded-full ${
                    i <= step ? "bg-orange-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-white py-8 px-4 sm:rounded-2xl sm:px-10 flex flex-col md:flex-row shadow-lg">
            <div className="hidden md:block md:w-1/2 lg:w-3/5 mb-8 md:mb-0 md:pr-8">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full h-full max-h-[600px] object-cover rounded-xl"
                src={singImg}
                alt="Food delivery"
              />
            </div>

            <motion.div
              className="w-full md:w-1/2 lg:w-2/5 flex justify-center flex-col"
              variants={formVariants}
            >
              {step !== 3 ? (
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <label
                          htmlFor="mobileNumber"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <div className="mt-1 relative">
                          <input
                            id="mobileNumber"
                            {...register("mobileNumber", {
                              required: "Phone number is required",
                              pattern: {
                                value: /^[0-9]\d{9}$/,
                                message:
                                  "Please enter a valid 10-digit start within 6-9",
                              },
                              maxLength: {
                                value: 10,
                                message: "Phone number must be 10 digits",
                              },
                              minLength: {
                                value: 10,
                                message: "Phone number must be 10 digits",
                              },
                              validate: {
                                validIndianNumber: (value) =>
                                  /^[6-9]\d{9}$/.test(value) ||
                                  "Must start with 6,7,8 or 9",
                              },
                            })}
                            type="tel"
                            placeholder="98xxxxxx32"
                            className={`appearance-none block w-full px-4 py-3 border ${
                              errors.mobileNumber
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                              trigger("mobileNumber");
                              if (
                                e.target.value.length === 1 &&
                                !/^[6-9]$/.test(e.target.value)
                              ) {
                                e.target.value = "";
                              }
                              if (e.target.value.length > 10) {
                                e.target.value = e.target.value.slice(0, 10);
                              }
                            }}
                            onBlur={() => trigger("mobileNumber")}
                          />
                          {errors.mobileNumber && (
                            <p className="text-sm text-red-600">
                              {errors.mobileNumber.message}
                            </p>
                          )}
                          {watch("mobileNumber") && !errors.mobileNumber && (
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <svg
                                className="h-5 w-5 text-green-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-start mt-4">
                        <div className="flex items-center h-5">
                          <input
                            id="terms-and-privacy"
                            {...register("acceptedTerms", {
                              required:
                                "You must accept the terms and privacy policy",
                            })}
                            type="checkbox"
                            className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3">
                          <label
                            htmlFor="terms-and-privacy"
                            className="text-sm text-gray-700"
                          >
                            I agree to the{" "}
                            <a
                              href="#"
                              className="text-orange-600 hover:text-orange-500 font-medium hover:underline"
                            >
                              Terms
                            </a>{" "}
                            and{" "}
                            <a
                              href="#"
                              className="text-orange-600 hover:text-orange-500 font-medium hover:underline"
                            >
                              Privacy Policy
                            </a>
                          </label>
                          {errors.acceptedTerms && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.acceptedTerms.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div>
                        <label
                          htmlFor="otp"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Enter OTP sent to {watch("mobileNumber")}
                        </label>
                        <div className="mt-1">
                          <input
                            id="otp"
                            {...register("otp", {
                              required: "OTP is required",
                              pattern: {
                                value: /^\d{6}$/,
                                message: "OTP must be 6 digits",
                              },
                            })}
                            type="text"
                            placeholder="Enter 6-digit OTP"
                            className={`appearance-none block w-full px-4 py-3 border ${
                              errors.otp ? "border-red-500" : "border-gray-300"
                            } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                            onInput={(e) => {
                              e.target.value = e.target.value.replace(
                                /[^0-9]/g,
                                ""
                              );
                            }}
                          />
                          {errors.otp && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.otp.message}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 text-sm text-gray-500">
                          Didn't receive OTP?{" "}
                          <button
                            type="button"
                            onClick={sendOtp}
                            disabled={resendDisabled}
                            className={`font-medium ${
                              resendDisabled
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-orange-600 hover:text-orange-500"
                            }`}
                          >
                            {resendDisabled ? `Resend in ${timer}s ` : "Resend"}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${
                        isLoading ? "opacity-75 cursor-not-allowed" : ""
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>{step === 1 ? "Send OTP" : "Verify OTP"}</>
                      )}
                    </button>
                  </div>

                  {step > 1 && (
                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="text-sm text-orange-600 hover:text-orange-500 font-medium"
                      >
                        ← Back
                      </button>
                    </div>
                  )}

                  <div className="text-center text-sm text-gray-500">
                    If you have first user get 10% discount on first purchase
                  </div>
                </form>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={handleSubmit(completeProfile)}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <label
                        htmlFor="fullname"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="fullname"
                          {...register("fullname", {
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
                          type="text"
                          placeholder="John Doe"
                          className={`appearance-none block w-full px-4 py-3 border ${
                            errors.fullname
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                        />
                        {errors.fullname && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.fullname.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          {...register("email", {
                            required: "email is required",
                            minLength: {
                              value: 3,
                              message: "please enter a valid email",
                            },
                          })}
                          type="email"
                          placeholder="niraj@gmail.com"
                          className={`appearance-none block w-full px-4 py-3 border ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                      <div>
                        <label
                          htmlFor="address"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Address
                        </label>
                        <div className="mt-1">
                          <input
                            id="address"
                            {...register("address", {
                              required: "Address is required",
                            })}
                            type="text"
                            placeholder="123 Main St"
                            className={`appearance-none block w-full px-4 py-3 border ${
                              errors.address
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                          />
                          {errors.address && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.address.message}
                            </p>
                          )}
                        </div>
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
                            {...register("defaultaddress", {
                              required: "Default address is required",
                            })}
                            className={`appearance-none block w-full px-4 py-3 border ${
                              errors.defaultaddress
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                          >
                            <option value="">Select</option>
                            <option value="home">Home</option>
                            <option value="work">Work</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.defaultaddress && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.defaultaddress.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="Profilepicture"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Profile Picture
                      </label>
                      <div className="mt-1 flex items-center">
                        <div className="relative">
                          <input
                            id="Profilepicture"
                            type="file"
                            onChange={handleImageChange}
                            accept="image/jpeg, image/png, image/jpg"
                            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
                          />
                          <div
                            className={`px-4 py-3 border ${
                              errors.Profilepicture
                                ? "border-red-500"
                                : "border-gray-300"
                            } rounded-lg shadow-sm hover:border-orange-500 hover:bg-orange-50 transition-all duration-200`}
                          >
                            <span className="text-sm text-gray-700">
                              {watch("Profilepicture")?.[0]?.name
                                ? "Change photo"
                                : "Upload photo"}
                            </span>
                          </div>
                          {watch("Profilepicture")?.[0]?.name && (
                            <span className="ml-3 text-sm text-gray-500 truncate block max-w-xs">
                              {watch("Profilepicture")[0].name}
                            </span>
                          )}
                          {errors.Profilepicture && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.Profilepicture.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label
                        htmlFor="favorite"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        What is your favorite food?
                      </label>
                      <div className="mt-1">
                        <input
                          id="favorite"
                          {...register("favorite", {
                            required: "Favorite food is required",
                          })}
                          type="text"
                          placeholder="Pizza, Burger, etc."
                          className={`appearance-none block w-full px-4 py-3 border ${
                            errors.favorite
                              ? "border-red-500"
                              : "border-gray-300"
                          } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 sm:text-sm transition-all duration-200`}
                        />
                        {errors.favorite && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.favorite.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${
                          isLoading ? "opacity-75 cursor-not-allowed" : ""
                        }`}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          "Complete Signup"
                        )}
                      </button>
                    </div>

                    <div className="text-center mt-2">
                      <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="text-sm text-orange-600 hover:text-orange-500 font-medium"
                      >
                        Skip
                      </button>
                    </div>
                  </motion.div>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignupPage;
