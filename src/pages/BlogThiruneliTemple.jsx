// src/pages/BlogThiruneliTemple.jsx
import React from "react";
import Footer from "../components/Footer";

import thirunelli from "../assets/images/blgthirunelli-banner.webp";
// import thirunelli1 from "../assets/images/blgthirunelli-banner.webp";
// import thiruneli2 from "../assets/images/blgthirunelli-banner.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogThiruneliTemple() {
  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      <article
        className="max-w-7xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-14 pt-16 px-4 sm:px-6 lg:px-10 bg-white shadow-xl rounded-xl p-4 sm:p-5"
        role="article"
        aria-label="Thirunelli Temple travel guide"
      >
        {/* Header */}
        <header className="mb-6 sm:mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Thirunelli Temple – The Eternal Shrine in the Brahmagiri Hills
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Nestled deep within the forests of the{" "}
            <strong>Brahmagiri Hills in Wayanad, Kerala</strong>, the sacred{" "}
            <strong>Thirunelli Temple</strong> is dedicated to Lord Vishnu.
            Known as the “Kashi of the South,” it is revered for its{" "}
            <strong>Papanasini stream</strong>, ancient rituals, and
            breathtaking mountain setting.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={thirunelli}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Panoramic view of Thirunelli Temple in Wayanad with Brahmagiri Hills backdrop"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro Section */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 space-y-4">
          <p>
            Believed to be over a thousand years old,{" "}
            <strong>Thirunelli Temple</strong> is steeped in legends that
            connect it to Lord Brahma himself. Its serene location, surrounded
            by dense forests and mountain streams, makes it a must-visit for
            pilgrims and travelers seeking spirituality, history, and nature.
          </p>
          <p>
            Devotees come not only to worship but also to perform{" "}
            <strong>ancestral rites</strong> at the holy{" "}
            <em>Papanasini stream</em>, which is believed to wash away sins and
            grant <em>moksha</em> (liberation).
          </p>
        </section>

        {/* Two Images Row */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <img
            src={thirunelli1}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Entrance to Thirunelli Temple, Wayanad"
            className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
          />
          <img
            src={thiruneli2}
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Papanasini stream flowing through Brahmagiri Hills"
            className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
          />
        </div> */}

        {/* Main Content */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold">
            History & Legends of Thirunelli Temple
          </h2>
          <p>
            According to legend, Lord Brahma installed the idol of Lord Vishnu
            at Thirunelli, making it one of the holiest{" "}
            <strong>Vishnu temples in Kerala</strong>. The name “Thirunelli”
            comes from the <em>Nelli</em> (Indian gooseberry) trees found here.
            Another myth links the site to Lord Parasurama, who performed{" "}
            <em>Bali Tharpanam</em> rituals here for his ancestors.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Architecture of the Eternal Shrine
          </h2>
          <p>
            Built in traditional Kerala temple style, Thirunelli features{" "}
            <strong>sloping tiled roofs</strong>, wooden carvings, and a granite
            sanctum. The temple’s minimalism reflects its spiritual purity and
            its deep connection to the surrounding Brahmagiri forests.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Papanasini – The Sacred Stream
          </h2>
          <p>
            Flowing from the Brahmagiri Hills, the{" "}
            <strong>Papanasini stream</strong> is said to absolve all sins.
            Pilgrims bathe here before entering the temple, and its waters are
            used in important rituals like <em>Bali Tharpanam</em> for departed
            ancestors.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Festivals & Daily Rituals
          </h2>
          <p>
            The annual temple festival in April features traditional music,
            processions, and special poojas. Daily rituals such as{" "}
            <em>Usha Pooja</em>, <em>Ucha Pooja</em>, and{" "}
            <em>Athaazha Pooja</em> are conducted with centuries-old precision.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">How to Reach</h2>
          <p>
            Thirunelli Temple is around 32 km from Mananthavady and accessible
            via scenic roads. The nearest airport is{" "}
            <strong>Calicut International Airport</strong> (~137 km), and the
            nearest railway station is at Kozhikode (~120 km).
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Travel Tips</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Visit early morning for a peaceful darshan.</li>
            <li>Dress modestly; traditional attire is preferred.</li>
            <li>Carry spare clothes if bathing in Papanasini.</li>
            <li>Photography is prohibited inside the sanctum.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-bold">Nearby Attractions</h2>
          <p>
            Explore nearby <strong>Pakshipathalam trekking trail</strong>,{" "}
            <strong>Brahmagiri Wildlife Sanctuary</strong>, and the quiet
            village of Thirunelli for a complete cultural and nature experience.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">
            Why Visit Thirunelli Temple?
          </h2>
          <p>
            Thirunelli Temple is more than a pilgrimage site—it’s a living
            embodiment of Kerala’s spiritual and cultural heritage. Its serene
            environment, rich legends, and architectural beauty make it a{" "}
            <strong>must-visit destination in Wayanad</strong>.
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
