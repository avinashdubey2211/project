import React, { useState } from "react";
import { Link } from "react-router-dom";

const Template = () => {
  // Categories data
  const categories = {
    Fashion: [
      "https://static.wixstatic.com/media/0784b1_ef8793e2d61742cbafd8a9b08e166ab8~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_9ec0aa5d4c174b8dba5853318f3687fd~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_d52fc04fb74e49cd9ca0194a5ca758b6~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_f163c1996cf549eca4b6aff1ec3ccf04~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_741786a4c4ac466587ed71514d5d0c9b~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_89d886d311ef47968d9a18d1de70c7af~mv2.jpg",
    ],
    Electronics: [
      "https://static.wixstatic.com/media/0784b1_e29e6ee962944be9bf62343de81e9461~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_a48c08ce229b4405a985ebfbd2aac6db~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_aa01bf80b4d548d7957f279cd810cc06~mv2.jpg",
      "https://static.wixstatic.com/media/343a2a_05df7ef3a7634f6caceef8c61741d4e8~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_31a578c6398047d89de3dd6ab6339f68~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_4c9d73fd39a144feab87006997abdf2d~mv2.jpg",
    ],
    "Home & Decor": [
      "https://static.wixstatic.com/media/343a2a_9a0b7a3556b84affb42807d9771b3cf0~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_38317cd6e28747f5813a3bf0bf4f625b~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_8b41d454ef2b4b5789af2666a88bafa7~mv2.jpg",
      "https://static.wixstatic.com/media/343a2a_4d452cb27a564b9b8f90e66e941ab858~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_0253d2f03d99406eafcc4cd67169e765~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_22cc055934934dad9ba5b827c1b4e509~mv2.jpg",
    ],
    "Beauty & Wellness": [
      "https://static.wixstatic.com/media/0784b1_f163c1996cf549eca4b6aff1ec3ccf04~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_9ec0aa5d4c174b8dba5853318f3687fd~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_d52fc04fb74e49cd9ca0194a5ca758b6~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_741786a4c4ac466587ed71514d5d0c9b~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_89d886d311ef47968d9a18d1de70c7af~mv2.jpg",
    ],
    Other: [
      "https://static.wixstatic.com/media/0784b1_9daa478db9d04f759ed10593d96f0af8~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_c6be0edb4b66488ab7efbc54eebfad8b~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_81faffaa8e934a24b167a9c57d1e8be5~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_f359d6531a3f4fe5ad29dc0ba809704d~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_e5191f446d464c1f837cb762863c9271~mv2.jpg",
      "https://static.wixstatic.com/media/0784b1_934d632c4a884651b62aed4fe7657933~mv2.jpg",
    ],
  };

  const [selected, setSelected] = useState("Fashion");

  return (
    <div className="min-h-screen w-full bg-[#1e2c3e] text-white">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-20 py-10">
        <h1 className="md:w-[65%] font-bold text-3xl md:text-5xl leading-tight">
          eCommerce website <br /> templates built for success
        </h1>
        <p className="md:w-[30%] text-sm mt-4 md:mt-0">
          Discover over 900 free and fully customizable website templates,
          including eCommerce templates tailored specially for high-converting
          mobile and web stores.
        </p>
      </div>

      {/* Categories */}
      <div className="border-t border-white mx-6 md:mx-20">
        <div className="flex flex-wrap justify-center md:justify-start gap-5 text-sm font-semibold py-5">
          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`cursor-pointer transition ${
                selected === cat
                  ? "text-yellow-400 underline underline-offset-4"
                  : "text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="px-6 md:px-20 py-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600">
        <div className="flex gap-6 w-max">
          {categories[selected].map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="h-72 md:h-80 rounded-lg flex-shrink-0"
              alt={`template-${idx}`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-20 py-6">
        <Link
          to="/templates"
          className="text-white text-sm font-semibold cursor-pointer underline"
        >
          Explore All Templates →
        </Link>
      </div>
    </div>
  );
};

export default Template;
