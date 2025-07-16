import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../assets/images/logojj.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    destinations: false,
    resorts: false,
  });

  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <header className="bg-gray-500 shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Journey Junction Logo"
          className="h-20 w-20 object-cover rounded-full"
        />

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link
            to="/home"
            className="hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            HOME
          </Link>

          {/* Desktop Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown("destinations")}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <button className="hover:bg-gray-700 px-4 py-2 flex items-center gap-1 rounded">
              DESTINATIONS <FaChevronDown size={12} />
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

          {/* Desktop Resorts Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown("resorts")}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            {/* Main Resorts Link (clickable and shows dropdown on hover) */}
            <Link
              to="/resorts"
              className="hover:bg-slate-100 px-4 py-2 flex items-center gap-1 rounded transition"
            >
              RESORTS <FaChevronDown size={12} />
            </Link>

            {/* Dropdown Items */}
            {desktopDropdown === "resorts" && (
              <div className="absolute top-full left-0 bg-white text-black shadow-md rounded mt-1 z-50 w-64">
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
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className="hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            BLOG
          </Link>

          <Link
            to="/aboutus"
            className="hover:bg-gray-700 px-4 py-2 rounded transition"
          >
            ABOUT US
          </Link>

          <Link
            to="/booknow"
            className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-white transition"
          >
            BOOK NOW
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 pb-4 space-y-2 font-semibold">
          <Link
            to="/home"
            className="block hover:bg-gray-700 px-4 py-2 rounded"
          >
            HOME
          </Link>

          {/* Mobile Destinations */}
          <div className="rounded">
            <button
              onClick={() => toggleDropdown("destinations")}
              className="w-full flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded"
            >
              <span>DESTINATIONS</span>
              {dropdownOpen.destinations ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen.destinations && (
              <div className="ml-4 mt-1 space-y-1">
                <Link
                  to="/wayanad"
                  className="block px-4 py-2 hover:bg-gray-700 rounded"
                >
                  Wayanad
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Resorts */}
          {/* Mobile Resorts */}
          <div className="rounded flex flex-col">
            <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-700 rounded">
              <Link
                to="/resorts"
                className="text-white w-full"
                onClick={() => setMenuOpen(false)} // Close mobile menu on nav
              >
                RESORTS
              </Link>
              <button
                onClick={() => toggleDropdown("resorts")}
                className="text-white ml-2"
              >
                {dropdownOpen.resorts ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {dropdownOpen.resorts && (
              <div className="ml-4 mt-1 space-y-1">
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
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className="block hover:bg-gray-700 px-4 py-2 rounded"
          >
            BLOG
          </Link>

          <Link
            to="/aboutus"
            className="block hover:bg-gray-700 px-4 py-2 rounded"
          >
            ABOUT US
          </Link>

          <Link
            to="/booknow"
            className="block bg-gray-100 text-black text-center py-2 rounded hover:bg-white"
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
