// src/pages/BlogCoffeePlantations.jsx
import React from "react";
import Footer from "../components/Footer";

// Import images
import coffeeHarvest from "../assets/images/blgcoff1ee.webp";
import coffeeProcessing from "../assets/images/blgcoffee2.webp";
import coffeeEstate from "../assets/images/blogcoffee3.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogCoffeePlantations() {
  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      <article className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-6 sm:p-8">
        {/* Header */}
        <header className="mb-8 sm:mb-10 text-center max-w-prose mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Coffee Plantations in Wayanad – Aroma of the Hills
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Wander through the sprawling coffee estates of Wayanad, where lush
            green hills meet the rich aroma of freshly brewed beans. Experience
            the charm, history, and taste of Kerala’s finest coffee.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={coffeeEstate}
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Scenic coffee estate in Wayanad"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10 space-y-3 max-w-prose mx-auto">
          <p>
            Nestled in the serene <strong>Western Ghats of Kerala</strong>,
            Wayanad is celebrated for its sprawling coffee plantations producing
            world-class Arabica and Robusta beans. The cool climate, fertile
            soil, and traditional cultivation methods make Wayanad a paradise
            for coffee lovers and nature enthusiasts alike.
          </p>
        </section>

        {/* History & Origins */}
        <section className="grid md:grid-cols-2 gap-6 mb-10 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">
              History of Coffee in Wayanad
            </h2>
            <p className="mt-3 text-base sm:text-lg">
              Coffee cultivation here dates back to the 18th century, when
              British planters introduced the crop. Over time, local farmers
              adopted and perfected the art of coffee farming, making Wayanad a
              renowned hub for premium coffee production.
            </p>
            <p className="mt-3 text-base sm:text-lg">
              Today, the region blends age-old traditions with modern
              techniques, ensuring every cup is infused with heritage and
              flavor.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={coffeeHarvest}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Coffee harvesting in Wayanad"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Types & Cultivation */}
        <section className="mb-10 max-w-prose mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold">
            Types of Coffee Grown
          </h2>
          <p className="mt-3 text-base sm:text-lg">
            Wayanad’s estates cultivate two major varieties:{" "}
            <strong>Arabica</strong>, known for its mild flavor and aroma, and{" "}
            <strong>Robusta</strong>, valued for its strong taste and high
            caffeine content. Many estates also grow pepper, cardamom, and
            vanilla alongside coffee, creating a rich intercropping ecosystem.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold mt-6">
            The Cultivation Process
          </h2>
          <p className="mt-3 text-base sm:text-lg">
            From planting seedlings to harvesting ripe cherries, every step is
            handled with care. After harvesting, beans undergo pulping,
            fermenting, drying, and roasting — a process that preserves their
            unique flavor profile.
          </p>
        </section>

        {/* Best Time & Tours */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-4 max-w-prose mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold">Best Time to Visit</h2>
          <p>
            The ideal season is between <strong>November and March</strong>,
            when the weather is pleasant and harvesting activities are in full
            swing. Visitors can witness the coffee-making process firsthand.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Coffee Estate Tours</h2>
          <p>
            Many estates offer guided tours, where visitors can learn about
            farming, participate in coffee picking, and enjoy fresh brews amidst
            breathtaking landscapes. Some even provide charming homestay
            options.
          </p>
          <div className="flex justify-center">
            <img
              src={coffeeProcessing}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Processing coffee beans in Wayanad"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">
            Best Places to Experience
          </h2>
          <p>
            Visit estates in Meppadi, Kalpetta, and Sulthan Bathery for
            immersive coffee tours. Small family-owned farms often serve the
            most authentic experiences, paired with traditional Kerala snacks.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Nutritional Value</h2>
          <p>
            Freshly brewed coffee is rich in antioxidants and can boost energy
            and focus. When enjoyed without excessive sugar or cream, it can be
            a healthy indulgence.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Cultural Importance</h2>
          <p>
            Coffee is more than just a beverage here — it’s an integral part of
            Wayanad’s cultural identity, supporting thousands of local families
            and preserving Kerala’s agricultural heritage.
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
