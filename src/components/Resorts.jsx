import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../assets/images/resortsbg.jpg";

import {
  FaHeart,
  FaCrown,
  FaGem,
  FaWallet,
  FaSwimmingPool,
} from "react-icons/fa";

const resortCategories = [
  {
    title: "Honeymoon Resorts",
    desc: "A romantic escape nestled in nature — ideal for couples seeking peace, cozy stays, and unforgettable moments with curated experiences and scenic views.",
    path: "/honeymoon-resorts",
    icon: <FaHeart className="text-pink-400 text-3xl" />,
  },
  {
    title: "Luxury Resorts",
    desc: "Unparalleled comfort with world-class service, spa indulgence, and fine-dining — crafted for those who seek nothing but the best.",
    path: "/luxury-resorts",
    icon: <FaCrown className="text-yellow-400 text-3xl" />,
  },
  {
    title: "Premium Resorts",
    desc: "Stylish, nature-inspired getaways offering elevated experiences with modern comforts. Ideal for small groups and solo travelers.",
    path: "/premium-resorts",
    icon: <FaGem className="text-indigo-300 text-3xl" />,
  },
  {
    title: "Budget Friendly Resorts",
    desc: "Affordable, clean, and cozy stays. Perfect for value-conscious travelers seeking comfort without compromise.",
    path: "/budget-friendly-resorts",
    icon: <FaWallet className="text-green-400 text-3xl" />,
  },
  {
    title: "Private Pool Villas",
    desc: "Luxurious villas featuring private pools, lush surroundings, and exclusive privacy — perfect for families and romantic hideaways.",
    path: "/private-pool-villas",
    icon: <FaSwimmingPool className="text-cyan-300 text-3xl" />,
  },
];

export default function Resorts() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative min-h-screen py-20 px-6 md:px-16 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight"
          data-aos="fade-up"
        >
          Explore Our Handpicked Resorts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-items-center">
          {resortCategories.map((resort, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              className="w-full max-w-xs h-full group relative bg-white/20 text-white rounded-3xl p-6 backdrop-blur-xl shadow-2xl border border-white/30 hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 rounded-3xl transition duration-500 ease-in-out"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col justify-between h-full text-center gap-4">
                <div className="flex flex-col items-center gap-4">
                  {resort.icon}
                  <h3 className="text-xl font-bold">{resort.title}</h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {resort.desc}
                  </p>
                </div>
                <button
                  onClick={() => navigate(resort.path)}
                  className="mt-4 w-full py-2 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
