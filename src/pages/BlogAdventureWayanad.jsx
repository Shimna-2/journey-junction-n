// src/pages/BlogAdventureWayanad.jsx
import React from "react";
import Footer from "../components/Footer";

// Import WebP images (optimized format)
import adventure1 from "../assets/images/blogadventure1.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogAdventureWayanad() {
  return (
    <div className="bg-[#fdfaf8] w-full font-[Poppins]">
      <article
        className="max-w-7xl mx-auto pt-28 sm:pt-32 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-5 sm:p-8"
        role="article"
        aria-label="Adventure Activities in Wayanad"
      >
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Adventure Activities in Wayanad: Explore Beyond Limits
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600">
            From treetop ziplining to high-altitude trekking,{" "}
            <strong>Wayanad adventure tourism</strong> offers adrenaline-packed
            experiences amidst the enchanting beauty of the Western Ghats.
            Whether you’re a thrill-seeker or a nature lover, discover the best
            activities that make Wayanad a top adventure destination in Kerala.
          </p>
        </header>

        {/* Intro */}
        <section className="text-gray-800 leading-relaxed space-y-4 sm:space-y-5 mb-10">
          <p className="text-sm sm:text-base lg:text-lg">
            Wayanad is not just a serene escape; it’s also a paradise for
            adrenaline junkies. Nestled in the{" "}
            <strong>Western Ghats of Kerala</strong>, the district offers a
            variety of adventure activities that blend natural beauty with
            excitement — from soaring above tea plantations to trekking through
            misty hills.
          </p>
        </section>

        {/* Ziplining */}
        <section className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">
              Ziplining – Soar Above the Forest
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg">
              Experience one of South India’s longest and most scenic ziplines
              in Wayanad. Glide high above lush tea estates, forests, and rivers
              while soaking in panoramic views. Popular zipline spots include
              Vythiri and Pozhuthana, where adventure meets breathtaking
              landscapes.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={adventure1}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Traveler ziplining above green forests in Wayanad"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Trekking */}
        <section className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div className="order-1 md:order-2">
            <h2 className="text-lg sm:text-xl font-bold">
              Trekking – Conquer the Peaks
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg">
              Wayanad is a trekker’s haven. The Chembra Peak trek offers
              spectacular valley views and the famous heart-shaped lake, while
              the Banasura Hill Trek takes you through dense forests, streams,
              and meadows — perfect for both beginners and seasoned hikers.
            </p>
          </div>
        </section>

        {/* Camping */}
        <section className="grid md:grid-cols-2 gap-6 items-center mb-12">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">
              Camping – Nights Under the Stars
            </h2>
            <p className="mt-3 text-sm sm:text-base lg:text-lg">
              Spend the night under Wayanad’s star-studded skies. Camping sites
              near Banasura Sagar Dam, Tholpetty, and Meenmutty Waterfalls offer
              serene landscapes, cozy campfires, and the sounds of nature for a
              truly unforgettable experience.
            </p>
          </div>
        </section>

        {/* Other Activities */}
        <section className="mb-10 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">
            Off-Road Jeep Safaris
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Embark on rugged jeep safaris through forest trails and mountain
            roads. Popular routes include Kuruva Island and Edakkal Caves,
            combining off-road thrills with scenic sightseeing.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Water Adventures</h2>
          <p className="text-sm sm:text-base lg:text-lg">
            Try kayaking in Pozhuthana or river rafting in the Kabini during
            monsoon season for an exhilarating blend of water sports and natural
            beauty.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">
            Best Time for Adventure
          </h2>
          <p className="text-sm sm:text-base lg:text-lg">
            October to May is ideal for most land activities, while June to
            September (monsoon) is best for water-based adventures like rafting.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Safety Tips</h2>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base lg:text-lg">
            <li>Always go with certified guides for safety.</li>
            <li>Wear appropriate protective gear.</li>
            <li>Respect wildlife and avoid littering.</li>
            <li>Check weather forecasts before planning outdoor activities.</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="mb-6 text-gray-700">
          <h2 className="text-lg sm:text-xl font-bold">Conclusion</h2>
          <p className="text-sm sm:text-base lg:text-lg">
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
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <Footer />
      </footer>
    </div>
  );
}
