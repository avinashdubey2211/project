import React from "react";
import { useNavigate } from "react-router-dom";


const StorefrontSection = () => {
      const navigate = useNavigate();
  
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
      
        <p className="text-gray-500 text-xl text-center mb-10">
          Our customers say ⭐⭐⭐⭐☆
        </p>

      
        <div className="flex flex-col md:flex-row items-center gap-10">
          
         
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Unmatched <br /> storefront design
            </h2>
            <p className="text-gray-600 text-lg">
              Build high-converting storefronts and product pages customized for
              your brand. Leverage built-in AI features and exceptional no-code
              creation to turn your vision into reality even faster.
            </p>
            <button 
              onClick={() => navigate("/Sign")}
             className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
              Design Your Store
            </button>
          </div>

      {/* Right Side Card with Video */}
<div className="flex-1 relative">
  <div className="bg-[#a6bad2] h-[600px] p-6 rounded-2xl shadow-lg flex items-center justify-center">
    <div className="rounded-xl overflow-hidden border shadow-md w-full max-w-[600px]">
      <iframe
        className="w-full h-[200px] md:h-[300px]"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
        title="Demo Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default StorefrontSection;
