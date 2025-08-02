import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./Footer";

// ---------------- Resort Data ----------------
const luxuryResorts = [
  {
    name: "Aramb Resorts",
    images: [
      "src/assets/images/aramb1.jpeg",
      "src/assets/images/aramb2.jpeg",
      "src/assets/images/aramb3.jpeg",
    ],
    facilities: [
      "🧖 Spa & Wellness Center",
      "🌊 Ocean View Rooms",
      "🍷 Fine Dining",
      "🛥️ Yacht Access",
    ],
  },
  {
    name: "Mountain Shadows",
    images: [
      "src/assets/images/msresort1.jpg",
      "src/assets/images/msresort2.jpg",
      "src/assets/images/msresort3.jpg",
    ],
    facilities: [
      "👑 Presidential Suites",
      "🎯 Game Zone",
      "🏊 Private Pools",
      "🌇 Rooftop Bar",
    ],
  },
  {
    name: "Earthetics",
    images: [
      "src/assets/images/vythiri1.webp",
      "src/assets/images/vythiri2.webp",
      "src/assets/images/vythiri4.jpeg",
    ],
    facilities: [
      "🌄 Mountain View Cabins",
      "🔥 Fire Pit Lounge",
      "🎶 Acoustic Evenings",
      "🛌 Cozy Interiors",
    ],
  },
];

const premiumResorts = [
  {
    name: "Lords83",
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
    name: "MountXanadu",
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
    name: "Vythirimist",
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

const budgetResorts = [
  {
    name: "Coffee Acres Resort",
    images: [
      "src/assets/images/coffeacres1.jpeg",
      "src/assets/images/coffeacres1.jpeg",
      "src/assets/images/imageslider3.jpg",
    ],
    facilities: [
      "🌿 Peaceful Environment",
      "🛏️ Comfortable Rooms",
      "🚿 Hot Water Facility",
      "📶 Free Wi-Fi",
    ],
  },
  {
    name: "Seagot Resort",
    images: [
      "src/assets/images/seagot.jpeg",
      "src/assets/images/seogot3.jpeg",
      "src/assets/images/seogot2.jpeg",
    ],
    facilities: [
      "⛰️ Hill View Balcony",
      "🍳 In-House Dining",
      "🚗 Parking Space",
      "📺 TV in Every Room",
    ],
  },
  {
    name: "Safari Hills",
    images: [
      "src/assets/images/safari.jpeg",
      "src/assets/images/safari1.jpeg",
      "src/assets/images/safari2.jpeg",
    ],
    facilities: [
      "🧳 Budget Friendly Packages",
      "🌾 Local Cultural Touch",
      "🔥 Evening Campfire",
      "🥘 Homemade Food",
    ],
  },
];

const privatePoolVillas = [
  {
    name: "Peppertrail Resorts",
    images: [
      "src/assets/images/peppertrail.jpeg",
      "src/assets/images/peppertrail1.jpeg",
      "src/assets/images/peppertrail3.jpeg",
    ],
    facilities: [
      "🏊 Private Infinity Pool",
      "🌅 Sunset Deck View",
      "🔥 Firepit + BBQ Grill",
      "🛏️ 2BHK with Kitchenette",
    ],
  },
  {
    name: "Theyila Resort",
    images: [
      "src/assets/images/theyila.jpeg",
      "src/assets/images/theyila2.jpeg",
      "src/assets/images/theyila3.jpeg",
    ],
    facilities: [
      "💦 Jacuzzi with Nature View",
      "🧘 Yoga & Meditation Room",
      "🌿 Herbal Garden Access",
      "🍲 Chef-on-Call",
    ],
  },
  {
    name: "Lords83",
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
];

// ---------------- Resort Section Component ----------------
const ResortSection = ({ id, title, resorts }) => {
  const navigate = useNavigate();
  return (
    <section
      id={id}
      className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-16 scroll-mt-24"
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {resorts.map((resort, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-gray-200"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
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
                  <ul className="space-y-1 text-sm text-gray-700 mb-4">
                    {resort.facilities.map((facility, i) => (
                      <li key={i}>{facility}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => navigate("/booknow")}
                  className="mt-auto w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
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

// ---------------- Main Resorts Component ----------------
export default function Resorts() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('src/assets/images/large-pool-with-hammocks.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <div data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Resorts
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto drop-shadow mb-6">
              Discover the best handpicked resorts in Wayanad—choose from
              luxury, premium or budget experiences for your ideal getaway.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection("luxury-resorts")}
                className="bg-white/80 hover:bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold transition"
              >
                Luxury Resorts
              </button>
              <button
                onClick={() => scrollToSection("premium-resorts")}
                className="bg-white/80 hover:bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold transition"
              >
                Premium Resorts
              </button>
              <button
                onClick={() => scrollToSection("budget-resorts")}
                className="bg-white/80 hover:bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold transition"
              >
                Budget-Friendly Resorts
              </button>
              <button
                onClick={() => scrollToSection("private-pool")}
                className="bg-white/80 hover:bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold transition"
              >
                Private Pool Villas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resort Sections */}
      <ResortSection
        id="luxury-resorts"
        title="Luxury Resorts"
        resorts={luxuryResorts}
      />
      <ResortSection
        id="premium-resorts"
        title="Premium Resorts"
        resorts={premiumResorts}
      />
      <ResortSection
        id="budget-resorts"
        title="Budget-Friendly Resorts"
        resorts={budgetResorts}
      />
      <ResortSection
        id="private-pool"
        title="Private Pool Villas"
        resorts={privatePoolVillas}
      />
      <Footer />
    </>
  );
}
