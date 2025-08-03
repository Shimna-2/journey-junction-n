// src/pages/BlogThiruneliTemple.jsx
import React from "react";
import Footer from "../components/Footer";

import thirunelli from "../assets/images/thirunelli.jpg";
import thirunelli1 from "../assets/images/thirunelli-temple-wayanad-tourism-entry-fee-timings-holidays-reviews-header.jpg";
import thiruneli2 from "../assets/images/thirunelli4.jpg";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogThiruneliTemple() {
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>
          Thiruneli Temple Wayanad | History, Rituals & Travel Guide
        </title>
        <meta
          name="description"
          content="Discover Thiruneli Temple in Wayanad, Kerala — an ancient Lord Vishnu temple in the Brahmagiri Hills, famous for Papanasini rituals, traditional Kerala architecture, and serene forest surroundings."
        />
        <meta
          name="keywords"
          content="Thiruneli Temple, Thiruneli Temple Wayanad, Thiruneli Temple history, Thiruneli Temple timings, Papanasini rituals, Brahmagiri Hills temple, Kerala Vishnu temple, Wayanad pilgrimage places, Thiruneli temple route, Thiruneli temple festival"
        />
        <meta name="author" content="Journey Junction" />
      </head>

      <div className="bg-[#fdfaf8] w-full font-serif">
        <article className="max-w-7xl mx-auto pt-32 px-6 lg:px-12 bg-white shadow-xl rounded-xl p-8">
          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
              Thiruneli Temple – The Eternal Shrine in the Brahmagiri Hills
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nestled deep within the forests of the Brahmagiri Hills in
              Wayanad, Kerala, Thiruneli Temple is an ancient spiritual landmark
              dedicated to Lord Vishnu. Known as the “Kashi of the South,” it is
              celebrated for its sacred rituals, mythological origins, and
              breathtaking mountain setting.
            </p>
          </header>

          {/* Main Image */}
          <div className="mb-14">
            <img
              src={thirunelli}
              onError={handleImageError}
              alt="Thiruneli Temple Wayanad"
              className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Intro Section */}
          <section className="text-lg text-gray-800 leading-relaxed mb-16 space-y-4">
            <p>
              Thiruneli Temple is believed to be over a thousand years old and
              is steeped in legends that connect it to Lord Brahma himself. The
              temple’s serene location, surrounded by dense forests and streams,
              makes it a unique pilgrimage site for devotees and a fascinating
              destination for travelers seeking a blend of spirituality,
              history, and nature.
            </p>
            <p>
              Pilgrims visit Thiruneli not only for worship but also to perform{" "}
              <strong>ancestral rites</strong> at the sacred{" "}
              <em>Papanasini stream</em>, believed to wash away sins and grant
              moksha (liberation).
            </p>
          </section>

          {/* Two Images Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img
              src={thirunelli1}
              onError={handleImageError}
              alt="Thiruneli Temple Entrance"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
            <img
              src={thiruneli2}
              onError={handleImageError}
              alt="Papanasini stream"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          {/* Main Content */}
          <section className="text-lg text-gray-800 leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold">History & Legends</h2>
            <p>
              According to ancient texts, Lord Brahma installed the idol of Lord
              Vishnu at Thiruneli, making it one of the holiest sites in South
              India. The name “Thirunelli” is derived from the presence of the{" "}
              <em>Nelli</em> (Indian gooseberry) trees in the area. Legends also
              connect this temple to Lord Parasurama, who is believed to have
              performed rituals here for his ancestors.
            </p>

            <h2 className="text-2xl font-bold">Architectural Splendor</h2>
            <p>
              Built in traditional Kerala style, the temple features{" "}
              <strong>sloping tiled roofs</strong>, intricately carved wooden
              pillars, and a granite sanctum. Its simplicity reflects the
              spiritual essence of the place, blending perfectly with the
              natural surroundings of forests and hills.
            </p>

            <h2 className="text-2xl font-bold">The Sacred Papanasini</h2>
            <p>
              Flowing from the Brahmagiri Hills, the Papanasini stream is
              believed to have divine powers to absolve sins. Pilgrims bathe
              here before offering prayers, and the waters are used for
              ancestral rituals called <em>Bali Tharpanam</em>.
            </p>

            <h2 className="text-2xl font-bold">Festivals & Rituals</h2>
            <p>
              The annual festival, usually held in April, is marked by colorful
              processions, traditional music, and special poojas. Daily rituals
              include <em>Usha Pooja</em>, <em>Ucha Pooja</em>, and{" "}
              <em>Athaazha Pooja</em>, performed with strict adherence to
              tradition.
            </p>

            <h2 className="text-2xl font-bold">How to Reach</h2>
            <p>
              Thiruneli Temple is located about 32 km from Mananthavady in
              Wayanad and is accessible via scenic mountain roads. The nearest
              airport is Calicut International Airport (~137 km), and the
              nearest railway station is at Kozhikode (~120 km).
            </p>

            <h2 className="text-2xl font-bold">Travel Tips</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Visit early morning to enjoy a peaceful darshan.</li>
              <li>Dress modestly in traditional attire if possible.</li>
              <li>
                Carry an extra set of clothes if you plan to bathe in
                Papanasini.
              </li>
              <li>Photography is restricted inside the sanctum.</li>
            </ul>

            <h2 className="text-2xl font-bold">Nearby Attractions</h2>
            <p>
              Combine your visit with nearby destinations like Pakshipathalam
              trekking trail, Brahmagiri Wildlife Sanctuary, and the peaceful
              village of Thirunelli itself.
            </p>

            <h2 className="text-2xl font-bold">Conclusion</h2>
            <p>
              Thiruneli Temple is more than just a religious site—it is a living
              embodiment of Kerala’s ancient culture, architecture, and
              spiritual traditions. Whether you are a pilgrim or a traveler, the
              serene atmosphere and sacred legends of Thiruneli leave a lasting
              mark on your soul.
            </p>
          </section>
        </article>

        {/* Footer */}
        <div className="bg-gray-900 text-gray-300 mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
