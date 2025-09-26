import React from "react";

const Domain_Page = () => {
  return (
    <div className="w-full h-auto min-h-[90vh] flex items-center justify-center bg-white px-4 py-10">
      <div className="bg-[#fed980] rounded-2xl p-6 sm:p-10 text-center max-w-6xl w-full">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black py-5 mb-3 leading-snug">
          Get the perfect domain <br className="hidden sm:block" /> name for your store
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base py-2 text-black mb-8">
          Enjoy a free domain name for one year with select{" "}
          <a href="#" className="underline">
            website plans
          </a>.
        </p>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
          <input
            type="text"
            placeholder="Type the domain you want"
            className="w-full sm:w-[400px] px-4 py-3 bg-white rounded-full border border-blue-700 focus:outline-none text-sm sm:text-base"
          />
          <button className="sm:ml-[-60px] bg-[#015293] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 group w-full sm:w-auto justify-center">
            Search
            <span className="inline-block text-lg sm:text-xl transform transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Domain_Page;
