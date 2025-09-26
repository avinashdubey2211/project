import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();

  // State to track open accordion
  const [open, setOpen] = useState("Physical products");

  // Data for accordion items
  const items = [
    {
      title: "Physical products",
      desc: `Add an extensive catalog of products to your online store with up
             to 1,000 variants each. Import and export CSV files with products
             or seamlessly migrate your catalog with the Cart2Cart app.`,
      img: "https://static.wixstatic.com/media/343a2a_c342bace4f0f48e0bde7f67306d2e116~mv2.jpg/v1/fill/w_522,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%201000002771.jpg",
    },
    {
      title: "Dropshipping",
      desc: `Add ready-to-sell products from Wix’s dropshipping platform, or third-party apps, and let suppliers take care of fulfillment.`,
      img: "https://static.wixstatic.com/media/0784b1_b70eb71145174625afaa9ba82bcfdbda~mv2.jpg/v1/fill/w_522,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%201000002965.jpg",
    },
    {
      title: "Print on demand",
      desc: `Add your designs to hundreds of high-quality products, from t-shirts to headphones and let suppliers ship your custom merchandise directly to customers.`,
      img: "https://static.wixstatic.com/media/343a2a_a6639dc04e8d4ca7a6a946c4c45f0710~mv2.jpg/v1/fill/w_522,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%201000002587.jpg",
    },
    {
      title: "Digital products",
      desc: `Sell digital products, such as music files, ebooks, online courses, images or gift cards.`,
      img: "https://static.wixstatic.com/media/343a2a_cd1f890cd1c04c1c840d18216ab809ec~mv2.jpg/v1/fill/w_522,h_569,fp_0.49_0.31,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%201000002646.jpg",
    },
    {
      title: "Subscriptions",
      desc: `Easily create and manage recurring products and sell subscriptions to generate a steady revenue stream.`,
      img: "https://static.wixstatic.com/media/0784b1_69b9838b73734f60a51b756df14bafdd~mv2.jpg/v1/fill/w_522,h_569,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subscriptionsboxes.jpg",
    },
  ];

  const toggle = (title) => {
    setOpen(open === title ? "" : title);
  };

  const currentItem = items.find((item) => item.title === open) || items[0];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Left Product Image */}
        <div className="flex justify-center items-center bg-[#A7B6FF] rounded-2xl p-4 sm:p-6">
          <div className="bg-white rounded-2xl p-4 shadow-xl w-full sm:w-72">
            <img
              src={currentItem.img}
              alt={currentItem.title}
              className="rounded-xl mb-4 w-full"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center px-2 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-semibold leading-snug">
            Sell your own products, <br className="hidden sm:block" /> or find
            products to sell
          </h1>

          {/* Accordion */}
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.title} className="border-b pb-3 sm:pb-4">
                <button
                  onClick={() => toggle(item.title)}
                  className="flex justify-between w-full text-left font-medium text-lg sm:text-xl md:text-2xl"
                >
                  {item.title}
                  <span>{open === item.title ? "-" : "+"}</span>
                </button>
                {open === item.title && (
                  <p className="text-gray-900 mt-2 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/Sign")}
            className="mt-6 sm:mt-8 bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full sm:w-fit text-sm sm:text-base md:text-lg font-medium hover:bg-gray-800 transition"
          >
            Start Selling
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
