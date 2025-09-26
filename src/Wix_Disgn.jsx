import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Wix_Design() {
  const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    

  const images = [
    "https://static.wixstatic.com/media/0784b1_274b398d713648dc9f6ab8261c0259f4f000.jpg/v1/fill/w_273,h_311,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/0784b1_274b398d713648dc9f6ab8261c0259f4f000.jpg",
    "https://static.wixstatic.com/media/0784b1_d9288b1221eb4ce2b3e03eab81016db1~mv2.jpg/v1/fill/w_273,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/matcha.jpg",
    "https://static.wixstatic.com/media/0784b1_fcbd230f13364e36aeaac30aa338b94cf000.jpg/v1/fill/w_273,h_356,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/0784b1_fcbd230f13364e36aeaac30aa338b94cf000.jpg",
    "https://static.wixstatic.com/media/0784b1_c02135160e474658be43c4fa06089e82~mv2.jpg/v1/fill/w_273,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/james-cv.jpg",
    "https://static.wixstatic.com/media/0784b1_273ae8e672d845728eaf44b8fe5c7169~mv2.jpg/v1/fill/w_272,h_370,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/goody-hp.jpg",
    "https://static.wixstatic.com/media/0784b1_779a5cde2e1f4cc29feb1ab4cc3a49c6~mv2.jpg/v1/fill/w_273,h_306,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/fgfdg.jpg",
    "https://static.wixstatic.com/media/0784b1_aeeb1cd88fc14f748441b4ed269e170d~mv2.jpg/v1/fill/w_273,h_229,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1312.jpg",
    "https://static.wixstatic.com/media/0784b1_8a8bc1eaa29e49f59b87f562c9308497~mv2.jpg/v1/fill/w_273,h_343,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/graphic45.jpg",
    "https://static.wixstatic.com/media/0784b1_67da9ed5031c4f7fb784182472b6a2d7f000.jpg/v1/fill/w_273,h_330,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/0784b1_67da9ed5031c4f7fb784182472b6a2d7f000.jpg",
    "https://static.wixstatic.com/media/0784b1_274b398d713648dc9f6ab8261c0259f4f000.jpg/v1/fill/w_273,h_311,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/0784b1_274b398d713648dc9f6ab8261c0259f4f000.jpg",
    "https://static.wixstatic.com/media/0784b1_d9288b1221eb4ce2b3e03eab81016db1~mv2.jpg/v1/fill/w_273,h_333,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/matcha.jpg",
    "https://static.wixstatic.com/media/0784b1_fcbd230f13364e36aeaac30aa338b94cf000.jpg/v1/fill/w_273,h_356,al_c,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/0784b1_fcbd230f13364e36aeaac30aa338b94cf000.jpg",
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#a8edea] to-[#fed6e3] flex flex-col">
      
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="text-2xl font-bold text-black cursor-pointer">wixel</div>
          <ul className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">Design</li>
            <li className="hover:text-blue-600 cursor-pointer">Templates</li>
            <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-600 cursor-pointer">Resources</li>
          </ul>
          <div className="hidden md:flex items-center gap-6">
            <p 
             onClick={() => navigate("/login")}
            className="cursor-pointer text-gray-800 hover:text-blue-600">Log In</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-gray-800" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col gap-4 p-6 text-gray-800 font-medium">
              <li className="hover:text-blue-600 cursor-pointer">Design</li>
              <li className="hover:text-blue-600 cursor-pointer">Templates</li>
              <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
              <li className="hover:text-blue-600 cursor-pointer">Resources</li>
              <li className="hover:text-blue-600 cursor-pointer">Log In</li>
              <li>
                <button
                  onClick={() => navigate("/Sign")}
                 className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium w-full">
                  Get Started
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center flex-1 px-6 mt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-snug">
          Let’s design something <br /> together
        </h1>
        <p className="text-gray-700 max-w-2xl mb-8 text-base md:text-lg">
          From the wildest ideas to the most practical use cases, Wixel helps you turn <br />
          any vision into professional-grade design.
        </p>
        <button 
           
        className="bg-[#4f2dfd] hover:bg-[#3d23d1] text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg transition">
          Get Started
        </button>
        <br/>
      {/* </section>

      Templates Section
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Templates</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {images.map((src, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <img
                src={src}
                alt={`Template ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* AI Creativity Section */}
      <section className="w-full bg-gradient-to-r from-[#f9fafb] to-[#f3f4f6] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-10 items-center gap-12">
          
          {/* Left Text */}
          <div>
            <h2 className="text-3xl w-[50%] md:text-4xl font-bold text-black mb-6">
              Bring out your creativity with AI
            </h2>
            <p className="text-gray-700 mb-6">
              Got an idea? Watch it take shape instantly when you create with our AI
              image generator. Or upload your own image and enjoy editing down to
              the last detail.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition">
              Get Started
            </button>
          </div>

          {/* Right Image Card */}
          {/* Right Card */}
<div className="bg-white w-[50%] rounded-2xl p-6  md:w-[600px] shadow-lg">
  <video
    src="https://video.wixstatic.com/video/0784b1_323609a587774edb8c809823d84bdd7d/720p/mp4/file.mp4"
    controls
    autoPlay
    loop
    muted
    playsInline
    className="rounded-xl w-full h-[404px] object-cover"
  />
 
</div>

        </div>
      </section>
    </div>
  );
}
