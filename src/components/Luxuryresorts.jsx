// Luxuryresorts.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const luxuryResorts = [
  {
    name: "The Serenity Spa Resort",
    images: [
      "src/assets/images/aramb1.jpeg",
      "src/assets/images/aramb2.jpeg",
      "src/assets/images/aramb3.jpeg",
    ],
    facilities: [
      "🧖 Full-Service Spa",
      "🍽️ Gourmet Restaurant",
      "🏊 Infinity Pool",
      "🚁 Private Helipad",
    ],
  },
  {
    name: "Azure Palace Retreat",
    images: [
      "src/assets/images/msresort1.jpg",
      "src/assets/images/msresort2.jpg",
      "src/assets/images/msresort3.jpg",
    ],
    facilities: [
      "👑 Royal Suites",
      "🍷 Private Wine Cellar",
      "🛎️ Butler Service",
      "🌉 Scenic View Balconies",
    ],
  },
  {
    name: "Emerald Cliff Resort",
    images: [
      "src/assets/images/vythiri1.webp",
      "src/assets/images/vythiri2.webp",
      "src/assets/images/vythiri4.jpeg",
    ],
    facilities: [
      "🪵 Premium Wooden Interiors",
      "🌅 Sunset Lounge",
      "🎻 Live Music Evenings",
      "🛏️ Ultra-Luxury Bedding",
    ],
  },
];

const Luxuryresorts = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Luxury Resorts
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {luxuryResorts.map((resort, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-gray-200"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="w-full h-56"
              >
                {resort.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${resort.name} ${idx + 1}`}
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {resort.name}
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {resort.facilities.map((facility, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span>{facility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Luxuryresorts;
