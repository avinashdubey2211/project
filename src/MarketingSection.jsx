import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const MarketingSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const header = {
    title: "Boost traffic and revenue with a full marketing suite",
    subtitle:
      "Attract new customers and keep existing clientele coming back for more with built-in tools to expand your reach and increase sales.",
  };

  const cards = [
    {
      title: "SEO",
      percent: "24%",
      desc: "Increase in monthly revenue for stores using Wix SEO tools. Optimize your store for search engines.",
      hover: "hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white",
    },
    {
      title: "Paid Advertising",
      percent: "30%",
      desc: "More revenue on average for Wix sites using paid ad features. Run precise ad campaigns easily.",
      hover: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white",
    },
    {
      title: "Email Marketing",
      percent: "45%",
      desc: "Higher revenues on average for Wix stores using automated emails with AI templates.",
      hover: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-red-500 hover:text-white",
    },
    {
      title: "Gift Cards",
      percent: "65%",
      desc: "Increase in average order value for sites accepting gift cards. Attract shoppers with digital cards.",
      hover: "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 hover:text-white",
    },
    {
      title: "Social Media",
      percent: "6X",
      desc: "More revenue from sites using Wix social media tools with templates and hashtags.",
      hover: "hover:bg-gradient-to-r hover:from-purple-400 hover:to-indigo-500 hover:text-white",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{header.title}</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">{header.subtitle}</p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition"
        >
          Launch Your Store
        </button>
      </div>

      {/* Cards with horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"
      >
        {cards.map((c, i) => (
          <div
            key={i}
            className={`min-w-[280px] md:min-w-[320px] h-[220px] bg-white border rounded-2xl p-6 shadow-sm snap-center transition-all duration-300 cursor-pointer ${c.hover}`}
          >
            <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
            <p className="text-4xl font-bold mb-3">{c.percent}</p>
            <p className="text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketingSection;
