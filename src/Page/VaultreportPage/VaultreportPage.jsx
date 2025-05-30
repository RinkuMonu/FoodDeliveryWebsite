import React, { useState, useEffect, useContext } from "react";
import {
  FiSearch,
  FiFilter,
  FiCalendar,
  FiX,
} from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import {
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaLock,
  FaGooglePay,
  FaCcAmazonPay,
  FaAmazonPay,
} from "react-icons/fa";
import api from "../../BaseUrl/baseUrl";
import { Context } from "../../Context/context";

const TransactionVault = () => {
  // State for transactions and wallet
  const [transactions, setTransactions] = useState([]);
  const { userProfile } = useContext(Context);

  // State for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [amountFilter, setAmountFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // State for drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("card");

  useEffect(() => {
    const Api = async () => {
      try {
        const res = await api.get("/wallet");
        setTransactions(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    Api();
  }, []);
  console.log(transactions);

  // Filter transactions
  // const filteredTransactions = transactions.filter((t) => {
  //   const matchesSearch =
  //     t.date.includes(searchQuery) ||
  //     t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     t.credit.toString().includes(searchQuery) ||
  //     t.debit.toString().includes(searchQuery);

  //   const matchesDate = dateFilter ? t.date === dateFilter : true;
  //   const matchesAmount = amountFilter
  //     ? (t.credit > 0 && t.credit >= parseFloat(amountFilter)) ||
  //       (t.debit > 0 && t.debit >= parseFloat(amountFilter))
  //     : true;

  //   return matchesSearch && matchesDate && matchesAmount;
  // });

  // Function to handle quick amount selection
  const handleQuickAmount = (value) => {
    setAmount(value);
  };

  // Function to handle payment method selection
  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  // Function to handle adding money
  const handleAddMoney = () => {
    if (!amount) return;

    const newBalance = walletBalance + parseFloat(amount);
    setWalletBalance(newBalance);

    // Add new transaction
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split("T")[0],
      credit: parseFloat(amount),
      debit: 0,
      description: "Wallet Top-up",
      type: "credit",
      status: "completed",
    };

    setTransactions([newTransaction, ...transactions]);
    setTotalCredit(totalCredit + parseFloat(amount));

    // Close drawer and reset
    setIsDrawerOpen(false);
    setAmount("");
    alert(`₹${amount} added to your wallet successfully!`);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 relative">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Transaction Vault
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              All your financial transactions in one place
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center min-w-[140px]">
              <p className="text-xs text-blue-600">Vault Balance</p>
              <p className="text-lg font-bold text-green-600">
                ₹{userProfile?.user?.wallet?.toLocaleString("en-IN")}
              </p>
            </div>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="flex justify-center items-center bg-red-700 hover:bg-red-800 transition-colors rounded-lg text-center min-w-[140px] p-2"
            >
              <strong className="flex justify-center items-center text-white">
                Add money{" "}
                <IoIosAdd className="text-white w-5 h-5 font-extrabold" />
              </strong>
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 border-b border-gray-200">
          {/* <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FiFilter />
                Filters
              </button>
            </div>
          </div> */}

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="text-gray-400" />
                  </div>
                  <input
                    type="date"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Minimum Amount
                </label>
                <input
                  type="number"
                  className="block w-full px-3 py-2 border border-gray-200 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter amount"
                  value={amountFilter}
                  onChange={(e) => setAmountFilter(e.target.value)}
                />
              </div>
            </div>
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 border-b border-gray-200">
          <div className="p-4 text-center">
            <p className="text-sm text-gray-500">Total Credit</p>
            <p className="text-xl font-bold text-green-600">
              ₹
              {transactions?.balance?.totalCredit?.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="p-4 text-center">
            <p className="text-sm text-gray-500">Total Debit</p>
            <p className="text-xl font-bold text-red-600">
              ₹
              {transactions?.balance?.totalDebit.toLocaleString("en-IN", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>
          <div className="p-4 text-center">
            <p className="text-sm text-gray-500">Transactions</p>
            <p className="text-xl font-bold text-blue-600">
              {transactions?.transactions?.length}
            </p>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-12">
                  S.No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credit
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Debit
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions?.transactions?.map((data, index) => (
                <tr key={data?._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(data?.createdAt).toLocaleString("en-IN")}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {data?.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    <span
                      className={`capitalize ${
                        data?.type === "credit"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {data?.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    {data?.type =="credit" ? `₹${data?.amount.toFixed(2)}` : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-red-600">
                    {data?.type =="debit" ? `₹${data?.amount.toFixed(2)}` : "-"}
                  </td>
                  <td className="px-6 py-4 text-sm max-w-xs truncate text-center font-light">
                    <span
                      className={`rounded-full px-3 py-1 text-center text-xs ${
                        data?.status === "completed"
                          ? "text-green-600 bg-green-100"
                          : data?.status === "pending"
                          ? "text-orange-500 bg-orange-100"
                          : "text-red-600 bg-red-100"
                      }`}
                    >
                      {data?.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Empty state */}
          {transactions.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-500">No transactions found</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setDateFilter("");
                  setAmountFilter("");
                }}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-white/10 backdrop-blur-lg bg-opacity-50 z-40 transition-opacity
"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold text-red-800">Add Money</h2>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <FiX className="text-gray-600 text-lg" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-1">Available Balance</p>
              <p className="text-lg font-bold text-gray-800">
                ₹
                {userProfile?.user?.wallet?.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">
                Enter Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 text-lg"
              />
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-3">
                Quick Select
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[100, 200, 500, 1000].map((value) => (
                  <button
                    key={value}
                    onClick={() => handleQuickAmount(value)}
                    className={`py-2 px-3 border rounded-lg text-center ${
                      amount === value.toString()
                        ? "border-red-600 bg-red-50 text-red-600"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    ₹{value}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Payment Method
              </label>

              <div
                className={`p-4 border rounded-lg mb-3 cursor-pointer transition-colors ${
                  selectedPayment === "card"
                    ? "border-red-600 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handlePaymentSelect("card")}
              >
                <div className="flex items-center">
                  <div className="mr-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                    <FaCcVisa className="text-blue-900 text-xl" />
                  </div>
                  <span className="font-medium">Credit/Debit Card</span>
                  <div className="ml-auto flex">
                    <FaCcVisa className="text-blue-900 mx-1" />
                    <FaCcMastercard className="text-red-600 mx-1" />
                  </div>
                </div>
              </div>

              <div
                className={`p-4 border rounded-lg mb-3 cursor-pointer transition-colors ${
                  selectedPayment === "upi"
                    ? "border-red-600 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handlePaymentSelect("upi")}
              >
                <div className="flex items-center">
                  <div className="mr-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                    <FaAmazonPay className="text-purple-600 text-xl" />
                  </div>
                  <span className="font-medium">UPI</span>
                  <FaGooglePay className="text-gray-700 ml-auto text-xl" />
                </div>
              </div>

              <div
                className={`p-4 border rounded-lg mb-3 cursor-pointer transition-colors ${
                  selectedPayment === "netbanking"
                    ? "border-red-600 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handlePaymentSelect("netbanking")}
              >
                <div className="flex items-center">
                  <div className="mr-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                    <FaCcAmazonPay className="text-blue-800 text-xl" />
                  </div>
                  <span className="font-medium">Net Banking</span>
                </div>
              </div>

              <div
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedPayment === "wallets"
                    ? "border-red-600 bg-red-50"
                    : "border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => handlePaymentSelect("wallets")}
              >
                <div className="flex items-center">
                  <div className="mr-3 flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
                    <FaPaypal className="text-blue-700 text-xl" />
                  </div>
                  <span className="font-medium">Other Wallets</span>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t">
            <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
              <FaLock className="mr-2 text-green-500" />
              <span>Secure Payment</span>
            </div>
            <button
              onClick={handleAddMoney}
              disabled={!amount}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
                amount
                  ? "bg-red-700 hover:bg-red-800"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Add Money
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionVault;
