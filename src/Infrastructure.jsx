import React from "react";
import { useNavigate } from "react-router-dom";

export default function Infrastructure() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 items-center">
        
        {/* Left Card */}
        <div className="bg-[#e6eef5] rounded-2xl p-6 w-full md:w-1/2 shadow-lg">
          <div className="bg-white rounded-2xl overflow-hidden p-4">
            <img
              src="https://static.wixstatic.com/media/0784b1_b6d2dc1d2b1646bc8e0f0647f1022d32~mv2.jpg/v1/fill/w_525,h_566,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/bicycle.jpg" 
              alt="Bicycle"
              className="w-full h-[500px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Infrastructure built <br /> for scale
          </h2>

          {/* Section 1 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Industry-leading speed</h3>
            <p className="text-gray-600">
              Our powerful, performance-first infrastructure ensures fast page
              loading to deliver an enhanced online shopping experience for your
              customers.
            </p>
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Scalable and resilient</h3>
            <p className="text-gray-600">
              Your eCommerce website includes free hosting that handles record
              traffic, high-volume sales, and up to 750 simultaneous transactions
              per second.
            </p>
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Top-tier security</h3>
            <p className="text-gray-600">
              Your <a href="#" className="text-blue-600 underline">site security</a> is fully managed by our experts, 
              using threat prevention and real-time detection, coupled with PCI DSS Level 1 
              compliance for maximum protection.
            </p>
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/login")}
            className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
