import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { X, ChevronDown, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Collapse } from "@mui/material";

const languages = [
  "English","Deutsch","Español","Français","Italiano","Nederlands","Norsk","Polski",
  "Português","Русский","Svenska","日本語","한국어","Türkçe","Dansk","हिन्दी",
  "Čeština","ไทย","Українська","繁體中文","Tiếng Việt","Bahasa Indonesia"
];

const Navbar = () => {
  const navigate = useNavigate();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showProductMenu, setShowProductMenu] = useState(false);
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop mega menu data
  const productMenu = {
    Creation: [
      { title: "Website design", desc: "Create your site with intuitive design features." },
      { title: "Website templates", desc: "Choose from 900+ website templates." },
      { title: "AI website builder", desc: "Create your site in no time with AI." },
    ],
    Business: [
      { title: "eCommerce", desc: "Run & grow your eCommerce website." },
      { title: "Scheduling", desc: "Manage appointments, staff & clients." },
      { title: "Restaurant", desc: "Manage your menus, orders, and reservations." },
      { title: "Blog", desc: "Share ideas & grow your traffic." },
      { title: "Portfolio", desc: "Showcase your work with an online portfolio." },
    ],
  };

  const solutionsMenu = {
    Business: [
      { title: "Payment solutions", desc: "Accept & manage payments online." },
      { title: "Mobile app", desc: "Run your business on the go from your mobile." },
      { title: "All business features", desc: "Explore all business management features." },
      { title: "CRM system", desc: "Build & manage customer relationships." },
      { title: "Website analytics", desc: "Get reports with actionable data & insights." },
    ],
    Growth: [
      { title: "Email marketing", desc: "Create email marketing campaigns." },
      { title: "SEO tools", desc: "Optimize your website for search engines." },
      { title: "All marketing features", desc: "Explore all growth and marketing features." },
    ],
  };

  const resourcesMenu = {
    Explore: [
      { title: "Wix Blog", desc: "Read the latest industry tips and trends." },
      { title: "AI features", desc: "Discover all the ways to create and grow with AI." },
      { title: "Web design inspiration", desc: "Explore designs by other Wix users." },
    ],
    Support: [
      { title: "Help Center", desc: "Find the answers and support you need." },
      { title: "Hire a professional", desc: "Get expert help with your site & business." },
    ],
    Tools: [
      { title: "Logo Maker", desc: "Create a custom logo for your brand." },
      { title: "Business Name Generator", desc: "Get name ideas for your business." },
      { title: "Free business tools", desc: "Explore tools to help you run & grow your business." },
    ],
  };

  return (
    <>
      {/* Top Nav */}
      <div className="w-full bg-white h-[64px] flex items-center justify-between shadow-sm relative z-50 px-4 sm:px-8">
        {/* Left Section */}
        <div className="flex items-center gap-4 sm:gap-8">
          <img
            src="https://www.wix.com/favicon.ico"
            alt="logo"
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
          />

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 text-gray-700 font-sans text-sm font-medium relative">
            <li className="relative">
              <button
                onClick={() => {
                  setShowProductMenu(!showProductMenu);
                  setShowSolutionsMenu(false);
                  setShowResourcesMenu(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Product <ChevronDown size={14} />


              </button>
              {/* {showProductMenu && (
                <div className="absolute  bg-white shadow-lg p-8 w-screen h-screen z-[999]">
                  <div className="grid grid-cols-2 gap-10">
                    {Object.keys(productMenu).map((section, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-gray-500 mb-3">{section.toUpperCase()}</p>
                        {productMenu[section].map((item, idx) => (
                          <div key={idx} className="mb-4">
                            <h4 className="font-medium cursor-pointer hover:text-blue-600">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </li>

            <li className="relative">
              <button
                onClick={() => {
                  setShowSolutionsMenu(!showSolutionsMenu);
                  setShowProductMenu(false);
                  setShowResourcesMenu(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Solutions <ChevronDown size={14} />
              </button>
              {/* {showSolutionsMenu && (
                <div className="absolute top-[40px] left-0 bg-white shadow-lg p-8 w-[700px] z-50">
                  <div className="grid grid-cols-2 gap-10">
                    {Object.keys(solutionsMenu).map((section, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-gray-500 mb-3">{section.toUpperCase()}</p>
                        {solutionsMenu[section].map((item, idx) => (
                          <div key={idx} className="mb-4">
                            <h4 className="font-medium cursor-pointer hover:text-blue-600">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )} */}
            </li>

            <li className="relative">
              <button
                onClick={() => {
                  setShowResourcesMenu(!showResourcesMenu);
                  setShowProductMenu(false);
                  setShowSolutionsMenu(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Resources <ChevronDown size={14} />
              </button>
              {showResourcesMenu && (
                <div className="absolute top-[40px] left-0 bg-white shadow-lg p-8 w-[700px] z-50">
                  <div className="grid grid-cols-3 gap-10">
                    {Object.keys(resourcesMenu).map((section, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-gray-500 mb-3">{section.toUpperCase()}</p>
                        {resourcesMenu[section].map((item, idx) => (
                          <div key={idx} className="mb-4">
                            <h4 className="font-medium cursor-pointer hover:text-blue-600">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>

            <span className="text-gray-300">|</span>
            <li onClick={() => navigate("/wix_disgn")} className="hover:text-blue-600 cursor-pointer">Wixel</li>
            <li className="hover:text-blue-600 cursor-pointer">Wix Studio</li>
            <li className="hover:text-blue-600 cursor-pointer">Enterprise</li>
          </ul>
        </div>

        {/* Right Section (desktop only) */}
        <div className="hidden lg:flex items-center gap-6">
          <div
            className="flex items-center gap-1 cursor-pointer hover:text-blue-600 text-gray-700"
            onClick={() => setShowLangMenu(true)}
          >
            <GrLanguage size={18} />
          </div>
          <span className="text-gray-300">|</span>
          <p className="text-sm font-medium cursor-pointer hover:text-blue-600" onClick={() => navigate("/login")}>
            Log In
          </p>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[64px] left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col p-4 gap-2 text-gray-700 text-sm font-medium">
            {/* Collapsible menus */}
            <li>
              <button
                onClick={() => setShowProductMenu(!showProductMenu)}
                className="flex justify-between w-full py-2 hover:text-blue-600"
              >
                Product <ChevronDown size={14} />
              </button>
              {showProductMenu && (
                <div className="pl-4 flex flex-col gap-1">
                  {Object.values(productMenu).flat().map((item, i) => (
                    <p key={i} className="py-1 text-gray-600 hover:text-blue-600 cursor-pointer">{item.title}</p>
                  ))}
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => setShowSolutionsMenu(!showSolutionsMenu)}
                className="flex justify-between w-full py-2 hover:text-blue-600"
              >
                Solutions <ChevronDown size={14} />
              </button>
              {showSolutionsMenu && (
                <div className="pl-4 flex flex-col gap-1">
                  {Object.values(solutionsMenu).flat().map((item, i) => (
                    <p key={i} className="py-1 text-gray-600 hover:text-blue-600 cursor-pointer">{item.title}</p>
                  ))}
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => setShowResourcesMenu(!showResourcesMenu)}
                className="flex justify-between w-full py-2 hover:text-blue-600"
              >
                Resources <ChevronDown size={14} />
              </button>
              {/* {showResourcesMenu && (
                <div className="pl-4 flex flex-col gap-1">
                  {Object.values(resourcesMenu).flat().map((item, i) => (
                    <p key={i} className="py-1 text-gray-600 hover:text-blue-600 cursor-pointer">{item.title}</p>
                  ))}
                </div>
              )} */}
            </li>

            {/* Other links */}
            <li onClick={() => navigate("/wix_disgn")} className="py-2 hover:text-blue-600">Wixel</li>
            <li className="py-2 hover:text-blue-600">Wix Studio</li>
            <li className="py-2 hover:text-blue-600">Enterprise</li>
            <li
              className="py-2 flex items-center gap-2 cursor-pointer hover:text-blue-600"
              onClick={() => setShowLangMenu(true)}
            >
              <GrLanguage size={18} /> Language
            </li>
            <li className="py-2 cursor-pointer hover:text-blue-600" onClick={() => navigate("/login")}>
              Log In
            </li>
          </ul>
        </div>
      )}

      {/* Language Selector */}
      {showLangMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-10 overflow-y-auto">
          <button onClick={() => setShowLangMenu(false)} className="absolute top-6 right-8 text-2xl">
            <X size={24} />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
            {languages.map((lang, i) => (
              <p
                key={i}
                className={`cursor-pointer text-base hover:text-blue-600 ${
                  lang === "English" ? "text-blue-600 font-medium" : ""
                }`}
              >
                {lang}
              </p>
            ))}
          </div>
        </div>
      )}
            
                <Collapse in={showProductMenu} timeout="auto" unmountOnExit>
                <div className="absolute  bg-white shadow-lg p-8 w-screen h-screen z-[999]">
                  <div className="grid grid-cols-2 gap-10">
                    {Object.keys(productMenu).map((section, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-gray-500 mb-3">{section.toUpperCase()}</p>
                        {productMenu[section].map((item, idx) => (
                          <div key={idx} className="mb-4">
                            <h4 className="font-medium cursor-pointer hover:text-blue-600">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                </Collapse>

                    <Collapse in={showSolutionsMenu} timeout="auto" unmountOnExit>
                <div className="absolute top-[40px] left-0 bg-white shadow-lg p-8 w-screen h-screen z-[999]">
                  <div className="grid grid-cols-2 gap-10">
                    {Object.keys(solutionsMenu).map((section, i) => (
                      <div key={i}>
                        <p className="text-xs font-semibold text-gray-500 mb-3">{section.toUpperCase()}</p>
                        {solutionsMenu[section].map((item, idx) => (
                          <div key={idx} className="mb-4">
                            <h4 className="font-medium cursor-pointer hover:text-blue-600">{item.title}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                </Collapse>

                   <Collapse in={showResourcesMenu} timeout="auto" unmountOnExit>
                <div className="pl-4 flex flex-col gap-1  w-screen h-screen z-[999]">
                  {Object.values(resourcesMenu).flat().map((item, i) => (
                    <p key={i} className="py-1 text-gray-600 hover:text-blue-600 cursor-pointer">{item.title}</p>
                  ))}
                </div>
                </Collapse>
              
              
            
    </>
  );
};

export default Navbar;
