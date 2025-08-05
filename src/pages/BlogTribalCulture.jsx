// src/pages/BlogTribalCulture.jsx
import React from "react";
import Footer from "../components/Footer";

import triimg1 from "../assets/images/blgtribal.webp";
import triimg6 from "../assets/images/blgtribal1.webp";
import triimg7 from "../assets/images/blgtribal2.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogTribalCulture() {
  return (
    <div className="bg-[#fdfaf8] w-full font-[Poppins]">
      <article className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-xl p-6 sm:p-8">
        {/* Blog Header */}
        <header className="mb-10" data-aos="fade-up">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Wayanadan Tribal Culture: Immersing in Kerala's Indigenous Heritage
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Journey into the cultural heart of Kerala — Wayanad’s tribal
            communities, where ancient traditions, sustainable living, and deep
            respect for nature thrive amidst the serene Western Ghats.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-10" data-aos="zoom-in">
          <img
            src={triimg1}
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Tribal elders in Wayanad"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Section: Introduction */}
        <section className="text-gray-800 leading-relaxed mb-10 text-sm sm:text-base space-y-4">
          <p>
            Nestled in the lush embrace of Kerala’s Western Ghats, Wayanad is
            celebrated for its emerald valleys, mist-kissed mountains, and
            thriving wildlife. Beyond its natural beauty lies a lesser-known
            treasure — the living heritage of its tribal communities. Wayanad is
            home to several indigenous tribes who have called these forests
            their home for centuries, including the <strong>Paniyas</strong>,{" "}
            <strong>Kurichiyas</strong>, <strong>Adiyas</strong>, and{" "}
            <strong>Kattunaikkans</strong>.
          </p>
          <p>
            These communities, bound by traditions and a deep spiritual
            connection to the land, have preserved their languages, art forms,
            agricultural techniques, and social structures through generations.
            Wayanad tribal tourism offers visitors a rare opportunity to engage
            with this culture authentically.
          </p>
        </section>

        {/* Image Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="md:w-1/2">
            <img
              src={triimg7}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Traditional tribal dance in Wayanad"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 text-sm sm:text-base text-gray-800 leading-relaxed space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              The Major Tribal Communities of Wayanad
            </h2>
            <p>
              Wayanad’s cultural landscape is enriched by its diverse tribes:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Paniyas:</strong> Once agricultural laborers, known for
                folk songs and dances.
              </li>
              <li>
                <strong>Kurichiyas:</strong> Skilled farmers, martial artists,
                and archers.
              </li>
              <li>
                <strong>Adiyas:</strong> Herbal medicine experts and bamboo
                handicraft artisans.
              </li>
              <li>
                <strong>Kattunaikkans:</strong> Forest gatherers skilled in
                hunting and honey collection.
              </li>
            </ul>
          </div>
        </div>

        {/* Image Right Section - Updated with more content */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-10">
          <div className="md:w-1/2">
            <img
              src={triimg6}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Traditional tribal home in Wayanad"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Daily Life & Festivals
            </h2>
            <p>
              Life in Wayanad’s tribal villages is deeply connected to the
              rhythms of nature. At sunrise, families begin their day with
              chores like fetching water, tending to paddy fields, and preparing
              traditional meals. Men often work in agriculture, forest
              gathering, or handicrafts, while women manage households, weave
              baskets, and prepare herbal remedies.
            </p>
            <p>
              Evenings are a time for community bonding — people gather around a
              fire to share stories, sing folk songs, and practice traditional
              dances. The sense of unity is strong, and respect for elders is a
              deeply rooted value in tribal life.
            </p>

            <p>Festivals are vibrant celebrations of culture and nature:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Kurumkali:</strong> Sacred dance performed during
                harvest to thank deities for prosperity and good yields.
              </li>
              <li>
                <strong>Thira:</strong> Ritual inspired by Theyyam, featuring
                colorful costumes, elaborate masks, and rhythmic drumming.
              </li>
              <li>
                <strong>Harvest Festivals:</strong> Mark the end of the
                agricultural season with feasts, music, and tribal games such as
                archery competitions and boat races.
              </li>
              <li>
                <strong>Honey Festival:</strong> Celebrates honey-collecting
                season with fresh forest honey tasting and community sharing.
              </li>
            </ul>
            <p>
              These festivals preserve oral traditions, pass down stories, and
              strengthen community bonds. Visitors to Wayanad can witness these
              celebrations through guided cultural tours, offering an authentic
              glimpse into Kerala’s living tribal heritage.
            </p>
          </div>
        </div>

        {/* Extra SEO-rich sections */}
        <section className="text-sm sm:text-base text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            History of Wayanad's Tribes
          </h2>
          <p>
            Anthropological evidence suggests that the tribes of Wayanad have
            inhabited this region for thousands of years. The <em>Paniya</em>{" "}
            tribe’s oral histories trace back to ancient forest settlements,
            while the <em>Kurichiyas</em> are believed to be descendants of
            early warrior clans.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Role of Nature in Tribal Life
          </h2>
          <p>
            Forests are not just resources but sacred spaces. Medicinal plants,
            bamboo, and honey are collected sustainably, ensuring nature is
            preserved for future generations.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Sustainable Living Practices
          </h2>
          <p>
            Tribes practice organic farming, use natural building materials, and
            recycle waste into compost. These methods align with global
            sustainable development goals.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Tribal Food & Cuisine
          </h2>
          <p>
            Meals often include millets, wild greens, smoked meat, and honey.
            Popular dishes include bamboo rice payasam and tapioca with spicy
            chutneys.
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Modern Challenges & Opportunities
          </h2>
          <p>
            While modernization has brought education and healthcare, it also
            threatens indigenous languages and traditions. Eco-tourism and
            government programs are key to preserving their identity.
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
