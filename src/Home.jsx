import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#8fbcff] px-4">
      <div className="flex flex-col items-center text-center gap-6 max-w-4xl">
        {/* Top small text */}
        <h3 className="font-semibold text-xs sm:text-sm md:text-base tracking-wider">
          BUILD AN ECOMMERCE WEBSITE
        </h3>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Start selling immediately. <br className="hidden sm:block" /> Grow without limits.
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl text-gray-800">
          Get everything you need to build, run and scale your <br className="hidden sm:block" />
          business—on one unified platform.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/Sign")}
          className="bg-black text-white py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg font-medium hover:bg-gray-800 transition"
        >
          Create Your Store
        </button>
      </div>
    </div>
  );
};

export default Home;
