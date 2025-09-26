import React from "react";
import {
  Home,
  ShoppingBag,
  Box,
  AppWindow,
  Inbox,
  Users,
  Megaphone,
  BarChart,
  Settings,
  Globe,
  HelpCircle,
  Compass,
  User,
  Bell,
} from "lucide-react";

export default function Dashboard() {
  const menuItems = [
    { icon: Home, label: "Home" },
    { icon: ShoppingBag, label: "Sales" },
    { icon: Box, label: "Catalog" },
    { icon: AppWindow, label: "Apps" },
    { icon: Inbox, label: "Inbox" },
    { icon: Users, label: "Customers & Leads" },
    { icon: Megaphone, label: "Marketing" },
    { icon: BarChart, label: "Analytics" },
    { icon: Settings, label: "Automations" },
    { icon: Settings, label: "Settings" },
    { icon: Globe, label: "Website Content" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ===== Header Section ===== */}
      <section className="bg-gradient-to-r from-[#0D2345] to-[#1B3A6D] text-white p-8 md:p-10">
        <h1 className="text-2xl md:text-[28px] font-bold mb-4 leading-tight max-w-2xl">
          One dashboard for total business control
        </h1>
        <button className="bg-[#FFD62E] text-black font-semibold px-5 md:px-6 py-2 rounded-lg shadow mb-8 hover:bg-yellow-400">
          Set Up Your Store
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h2 className="font-bold mb-1">Process orders at scale</h2>
            <p className="text-gray-200">
              Accept payments and manage all fulfillment logistics—for all your
              sales channels—from start to finish.
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-1">Ship easier with native solutions</h2>
            <p className="text-gray-200">
              Buy and print discounted shipping labels from a variety of
              carriers directly from your Wix dashboard.
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-1">Automate your business</h2>
            <p className="text-gray-200">
              Sync inventory for all channels, monitor stock levels, track top
              products and easily set up triggered actions like abandoned cart
              emails.
            </p>
          </div>
          <div>
            <h2 className="font-bold mb-1">
              Access the right data to drive sales
            </h2>
            <p className="text-gray-200">
              Understand your data at a glance with customized reports,
              real-time analytics and AI-powered benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Main Card Section ===== */}
      <section className="p-4 md:p-8">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden max-w-6xl mx-auto">
          {/* Sidebar inside card */}
          <aside className="w-full md:w-64 bg-gray-900 text-white flex flex-col p-4">
            <div className="text-xl md:text-2xl font-bold mb-6">WiX</div>

            {/* Extra options */}
            <div className="mb-6 space-y-2 text-sm">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                <Compass size={16} /> Explore
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
                <HelpCircle size={16} /> Help
              </div>
            </div>

            <nav className="space-y-1 flex-1">
              {menuItems.map(({ icon: Icon, label }, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-700 ${
                    idx === 0 ? "bg-gray-800" : ""
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main content inside same card */}
          <main className="flex-1 flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b px-4 md:px-6 py-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8kiSH5ZSAcVoj3tAQQDoP_ux0sSricMyUg&s"
                alt="Wix Logo"
                className="h-12 md:h-16 rounded-full"
              />
              <div className="flex items-center gap-3 md:gap-4">
                <Bell className="cursor-pointer" size={20} />
                <User className="cursor-pointer" size={20} />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-6">
                Analytics Overview
              </h2>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <p className="text-sm text-gray-500">Total Sales</p>
                  <h3 className="text-lg md:text-xl font-bold">$847,539</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <p className="text-sm text-gray-500">Avg. Order Value</p>
                  <h3 className="text-lg md:text-xl font-bold">$163.43</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <p className="text-sm text-gray-500">Total Orders</p>
                  <h3 className="text-lg md:text-xl font-bold">5,186</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow text-center">
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h3 className="text-lg md:text-xl font-bold">$805,162</h3>
                </div>
              </div>

              {/* Charts/Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src="https://static.wixstatic.com/media/0784b1_930ce35fc39f406997179427f31158a1~mv2.jpg/v1/fill/w_1023,h_369,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dashboard2.jpg"
                  alt="Chart 1"
                  className="rounded-lg shadow w-full h-auto"
                />
                <img
                  src="https://static.wixstatic.com/media/0784b1_930ce35fc39f406997179427f31158a1~mv2.jpg/v1/fill/w_1023,h_369,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dashboard2.jpg"
                  alt="Chart 2"
                  className="rounded-lg shadow w-full h-auto"
                />
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}
