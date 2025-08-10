import React, { useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import msresort1 from "../assets/images/msresort1.webp";
import coffeeCounty from "../assets/images/topresortsimg2.webp";
import coffeeAcres from "../assets/images/topresortsimg33.webp";

const TopResorts = () => {
  const navigate = useNavigate();

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
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 font-[Poppins]"
      aria-labelledby="top-resorts-heading"
    >
      {/* ✅ Preconnect & preload font for faster rendering */}
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

      {/* ✅ Preload LCP images */}
      {resorts.map((resort, i) => (
        <link key={i} rel="preload" as="image" href={resort.image} />
      ))}

      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2
          id="top-resorts-heading"
          data-aos="fade-up"
          className="relative text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-wide"
        >
          Top Resorts to Explore
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-16 h-1 bg-gradient-to-r from-gray-700 via-black to-gray-700 rounded-full animate-pulse"></span>
        </h2>

        {/* Card Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {resorts.map((resort, index) => (
            <article
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 120}
              className="bg-white border border-gray-200 shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl will-change-transform rounded-md"
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
                decoding="async"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
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
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => navigate("/resorts")}
            className="bg-gray-800 text-white px-6 py-3 text-lg font-semibold rounded-full shadow-md hover:bg-gray-900 hover:shadow-xl transition-all duration-300"
            aria-label="View all resorts in Wayanad"
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(TopResorts);
