import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 100); // change 100 based on hero height
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // For other pages, keep navbar dark
    }
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Gallery", path: "/gallary" },
    { name: "Resources", path: "/resources" },
    { name: "Contact us", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl bg-gradient-to-r from-white/10 via-white/10 to-white/10 border-b border-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ${
        isScrolled ? "text-gray-800" : "text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className={`text-xl md:text-2xl font-semibold tracking-wide flex items-center gap-2 ${
            isScrolled
              ? "text-gray-900"
              : "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400"
          }`}
        >
        <img src={logo} className="h-10"/>
          HeightAndDepth
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300 ${
                  isScrolled
                    ? "hover:text-blue-600"
                    : "hover:text-blue-300"
                } ${
                  isActive
                    ? isScrolled
                      ? "text-blue-600 after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-600"
                      : "text-blue-300 after:absolute after:content-[''] after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-blue-300"
                    : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled ? "text-black" : "text-white"
          }`}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-6 py-4 backdrop-blur-lg bg-neutral-900/70 border-t border-white/10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-blue-300 font-semibold"
                    : "hover:text-blue-300 text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        
        </div>
      )}
    </nav>
  );
};

export default Navbar;
