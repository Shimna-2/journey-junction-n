import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import soochipara from "../assets/images/soochipara.jpeg";
import pookodelake from "../assets/images/pookodelake.jpeg";
import karapuuzha from "../assets/images/karapuuzha.jpeg";
import enooru from "../assets/images/enooru.jpeg";
import edakkal from "../assets/images/edakkal caves.jpeg";
import chembrapeak from "../assets/images/chembrapeak.jpeg";
import bgdes1 from "../assets/images/bgdes1.jpeg"; // background image

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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-6 min-h-screen font-sans bg-cover bg-center bg-fixed relative text-white">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0" />

      <div className="relative z-10">
        <h2
          className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg"
          data-aos="fade-up"
        >
          🌄 Top Destinations in Wayanad
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden bg-white bg-opacity-90 shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:rotate-[0.5deg] hover:shadow-green-200 hover:shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-72 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-lg font-semibold p-4 backdrop-blur-sm">
                {place.name}
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <button
            onClick={() => navigate("/wayanad")}
            className="bg-green-600 hover:bg-green-700 transition-all text-white px-6 py-3 text-lg font-semibold rounded-full shadow-lg"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinationsSlider;
