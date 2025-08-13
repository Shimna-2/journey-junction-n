// src/pages/BlogWayanadanPothumkaal.jsx
import React from "react";
import Footer from "../components/Footer";
import pothumkaal2 from "../assets/images/blgpothumkaalimg1.webp";
import pothumkaal from "../assets/images/pothumkaal.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadanPothumkaal() {
  return (
    <div className="bg-[#fdfaf8] w-full font-sans">
      <article
        className="max-w-7xl mx-auto mt-8 mb-12 sm:mt-10 sm:mb-14 pt-16 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-6 sm:p-8"
        role="article"
        aria-label="Wayanadan Pothumkaal Kerala beef curry blog"
      >
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Wayanadan Pothumkaal – Spicy Kerala Beef Curry from the Wayanad
            Highlands
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            <strong>Wayanadan Pothumkaal</strong> is a slow-cooked beef delicacy
            from Kerala’s Wayanad region, prepared with roasted coconut, curry
            leaves, and aromatic spices. A must-try for food lovers exploring{" "}
            <em>authentic Kerala cuisine</em> and <em>spicy meat recipes</em>.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={pothumkaal2}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Authentic Wayanadan Pothumkaal beef curry served with Kerala parotta"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Introduction */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10 space-y-4">
          <p>
            Originating in the lush highlands of{" "}
            <strong>Wayanad, Kerala</strong>, Wayanadan Pothumkaal is more than
            just a dish — it’s a celebration of tradition and bold flavors. This
            spicy Kerala beef curry combines locally sourced beef, roasted
            coconut, fresh curry leaves, and Kerala’s signature spice blend to
            create a rich and unforgettable taste.
          </p>
          <p>
            This dish is a highlight of <strong>Wayanad food tourism</strong>,
            often cooked in <em>urulis</em> (bronze vessels) over firewood,
            creating a smoky aroma rarely replicated in modern kitchens.
          </p>
        </section>

        {/* History & Origins */}
        <section className="grid md:grid-cols-2 gap-6 mb-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">History & Origins</h2>
            <p className="mt-3">
              The origins of Wayanadan Pothumkaal trace back to the tribal and
              farming communities of Kerala’s Western Ghats, particularly the{" "}
              <em>Paniya</em> and <em>Kurichiya</em> tribes. They perfected this
              recipe over centuries, using spices like black pepper, cardamom,
              and cinnamon.
            </p>
            <p className="mt-3">
              The dish rose to fame during Kerala’s spice trade era, when
              Portuguese and British influences refined cooking techniques.
              Today, it remains a rural kitchen favorite, cooked with minimal
              alterations to preserve authenticity.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={pothumkaal}
              alt="History of Wayanadan Pothumkaal traditional cooking"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3]"
              onError={(e) => (e.target.src = fallbackImage)}
            />
          </div>
        </section>

        {/* Cooking Process */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Traditional Cooking Process
          </h2>
          <p>
            The preparation begins by marinating beef with freshly ground black
            pepper, coriander, turmeric, Kashmiri chili powder, rock salt, and
            ginger-garlic paste to ensure deep flavor infusion.
          </p>
          <p>
            Curry leaves, roasted coconut slices, and coconut oil are key for
            the dish’s aroma. Slow-cooking over a wood-fired stove enhances the
            smoky, earthy undertones that define authentic{" "}
            <em>Kerala beef curry</em>.
          </p>
          <p>
            The thick, rich gravy pairs perfectly with Kerala parotta, boiled
            tapioca, or steaming hot rice.
          </p>
        </section>

        {/* Best Places to Taste */}
        <section className="space-y-4 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold">Best Places to Try</h2>
          <p>
            The most authentic Pothumkaal can be found in local eateries and
            homestays in Kalpetta, Meppadi, and Sulthan Bathery. Traditional
            toddy shops also serve it with tapioca and spicy chutneys.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Nutritional Value</h2>
          <p>
            High in protein and iron, Pothumkaal also provides anti-inflammatory
            benefits from turmeric and digestion-boosting properties from black
            pepper.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Cultural Importance</h2>
          <p>
            More than a dish, Pothumkaal is part of Kerala’s food heritage,
            featured in wedding feasts, Onam celebrations, and local fairs.
          </p>
        </section>

        {/* Pairing & Travel Recommendations */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Pairing & Travel Tips
          </h2>
          <p>
            Enjoy Pothumkaal with <em>appam</em>, <em>puttu</em>, or ghee rice.
            Cooking classes in Wayanad offer tourists a chance to learn this
            traditional recipe.
          </p>
          <p>
            Adding Pothumkaal to your Kerala food tour offers an authentic taste
            of the region’s culinary history.
          </p>
        </section>

        {/* Conclusion */}
        <section className="mt-6">
          <p>
            Whether you’re a foodie or traveler, tasting Wayanadan Pothumkaal is
            like savoring a piece of Kerala’s spice-rich culture—aromatic, rich,
            and steeped in tradition.
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
