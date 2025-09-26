import React from "react";
import { useNavigate } from "react-router-dom";

const AiFeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#ede9e5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-normal text-center md:text-left md:w-1/2">
            Get better results faster with advanced AI
          </h2>
          <p className="text-center md:text-left text-gray-600 md:w-1/2">
            Boost efficiency with AI features that help you free up <br className="hidden md:block" />
            time so you can focus on growing your business.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="bg-orange-400 p-4">
              <img
                src="https://static.wixstatic.com/media/0784b1_36a6624ed31b4c6494cd396605d32306~mv2.jpg/v1/fill/w_366,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/image.jpg"
                alt="AI Image Editor"
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold">
                AI image editor
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Make your product pics perfect by removing unwanted objects and
                backgrounds.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="mt-4 px-5 py-2 bg-black text-white rounded-lg w-fit"
              >
                Create with AI
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="bg-blue-200 p-4">
              <img
                src="https://static.wixstatic.com/media/0784b1_c1ca2c0e70c548dc9490952cfc2b60e4~mv2.jpg/v1/fill/w_366,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/image-1.jpg"
                alt="AI Product Descriptions"
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold">
                AI product descriptions
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Uplift conversions and SEO performance with unique AI product
                descriptions.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="mt-4 px-5 py-2 bg-black text-white rounded-lg w-fit"
              >
                Create with AI
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <div className="bg-yellow-300 p-4">
              <img
                src="https://static.wixstatic.com/media/0784b1_6ee825ba86334f3caab99d5632699637~mv2.jpg/v1/fill/w_366,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/image-2.jpg"
                alt="AI Product Recommendations"
                className="rounded-lg w-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg md:text-xl font-semibold">
                AI product recommendations
              </h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Increase your average order value with related product sections
                at checkout.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="mt-4 px-5 py-2 bg-black text-white rounded-lg w-fit"
              >
                Create with AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiFeatures;
