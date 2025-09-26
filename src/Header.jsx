import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menus = {
    Start: ["eCommerce Website", "Online Store", "eCommerce Templates", "Migrate"],
    Sell: [
      "Sell on Wix",
      "Dropshipping website",
      "Sell customer merch",
      "Sales channel",
      "Sell internationally",
      "Point of sale",
    ],
    Manage: [
      "Manage your store",
      "eCommerce Features",
      "eCommerce Hosting",
      "eCommerce Marketing",
      "Buy now, pay later",
      "Accept payments",
    ],
    Learn: ["eCommerce Blog", "Learn eCommerce", "Support"],
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sticky top-0 z-50 w-full h-16 bg-white flex justify-between items-center px-6 md:px-8 shadow-sm">
      {/* Left Logo */}
      <h2 className="text-xl font-bold text-black">eCommerce</h2>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex gap-6 text-gray-700 items-center text-sm font-medium">
          {Object.keys(menus).map((menu) => (
            <li key={menu} className="relative">
              <button
                onClick={() => toggleMenu(menu)}
                className="flex items-center gap-1 hover:text-blue-500 transition"
              >
                {menu}
                <ChevronDown size={16} className="text-gray-500" />
              </button>

              {/* Dropdown */}
              {openMenu === menu && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-52 z-50">
                  {menus[menu].map((item, idx) => (
                    <p
                      key={idx}
                      className="px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </li>
          ))}
          <li className="hover:text-blue-500 cursor-pointer">Pricing</li>
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 py-2 px-4 text-white rounded-3xl text-sm font-semibold hover:bg-blue-600 transition"
          >
            Create Your Store
          </button>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col p-4 gap-2 text-gray-700 text-sm font-medium">
            {Object.keys(menus).map((menu) => (
              <li key={menu} className="border-b pb-2">
                <button
                  onClick={() => toggleMenu(menu)}
                  className="flex justify-between w-full items-center py-2 hover:text-blue-500"
                >
                  {menu}
                  <ChevronDown size={16} />
                </button>
                {openMenu === menu && (
                  <div className="pl-4 flex flex-col gap-1">
                    {menus[menu].map((item, idx) => (
                      <p
                        key={idx}
                        className="py-1 cursor-pointer text-gray-600 hover:text-blue-600 transition"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="py-2 hover:text-blue-500">Pricing</li>
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 py-2 px-4 mt-2 text-white rounded-3xl text-sm font-semibold hover:bg-blue-600 transition"
            >
              Create Your Store
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
