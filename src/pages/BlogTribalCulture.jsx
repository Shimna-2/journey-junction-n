import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

import triimg1 from "../assets/images/triimg1.jpg";
import triimg6 from "../assets/images/triimg6.jpg";
import triimg7 from "../assets/images/triimg7.jpg";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogTribalCulture() {
  const handleImageError = (e) => {
    e.target.src = fallbackImage;
  };

  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      <Helmet>
        <title>Wayanadan Tribal Culture | Kerala Indigenous Heritage</title>
        <meta
          name="description"
          content="Explore Wayanad tribal culture — Paniya, Kurichiya, Adiya, and Kattunaikan tribes. Learn their history, lifestyle, festivals, food, art, and sustainable living practices in Kerala's Western Ghats."
        />
        <meta
          name="keywords"
          content="Wayanad tribal culture, Kerala tribes, Paniya tribe Wayanad, Kurichiya tribe traditions, Adiya herbal medicine, Kattunaikan forest life, Kerala indigenous heritage, Wayanad tourism, Wayanad cultural heritage tours"
        />
        <meta name="author" content="Journey Junction" />
      </Helmet>

      <article className="max-w-7xl mx-auto pt-32 px-6 lg:px-12 bg-white shadow-xl rounded-xl p-8">
        {/* Blog Header */}
        <header className="mb-12 text-center" data-aos="fade-up">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Wayanadan Tribal Culture: Immersing in Kerala's Indigenous Heritage
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Journey into the cultural heart of Kerala — Wayanad’s tribal
            communities, where ancient traditions, sustainable living, and deep
            respect for nature thrive amidst the serene Western Ghats.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-14" data-aos="zoom-in">
          <img
            src={triimg1}
            onError={handleImageError}
            alt="Tribal elders in Wayanad"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

        {/* Section: Introduction */}
        <section className="text-gray-800 leading-relaxed mb-16 text-lg space-y-4">
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
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={triimg7}
              onError={handleImageError}
              alt="Traditional tribal dance in Wayanad"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-800 leading-relaxed space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              The Major Tribal Communities of Wayanad
            </h2>
            <p>
              Wayanad’s cultural landscape is enriched by its diverse tribes:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Paniyas:</strong> Once agricultural laborers, the
                Paniyas are known for folk songs and dances that depict their
                life experiences.
              </li>
              <li>
                <strong>Kurichiyas:</strong> Skilled farmers, martial artists,
                and archers, they follow strict agricultural rituals.
              </li>
              <li>
                <strong>Adiyas:</strong> Known for their herbal medicine
                expertise and intricate bamboo handicrafts.
              </li>
              <li>
                <strong>Kattunaikkans:</strong> Forest gatherers skilled in
                hunting, honey collection, and sustainable living.
              </li>
            </ul>
          </div>
        </div>

        {/* Image Right Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src={triimg6}
              onError={handleImageError}
              alt="Traditional tribal home in Wayanad"
              className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-800 leading-relaxed space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Daily Life & Festivals
            </h2>
            <p>
              Tribal life in Wayanad flows with the rhythm of nature. At dawn,
              villagers tend to fields, fetch water, and prepare for the day’s
              work. Evenings are filled with storytelling, music, and dance.
            </p>
            <p>Festivals reflect their agricultural roots:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Kurumkali:</strong> Dance ritual to invoke blessings.
              </li>
              <li>
                <strong>Thira:</strong> Inspired by Theyyam, with dramatic
                costumes and drumbeats.
              </li>
              <li>
                <strong>Harvest Festivals:</strong> Celebrations after
                successful crops.
              </li>
            </ul>
          </div>
        </div>

        {/* Extra SEO-rich sections */}
        <section className="text-lg text-gray-800 leading-relaxed space-y-6 mb-">
          <h2 className="text-2xl font-bold text-gray-900">
            History of Wayanad's Tribes
          </h2>
          <p>
            Anthropological evidence suggests that the tribes of Wayanad have
            inhabited this region for thousands of years. The <em>Paniya</em>{" "}
            tribe’s oral histories trace back to ancient forest settlements,
            while the <em>Kurichiyas</em> are believed to be descendants of
            early warrior clans.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Role of Nature in Tribal Life
          </h2>
          <p>
            Forests are not just resources but sacred spaces. Medicinal plants,
            bamboo, and honey are collected sustainably, ensuring that nature is
            preserved for future generations.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Sustainable Living Practices
          </h2>
          <p>
            Tribes practice organic farming, use natural building materials, and
            recycle waste into compost. These methods align with global
            sustainable development goals.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
            Tribal Food & Cuisine
          </h2>
          <p>
            Meals often include millets, wild greens, smoked meat, and honey.
            Popular dishes include bamboo rice payasam and tapioca with spicy
            chutneys.
          </p>

          <h2 className="text-2xl font-bold text-gray-900">
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
      <div className="bg-gray-900 text-gray-300 mt-10">
        <Footer />
      </div>
    </div>
  );
}
