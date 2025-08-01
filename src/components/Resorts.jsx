import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./Footer";

// ✅ Import images so Vercel can bundle them
import aramb1 from "../assets/images/aramb1.jpeg";
import aramb2 from "../assets/images/aramb2.jpeg";
import aramb3 from "../assets/images/aramb3.jpeg";

import msresort1 from "../assets/images/msresort1.jpg";
import msresort2 from "../assets/images/msresort2.jpg";
import msresort3 from "../assets/images/msresort3.jpg";

import vythiri1 from "../assets/images/vythiri1.webp";
import vythiri2 from "../assets/images/vythiri2.webp";
import vythiri4 from "../assets/images/vythiri4.jpeg";

import lords83 from "../assets/images/Lords83.jpeg";
import lords831 from "../assets/images/lords831.jpeg";
import lords834 from "../assets/images/lords834.jpeg";

import mountx from "../assets/images/mountx.jpeg";
import mountx1 from "../assets/images/mountx1.jpeg";
import mountx3 from "../assets/images/mountx3.jpeg";

import vythirimist from "../assets/images/vythirimist.jpeg";
import vythirimist2 from "../assets/images/vythirimist2.jpeg";
import vythirimit1 from "../assets/images/vythirimit1.jpeg";

import coffeeacres1 from "../assets/images/coffeacres1.jpeg";
import imageslider3 from "../assets/images/imageslider3.jpg";

import seagot from "../assets/images/seagot.jpeg";
import seogot3 from "../assets/images/seogot3.jpeg";
import seogot2 from "../assets/images/seogot2.jpeg";

import safari from "../assets/images/safari.jpeg";
import safari1 from "../assets/images/safari1.jpeg";
import safari2 from "../assets/images/safari2.jpeg";

import peppertrail from "../assets/images/peppertrail.jpeg";
import peppertrail1 from "../assets/images/peppertrail1.jpeg";
import peppertrail3 from "../assets/images/peppertrail3.jpeg";

import theyila from "../assets/images/theyila.jpeg";
import theyila2 from "../assets/images/theyila2.jpeg";
import theyila3 from "../assets/images/theyila3.jpeg";

import heroImage from "../assets/images/large-pool-with-hammocks.jpg";

// ---------------- Resort Data ----------------
const luxuryResorts = [
  {
    name: "Aramb Resorts",
    images: [aramb1, aramb2, aramb3],
    facilities: [
      "🧖 Spa & Wellness Center",
      "🌊 Ocean View Rooms",
      "🍷 Fine Dining",
      "🛥️ Yacht Access",
    ],
  },
  {
    name: "Mountain Shadows",
    images: [msresort1, msresort2, msresort3],
    facilities: [
      "👑 Presidential Suites",
      "🎯 Game Zone",
      "🏊 Private Pools",
      "🌇 Rooftop Bar",
    ],
  },
  {
    name: "Earthetics",
    images: [vythiri1, vythiri2, vythiri4],
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
    images: [lords83, lords831, lords834],
    facilities: [
      "🧖 Full-Service Spa",
      "🍽️ Gourmet Restaurant",
      "🏊 Infinity Pool",
      "🚁 Private Helipad",
    ],
  },
  {
    name: "MountXanadu",
    images: [mountx, mountx1, mountx3],
    facilities: [
      "👑 Royal Suites",
      "🍷 Private Wine Cellar",
      "🛎️ Butler Service",
      "🌉 Scenic View Balconies",
    ],
  },
  {
    name: "Vythirimist",
    images: [vythirimist, vythirimist2, vythirimit1],
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
    images: [coffeeacres1, coffeeacres1, imageslider3],
    facilities: [
      "🌿 Peaceful Environment",
      "🛏️ Comfortable Rooms",
      "🚿 Hot Water Facility",
      "📶 Free Wi-Fi",
    ],
  },
  {
    name: "Seagot Resort",
    images: [seagot, seogot3, seogot2],
    facilities: [
      "⛰️ Hill View Balcony",
      "🍳 In-House Dining",
      "🚗 Parking Space",
      "📺 TV in Every Room",
    ],
  },
  {
    name: "Safari Hills",
    images: [safari, safari1, safari2],
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
    images: [peppertrail, peppertrail1, peppertrail3],
    facilities: [
      "🏊 Private Infinity Pool",
      "🌅 Sunset Deck View",
      "🔥 Firepit + BBQ Grill",
      "🛏️ 2BHK with Kitchenette",
    ],
  },
  {
    name: "Theyila Resort",
    images: [theyila, theyila2, theyila3],
    facilities: [
      "💦 Jacuzzi with Nature View",
      "🧘 Yoga & Meditation Room",
      "🌿 Herbal Garden Access",
      "🍲 Chef-on-Call",
    ],
  },
  {
    name: "Lords83",
    images: [lords83, lords831, lords834],
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
          backgroundImage: `url(${heroImage})`,
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
