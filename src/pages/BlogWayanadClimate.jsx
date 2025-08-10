// src/pages/BlogWayanadClimate.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

// Import images
import climateImg2 from "../assets/images/blgclimate.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadClimate() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdfaf8] w-full font-sans">
      <article
        className="max-w-7xl mx-auto pt-20 sm:pt-28 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-6 sm:p-8"
        role="article"
        aria-label="Detailed guide on Wayanad's climate and best travel seasons"
      >
        {/* Back arrow button */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="flex items-center text-gray-700 hover:text-gray-900 mb-6 space-x-2"
          type="button"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span className="text-sm sm:text-base font-medium">Back</span>
        </button>

        {/* Header */}
        <header className="mb-8 text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Wayanad Climate – Year-Round Weather Guide to Kerala’s Highlands
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            The <strong>climate of Wayanad</strong> offers cool breezes,
            mist-covered hills, and lush greenery. Known for its moderate
            weather throughout the year, it’s a paradise for{" "}
            <em>nature lovers</em>, <em>trekkers</em>, and <em>eco-tourists</em>
            .
          </p>
        </header>

        {/* Main Image */}

        {/* Intro */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10 space-y-3">
          <p>
            Nestled in the <strong>Western Ghats</strong>, Wayanad enjoys a
            unique climate that supports its biodiversity, sprawling tea
            estates, and rich agricultural heritage. Its altitude keeps it
            pleasantly cooler than the tropical lowlands of Kerala.
          </p>
          <p>
            This hill station is ideal for <strong>year-round tourism</strong>,
            offering monsoon magic, winter chills, and summer retreats away from
            the city hustle.
          </p>
        </section>

        {/* Seasonal Climate Overview */}
        <section className="grid md:grid-cols-2 gap-6 mb-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              Seasonal Climate Overview
            </h2>
            <p className="mt-3">
              Wayanad has three main seasons: cool winter (Oct–Feb), refreshing
              summer (Mar–May), and lush monsoon (Jun–Sep). Each season
              transforms the landscape beautifully.
            </p>
            <p className="mt-3">
              Winters see misty mornings with temperatures around 10°C in
              high-altitude areas, while summers rarely exceed 32°C. Monsoon
              turns Wayanad into a lush paradise with gushing waterfalls and
              green valleys.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={climateImg2}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Wayanad seasonal changes with misty hills and vibrant greenery"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Best Time to Visit */}
        <section className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold">
            Best Time to Visit Wayanad
          </h2>
          <p className="mt-3">
            The best time for trekking and sightseeing is Oct–Feb, with pleasant
            weather and clear skies.
          </p>
          <p className="mt-3">
            Monsoon lovers can visit Jun–Sep for rain-washed scenery and misty
            landscapes, but should be ready for heavy showers.
          </p>
        </section>

        {/* Climate Impact on Lifestyle */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Impact on Lifestyle & Agriculture
          </h2>
          <p>
            Wayanad’s mild climate supports crops like pepper, coffee, tea, and
            cardamom. Seasonal weather dictates harvest festivals and local
            traditions.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Cultural & Tourism Influence
          </h2>
          <p>
            The pleasant weather encourages eco-tourism, trekking, and
            photography. It also influences Wayanad’s architecture, cuisine, and
            festivals.
          </p>
        </section>

        {/* Travel Tips */}
        <section className="mt-8 text-base sm:text-lg text-gray-700 leading-relaxed space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            Travel Tips for Wayanad Weather
          </h2>
          <p>
            Carry light woolens in winter, rain gear during monsoon, and cottons
            in summer. Check weather updates before visiting waterfalls or
            trekking in rainy months.
          </p>
          <p>
            Experiencing Wayanad’s climate is like stepping into a live
            postcard—whether it’s winter mist, summer breeze, or monsoon rain.
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
