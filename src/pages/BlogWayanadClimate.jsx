// src/pages/BlogWayanadanPothumkaal.jsx
import React from "react";
import Footer from "../components/Footer";
import pothumkaal2 from "../assets/images/blgpothumkaalimg1.webp";
import pothumkaal5 from "../assets/images/blogpothumkaal2.webp";
import pothumkaal6 from "../assets/images/blgpothumkaal1.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadanPothumkaal() {
  return (
    <div className="bg-[#fdfaf8] w-full font-sans">
      <article className="max-w-7xl mx-auto pt-20 sm:pt-28 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-6 sm:p-8">
        {/* Header */}
        <header className="mb-8 text-center max-w-prose mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Wayanadan Pothumkaal: Kerala's Spicy Beef Curry from the Highlands
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Wayanadan Pothumkaal is a traditional beef delicacy slow-cooked with
            coconut and spices in Kerala’s Wayanad region. A must-try for food
            lovers exploring authentic Kerala cuisine and{" "}
            <strong>spicy meat recipes</strong>.
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
            alt="Authentic Wayanadan Pothumkaal beef curry served hot"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed mb-10 space-y-3 max-w-prose mx-auto">
          <p>
            Originating in the lush highlands of{" "}
            <strong>Wayanad, Kerala</strong>, Wayanadan Pothumkaal is more than
            just a dish — it is a celebration of community, tradition, and bold
            flavors. This spicy beef curry combines locally sourced beef,
            roasted coconut, fresh curry leaves, and Kerala’s signature spice
            blend to create a rich and unforgettable taste.
          </p>
          <p>
            This dish is deeply embedded in{" "}
            <strong>Wayanad food tourism</strong>, attracting culinary travelers
            eager to explore authentic <em>Kerala non-vegetarian dishes</em>.
            Often cooked in <em>urulis</em> (bronze vessels) over firewood, it
            gains a distinct smoky aroma that modern kitchen appliances can
            rarely replicate.
          </p>
        </section>

        {/* History & Origins with image */}
        <section className="grid md:grid-cols-2 gap-6 mb-10 items-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">History & Origins</h2>
            <p className="mt-3">
              The history of <strong>Wayanadan Pothumkaal</strong> traces back
              to the tribal and farming communities of Kerala’s Western Ghats.
              Communities such as the <em>Paniya</em> and <em>Kurichiya</em>{" "}
              perfected this recipe over centuries, using homegrown spices like
              black pepper, cardamom, and cinnamon to enhance the flavor.
            </p>
            <p className="mt-3">
              The dish gained popularity during the spice trade era, when
              Portuguese and British influences introduced new ingredients. Even
              today, the best versions are made in small villages where the
              tradition remains untouched.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={pothumkaal6}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Cooking Wayanadan Pothumkaal in traditional uruli"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Cooking Process */}
        <section className="mb-10 max-w-prose mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold">Cooking Process</h2>
          <p className="mt-3">
            Authentic preparation starts by marinating tender beef cuts with
            crushed black pepper, coriander, turmeric, chili powder, and
            ginger-garlic paste. Fresh curry leaves and coconut oil are
            essential for the signature aroma.
          </p>
          <p className="mt-3">
            After slow cooking until tender, the beef is roasted with
            firewood-smoked spices and coconut slices, creating a deeply
            flavored <em>Kerala beef curry</em> that is spicy, rich, and
            aromatic.
          </p>
        </section>

        {/* Best Places to Taste */}
        <section className="text-base sm:text-lg text-gray-800 leading-relaxed space-y-4 max-w-prose mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold">
            Best Places to Taste
          </h2>
          <p>
            For the best <strong>Wayanadan Pothumkaal</strong>, visit local
            eateries and homestays in Kalpetta, Meppadi, and Sulthan Bathery.
            Many <em>toddy shops</em> also serve this dish, pairing it with
            tapioca or Kerala parotta.
          </p>
          <div className="flex justify-center">
            <img
              src={pothumkaal5}
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Serving Wayanadan Pothumkaal on banana leaf"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold">Nutritional Value</h2>
          <p>
            Pothumkaal is rich in protein and iron, while spices like turmeric
            and ginger provide anti-inflammatory benefits.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold">Cultural Importance</h2>
          <p>
            Beyond taste, Pothumkaal represents{" "}
            <strong>Kerala’s culinary heritage</strong>. Its preparation is
            often a community event, bringing people together during weddings,
            harvest festivals, and religious gatherings.
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
