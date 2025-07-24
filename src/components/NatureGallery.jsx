// Style 1: Modern Grid with Fade Animations
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import nature1 from "../assets/images/WhatsApp Image 2025-07-10 at 15.14.37.jpeg";
import nature2 from "../assets/images/WhatsApp Image 2025-07-10 at 15.17.23.jpeg";

export default function NatureGallery() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen p-6 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-900 animate-pulse">
        🌿 Nature's Tranquility
      </h1>
      <div
        className="grid md:grid-cols-2 gap-10 items-center mb-12"
        data-aos="fade-up"
      >
        <img
          src={nature1}
          alt="Lush Green Landscape"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Breathe in the Calm
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Surrounded by towering trees and whispering winds, this landscape
            invites you to pause and reconnect with the earth.
          </p>
        </div>
      </div>
      <div
        className="grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-up"
      >
        <div></div>
      </div>
    </div>
  );
}

// Style 2: Fullscreen Hero and Side-by-Side Content
// Style 3: Vertical Scroll Cards with Overlap
// Style 4: Carousel Display
// Style 5: Masonry Grid Style (Pinterest-like)

// Due to length, each style will be continued in new components or exported separately if needed.
