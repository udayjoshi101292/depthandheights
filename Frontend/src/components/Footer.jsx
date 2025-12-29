import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are a faith-based community committed to spreading Christian
            values through teaching, discipleship, and fellowship. Our mission
            is to build a stronger, more loving generation rooted in Christ.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
            <li>
            <Link to="/admin"> Admin login</Link>
             
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={18} />{" "}
              <span>heightanddepthministries@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+91 98606 67533</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+1 (903) 278-1851</span>
            </li>
            <li>Mumbai, India</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/heightdepth?utm_source=qr&igsh=ZW02amJodjFkOXdt"
              className="hover:text-white transition"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Faith Community. All rights reserved.</p>

        {/* Admin Login Button */}
        <a
          href="/admin"
          className="mt-3 md:mt-0 px-4 py-1 border border-gray-600 rounded-full text-gray-400 hover:text-white hover:border-white transition text-xs"
        >
          Admin Login
        </a>
      </div>
    </footer>
  );
};

export default Footer;
