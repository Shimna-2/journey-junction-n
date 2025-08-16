import React, { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";

// Images (webp for better compression)
import heroImg from "../assets/images/wyndbanner.webp";
import wayanadMap from "../assets/images/wayanadmapimg.webp";

const Wayanad = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
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
    "Jain Temple Bathery: 9.00 AM - 12.00 PM, 2.00 PM - 6.00 PM",
    "Ambalavayal Museum: 10.00 AM - 5.00 PM",
    "Karappuzha Dam: 9.00 AM - 5.30 PM",
  ];

  const regions = [
    {
      title: "📍 Kalpetta Region",
      places: [
        "Chembra Peak: Ideal for trekking (2100m)",
        "Soochipara Waterfalls: 100–200 ft tall",
        "Meenmutty Waterfalls: 3-tiered fall",
        "Kanthanpara Waterfalls: 30m high",
        "Sunrise Valley: Scenic views",
      ],
    },
    {
      title: "📍 Sulthan Bathery Region",
      places: [
        "Ambalavayal Museum: Tribal heritage",
        "Edakkal Caves: Stone Age carvings",
        "Phantom Rock: Skull-shaped rock",
        "Jain Temple: Historic site",
        "Muthanga Sanctuary: Wildlife",
      ],
    },
    {
      title: "📍 Mananthavady Region",
      places: [
        "Kuruva Dweep: Island for nature lovers",
        "Thirunelly Temple: Riverside temple",
        "Pakshipathalam: Trekking & birds",
        "Pazhassi Tomb: Freedom fighter memorial",
        "Korome Mosque: Wooden mosque",
      ],
    },
    {
      title: "📍 Vythiri Region",
      places: [
        "Lakkidi: Misty hill station",
        "Pookode Lake: Boating & park",
        "Banasura Sagar Dam: Largest earthen dam",
        "Karlad Lake: Adventure activities",
      ],
    },
  ];

  return (
    <>
      {/* ✅ Preload Fonts & Images */}
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
      <link rel="preload" as="image" href={heroImg} />
      <link rel="preload" as="image" href={wayanadMap} />

      <div className="bg-gray-50 text-gray-800 font-[Poppins]">
        {/* Hero Section */}
        <section
          className="relative h-[480px] md:h-[600px] w-full mb-10 overflow-hidden"
          data-aos="fade-down"
        >
          <img
            src={heroImg}
            alt="Wayanad Scenic View"
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-1/2 w-11/12 md:w-3/4 lg:w-2/3 transform -translate-x-1/2 bg-black/60 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg p-6 text-white text-center">
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
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
            🗺 Tourist Map
          </h2>
          <div className="flex justify-center">
            <img
              src={wayanadMap}
              alt="Tourist Map"
              loading="lazy"
              decoding="async"
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
          <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
              📏 Distance Chart
            </h2>
            <p className="text-xs text-center italic text-gray-500 mb-4">
              (KPA: Kalpetta, SBY: Sulthan Bathery, MDY: Mananthavady)
            </p>
            <table className="min-w-[480px] sm:min-w-full text-sm border border-gray-300 text-gray-800">
              <thead className="bg-gray-200">
                <tr>
                  {["Tourist Places", "KPA", "SBY", "MDY"].map((head) => (
                    <th
                      key={head}
                      className="border border-gray-300 px-4 py-2 text-center"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {distanceData.map(([place, kpa, sby, mdy], idx) => (
                  <tr
                    key={place}
                    className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-300 px-4 py-2">
                      {place}
                    </td>
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
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
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
          <h2 className="text-3xl font-bold text-center mb-6 tracking-wide bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
            🏞 Places to Visit in Wayanad
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm">
            {regions.map((region, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 rounded-xl shadow-lg border-l-4 border-gray-500 hover:scale-[1.01] transition"
                data-aos="zoom-in"
              >
                <h3 className="font-semibold text-base">{region.title}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {region.places.map((place, i) => (
                    <li key={i}>{place}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default memo(Wayanad);
