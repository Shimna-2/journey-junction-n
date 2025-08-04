import React, { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import soochipara from "../assets/images/soochipara.jpeg";
import pookodelake from "../assets/images/pookodelake.jpeg";
import karapuuzha from "../assets/images/karapuuzha.jpeg";
import enooru from "../assets/images/enooru.jpeg";
import edakkal from "../assets/images/edakkal caves.jpeg";
import chembrapeak from "../assets/images/chembrapeak.jpeg";

const placeholderImg =
  "https://via.placeholder.com/600x400?text=Image+Unavailable";

const destinations = [
  { name: "Soochipara Falls", image: soochipara },
  { name: "Pookode Lake", image: pookodelake },
  { name: "Karapuzha Dam", image: karapuuzha },
  { name: "En Ooru", image: enooru },
  { name: "Edakkal Caves", image: edakkal },
  { name: "Chembra Peak", image: chembrapeak },
];

const TopDestinationsSlider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      AOS.init({
        duration: 900,
        once: true,
        easing: "ease-out-cubic",
        offset: 80,
      });
    } catch (err) {
      console.error("AOS initialization failed:", err);
    }
  }, []);

  return (
    <section
      aria-labelledby="top-destinations-heading"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-[whitesmoke] text-gray-800"
    >
      {/* Heading */}
      <h2
        id="top-destinations-heading"
        data-aos="fade-up"
        className="relative text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-10 sm:mb-12 tracking-wide"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Top Destinations in Wayanad
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-gray-700 via-black to-gray-700 rounded-full animate-pulse"></span>
      </h2>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {destinations.map((place, index) => (
          <article
            key={index}
            className="destination-card relative bg-white/90 backdrop-blur-sm shadow-lg overflow-hidden transition-transform duration-500 hover:scale-[1.03] group rounded-lg border border-gray-200"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={place.image || placeholderImg}
              alt={place.name || "Destination image"}
              loading="lazy"
              decoding="async"
              className="w-full h-56 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-500 will-change-transform"
              onError={(e) => {
                if (e.target.src !== placeholderImg) {
                  e.target.src = placeholderImg;
                }
              }}
            />
            {/* Destination Name */}
            <div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-base sm:text-lg font-semibold tracking-wide text-center px-2 place-name"
              aria-label={place.name}
            >
              {place.name}
            </div>
          </article>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate("/wayanad")}
          className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition"
        >
          Explore More
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .destination-card {
          clip-path: polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%);
        }
        .place-name {
          font-family: "Playfair Display", serif;
          background: linear-gradient(to right, #ffffff, #dcdcdc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.7);
          animation: fadeUp 0.8s ease forwards;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translate(-50%, 20px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default memo(TopDestinationsSlider);
