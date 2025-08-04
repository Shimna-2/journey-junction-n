// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown, FaArrowLeft } from "react-icons/fa";
import logo from "../assets/images/logojj.jpeg";
import WeatherPreview from "./WeatherPreview";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    destinations: false,
    resorts: false,
  });

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

  const goToResortSection = (id) => {
    navigate(`/resorts#${id}`);
  };

  const navItemClass =
    "relative px-4 py-2 overflow-hidden rounded-full transition-colors duration-300 " +
    "before:absolute before:inset-0 before:rounded-full before:scale-0 before:opacity-0 " +
    "before:bg-gray-200 before:transition-all before:duration-300 before:z-0 " +
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
              className="md:hidden text-2xl text-black"
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

        {/* Mobile: Weather + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {isHome && <WeatherPreview />}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-xl text-black"
            aria-label="Open menu"
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
          {/* Destinations */}
          <div className="relative group">
            <button
              onClick={() => navigate("/wayanad")}
              className={`flex items-center gap-1 ${navItemClass}`}
            >
              <span className="relative z-10">DESTINATIONS</span>
              <FaChevronDown size={12} className="z-10" />
            </button>
            <div
              className="absolute left-0 top-full bg-white text-black shadow-md rounded-b z-50 w-48 
      opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto 
      transition-all duration-200 pointer-events-none"
            >
              <Link
                to="/wayanad"
                className="block px-4 py-2 hover:bg-gray-200 transition"
              >
                Wayanad
              </Link>
            </div>
          </div>

          {/* Resorts */}
          <div className="relative group">
            <button
              onClick={() => navigate("/resorts")}
              className={`flex items-center gap-1 ${navItemClass}`}
            >
              <span className="relative z-10">RESORTS</span>
              <FaChevronDown size={12} className="z-10" />
            </button>
            <div
              className="absolute left-0 top-full bg-white text-black shadow-md rounded-b z-50 w-64 
      opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto 
      transition-all duration-200 pointer-events-none"
            >
              {[
                { name: "Luxury Resorts", id: "luxury-resorts" },
                { name: "Premium Resorts", id: "premium-resorts" },
                { name: "Budget Friendly Resorts", id: "budget-resorts" },
                { name: "Private Pool Villas", id: "private-pool" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => goToResortSection(item.id)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <Link to="/blog" className={navItemClass}>
            <span className="relative z-10">BLOG</span>
          </Link>
          <Link to="/aboutus" className={navItemClass}>
            <span className="relative z-10">ABOUT US</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/booknow" className={navItemClass}>
              <span className="relative z-10">BOOK NOW</span>
            </Link>
            {isHome && <WeatherPreview />}
          </div>
        </nav>
      </div>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-72 h-full bg-black/50 backdrop-blur-lg border-l border-white/10 shadow-xl p-4 flex flex-col space-y-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-black rounded-full text-white hover:bg-gray-800 transition"
            >
              ✕
            </button>

            <Link
              to="/home"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              HOME
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              ABOUT US
            </Link>
            <Link
              to="/booknow"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              BOOK NOW
            </Link>
            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-white/10 transition"
            >
              BLOG
            </Link>

            {/* Destinations */}
            <div className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-white/10 transition">
              <span
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/wayanad");
                }}
                className="cursor-pointer"
              >
                DESTINATIONS
              </span>
              <span
                onClick={() => toggleDropdown("destinations")}
                className="cursor-pointer"
              >
                {dropdownOpen.destinations ? "▲" : "▼"}
              </span>
            </div>
            {dropdownOpen.destinations && (
              <div className="ml-4 space-y-2">
                <Link
                  to="/wayanad"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-lg hover:bg-white/10 transition"
                >
                  Wayanad
                </Link>
              </div>
            )}

            {/* Resorts */}
            <div className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-white/10 transition">
              <span
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/resorts");
                }}
                className="cursor-pointer"
              >
                RESORTS
              </span>
              <span
                onClick={() => toggleDropdown("resorts")}
                className="cursor-pointer"
              >
                {dropdownOpen.resorts ? "▲" : "▼"}
              </span>
            </div>
            {dropdownOpen.resorts && (
              <div className="ml-4 space-y-2">
                {[
                  { name: "Luxury Resorts", id: "luxury-resorts" },
                  { name: "Premium Resorts", id: "premium-resorts" },
                  { name: "Budget Friendly Resorts", id: "budget-resorts" },
                  { name: "Private Pool Villas", id: "private-pool" },
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setMenuOpen(false);
                      goToResortSection(item.id);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
