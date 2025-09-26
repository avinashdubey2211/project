import React from "react";
import { useNavigate } from "react-router-dom";

const TipsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[110vh] bg-[#000000] px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
      {/* Left Text + Button */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6">
        <p className="text-4xl md:text-5xl font-bold text-white max-w-md text-center md:text-left leading-snug">
          Get tips and inspiration for running and scaling your eCommerce
          business
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition"
        >
          Get Started
        </button>
      </div>

      {/* Right Cards */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
          <img
            src="https://static.wixstatic.com/media/46e2e0_3eeb6f8c549e44d9aaf1dc7d8f70bc7a~mv2.webp/v1/fill/w_740,h_423,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/46e2e0_3eeb6f8c549e44d9aaf1dc7d8f70bc7a~mv2.webp"
            alt="tip 1"
            className="rounded-lg h-40 w-full object-cover"
          />
          <p className="mt-4 text-gray-700 text-sm font-medium">
            Learn how to set up your online store step by step.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
          <img
            src="https://static.wixstatic.com/media/05de7a_e2c6e05c294a48859f12efc7cd4fb4f9~mv2.png"
            alt="tip 2"
            className="rounded-lg h-40 w-full object-cover"
          />
          <p className="mt-4 text-gray-700 text-sm font-medium">
            Tips for processing bulk orders efficiently.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
          <img
            src="https://static.wixstatic.com/media/72c0b2_0c49d9f26f7a43b491cb7177aa5a96d0~mv2.jpg/v1/fill/w_1680,h_960,al_c,q_90/72c0b2_0c49d9f26f7a43b491cb7177aa5a96d0~mv2.webp"
            alt="tip 3"
            className="rounded-lg h-40 w-full object-cover"
          />
          <p className="mt-4 text-gray-700 text-sm font-medium">
            Ship faster with native integrations and carriers.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center">
          <img
            src="https://static.wixstatic.com/media/1f6616_be8a497aace642cd998364cefdb8821d~mv2.png"
            alt="tip 4"
            className="rounded-lg h-40 w-full object-cover"
          />
          <p className="mt-4 text-gray-700 text-sm font-medium">
            Automate inventory and boost efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
