// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
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
            <li>
              <Link to="/budget-resorts">Budget-Friendly Resorts</Link>
            </li>
            <li>
              <Link to="/luxury-resorts">Luxury Resorts</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog Section</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-md font-semibold mb-2">Contact</h3>
          <p className="text-sm">+91 96337 63916</p>
          <p className="text-sm">journeyjunctionwyn@gmail.com</p>

          <div className="flex space-x-3 mt-3">
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919633763916" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
