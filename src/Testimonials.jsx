import React from "react";

const testimonials = [
  {
    heading: "Amazing Wix Experience",
    text: "When I launched my Wix website, I was so pleased and excited to see how many amazing products and add-ons Wix offers... I'm actually able to run my website 100% on my own.",
    name: "Zamar Martinez",
    company: "Z Jewelers",
    img: "https://static.wixstatic.com/media/0784b1_60578300153e4c2a8d8447b050b6603f~mv2.jpg/v1/fill/w_92,h_92,fp_0.26_0.24,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/zamar.jpg",
    color: "bg-green-100",
  },
  {
    heading: "From Local to National",
    text: "I went from selling to my town to selling nationwide in one week. It's a whole new business now!",
    name: "RanD Pitts",
    company: "Evolve",
    img: "https://static.wixstatic.com/media/0784b1_c867d327effb402094ebb5f3852eb29a~mv2.jpg/v1/fill/w_92,h_92,fp_0.26_0.24,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/evolve.jpg",
    color: "bg-blue-200",
  },
  {
    heading: "All-in-One Solution",
    text: "As an entrepreneur, its really crucial to be able to build a brand that can scale worldwide. Were happy to have Wix alongside us as we scale into a larger business and do it smoothly.",
    name: "Ailbhe and Izzy Keane",
    company: "Izzy Wheels",
    img: "https://static.wixstatic.com/media/0784b1_9196ce0887be44bb96fae9c308780bf0~mv2.jpg/v1/fill/w_92,h_92,fp_0.26_0.24,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/testimonialsImg1.jpg",
    color: "bg-yellow-100",
  },
  {
    heading: "Super Easy to Use",
    text: "Here we are four years later … My company is a full-blown company … and we have a huge following and a huge dedicated group of customers online",
    name: "Adreana Alvarez",
    company: "ALove Her",
    img: "https://static.wixstatic.com/media/0784b1_f6edb862ade8488aa1cf994762a366b0~mv2.jpg/v1/fill/w_92,h_92,fp_0.26_0.24,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/123123.jpg",
    color: "bg-pink-100",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      {/* Top Heading */}
      <h2 className="text-2xl md:text-3xl font-bold px-6 md:px-10 mb-10 leading-snug">
        Powering the eCommerce <br />
        Helping build the dreams of over 1M sites
      </h2>

      {/* Scroll Section */}
      <div className="overflow-x-auto">
        <div className="flex space-x-6 px-6 pb-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`min-w-[420px] md:min-w-[700px] ${t.color} rounded-2xl p-8 flex flex-col justify-between shadow-md`}
            >
              {/* h3 Heading */}
              <h3 className="text-xl font-semibold mb-4">{t.heading}</h3>

              {/* Text */}
              <p className="text-gray-700 mb-6 text-base leading-relaxed">
                "{t.text}"
              </p>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
