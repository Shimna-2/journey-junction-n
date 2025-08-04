import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

// Import images for Vercel compatibility
import heroImg from "../assets/images/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand (1).jpg";
import wayanadMap from "../assets/images/wayanad.jpg";

export default function Wayanad() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const distanceData = [
    ["Banasura Sagar Dam", 23, 46, 26],
    ["Chain Tree", 14, 36, 50],
    ["Chembra Peak", 17, 42, 56],
    ["Edakkal Cave", 28, 13, 45],
    ["Jain Temple", 28, 11, 44],
    ["Karlad Lake", 16, 41, 14],
    ["Karappuzha Dam", 16, 41, 25],
    ["Kanthanpara Waterfalls", 16, 35, 28],
    ["Korome Mosque", 47, 61, 14],
    ["Kuruva Island", 40, 52, 23],
    ["Lakkidi View Point", 15, 39, 50],
    ["Meenmutty Waterfalls", 29, 28, 64],
    ["Muthanga Wildlife Sanctuary", 41, 15, 58],
    ["Neelimala View Point", 27, 25, 61],
    ["Pazhassi Tomb", 35, 44, 11],
    ["Pakshipathalam", 70, 75, 35],
    ["Pookode Lake", 13, 33, 47],
    ["Soochipara Waterfalls", 22, 46, 58],
    ["Sunrise Valley", 22, 33, 57],
    ["Thirunelly Temple", 64, 70, 31],
    ["Tholpetty Wildlife Sanctuary", 55, 65, 25],
  ];

  const entryTimings = [
    "Pookode Lake: 9.00 AM - 5.30 PM",
    "Soojipara Waterfalls: 8.00 AM - 5.00 PM",
    "Chembra Peak (trekking): 7.00 AM - 2.00 PM",
    "Meenmutty Waterfalls: 10.00 AM - 5.00 PM",
    "Banasura Sagar Dam: 8.30 AM - 5.00 PM",
    "Karlad Lake: 8.00 AM - 4.00 PM",
    "Edakkal Cave: 9.00 AM - 4.00 PM",
    "Pazhassi Tomb: 9.00 AM - 5.00 PM",
    "Muthanga Wildlife Sanctuary: 7.00 AM - 5.00 PM, 3.00 PM - 5.00 PM",
    "Tholpetty Wildlife Sanctuary: 7.00 AM - 5.00 PM, 3.00 PM - 5.00 PM",
    "Jain Temple Bathery: 9.00 AM - 12.00 AM, 2.00 PM - 6.00 PM",
    "Ambalavayal Museum: 10.00 AM - 5.00 PM",
    "Karappuzha Dam: 9.00 AM - 5.30 PM",
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[480px] md:h-[600px] w-full mb-10 overflow-hidden"
        style={{ fontFamily: "'Playfair Display', serif" }}
        data-aos="fade-down"
      >
        <img
          src={heroImg}
          alt="Wayanad Scenic View"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-1/2 w-11/12 md:w-3/4 lg:w-2/3 transform -translate-x-1/2 bg-black bg-opacity-60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 text-white text-center">
          <p className="text-sm md:text-base leading-relaxed font-light">
            Wayanad is one of the districts in Kerala that has been able to
            retain its pristine nature. Hidden away in the hills of this land
            are some of the oldest tribes, as yet untouched by civilization.
          </p>
          <p className="text-sm md:text-base font-semibold mt-3">
            <strong>Altitude:</strong> 700 – 2100 m above sea level <br />
            <strong>Area:</strong> 2132 sq.km
          </p>
        </div>
      </section>

      {/* Tourist Map */}
      <section
        className="max-w-6xl mx-auto px-6 py-10 bg-white rounded-2xl shadow-md mb-10"
        data-aos="zoom-in"
      >
        <h2
          className="text-3xl font-bold text-center mb-6 tracking-wide"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(to right, #1f2937, #6b7280)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          🗺 Tourist Map
        </h2>
        <div className="flex justify-center">
          <img
            src={wayanadMap}
            alt="Tourist Map"
            className="w-full max-w-3xl rounded-xl shadow-lg border border-gray-300 transform hover:scale-105 transition duration-500"
          />
        </div>
      </section>

      {/* Distance Chart & Entry Timings */}
      <section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12 bg-white rounded-2xl shadow-md mb-10"
        data-aos="fade-up"
      >
        {/* Distance Chart */}
        <div>
          <h2
            className="text-2xl font-bold text-center mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#374151",
            }}
          >
            📏 Distance Chart
          </h2>
          <p className="text-xs text-center italic text-gray-500 mb-4">
            (KPA: Kalpetta, SBY: Sulthan Bathery, MDY: Mananthavady)
          </p>
          <table className="w-full text-sm border border-gray-300 text-gray-800">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Tourist Places
                </th>
                <th className="border border-gray-300 px-4 py-2">KPA</th>
                <th className="border border-gray-300 px-4 py-2">SBY</th>
                <th className="border border-gray-300 px-4 py-2">MDY</th>
              </tr>
            </thead>
            <tbody>
              {distanceData.map(([place, kpa, sby, mdy], idx) => (
                <tr
                  key={place}
                  className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-gray-300 px-4 py-2">{place}</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {kpa} KM
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {sby} KM
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {mdy} KM
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Entry Timings */}
        <div>
          <h2
            className="text-2xl font-bold text-center mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#374151",
            }}
          >
            ⏰ Entry Timings
          </h2>
          <ul className="text-sm space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
            {entryTimings.map((timing, idx) => (
              <li
                key={idx}
                className="hover:text-gray-900 transition duration-300"
              >
                {timing}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Places to Visit */}
      <section
        className="bg-white shadow-md rounded-2xl p-6 max-w-6xl mx-auto mb-10"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl font-bold text-center mb-6 tracking-wide"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(to right, #1f2937, #6b7280)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          🏞 Places to Visit in Wayanad
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
          {/* Kalpetta Region */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl shadow-lg border-l-4 border-gray-500 hover:scale-[1.01] transition"
            data-aos="zoom-in"
          >
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              📍 Kalpetta Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Chembra Peak: Ideal for trekking (2100m)</li>
              <li>Soochipara Waterfalls: 100–200 ft tall</li>
              <li>Meenmutty Waterfalls: 3-tiered fall</li>
              <li>Kanthanpara Waterfalls: 30m high</li>
              <li>Sunrise Valley: Scenic views</li>
            </ul>
          </div>

          {/* Sulthan Bathery Region */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl shadow-lg border-l-4 border-gray-500 hover:scale-[1.01] transition"
            data-aos="zoom-in"
          >
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              📍 Sulthan Bathery Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ambalavayal Museum: Tribal heritage</li>
              <li>Edakkal Caves: Stone Age carvings</li>
              <li>Phantom Rock: Skull-shaped rock</li>
              <li>Jain Temple: Historic site</li>
              <li>Muthanga Sanctuary: Wildlife</li>
            </ul>
          </div>

          {/* Mananthavady Region */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl shadow-lg border-l-4 border-gray-500 hover:scale-[1.01] transition"
            data-aos="zoom-in"
          >
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              📍 Mananthavady Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Kuruva Dweep: Island for nature lovers</li>
              <li>Thirunelly Temple: Riverside temple</li>
              <li>Pakshipathalam: Trekking & birds</li>
              <li>Pazhassi Tomb: Freedom fighter memorial</li>
              <li>Korome Mosque: Wooden mosque</li>
            </ul>
          </div>

          {/* Vythiri Region */}
          <div
            className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl shadow-lg border-l-4 border-gray-500 hover:scale-[1.01] transition"
            data-aos="zoom-in-up"
          >
            <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              📍 Vythiri Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Lakkidi: Misty hill station</li>
              <li>Pookode Lake: Boating & park</li>
              <li>Banasura Sagar Dam: Largest earthen dam</li>
              <li>Karlad Lake: Adventure activities</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
