import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const luxuryResorts = [
  {
    name: "The Serenity Spa Resort",
    images: [
      "src/assets/images/Lords83.jpeg",
      "src/assets/images/lords831.jpeg",
      "src/assets/images/lords834.jpeg",
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
      "src/assets/images/mountx.jpeg",
      "src/assets/images/mountx1.jpeg",
      "src/assets/images/mountx3.jpeg",
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
      "src/assets/images/vythirimist.jpeg",
      "src/assets/images/vythirimist2.jpeg",
      "src/assets/images/vythirimit1.jpeg",
    ],
    facilities: [
      "🪵 Premium Wooden Interiors",
      "🌅 Sunset Lounge",
      "🎻 Live Music Evenings",
      "🛏️ Ultra-Luxury Bedding",
    ],
  },
];

const Premiumresorts = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Premium Resorts
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {luxuryResorts.map((resort, index) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-gray-200"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
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
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {resort.name}
                  </h4>
                  {/* Optional: show facilities */}
                  {/* <ul className="space-y-2 text-sm text-gray-700 mb-4">
                    {resort.facilities.map((facility, i) => (
                      <li key={i}>{facility}</li>
                    ))}
                  </ul> */}
                </div>
                <button
                  onClick={() => navigate("/booknow")}
                  className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premiumresorts;
