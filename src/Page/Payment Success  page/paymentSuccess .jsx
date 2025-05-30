import React from "react";
import { CheckCircleIcon, ClockIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const [orderDetails, setOrderDetails] = useState({
    orderId: "#FD-2023-456789",
    estimatedDelivery: "30-45 mins",
    deliveryAddress: "sevenunqine plot no 95 , jaipur",
    contactNumber: "+91 7748459585",
    items: [
      { name: "Margherita Pizza", quantity: 1, price: 120},
      { name: "Garlic Bread", quantity: 2, price: 148 },
      { name: "Caesar Salad", quantity: 1, price: 99 },
    ],
    subtotal: 349,
    deliveryFee: 40,
    tax: 18.5,
    total: 408.5,
    paymentMethod: "cash on delivery",
  });

  const [countdown, setCountdown] = useState(100);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
        window.history.back()
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {/* Success Header */}
        <div className="bg-green-100 p-6 text-center">
          <div className="flex justify-center">
            <CheckCircleIcon className="h-16 w-16 text-green-600" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-green-800">Payment Successful!</h1>
          <p className="mt-2 text-green-600">Thank you for your order.</p>
        </div>

        {/* Order Summary */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Order Summary</h2>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {orderDetails.orderId}
            </span>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <ClockIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Estimated Delivery</p>
                <p className="font-medium text-gray-700">{orderDetails.estimatedDelivery}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Delivery Address</p>
                <p className="font-medium text-gray-700">{orderDetails.deliveryAddress}</p>
              </div>
            </div>
            <div className="flex items-start">
              <PhoneIcon className="h-5 w-5 text-gray-500 mt-0.5 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Contact Number</p>
                <p className="font-medium text-gray-700">{orderDetails.contactNumber}</p>
              </div>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="border-t border-gray-200 pt-4 mb-6">
            <h3 className="text-md font-medium text-gray-800 mb-3">Your Order</h3>
            <div className="space-y-3">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-600">
                    {item.quantity} × {item.name}
                  </span>
                  <span className="font-medium">{item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Summary */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">{orderDetails.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">{orderDetails.deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">{orderDetails.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3 border-t border-gray-200 mt-2">
              <span className="font-semibold">Total</span>
              <span className="font-bold">{orderDetails.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-3 border-t border-gray-200 mt-2">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium">{orderDetails.paymentMethod}</span>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-2 sm:mb-0">
            Redirecting to homepage in {countdown} seconds...
          </p>
          <div className="space-x-3">
            <button
              onClick={() => navigate("/track-order")}
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Track Order
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;