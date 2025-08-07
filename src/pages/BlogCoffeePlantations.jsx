// src/pages/BlogCoffeePlantations.jsx
import React from "react";
import Footer from "../components/Footer";

// Optimized WebP images
import coffeeHarvest from "../assets/images/blgcoffee1.webp";

import coffeeProcessing from "../assets/images/blgcoffee1.webp";
import coffeeEstate from "../assets/images/blgcoffee1.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogCoffeePlantations() {
  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      <article
        className="max-w-7xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-14 pt-16 px-4 sm:px-6 lg:px-10 bg-white shadow-xl rounded-xl p-4 sm:p-5"
        role="article"
        aria-label="Coffee Plantations in Wayanad"
      >
        {/* Header */}
        <header className="mb-6 sm:mb-8 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Coffee Plantations in Wayanad – Aroma of the Hills
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Explore the lush <strong>Wayanad coffee plantations</strong>, where
            rolling green hills meet the rich aroma of freshly brewed Arabica
            and Robusta beans. Discover the charm, history, and taste of
            Kerala’s finest coffee in its scenic highlands.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={coffeeEstate}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="A panoramic view of a coffee estate in Wayanad surrounded by misty hills"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-8 space-y-3">
          <p>
            Nestled in the serene <strong>Western Ghats of Kerala</strong>,
            Wayanad is a coffee lover’s paradise, producing world-class{" "}
            <strong>Arabica</strong> and <strong>Robusta</strong> beans. The
            region’s cool climate, fertile soil, and traditional farming
            practices make it one of India’s most celebrated coffee-growing
            destinations.
          </p>
        </section>

        {/* History & Origins */}
        <section className="grid md:grid-cols-2 gap-6 mb-8 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              History of Coffee in Wayanad
            </h2>
            <p className="mt-3 text-base sm:text-lg">
              Coffee cultivation in Wayanad began in the 18th century under
              British planters. Over generations, local farmers refined the art
              of coffee farming, making the district a renowned hub for premium
              coffee in Kerala.
            </p>
            <p className="mt-3 text-base sm:text-lg">
              Today, estates blend age-old traditions with modern processing
              techniques, ensuring that every cup carries the essence of
              heritage and unmatched flavor.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={coffeeHarvest}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Farmers handpicking ripe coffee cherries in Wayanad plantation"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Types & Cultivation */}
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold">
            Types of Coffee Grown
          </h2>
          <p className="mt-3 text-base sm:text-lg">
            Wayanad’s estates grow two main varieties:{" "}
            <strong>Arabica coffee</strong>, loved for its mild flavor and
            aromatic profile, and <strong>Robusta coffee</strong>, prized for
            its bold taste and higher caffeine content. Intercropping with
            pepper, cardamom, and vanilla enriches biodiversity.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-6">
            The Cultivation Process
          </h2>
          <p className="mt-3 text-base sm:text-lg">
            From planting seedlings to harvesting ripe cherries, every stage is
            carefully handled. Post-harvest, beans undergo pulping, fermenting,
            sun-drying, and roasting — steps that preserve their unique aroma
            and taste.
          </p>
        </section>

        {/* Best Time & Tours */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">Best Time to Visit</h2>
          <p>
            The ideal time is <strong>November to March</strong>, when the
            climate is pleasant, and harvesting is in full swing. Visitors can
            witness every stage of coffee production.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Coffee Estate Tours</h2>
          <p>
            Many estates in Meppadi, Kalpetta, and Sulthan Bathery offer guided
            tours where guests can learn about cultivation, pick ripe cherries,
            and sip freshly brewed coffee surrounded by scenic hills.
          </p>
          <div className="flex justify-center">
            <img
              src={coffeeProcessing}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Processing fresh coffee beans in Wayanad estate facility"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            Best Places to Experience Coffee
          </h2>
          <p>
            Estate visits in Wayanad provide authentic insights into Kerala’s
            coffee culture. Family-run farms often serve the freshest brews
            paired with traditional snacks, offering an intimate experience.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Nutritional Value</h2>
          <p>
            Fresh coffee is rich in antioxidants and may boost energy, focus,
            and mood. Consumed without excess sugar or cream, it can be a
            healthy daily ritual.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Cultural Importance</h2>
          <p>
            Coffee is deeply woven into Wayanad’s cultural identity, supporting
            thousands of farming families and preserving Kerala’s agricultural
            heritage.
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
