import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logoJJ from "../assets/images/logojj.jpeg"; // Import your logo

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          {/* <img
            src={logoJJ}
            alt="Journey Junction"
            className="w-32 mb-4 rounded-lg shadow-md"
          /> */}
          <p className="text-sm leading-relaxed">
            From private pool villas to cozy cottages, Journey Junction helps
            you book the top resorts in Wayanad with ease.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/journeyjunctionindia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/journeyjunction.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Resorts Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resorts</h3>
          <ul className="space-y-2 text-sm">
            <li>Couple Resorts</li>
            <li>Honeymoon Resorts</li>
            <li>Budget-Friendly Stays</li>
            <li>Experiential Resorts</li>
          </ul>
        </div>

        {/* Page Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Resorts</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-green-500" />
              <a
                href="https://wa.me/919744161939"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 97441 61939
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-400" />
              <a href="tel:+919633763916">+91 96337 63916</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-400" />
              <a href="mailto:journeyjunctionwyn@gmail.com">
                journeyjunctionwyn@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Journey Junction. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
