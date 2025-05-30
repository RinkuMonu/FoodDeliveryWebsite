import React, { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";

const tabs = ["Partner Onboarding", "Legal", "FAQs"];

const faqs = {
  "Partner Onboarding": [
    {
      question: "I want to partner my restaurant with Eco food",
      answer:
        "You can register through our partner portal at partner.EcoFood.com. Click on 'Register Now' and fill in your restaurant details.",
    },
    {
      question:
        "What are the mandatory documents needed to list my restaurant on EcoFood?",
      answer:
        "You'll need: 1) FSSAI license, 2) GST registration, 3) Menu with prices, 4) Bank account details, and 5) Restaurant photos.",
    },
    {
      question: "I want to opt-out from Google reserve",
      answer:
        "Please contact our partner support team at partnersupport@EcoFood.com with your restaurant details to opt out.",
    },
    {
      question:
        "After I submit all documents, how long will it take for my restaurant to go live on EcoFood?",
      answer:
        "Typically 3-5 business days after document verification. You'll receive an email confirmation once live.",
    },
    {
      question:
        "What is this one time Onboarding fees? Do I have to pay for it while registering?",
      answer:
        "The one-time onboarding fee covers our setup costs. Payment is required after document approval but before going live.",
    },
    {
      question:
        "Who should I contact if I need help & support in getting onboarded?",
      answer:
        "Email partnersupport@EcoFood.com or call our onboarding helpline at 1800-123-4567 (Mon-Sat, 9AM-6PM).",
    },
  ],
  FAQs: [
    {
      question: "How do I track my order?",
      answer:
        "You can track your order in real-time through our app or website. Go to 'My Orders' section for live updates.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, UPI, net banking, and cash on delivery (where available).",
    },
  ],
};

const HelpSupport = () => {
  const [activeTab, setActiveTab] = useState("Partner Onboarding");
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-1">
          Help
          <span className="text-orange-600">
            <BiSupport />
          </span>
          Support
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-2 md:p-4 overflow-x-auto md:overflow-x-visible">
              <div className="flex md:flex-col space-x-2 md:space-x-0 md:space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setOpenQuestions({});
                    }}
                    className={`whitespace-nowrap px-4 py-3 rounded-lg text-sm md:text-base transition-colors ${
                      activeTab === tab
                        ? "bg-blue-50 text-green-600 font-medium border border-blue-100"
                        : "text-gray-600 hover:bg-gray-100 text-2xl"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
                {activeTab}
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({faqs[activeTab]?.length || 0} questions)
                </span>
              </h2>

              <div className="space-y-3">
                {(faqs[activeTab] || []).map((item, idx) => (
                  <div
                    key={idx}
                    className={`border rounded-lg overflow-hidden transition-all ${
                      openQuestions[idx]
                        ? "border-gray-200 shadow-xs"
                        : "border-gray-100"
                    }`}
                  >
                    <button
                      onClick={() => toggleQuestion(idx)}
                      className="flex justify-between items-center w-full p-4 hover:bg-gray-50 transition-colors"
                      aria-expanded={openQuestions[idx]}
                    >
                      <span className="text-left font-medium text-gray-800">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          openQuestions[idx] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openQuestions[idx] && (
                      <div className="px-4 pb-4 pt-2 text-gray-600">
                        <div className="border-t border-gray-100 pt-3">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {(!faqs[activeTab] || faqs[activeTab].length === 0) && (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">
                      No questions available for this category
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col py-10 px-4 bg-gray-50">
        <div className="max-w-md w-full text-center space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Still have a question?
          </h3>
          <p className="text-gray-600 text-sm">
            Enter your email and we’ll get back to you shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <input
              type="email"
              className="w-full sm:flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
              aria-label="Email input"
            />
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200">
              <IoIosSend size={20} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
