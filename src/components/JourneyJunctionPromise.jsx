import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ThreeBackground from "./ThreeBackground";

const promises = [
  "Luxury resorts with valley views 🌄",
  "Budget-friendly eco-stays 🏡",
  "Romantic cottages for couples 💑",
  "Adventure trails & waterfalls 🥾",
  "Camping beneath starry skies ✨",
  "Instant WhatsApp bookings 📲",
  "24/7 guest support ☎️",
  "Local spice garden tours 🌿",
];

const JourneyJunctionPromise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 py-20 overflow-hidden">
      {/* 🔮 3D Background */}

      <div className="relative z-10 max-w-5xl text-center mb-12">
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Why Choose Journey Junction?
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          Your trusted gateway to Wayanad’s untouched beauty. We combine luxury,
          authenticity, and ease — all curated for your perfect escape.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {promises.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 backdrop-blur-sm p-5 rounded-2xl flex items-center gap-4 transition hover:scale-[1.03] duration-300"
          >
            <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
              <FaCheckCircle className="text-lg" />
            </div>
            <p className="text-white text-base sm:text-lg">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyJunctionPromise;
