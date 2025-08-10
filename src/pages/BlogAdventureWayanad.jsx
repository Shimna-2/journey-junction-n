// src/pages/BlogAdventureWayanad.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import adventure1 from "../assets/images/bladventureimg.webp";

const fallbackImage =
  "https://via.placeholder.com/1280x720?text=Image+Not+Available";

export default function BlogAdventureWayanad() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdfaf8] min-h-screen font-[Poppins] flex flex-col">
      <article
        className="max-w-5xl mx-auto flex-grow bg-white rounded-2xl shadow-lg p-6 sm:p-10 my-12"
        role="article"
        aria-label="Adventure Activities in Wayanad"
        data-aos="fade-up"
      >
        {/* Back arrow button */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 space-x-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
          type="button"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span className="text-base font-semibold select-none">Back</span>
        </button>

        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4 tracking-wide">
            Adventure Activities in Wayanad: Explore Beyond Limits
          </h1>
          <p className="text-md sm:text-lg text-gray-700 max-w-3xl leading-relaxed">
            From treetop ziplining to high-altitude trekking,{" "}
            <strong>Wayanad adventure tourism</strong> offers adrenaline-packed
            experiences amidst the enchanting beauty of the Western Ghats.
            Whether you’re a thrill-seeker or a nature lover, discover the best
            activities that make Wayanad a top adventure destination in Kerala.
          </p>
        </header>

        {/* Main Image */}
        <div
          className="mb-12 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
          data-aos="zoom-in"
        >
          <img
            src={adventure1}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Traveler ziplining above green forests in Wayanad"
            className="w-full object-cover aspect-[16/9] transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Introduction */}
        <section className="text-gray-800 mb-10 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            Wayanad is not just a serene escape; it’s also a paradise for
            adrenaline junkies. Nestled in the{" "}
            <strong>Western Ghats of Kerala</strong>, the district offers a
            variety of adventure activities that blend natural beauty with
            excitement — from soaring above tea plantations to trekking through
            misty hills.
          </p>
        </section>

        {/* Ziplining */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12 max-w-4xl mx-auto">
          <div className="md:w-1/2 text-gray-800 leading-relaxed space-y-3 text-base sm:text-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Ziplining – Soar Above the Forest
            </h2>
            <p>
              Experience one of South India’s longest and most scenic ziplines
              in Wayanad. Glide high above lush tea estates, forests, and rivers
              while soaking in panoramic views. Popular zipline spots include
              Vythiri and Pozhuthana.
            </p>
          </div>
        </div>

        {/* Trekking */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-12 max-w-4xl mx-auto">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2 text-gray-800 leading-relaxed space-y-3 text-base sm:text-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Trekking – Conquer the Peaks
            </h2>
            <p>
              Wayanad is a trekker’s haven. The Chembra Peak trek offers
              spectacular valley views and the famous heart-shaped lake, while
              the Banasura Hill Trek takes you through dense forests, streams,
              and meadows — perfect for both beginners and seasoned hikers.
            </p>
          </div>
        </div>

        {/* Camping */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-12 max-w-4xl mx-auto">
          <div className="md:w-1/2 text-gray-800 leading-relaxed space-y-3 text-base sm:text-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Camping – Nights Under the Stars
            </h2>
            <p>
              Spend the night under Wayanad’s star-studded skies. Camping sites
              near Banasura Sagar Dam, Tholpetty, and Meenmutty Waterfalls offer
              serene landscapes, cozy campfires, and the sounds of nature for a
              truly unforgettable experience.
            </p>
          </div>
        </div>

        {/* Other Activities */}
        <section className="max-w-3xl mx-auto mb-12 text-gray-800 leading-relaxed text-base sm:text-lg space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Other Adventure Highlights
          </h2>
          <ul className="list-disc list-inside space-y-2">
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
        </section>

        {/* Conclusion */}
        <section className="max-w-3xl mx-auto mb-10 text-gray-800 leading-relaxed text-base sm:text-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Conclusion</h2>
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
      <footer className="bg-gray-900 text-gray-300 mt-auto py-12">
        <Footer />
      </footer>
    </div>
  );
}
