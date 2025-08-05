// src/pages/BlogAdventureWayanad.jsx
import React from "react";
import Footer from "../components/Footer";

import adventure1 from "../assets/images/blgadventureimg1.webp";
import adventure2 from "../assets/images/blogadventure1.webp";
import adventure3 from "../assets/images/blogadventure2.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogAdventureWayanad() {
  return (
    <div className="bg-[#fdfaf8] w-full font-[Poppins]">
      <article className="max-w-7xl mx-auto pt-28 sm:pt-32 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-5 sm:p-8">
        {/* Header */}
        <header className="mb-8 sm:mb-12 text-center max-w-prose mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Adventure Activities in Wayanad: Explore Beyond Limits
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            From treetop ziplining to high-altitude trekking, Wayanad offers
            adrenaline-packed experiences amidst the enchanting beauty of the
            Western Ghats.
          </p>
        </header>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-14">
          {[adventure1, adventure2, adventure3].map((src, idx) => (
            <img
              key={idx}
              src={src}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt={
                idx === 0
                  ? "Ziplining in Wayanad"
                  : idx === 1
                  ? "Chembra Peak trekking trail"
                  : "Camping near Banasura Dam"
              }
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          ))}
        </div>

        {/* Main Content */}
        <section className="text-gray-800 leading-relaxed space-y-4 sm:space-y-5 max-w-prose mx-auto">
          <p className="text-sm sm:text-base lg:text-lg">
            Wayanad is not just a serene escape; it’s also a hotspot for thrill
            seekers. Nestled in the Western Ghats, the district offers a variety
            of adventure activities that combine natural beauty with a rush of
            adrenaline.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">
            Ziplining – Soar Above the Forest
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Wayanad boasts some of the longest and most scenic zipline tracks in
            South India. Glide high above tea plantations, forests, and rivers
            while feeling the wind rush past you. Popular spots include Vythiri
            and Pozhuthana.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">
            Trekking – Conquer the Peaks
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Trekking enthusiasts will find Wayanad a paradise. The Chembra Peak
            trek is a favorite, offering panoramic views and the iconic
            heart-shaped lake. The Banasura Hill Trek takes you through forests,
            streams, and meadows — perfect for both beginners and pros.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">
            Camping – Nights Under the Stars
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Wayanad’s clear skies make it ideal for camping. Sites near Banasura
            Sagar Dam, Tholpetty, and Meenmutty Waterfalls offer serene
            backdrops for memorable nights with campfires and stargazing.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">
            Off-Road Jeep Safaris
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Jeep safaris through forest trails and mountain roads bring rugged
            thrills. Routes through Kuruva Island and Edakkal Caves combine
            adventure with sightseeing.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Water Adventures</h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Kayaking in Pozhuthana and rafting in Kabini River during the
            monsoon provide excitement alongside scenic beauty.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">
            Best Time for Adventure
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            October to May is ideal for most activities, while the monsoon
            months are perfect for water adventures like rafting.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Safety Tips</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base lg:text-lg">
            <li>Always go with certified guides.</li>
            <li>Wear appropriate safety gear.</li>
            <li>Respect nature and avoid littering.</li>
            <li>Check weather conditions before activities.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold">Conclusion</h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Whether it’s the thrill of ziplining, trekking challenges, or
            camping under the stars, Wayanad offers adventures for every
            traveler — the perfect mix of adrenaline and serenity.
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
