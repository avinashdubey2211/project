
import React from "react";
import { useNavigate } from "react-router-dom";

const Website_Step = () => {
  const navigate = useNavigate();

  const steps = [
    "Sign up to a free eCommerce website builder. Choose a platform with built-in tools to grow your business.",
    "Build your eCommerce website. Pick a template or use our AI website builder to create your custom store.",
    "Add products to your site. Sell your own products or add products from dropshipping or print-on-demand suppliers.",
    "Set up payments and shipping. Add a variety of payment options and shipping methods to cater to customers.",
    "Choose a domain name. Pick a name for your store and domain that represents your brand.",
    "Publish your site. Go live and start attracting customers with built-in marketing tools.",
    "Manage your online store. Use Wix’s built-in tools to manage orders, shipping and every aspect of your business site.",
  ];

  return (
    <div className="w-full min-h-screen bg-[#fdfbf7] flex flex-col items-center justify-center px-6 py-12">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 text-center mb-3">
        How to Create an eCommerce Website
      </h1>
      <p className="text-sm font-semibold text-gray-700 mb-6 text-center">
        Follow these 7 simple steps to start creating your online store:
      </p>

      {/* Steps List */}
      <ol className="space-y-3 max-w-2xl w-full">
        {steps.map((step, idx) => (
          <li
            key={idx}
            className="bg-white shadow-sm rounded-lg px-4 py-2 text-left flex gap-2 items-start hover:shadow-md transition"
          >
            <span className="text-red-500 font-bold text-sm">{idx + 1}.</span>
            <p className="text-gray-700 text-xs">{step}</p>
          </li>
        ))}
      </ol>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/login")}
        className="mt-6 bg-gradient-to-r from-red-500 to-orange-400 text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition"
      >
        Get Started
      </button>
    </div>
  );
};

export default Website_Step;
