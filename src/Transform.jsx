import React from 'react'
import { useNavigate } from "react-router-dom";

const Transform = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-[90vh] p-6 md:p-16 bg-[#8cbaff] flex flex-col items-center justify-center gap-10 md:gap-16 text-center">
        
       
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-snug">
          <span className="block text-blue-950">Transform your vision</span>
          <span className="block text-blue-950">into revenue.</span>
        </h1>

      
        <button
          onClick={() => navigate("/login")}
          className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium hover:bg-gray-800 transition"
        >
          Start your Store
        </button>
      </div>
    </>
  )
}

export default Transform
