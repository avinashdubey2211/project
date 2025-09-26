import React, { useState } from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

const TemplatePage = () => {
  // Dummy template data
  const templates = Array.from({ length: 261 }, (_, i) => ({
    id: i + 1,
    title: `Martial Arts Supply Store (Bold) ${i + 1}`,
    img: `https://picsum.photos/400/250?random=${i + 1}`,
  }));

  const [page, setPage] = useState(1);
  const perPage = 9;
  const totalPages = Math.ceil(templates.length / perPage);

  const currentTemplates = templates.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-black flex flex-col">
      {/* Top Heading */}
      <div className="text-center py-8 border-b border-gray-200">
        <h1 className="text-2xl md:text-3xl font-bold">
          Pick the Website Template You Love
        </h1>
        <div className="mt-4 flex justify-center">
          <input
            type="text"
            placeholder="Search all templates..."
            className="border-b border-gray-400 outline-none px-3 py-1 w-72"
          />
        </div>
      </div>

      {/* Categories bar */}
      <div className="flex flex-wrap gap-6 px-6 py-4 border-b border-gray-200 text-sm font-medium">
        <button>Business & Services</button>
        <button>Store</button>
        <button>Creative</button>
        <button>Community</button>
        <button>Blog</button>
        <button>All Templates</button>
        <button>Blank Templates</button>
        <button>Collections</button>
        <button>Website Templates</button>
        <button>eCommerce Website Templates</button>
      </div>

      {/* Sort + Filter */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="flex gap-4 text-sm font-medium flex-wrap">
          <button className="text-purple-600">All</button>
          <button>Fashion & Clothing</button>
          <button>Jewelry & Accessories</button>
          <button>Arts & Crafts</button>
          <button>Home & Decor</button>
          <button>Beauty & Wellness</button>
          <button>Food & Drinks</button>
          <button>Sports & Outdoors</button>
          <button>Electronics</button>
          <button>Kids & Babies</button>
          <button>Books & Publishers</button>
          <button>Pets & Animals</button>
          <button>CBD</button>
        </div>
        <div>
          <label className="text-sm font-medium">
            Sort by:{" "}
            <select className="border px-2 py-1">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Popular</option>
            </select>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-10 flex-grow">
        {currentTemplates.map((tpl) => (
          <div
            key={tpl.id}
            className="relative group bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={tpl.img}
              alt={tpl.title}
              className="w-full h-52 object-cover"
            />
            {/* Hover buttons */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3  bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
              <button className=" text-white bg-black px-4 py-2 rounded">
                Edit
              </button>
              <button className="bg-black text-white px-4 py-2 rounded border">
                View
              </button>
              {/* <button className="text-white bg- underline">Info</button> */}
            </div>
            <div className="p-3">

              <p className="font-semibold">{tpl.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3 py-10">
        <div className="flex items-center gap-4 text-lg">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded border text-gray-600 disabled:opacity-50"
          >
            &lt;
          </button>
          {[
            page > 1 ? page - 1 : null,
            page,
            page < totalPages ? page + 1 : null,
          ]
            .filter(Boolean)
            .map((num) => (
              <button
                key={num}
                onClick={() => setPage(num)}
                className={`px-3 py-1 rounded border ${
                  page === num
                    ? "bg-purple-600 text-white font-bold"
                    : "text-black"
                }`}
              >
                {num}
              </button>
            ))}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded border text-gray-600 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
        <p className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </p>
      </div>

      {/* Section 1 */}
      <div className="bg-[#a6bad2] py-16 h-[60vh] text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Want Help Picking a Template?
        </h2>
        <p className="mt-2 text-gray-700">
          Get tips for finding the template that’s right for you
        </p>
        <button className="mt-5 px-6 py-2 bg-black text-white rounded-full">
          Help Me Choose
        </button>
      </div>

      {/* Section 2 - Footer */}
      <footer className="bg-purple-100">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-800">
          <div>
            <h3 className="font-bold mb-2">Product</h3>
            <ul className="space-y-1">
              <li>Website Templates</li>
              <li>Website Builder</li>
              <li>Website Design</li>
              <li>Wix Features</li>
              <li>App Market</li>
              <li>Web Hosting</li>
              <li>Domain Names</li>
              <li>Website Accessibility</li>
              <li>Mobile App Builder</li>
              <li>AI Website Builder</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Solutions</h3>
            <ul className="space-y-1">
              <li>Online Store</li>
              <li>Online Booking</li>
              <li>Blog Website</li>
              <li>Portfolio Website</li>
              <li>eCommerce Website</li>
              <li>Wix Studio</li>
              <li>Enterprise Solutions</li>
              <li>Wix University</li>
              <li>Professional Tools</li>
              <li>Logo Maker</li>
              <li>Landing Page Builder</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Learn</h3>
            <ul className="space-y-1">
              <li>Wix Blog</li>
              <li>Privacy and Security Hub</li>
              <li>SEO Learning Hub</li>
              <li>Wix Encyclopedia</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>Help Center</li>
              <li>Hire a Professional</li>
              <li>Report Abuse</li>
              <li>System Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>Channel Partnerships</li>
              <li>Press & Media</li>
              <li>Investor Relations</li>
              <li>Wix Capital</li>
              <li>Accessibility Statement</li>
              <li>Patent Notice</li>
              <li>Sitemap</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">WIX</h3>
            <p className="text-sm text-gray-600 mt-2">
              The Wix website builder offers a complete solution from
              enterprise-grade infrastructure and business features to advanced
              SEO and marketing tools—enabling anyone to create and grow online.
            </p>
            <div className="mt-10  h-28  w-full space-x-3 flex">
              <FaFacebook />
              <FaYoutube />
              <FaTiktok />
              <FaInstagram />
              <FaPinterest />
              <FaLinkedin />
            </div>
            <div className="mt-4 space-x-4 text-xs text-gray-500">
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              © 2006–2025 Wix.com, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TemplatePage;
