// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaArrowLeft,
} from "react-icons/fa";
import logo from "../assets/images/logojj.jpeg";
import WeatherPreview from "./WeatherPreview";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    destinations: false,
    resorts: false,
  });
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/home";
  const isWayanad = location.pathname === "/wayanad";

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  // ✅ Circle hover effect behind black text
  const navItemClass =
    "relative px-4 py-2 overflow-hidden rounded-full transition-colors duration-300 " +
    "before:absolute before:inset-0 before:rounded-full before:scale-0 before:opacity-0 " +
    "before:bg-[#f5e6d3] before:transition-all before:duration-300 before:z-0 " +
    "hover:before:scale-100 hover:before:opacity-100 text-black hover:text-black";

  return (
    <header
      className={`w-full z-50 ${
        isHome
          ? "absolute top-0 left-0 bg-transparent"
          : "relative bg-white shadow"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          {isWayanad && (
            <button
              onClick={() => navigate(-1)}
              className={`md:hidden text-2xl text-black`}
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
          )}
          <img
            src={logo}
            alt="Journey Junction Logo"
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>

        {/* Mobile: WeatherPreview + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <WeatherPreview />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl text-black`}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-semibold items-center">
          <Link to="/home" className={navItemClass}>
            <span className="relative z-10">HOME</span>
          </Link>

          {/* Destinations */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown("destinations")}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <button className={`flex items-center gap-1 ${navItemClass}`}>
              <span className="relative z-10">DESTINATIONS</span>{" "}
              <FaChevronDown size={12} className="z-10" />
            </button>
            {desktopDropdown === "destinations" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded mt-1 z-50 w-40">
                <Link
                  to="/wayanad"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Wayanad
                </Link>
              </div>
            )}
          </div>

          {/* Resorts */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown("resorts")}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <Link to="/resorts">
              <button className={`flex items-center gap-1 ${navItemClass}`}>
                <span className="relative z-10">RESORTS</span>{" "}
                <FaChevronDown size={12} className="z-10" />
              </button>
            </Link>
            {desktopDropdown === "resorts" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded mt-1 z-50 w-64">
                {[
                  { name: "Luxury Resorts", path: "#luxury-resorts" },
                  { name: "Premium Resorts", path: "#premium-resorts" },
                  { name: "Budget Friendly Resorts", path: "#budget-resorts" },
                  { name: "Private Pool Villas", path: "#private-pool" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={() => setDesktopDropdown(null)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className={navItemClass}>
            <span className="relative z-10">BLOG</span>
          </Link>
          <Link to="/aboutus" className={navItemClass}>
            <span className="relative z-10">ABOUT US</span>
          </Link>

          {/* Desktop: Book Now + Weather */}
          <div className="flex items-center gap-4">
            <Link to="/booknow" className={navItemClass}>
              <span className="relative z-10">BOOK NOW</span>
            </Link>
            <WeatherPreview />
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-4 pb-4 space-y-2 font-semibold">
          {["HOME", "BLOG", "ABOUT US", "BOOK NOW"].map((item, i) => (
            <Link
              key={i}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              onClick={() => setMenuOpen(false)}
              className="relative px-4 py-2 rounded-full before:absolute before:inset-0 before:rounded-full before:scale-0 before:opacity-0 before:bg-gray-700 before:transition-all before:duration-300 hover:before:scale-100 hover:before:opacity-100 z-10 hover:text-white"
            >
              <span className="relative z-10">{item}</span>
            </Link>
          ))}

          {/* Destinations Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("destinations")}
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-full"
            >
              <span>DESTINATIONS</span>
              {dropdownOpen.destinations ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen.destinations && (
              <div className="ml-4 mt-1">
                <Link
                  to="/wayanad"
                  className="block px-4 py-2 hover:bg-gray-700 rounded-full"
                  onClick={() => setMenuOpen(false)}
                >
                  Wayanad
                </Link>
              </div>
            )}
          </div>

          {/* Resorts Mobile */}
          <div>
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded-full">
              <Link to="/resorts" onClick={() => setMenuOpen(false)}>
                RESORTS
              </Link>
              <button onClick={() => toggleDropdown("resorts")}>
                {dropdownOpen.resorts ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {dropdownOpen.resorts && (
              <div className="ml-4 mt-1">
                {[
                  { name: "Honeymoon Resorts", path: "/honeymoon-resorts" },
                  { name: "Luxury Resorts", path: "/luxury-resorts" },
                  { name: "Premium Resorts", path: "/premium-resorts" },
                  {
                    name: "Budget Friendly Resorts",
                    path: "/budget-friendly-resorts",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-700 rounded-full"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
