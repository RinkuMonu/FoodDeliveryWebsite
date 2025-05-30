import React from 'react';
import { useState } from 'react';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaLock } from 'react-icons/fa';
import { SiCashapp } from 'react-icons/si';

const PaymentMethodPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('credit-card');
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment submitted:', { method: selectedMethod, cardDetails });
    alert('Payment method saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Payment Method</h2>
            <div className="flex items-center text-green-600">
              <FaLock className="mr-2" />
              <span className="text-sm">Secure Payment</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Choose Payment Method</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <PaymentOption 
                id="credit-card" 
                icon={<FaCreditCard className="text-blue-500 text-2xl" />} 
                label="Credit Card" 
                selected={selectedMethod === 'credit-card'} 
                onClick={() => setSelectedMethod('credit-card')} 
              />
              <PaymentOption 
                id="paypal" 
                icon={<FaPaypal className="text-blue-700 text-2xl" />} 
                label="PayPal" 
                selected={selectedMethod === 'paypal'} 
                onClick={() => setSelectedMethod('paypal')} 
              />
              <PaymentOption 
                id="apple-pay" 
                icon={<FaApplePay className="text-black text-2xl" />} 
                label="Apple Pay" 
                selected={selectedMethod === 'apple-pay'} 
                onClick={() => setSelectedMethod('apple-pay')} 
              />
              <PaymentOption 
                id="google-pay" 
                icon={<FaGooglePay className="text-green-600 text-2xl" />} 
                label="Google Pay" 
                selected={selectedMethod === 'google-pay'} 
                onClick={() => setSelectedMethod('google-pay')} 
              />
              <PaymentOption 
                id="cash" 
                icon={<SiCashapp className="text-green-500 text-2xl" />} 
                label="Cash on Delivery" 
                selected={selectedMethod === 'cash'} 
                onClick={() => setSelectedMethod('cash')} 
              />
            </div>
          </div>

          {selectedMethod === 'credit-card' && (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="card-number"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    id="card-name"
                    name="name"
                    value={cardDetails.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="card-expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="card-expiry"
                      name="expiry"
                      value={cardDetails.expiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="card-cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="card-cvv"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Save Payment Method
                </button>
              </div>
            </form>
          )}

          {selectedMethod === 'paypal' && (
            <div className="text-center py-8">
              <FaPaypal className="text-blue-700 text-5xl mx-auto mb-4" />
              <p className="text-gray-600 mb-6">You'll be redirected to PayPal to complete your payment securely.</p>
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Continue with PayPal
              </button>
            </div>
          )}

          {selectedMethod === 'apple-pay' && (
            <div className="text-center py-8">
              <FaApplePay className="text-black text-5xl mx-auto mb-4" />
              <p className="text-gray-600 mb-6">Pay with Apple Pay for a fast, secure checkout.</p>
              <button
                onClick={handleSubmit}
                className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Pay with Apple Pay
              </button>
            </div>
          )}

          {selectedMethod === 'google-pay' && (
            <div className="text-center py-8">
              <FaGooglePay className="text-green-600 text-5xl mx-auto mb-4" />
              <p className="text-gray-600 mb-6">Pay with Google Pay for a fast, secure checkout.</p>
              <button
                onClick={handleSubmit}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Pay with Google Pay
              </button>
            </div>
          )}

          {selectedMethod === 'cash' && (
            <div className="text-center py-8">
              <SiCashapp className="text-green-500 text-5xl mx-auto mb-4" />
              <p className="text-gray-600 mb-6">Pay with cash when your order arrives.</p>
              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-md transition duration-300"
              >
                Confirm Cash Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PaymentOption = ({ id, icon, label, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 border rounded-lg flex flex-col items-center transition-all duration-200 ${
        selected
          ? 'border-blue-500 bg-blue-50 transform scale-105'
          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
      }`}
    >
      <div className="mb-2">{icon}</div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  );
};

export default PaymentMethodPage;