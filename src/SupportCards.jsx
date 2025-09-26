import React from "react";
import { ArrowRight } from "lucide-react"; // arrow icon

export default function SupportCards() {
  const cards = [
    {
      title: "Find quick solutions",
      text: "Get answers from tutorials and articles in the Wix Help Center",
      footer: "Go to Help center",
    },
    {
      title: "Contact us",
      text: "This is the same description text inside all three cards.",
      footer: "Log In & Chat With Us",
    },
    {
      title: "Support Title",
      text: "This is the same description text inside all three cards.",
      footer: "Browse All Services",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-gray-50 p-6 md:p-10">
      {/* Top Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-800 mb-8 leading-snug">
        You're never alone — <br className="hidden sm:block" /> customer support
        24/7
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#e2efff] p-6 rounded-2xl shadow-md flex flex-col justify-between text-left transition-all duration-300 hover:bg-[#223246] hover:text-white cursor-pointer"
          >
            <div>
              <h2 className="text-lg sm:text-xl font-bold mb-4">
                {card.title}
              </h2>
              <p className="text-sm sm:text-base">{card.text}</p>
            </div>

          
            <div className="mt-6 flex items-center justify-start gap-2 text-blue-600 group">
              <span className="text-sm font-medium group-hover:underline">
                {card.footer}
              </span>
              <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
