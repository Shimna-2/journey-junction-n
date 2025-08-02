// src/pages/BlogWayanadClimate.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

import climate1 from "../assets/images/beautiful-sun-shining-across-mountains (1).jpg";
import climate2 from "../assets/images/landscape-south-africa-countryside-nature-earth (1).jpg";
import climate3 from "../assets/images/back-view-girl-umbrella-walk-forest-near-lake-rainy-weather (1).jpg";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadClimate() {
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Wayanad Climate | Weather Guide, Seasons & Travel Tips</title>
        <meta
          name="description"
          content="Discover Wayanad's year-round weather — from misty winters and breezy summers to refreshing monsoons. Learn the best time to visit, seasonal activities, and travel tips."
        />
        <meta
          name="keywords"
          content="Wayanad climate, Wayanad weather, best time to visit Wayanad, Wayanad monsoon, Wayanad temperature, Wayanad winter season, Wayanad summer weather, Wayanad Kerala travel guide"
        />
        <meta name="author" content="Journey Junction" />
      </Helmet>

      {/* Blog Article */}
      <article className="max-w-7xl mx-auto pt-32 px-6 lg:px-12 bg-white shadow-xl rounded-xl p-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Wayanad Climate – Misty Hills & Serene Seasons in Kerala’s Highlands
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nestled in the lush embrace of the Western Ghats, Wayanad is known
            for its cool breezes, mist-clad mornings, and breathtaking scenery.
            Whether you visit in summer, winter, or monsoon, Wayanad’s weather
            creates the perfect backdrop for adventure and relaxation.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-14">
          <img
            src={climate1}
            onError={handleImageError}
            alt="Wayanad Misty Hills"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Introduction */}
        <section className="text-lg text-gray-800 leading-relaxed mb-16 space-y-4">
          <p>
            Wayanad enjoys a tropical highland climate with temperatures ranging
            between <strong>15°C to 30°C</strong> year-round. Perched at an
            elevation of 700–2100 meters, it offers a refreshing escape from
            Kerala’s coastal heat, with hills, forests, and waterfalls adding to
            the charm.
          </p>
          <p>
            The district experiences three main seasons — winter, summer, and
            monsoon — each bringing its own charm for travelers and nature
            lovers.
          </p>
        </section>

        {/* Two Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <img
            src={climate2}
            onError={handleImageError}
            alt="Misty Morning in Wayanad"
            className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
          />
          <img
            src={climate3}
            onError={handleImageError}
            alt="Rainy Season in Wayanad"
            className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        {/* Main Sections */}
        <section className="text-lg text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold">Winter (November to February)</h2>
          <p>
            Winter is the peak season for tourism in Wayanad. Temperatures range
            between 15°C and 25°C, making it ideal for{" "}
            <strong>trekking, camping, and wildlife safaris</strong>. Misty
            mornings and cool nights create a magical atmosphere.
          </p>

          <h2 className="text-2xl font-bold">Summer (March to May)</h2>
          <p>
            Summer is warm yet pleasant, with temperatures rarely exceeding
            30°C. Perfect for exploring <em>tea plantations, coffee estates</em>
            , and scenic viewpoints like Chembra Peak. Mornings and evenings are
            best for outdoor activities.
          </p>

          <h2 className="text-2xl font-bold">Monsoon (June to September)</h2>
          <p>
            Monsoon paints Wayanad in shades of green. Waterfalls roar to life,
            rivers swell, and hills remain wrapped in mist. A paradise for{" "}
            <strong>nature lovers and photographers</strong>, but heavy rains
            may limit trekking.
          </p>

          <h2 className="text-2xl font-bold">Best Time to Visit</h2>
          <p>
            For outdoor adventures, winter is best. Monsoon is perfect for
            photography and nature walks, while summer offers a quieter, more
            relaxed holiday.
          </p>

          <h2 className="text-2xl font-bold">Travel Tips</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Pack light woolens for winter evenings.</li>
            <li>Bring rain gear and waterproof shoes for monsoon travel.</li>
            <li>Use sunscreen and stay hydrated during summer hikes.</li>
          </ul>

          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p>
            Wayanad’s climate is its biggest asset, offering a different
            experience in every season. Whether you’re seeking adventure,
            relaxation, or natural beauty, the weather here makes every moment
            memorable.
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
