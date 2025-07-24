import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Wayanad() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
    <div className="bg-gradient-to-r from-white-50 to-white-100 text-gray-800 font-sans">
      {/* Header / Hero Section */}
      <section
        className="relative h-[480px] md:h-[600px] w-full shadow-md mb-10 overflow-hidden"
        data-aos="fade-down"
      >
        <img
          src="src/assets/images/beautiful-strawberry-garden-sunrise-doi-ang-khang-chiang-mai-thailand (1).jpg"
          alt="Wayanad Scenic View"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Glassmorphism Overview Section Overlay */}

        {/* Glassmorphism Overview Section - Bottom of the image */}
        <div className="absolute bottom-6 left-1/2 w-11/12 md:w-3/4 lg:w-2/3 transform -translate-x-1/2 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 rounded-2xl shadow-xl p-6 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow">
            🌄 Overview
          </h2>
          <p className="text-sm md:text-base leading-relaxed drop-shadow">
            Wayanad is one of the districts in Kerala that has been able to
            retain its pristine nature. Hidden away in the hills of this land
            are some of the oldest tribes, as yet untouched by civilization.
            Wayanad is known for its picturesque mist-clad hill stations,
            sprawling spice plantations, luxuriant forest and rich cultural
            traditions.
          </p>
          <p className="text-sm md:text-base font-medium mt-3 drop-shadow">
            <strong>Altitude:</strong> 700 – 2100 m above sea level <br />
            <strong>Area:</strong> 2132 sq.km
          </p>
        </div>
      </section>

      {/* Tourist Map Section */}
      <section
        className="max-w-6xl mx-auto px-6 py-10 bg-gray-100 rounded-2xl shadow-md mb-10"
        data-aos="fade-up"
      >
        <h2 className="text-xl font-bold mb-6 text-center text-green-800">
          🗺 Tourist Map
        </h2>
        <div className="flex justify-center">
          <img
            src="src/assets/images/wayanad.jpg"
            alt="Tourist Map"
            className="w-full max-w-3xl rounded-xl shadow-lg border"
          />
        </div>
      </section>

      {/* Distance Chart + Entry Timings */}
      <section
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12 bg-white rounded-2xl shadow-lg mb-10"
        data-aos="fade-up"
      >
        {/* Distance Chart */}
        <div>
          <h2 className="text-xl font-bold text-center mb-2">
            📏 Distance Chart
          </h2>
          <p className="text-xs text-center italic text-gray-500 mb-4">
            (KPA: Kalpetta, SBY: Sulthan Bathery, MDY: Mananthavady)
          </p>
          <table className="w-full text-sm border border-gray-300 text-gray-800 bg-white shadow-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="border px-4 py-2">Tourist Places</th>
                <th className="border px-4 py-2">KPA</th>
                <th className="border px-4 py-2">SBY</th>
                <th className="border px-4 py-2">MDY</th>
              </tr>
            </thead>
            <tbody>
              {distanceData.map(([place, kpa, sby, mdy]) => (
                <tr key={place}>
                  <td className="border px-4 py-2">{place}</td>
                  <td className="border px-4 py-2 text-center">{kpa} KM</td>
                  <td className="border px-4 py-2 text-center">{sby} KM</td>
                  <td className="border px-4 py-2 text-center">{mdy} KM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Entry Timings */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-center mb-4">
            ⏰ Entry Timings
          </h2>
          <ul className="text-sm text-gray-700 space-y-3 bg-gray-50 p-6 rounded-xl shadow-inner w-full max-w-md">
            {entryTimings.map((timing, idx) => (
              <li key={idx}>• {timing}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Places to Visit */}
      {/* Tourist Attractions */}
      <section className="bg-gray-200 shadow-md rounded-2xl p-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-rose-900 mb-6 text-center">
          🏞 Places to Visit in Wayanad
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-gray-800 text-sm">
          {/* Block 1: Kalpetta & Sulthan Bathery */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-green-800 mb-3 text-lg">
              📍 Kalpetta Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Chembra Peak:</strong> Ideal for trekking (2100m)
              </li>
              <li>
                <strong>Soochipara Waterfalls:</strong> 100–200 ft tall, great
                for a dip
              </li>
              <li>
                <strong>Meenmutty Waterfalls:</strong> 3-tiered 400m fall via
                jungle trek
              </li>
              <li>
                <strong>Kanthanpara Waterfalls:</strong> 30m high, serene and
                picnic-friendly
              </li>
              <li>
                <strong>Sunrise Valley:</strong> Panoramic sunrise/sunset views
              </li>
            </ul>

            <h3 className="font-bold text-green-800 mt-6 mb-3 text-lg">
              📍 Sulthan Bathery Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ambalavayal Museum:</strong> Tribal heritage &
                archaeology
              </li>
              <li>
                <strong>Edakkal Caves:</strong> Stone Age carvings, 1 km trek
              </li>
              <li>
                <strong>Phantom Rock:</strong> Rock shaped like a human skull
              </li>
              <li>
                <strong>Jain Temple:</strong> Historic site used by Tipu
                Sultan’s army
              </li>
              <li>
                <strong>Muthanga Sanctuary:</strong> Wildlife haven in Nilgiri
                Biosphere
              </li>
            </ul>
            <p className="text-red-600 text-xs mt-2">
              🔒 Holidays: All Mondays, Jan 26, May 1, Aug 15, Thiruvonam, Oct 2
            </p>
          </div>

          {/* Block 2: Mananthavady & Vythiri */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h3 className="font-bold text-green-800 mb-3 text-lg">
              📍 Mananthavady Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Kuruva Dweep:</strong> 950-acre island for nature lovers
              </li>
              <li>
                <strong>Thirunelly Temple:</strong> Historic temple with
                riverside setting
              </li>
              <li>
                <strong>Pakshipathalam:</strong> Trekking & birdwatching site
              </li>
              <li>
                <strong>Pazhassi Tomb:</strong> Memorial of freedom fighter
                Pazhassi Raja
              </li>
              <li>
                <strong>Korome Mosque:</strong> 300-year-old wooden mosque
              </li>
            </ul>

            <h3 className="font-bold text-green-800 mt-6 mb-3 text-lg">
              📍 Vythiri Region
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Lakkidi:</strong> Misty hill station with lush forests
              </li>
              <li>
                <strong>Pookode Lake:</strong> Freshwater lake with boating and
                park
              </li>
              <li>
                <strong>Banasura Sagar Dam:</strong> Largest earthen dam,
                trekking spot
              </li>
              <li>
                <strong>Karlad Lake:</strong> Adventure activities in a peaceful
                setting
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
