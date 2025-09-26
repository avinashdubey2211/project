import React, { useRef } from "react";

const CardsSection = () => {
  const scrollRef = useRef(null);

  const header = {
    title: "Sell everywhere your customers are",
    subtitle:
      "Sell your products in more places with ease—in store, on the go, on your eCommerce website and on leading marketplaces—all synced to one dashboard.",
  };

  const cards = [
    {
      title: "Sell on your website",
      desc: "Engage directly with shoppers and own their full customer journey by selling on your own eCommerce website that fully represents your brand.",
      img: "https://static.wixstatic.com/media/0784b1_971841cab2a747149e1591bd74b70729~mv2.jpg/v1/fill/w_371,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sell%20online%20desktop.jpg",
      gradient: "from-orange-400 via-pink-400 to-red-400",
    },
    {
      title: "Sell in-person",
      desc: "Offer products in-store with Wix Retail POS or on-the-go with Wix Mobile POS and sync all your inventory and orders.",
      img: "https://static.wixstatic.com/media/0784b1_b05c99184c56410fb5607021b749e18f~mv2.jpg/v1/fill/w_371,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sell%20in-person%20desktop.jpg",
      gradient: "from-green-300 via-emerald-400 to-teal-500",
    },
    {
      title: "Sell on marketplaces",
      desc: "Reach shoppers on Google, eBay, Etsy, Amazon, Facebook, Instagram, TikTok and Wish, and manage it all from your Wix dashboard.",
      img: "https://static.wixstatic.com/media/0784b1_28514b355d8f4784985741304031d78b~mv2.jpg/v1/fill/w_371,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sell%20multiple%20channels%C2%A0%20desktop.jpg",
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
    },
    {
      title: "Sell internationally",
      desc: "Take your eCommerce website to international markets with Wix Multilingual, currency converter and 80+ trusted payment providers around the world.",
      img: "https://static.wixstatic.com/media/0784b1_21d4250be38046848b80b1f9297eed8e~mv2.jpg/v1/fill/w_371,h_212,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sell%20Internationally%20desktop.jpg",
      gradient: "from-pink-300 via-rose-400 to-red-500",
    },
  ];

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -700 : 700,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Top heading + subheading */}
      <div className="max-w-4xl mx-auto text-center mb-14 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {header.title}
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          {header.subtitle}
        </p>
      </div>

      {/* Wrapper */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          ◀
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          ▶
        </button>

        {/* Horizontal slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth pb-6"
        >
          {cards.map((c, i) => (
            <article
              key={i}
              className={`snap-center shrink-0 bg-gradient-to-r ${c.gradient} rounded-2xl p-10 shadow-xl w-[1100px] h-[350px] flex items-center justify-between transform hover:scale-[1.02] transition`}
            >
              {/* Text */}
              <div className="flex-1 pr-6 text-white">
                <h3 className="text-3xl font-bold mb-4">{c.title}</h3>
                <p className="mb-6 opacity-90">{c.desc}</p>
                <button className="inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-900 font-medium shadow hover:bg-gray-200 transition">
                  Get Started →
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-[330px] h-[280px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
