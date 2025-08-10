import React, { memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const promises = [
  "Luxury resorts with valley views",
  "Budget-friendly eco-stays",
  "Romantic cottages for couples",
  "Adventure trails & hidden waterfalls",
  "Camping beneath starry skies",
  "Sunrise viewpoints & nature walks",
  "Instant WhatsApp bookings",
  "24/7 guest support",
];

const JourneyJunctionPromise = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative w-full font-[Poppins] bg-gradient-to-br from-gray-200 to-gray-300 pt-0 px-4 sm:px-10">
      {/* Top upside-down wave */}
      <div
        className="w-full overflow-hidden leading-none rotate-180"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="block w-full h-20 sm:h-32"
          style={{ display: "block" }}
        >
          <path
            fill="#9ca3af"
            fillOpacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,96C1120,117,1280,171,1360,197.3L1440,224L1440,0L0,0Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col gap-3 sm:gap-6 pb-10">
        {/* Heading Section */}
        <div
          className="flex flex-col items-center gap-4 mt-6 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2
            className="relative text-4xl sm:text-5xl font-extrabold tracking-[0.15em] uppercase 
                 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent
                 drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]"
          >
            Why Choose Us?
          </h2>

          {/* Animated underline */}
          <div className="relative w-28 h-[4px] bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
          </div>
        </div>

        <style>
          {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          `}
        </style>

        {/* Cards */}
        <div
          className="grid gap-3 sm:gap-6 sm:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {promises.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={400 + index * 120}
              className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 sm:p-5 rounded-xl shadow-lg border-l-4 border-gray-900 hover:scale-[1.02] transition-all duration-300 flex items-center gap-3 sm:gap-4"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white font-bold shadow-md">
                ✓
              </div>
              <p className="text-base sm:text-lg text-gray-900 font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(JourneyJunctionPromise);
