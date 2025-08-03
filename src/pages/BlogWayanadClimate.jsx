// src/pages/BlogWayanadClimate.jsx
import React from "react";
import Footer from "../components/Footer";

import monsoonImage from "../assets/images/weather-effects-composition.jpg";
import winterImage from "../assets/images/vertical-shot-smoke-covering-mountain-medvednica-zagreb-croatia.jpg";
import climateMain from "../assets/images/beautiful-vertical-shot-long-mountain-peak-covered-green-grass-perfect-wallpaper.jpg";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadClimate() {
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      <article className="max-w-7xl mx-auto pt-32 px-6 lg:px-12 bg-white shadow-xl rounded-xl p-8">
        {/* Blog Header */}
        <header className="mb-12 text-center" data-aos="fade-up">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Wayanad Climate: Seasons & Best Time to Visit
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wayanad, the green paradise of Kerala, enjoys a pleasant climate
            year-round. From misty winters to lush monsoons and sunny summers,
            every season offers a unique charm for travelers.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-14" data-aos="zoom-in">
          <img
            src={climateMain}
            onError={handleImageError}
            alt="Scenic view of Wayanad hills with clouds"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Introduction */}
        <section className="text-gray-800 leading-relaxed mb-16 text-lg space-y-4">
          <p>
            Located in Kerala’s Western Ghats, Wayanad’s altitude of 700–2100
            meters gives it a cool and refreshing climate. With an average
            temperature ranging from 18°C to 29°C, it’s a year-round
            destination, though each season paints the landscape in its own
            colors.
          </p>
          <p>
            Understanding Wayanad’s climate will help you plan your trip to
            enjoy trekking, wildlife spotting, sightseeing, or simply relaxing
            amidst nature at the right time.
          </p>
        </section>

        {/* Monsoon Season */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={monsoonImage}
              onError={handleImageError}
              alt="Wayanad monsoon rains over tea plantations"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-800 leading-relaxed space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Monsoon Season (June – September)
            </h2>
            <p>
              The southwest monsoon drenches Wayanad in lush greenery, filling
              waterfalls like Meenmutty and Soochipara to their brim. Rain
              lovers and photographers find this season magical.
            </p>
            <p>
              However, heavy rains can cause landslides, so trekking routes
              might be restricted. This is an ideal time for Ayurvedic
              treatments as the cool, moist weather helps therapies work
              effectively.
            </p>
          </div>
        </div>

        {/* Winter Season */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={winterImage}
              onError={handleImageError}
              alt="Mist over Wayanad hills in winter"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-800 leading-relaxed space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Winter Season (October – February)
            </h2>
            <p>
              Winter is considered the best season to visit Wayanad. With
              temperatures dropping to 10°C in higher altitudes, mornings are
              misty and evenings are cool.
            </p>
            <p>
              Perfect for trekking to Chembra Peak, exploring Edakkal Caves, and
              enjoying campfires, this season offers clear skies and pleasant
              days.
            </p>
          </div>
        </div>

        {/* Summer Season */}
        <section className="text-lg text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Summer Season (March – May)
          </h2>
          <p>
            Summers in Wayanad are warm but not harsh, with temperatures ranging
            between 23°C and 35°C. This is the ideal time for wildlife safaris
            in Muthanga and Tholpetty, as animals gather near water sources.
          </p>
          <p>
            Evenings remain pleasant, making it suitable for sightseeing and
            short treks. Light cotton clothes and hydration are recommended.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Best Time to Visit Wayanad
          </h2>
          <p>
            October to February is widely considered the best time to visit due
            to cool weather and clear skies. Adventure seekers may also enjoy
            the monsoon’s raw beauty between June and September.
          </p>
        </section>
      </article>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-300 mt-10">
        <Footer />
      </div>
    </div>
  );
}
