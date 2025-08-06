import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logoJJ from "../assets/images/logojj.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <footer
      className="bg-[#0e1e1c] text-gray-300 pt-12 pb-6 font-[Poppins]"
      data-aos="fade-up" // ✅ bottom-to-top animation
    >
      {/* ✅ Preload font */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ✅ Preload logo for faster LCP */}
      <link rel="preload" as="image" href={logoJJ} />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img
            src={logoJJ}
            alt="Journey Junction Logo"
            loading="eager"
            decoding="async"
            width="128"
            height="128"
            className="w-32 mb-4 rounded-lg shadow-md"
          />
          <p className="text-sm leading-relaxed mb-4">
            From private pool villas to cozy cottages, Journey Junction helps
            you book the top resorts in Wayanad with ease.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-lg">
            <a
              href="https://www.facebook.com/share/1F7BL9EXTb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/journey_junction___?igsh=ODZieXo1NTlhNjhr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919744161939"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Resorts Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resorts</h3>
          <ul className="space-y-2 text-sm">
            {[
              {
                to: "/resorts#budget-resorts",
                text: "Budget-Friendly Resorts",
              },
              { to: "/resorts#premium-resorts", text: "Premium Resorts" },
              { to: "/resorts#luxury-resorts", text: "Luxury Resorts" },
              { to: "/resorts#private-pool", text: "Private Pool Villas" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="hover:text-white hover:underline underline-offset-4 transition"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/wayanad", text: "Wayanad" },
              { to: "/aboutus", text: "About Us" },
              { to: "/resorts", text: "Resorts" },
              { to: "/blog", text: "Blog Section" },
              { to: "/booknow", text: "Book Now" },
              { to: "/privacy-policy", text: "Privacy Policy" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.to}
                  className="hover:text-white hover:underline underline-offset-4 transition"
                >
                  {item.text}
                </Link>
              </li>
            ))}
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
                +91 96337 63916
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
        © {new Date().getFullYear()} Journey Junction. All Rights Reserved.
      </div>
    </footer>
  );
};

export default memo(Footer);
