// src/pages/BlogTribalCulture.jsx
import React from "react";
import Footer from "../components/Footer";
import triimg1 from "../assets/images/blgtribal.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogTribalCulture() {
  return (
    <div className="bg-[#fdfaf8] w-full font-[Poppins]">
      <article
        className="max-w-7xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-14 pt-16 px-4 sm:px-6 lg:px-10 bg-white shadow-xl rounded-xl p-4 sm:p-5"
        role="article"
        aria-label="Wayanad Tribal Culture travel and heritage guide"
      >
        {/* Header */}
        <header className="mb-6 sm:mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Wayanad Tribal Culture – Kerala's Indigenous Heritage in the Western
            Ghats
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Explore the vibrant <strong>tribal culture of Wayanad</strong>, home
            to the <em>Paniyas</em>, <em>Kurichiyas</em>, <em>Adiyas</em>, and{" "}
            <em>Kattunaikkans</em>. Discover their sustainable lifestyles,
            unique traditions, and deep connection to the forests of Kerala.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={triimg1}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Wayanad tribal elders in traditional attire"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Introduction */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 space-y-4">
          <p>
            Nestled in Kerala’s <strong>Western Ghats</strong>, Wayanad is
            celebrated not just for its scenic landscapes but also for its{" "}
            <strong>indigenous tribal heritage</strong>. These communities have
            preserved ancient traditions, languages, and social structures for
            centuries, living in harmony with nature.
          </p>
          <p>
            The region’s <strong>tribal tourism</strong> offers authentic
            cultural experiences—folk dances, traditional crafts, and
            sustainable farming practices—making Wayanad a living museum of
            heritage.
          </p>
        </section>

        {/* Main Content */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            Major Tribal Communities of Wayanad
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Paniyas:</strong> Known for folk songs, agricultural
              skills, and vibrant dance performances.
            </li>
            <li>
              <strong>Kurichiyas:</strong> Skilled farmers, warriors, and
              archers with a history of martial traditions.
            </li>
            <li>
              <strong>Adiyas:</strong> Experts in herbal medicine and bamboo
              handicrafts.
            </li>
            <li>
              <strong>Kattunaikkans:</strong> Forest gatherers skilled in honey
              collection and wildlife tracking.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold">
            Daily Life & Vibrant Festivals
          </h2>
          <p>
            Tribal life in Wayanad revolves around agriculture, forest
            gathering, and handicrafts. Evenings are spent sharing folk tales,
            songs, and dances around a communal fire.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Kurumkali:</strong> Sacred harvest dance to honor deities.
            </li>
            <li>
              <strong>Thira:</strong> Ritual performance with colorful masks and
              drums.
            </li>
            <li>
              <strong>Harvest Festivals:</strong> Feasts, archery competitions,
              and boat races mark the season.
            </li>
            <li>
              <strong>Honey Festival:</strong> Celebration of honey collection
              with community sharing.
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold">
            History of Wayanad's Tribes
          </h2>
          <p>
            Archaeological findings suggest that Wayanad’s tribal communities
            have existed for thousands of years, maintaining unique languages,
            rituals, and social systems.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Nature & Sustainable Living
          </h2>
          <p>
            Forests are sacred in tribal culture, providing medicinal plants,
            bamboo, and food. Sustainable harvesting ensures ecological balance.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Cuisine of Wayanad Tribes
          </h2>
          <p>
            Meals feature millets, wild greens, smoked meat, bamboo rice
            payasam, and forest honey, reflecting seasonal availability.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Challenges & Preservation
          </h2>
          <p>
            While education and healthcare have improved lives, modernization
            threatens traditional practices. Eco-tourism and cultural festivals
            help preserve heritage.
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
