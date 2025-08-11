// src/pages/BlogAdventureWayanad.jsx
import React from "react";
import Footer from "../components/Footer";
import adventure1 from "../assets/images/bladventureimg.webp";

const fallbackImage =
  "https://via.placeholder.com/1280x720?text=Image+Not+Available";

export default function BlogAdventureWayanad() {
  return (
    <div className="bg-[#fdfaf8] w-full font-[Poppins]">
      <article
        className="max-w-7xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-14 pt-16 px-4 sm:px-6 lg:px-10 bg-white shadow-xl rounded-xl p-4 sm:p-5"
        role="article"
        aria-label="Adventure Activities in Wayanad"
      >
        {/* Header */}
        <header className="mb-6 sm:mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Adventure Activities in Wayanad: Explore Beyond Limits
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            From treetop ziplining to high-altitude trekking,{" "}
            <strong>Wayanad adventure tourism</strong> offers adrenaline-packed
            experiences amidst the enchanting beauty of the Western Ghats.
            Whether you’re a thrill-seeker or a nature lover, discover the best
            activities that make Wayanad a top adventure destination in Kerala.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={adventure1}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Traveler ziplining above green forests in Wayanad"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro Section */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 space-y-4">
          <p>
            Wayanad is not just a serene escape; it’s also a paradise for
            adrenaline junkies. Nestled in the{" "}
            <strong>Western Ghats of Kerala</strong>, the district offers a
            variety of adventure activities that blend natural beauty with
            excitement — from soaring above tea plantations to trekking through
            misty hills.
          </p>
        </section>

        {/* Main Content */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            Ziplining – Soar Above the Forest
          </h2>
          <p>
            Experience one of South India’s longest and most scenic ziplines in
            Wayanad. Glide high above lush tea estates, forests, and rivers
            while soaking in panoramic views. Popular zipline spots include
            Vythiri and Pozhuthana.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Trekking – Conquer the Peaks
          </h2>
          <p>
            Wayanad is a trekker’s haven. The Chembra Peak trek offers
            spectacular valley views and the famous heart-shaped lake, while the
            Banasura Hill Trek takes you through dense forests, streams, and
            meadows — perfect for both beginners and seasoned hikers.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Camping – Nights Under the Stars
          </h2>
          <p>
            Spend the night under Wayanad’s star-studded skies. Camping sites
            near Banasura Sagar Dam, Tholpetty, and Meenmutty Waterfalls offer
            serene landscapes, cozy campfires, and the sounds of nature for a
            truly unforgettable experience.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Other Adventure Highlights
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Off-Road Jeep Safaris:</strong> Explore forest trails and
              rugged terrains.
            </li>
            <li>
              <strong>Water Adventures:</strong> Try kayaking or river rafting
              during monsoon season.
            </li>
            <li>
              <strong>Best Time for Adventure:</strong> October–May for land
              activities, June–September for water sports.
            </li>
            <li>
              <strong>Safety Tips:</strong> Always go with certified guides,
              wear protective gear, and respect nature.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold">Conclusion</h2>
          <p>
            From ziplining above lush valleys to trekking misty peaks and
            camping under starlit skies,{" "}
            <strong>Wayanad adventure tourism</strong> offers an unmatched mix
            of adrenaline and natural beauty. Whether you’re a solo traveler, a
            group of friends, or a family, Wayanad’s adventure activities
            promise memories that last a lifetime.
          </p>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-8">
        <Footer />
      </footer>
    </div>
  );
}
