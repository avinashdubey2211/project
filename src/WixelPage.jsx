import React from "react";

const WixelPage = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-200 to-blue-200 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Let’s design something together
      </h1>
      <p className="text-gray-700 max-w-2xl mb-8">
        From the wildest ideas to the most practical use cases, 
        Wixel helps you turn any vision into professional-grade design.
      </p>
      <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-3 rounded-full shadow-md">
        Get Started
      </button>
    </div>
  );
};

export default WixelPage;
