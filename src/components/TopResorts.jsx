import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import AOS from "aos";
import "aos/dist/aos.css";

// Import images for Vercel build compatibility
import msresort1 from "../assets/images/msresort1.jpg";
import coffeeCounty from "../assets/images/IMG_20250708_071350.jpg";
import coffeeAcres from "../assets/images/IMG-20250701-WA0035.jpg";

const TopResorts = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  const resorts = [
    {
      image: msresort1,
      category: "Best Luxury Resort",
      name: "Mountain Shadows",
    },
    {
      image: coffeeCounty,
      category: "Best Premium Resort",
      name: "Coffee County",
    },
    {
      image: coffeeAcres,
      category: "Budget Friendly Resort",
      name: "Coffee Acres",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="relative text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mb-12 tracking-wide animate-gradient"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Top Resorts to Explore
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-gray-700 via-black to-gray-700 rounded-full animate-pulse"></span>
        </h2>

        {/* Card Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {resorts.map((resort, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-white border border-gray-200 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
              style={{
                clipPath:
                  "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)",
              }}
            >
              {/* Image */}
              <img
                src={resort.image}
                alt={resort.name}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Info */}
              <div className="p-5 text-center bg-white">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-2">
                  {resort.category}
                </p>
                <h3 className="text-lg font-bold text-gray-800">
                  {resort.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/resorts")} // ✅ Navigate to Resorts Page
            className="bg-gray-800 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-gray-900 hover:shadow-xl transition-all duration-300"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap");

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TopResorts;
