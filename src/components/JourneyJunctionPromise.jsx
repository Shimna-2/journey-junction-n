// src/components/JourneyJunctionPromise.jsx
import React, { memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const promises = [
  "Luxury resorts with valley views",
  "Budget-friendly eco-stays",
  "Romantic cottages for couples",
  "Adventure trails & waterfalls",
  "Camping beneath starry skies",
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
    <section className="w-full font-[Poppins] bg-gradient-to-br from-gray-200 to-gray-300 py-10 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:gap-6">
        {promises.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 120}
            className="promise-card relative rounded-xl px-5 py-3 flex items-center gap-4 shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] bg-white/90 backdrop-blur-md border border-gray-200"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-white font-bold shadow">
              ✓
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-800">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(JourneyJunctionPromise);
