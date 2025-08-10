// src/components/Footer.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Instant jump to top
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6 font-[Poppins]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Journey Junction</h2>
          <p className="text-sm">
            From private pool villas to cozy cottages, we have it all.
          </p>
        </div>

        {/* Resorts */}
        <div>
          <h3 className="text-md font-semibold mb-2">Resorts</h3>
          <ul className="space-y-1 text-sm">
            <li
              onClick={() => handleLinkClick("/resorts#luxury-resorts")}
              className="cursor-pointer"
            >
              Luxury Resorts
            </li>
            <li
              onClick={() => handleLinkClick("/resorts#premium-resorts")}
              className="cursor-pointer"
            >
              Premium Resorts
            </li>
            <li
              onClick={() => handleLinkClick("/resorts#budget-resorts")}
              className="cursor-pointer"
            >
              Budget-Friendly Resorts
            </li>
            <li
              onClick={() => handleLinkClick("/resorts#private-pool")}
              className="cursor-pointer"
            >
              Private Pool Villas
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li
              onClick={() => handleLinkClick("/home")}
              className="cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleLinkClick("/wayanad")}
              className="cursor-pointer"
            >
              Destinations
            </li>
            <li
              onClick={() => handleLinkClick("/blog")}
              className="cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={() => handleLinkClick("/aboutus")}
              className="cursor-pointer"
            >
              About Us
            </li>
            <li
              onClick={() => handleLinkClick("/booknow")}
              className="cursor-pointer"
            >
              Book Now
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">+91 96337 63916</p>
          <p className="text-sm">+91 9744161939</p>
          <p className="text-sm">journeyjunctionwyn@gmail.com</p>

          <div className="flex space-x-3 mt-3">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919633763916"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 border-t border-white/10 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Journey Junction. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
