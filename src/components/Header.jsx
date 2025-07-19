import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "../assets/images/logojj.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    destinations: false,
    resorts: false,
  });

  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === "/home"; // adjust this based on your routing

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const navItemClass = isHome ? "text-white" : "text-black";
  const navLinkHover = isHome
    ? "hover:underline text-white"
    : "hover:underline text-black";

  return (
    <header
      className={`fixed w-full z-50 ${
        isHome ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img
          src={logo}
          alt="Journey Junction Logo"
          className="h-20 w-20 object-cover rounded-full"
        />

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl ${navItemClass}`}
            aria-label="Toggle menu"
          >
            <FaBars />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 font-semibold items-center">
          <Link to="/home" className={`${navLinkHover}`}>
            HOME
          </Link>

          {/* DESTINATIONS */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown("destinations")}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <button className={`flex items-center gap-1 ${navLinkHover}`}>
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

          {/* RESORTS */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDropdown("resorts")}
            onMouseLeave={() => setDesktopDropdown(null)}
          >
            <Link to="/resorts">
              <button className={`flex items-center gap-1 ${navLinkHover}`}>
                RESORTS <FaChevronDown size={12} />
              </button>
            </Link>
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

          <Link to="/blog" className={`${navLinkHover}`}>
            BLOG
          </Link>
          <Link to="/aboutus" className={`${navLinkHover}`}>
            ABOUT US
          </Link>
          <Link to="/booknow" className={`px-4 ${navLinkHover}`}>
            BOOK NOW
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-4 pb-4 space-y-2 font-semibold">
          <Link to="/home" className="block px-4 py-2">
            HOME
          </Link>

          {/* Destinations */}
          <div>
            <button
              onClick={() => toggleDropdown("destinations")}
              className="w-full flex justify-between items-center px-4 py-2"
            >
              <span>DESTINATIONS</span>
              {dropdownOpen.destinations ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dropdownOpen.destinations && (
              <div className="ml-4 mt-1">
                <Link to="/wayanad" className="block px-4 py-2">
                  Wayanad
                </Link>
              </div>
            )}
          </div>

          {/* Resorts */}
          <div>
            <div className="flex justify-between items-center px-4 py-2">
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
                    className="block px-4 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" className="block px-4 py-2">
            BLOG
          </Link>
          <Link to="/aboutus" className="block px-4 py-2">
            ABOUT US
          </Link>
          <Link to="/booknow" className="block px-4 py-2 hover:underline">
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}
