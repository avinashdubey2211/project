import React from "react";
import { FaPinterest } from "react-icons/fa";

import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from "lucide-react"; // Pinterest hata diya

export default function AppFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-6 gap-8 text-sm text-gray-700">
        {/* Product */}
        <div>
          <h3 className="font-semibold mb-3">Product</h3>
          <ul className="space-y-2">
            <li>Website Templates</li>
            <li>Website Builder</li>
            <li>Website Design</li>
            <li>Wix Features</li>
            <li>App Market</li>
            <li>Web Hosting</li>
            <li>Domain Names</li>
            <li>Website Accessibility</li>
            <li>Mobile App Builder</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2">
            <li>Online Store</li>
            <li>Online Booking</li>
            <li>Restaurant Website</li>
            <li>Blog Website</li>
            <li>Portfolio Website</li>
            <li>eCommerce Website</li>
            <li>Wix Studio</li>
            <li>Enterprise Solutions</li>
            <li>Student Website</li>
            <li>Professional Tools</li>
            <li>Logo Maker</li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="font-semibold mb-3">Learn</h3>
          <ul className="space-y-2">
            <li>Wix Blog</li>
            <li className="text-blue-600">Privacy and Security Hub</li>
            <li>SEO Learning Hub</li>
            <li>Wix Encyclopedia</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Hire a Professional</li>
            <li>Report Abuse</li>
            <li>System Status</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
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

        {/* Wix info */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Wix</h3>
          <p className="text-gray-600 text-sm">
            The Wix website builder offers a complete solution from
            enterprise-grade infrastructure and business features to advanced
            SEO and marketing tools—enabling anyone to create and grow online.
          </p>
          <ul className="mt-3 space-y-1">
            <li className="font-semibold">About</li>
            <li className="font-semibold">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        {/* Social icons */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Youtube size={20} />
          <Facebook size={20} />
          <Instagram size={20} />
          <FaPinterest size={20} /> {/* yaha sahi wala */}
          <Twitter size={20} />
          <Linkedin size={20} />
        </div>

        {/* Links + copyright */}
        <div className="flex flex-col md:flex-row md:space-x-6 items-center">
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>© 2006–2025 Wix.com, Inc</span>
        </div>
      </div>
    </footer>
  );
}
