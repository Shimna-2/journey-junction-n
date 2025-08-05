// src/pages/BlogWayanadanPothumkaal.jsx
import React from "react";
import Footer from "../components/Footer";
import pothumkaal2 from "../assets/images/blgpothumkaalimg1.webp";
import pothumkaal5 from "../assets/images/blgpothumkaal1.webp";
import pothumkaal6 from "../assets/images/blogpothumkaal2.webp";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadanPothumkaal() {
  return (
    <div className="bg-[#fdfaf8] w-full font-[Poppins]">
      <article className="max-w-7xl mx-auto pt-28 px-4 sm:px-6 lg:px-12 bg-white shadow-xl rounded-xl p-6 sm:p-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3">
            Wayanadan Pothumkaal: Kerala's Spicy Beef Curry from the Highlands
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Wayanadan Pothumkaal is a traditional beef delicacy slow-cooked with
            coconut, curry leaves, and aromatic spices in Kerala’s Wayanad
            region. A must-try for food lovers exploring{" "}
            <strong>authentic Kerala cuisine</strong> and{" "}
            <strong>spicy meat recipes</strong>.
          </p>
        </header>

        {/* Main Image */}
        <div className="mb-8">
          <img
            src={pothumkaal2}
            loading="lazy"
            decoding="async"
            onError={(e) => (e.target.src = fallbackImage)}
            alt="Authentic Wayanadan Pothumkaal beef curry served hot"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro */}
        <section className="text-sm sm:text-base text-gray-800 leading-relaxed mb-10 space-y-3">
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

        {/* History & Origins */}
        <section className="grid md:grid-cols-2 gap-6 mb-10 items-center">
          <div>
            <h2 className="text-lg sm:text-xl font-bold">History & Origins</h2>
            <p className="mt-3 text-sm sm:text-base">
              The history of <strong>Wayanadan Pothumkaal</strong> traces back
              to the tribal and farming communities of Kerala’s Western Ghats.
              Communities such as the <em>Paniya</em> and <em>Kurichiya</em>{" "}
              perfected this recipe over centuries, using homegrown spices like
              black pepper, cardamom, and cinnamon to enhance the flavor.
            </p>
            <p className="mt-3 text-sm sm:text-base">
              The dish gained prominence during Kerala’s spice trade era, when
              Portuguese and British traders influenced cooking methods. Today,
              it is still prepared in rural kitchens with minimal alterations,
              preserving its authenticity.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={pothumkaal6}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Cooking Wayanadan Pothumkaal in traditional uruli"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </section>

        {/* Cooking Process */}
        <section className="mb-10">
          <h2 className="text-lg sm:text-xl font-bold">Cooking Process</h2>
          <p className="mt-3 text-sm sm:text-base">
            The authentic preparation begins by marinating beef with freshly
            ground black pepper, coriander, turmeric, Kashmiri chili powder,
            rock salt, and ginger-garlic paste. This step allows the flavors to
            penetrate deep into the meat.
          </p>
          <p className="mt-3 text-sm sm:text-base">
            Fresh curry leaves, roasted coconut slices, and coconut oil are
            essential for the dish’s signature aroma. The slow-cooking process,
            often on a wood-fired stove, enhances the smoky, earthy undertones
            that define traditional <em>Kerala beef curry</em>.
          </p>
          <p className="mt-3 text-sm sm:text-base">
            Once cooked to perfection, the curry develops a thick, dark gravy
            that pairs beautifully with Kerala parotta, boiled tapioca, or
            steaming hot rice.
          </p>
        </section>

        {/* Best Places to Taste */}
        <section className="text-sm sm:text-base text-gray-800 leading-relaxed space-y-4">
          <h2 className="text-lg sm:text-xl font-bold">Best Places to Taste</h2>
          <p>
            For the most authentic <strong>Wayanadan Pothumkaal</strong>,
            explore local eateries and homestays in Kalpetta, Meppadi, and
            Sulthan Bathery. Traditional toddy shops often serve this dish with
            freshly made tapioca and spicy chutneys.
          </p>
          <div className="flex justify-center">
            <img
              src={pothumkaal5}
              loading="lazy"
              decoding="async"
              onError={(e) => (e.target.src = fallbackImage)}
              alt="Serving Wayanadan Pothumkaal on banana leaf"
              className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
            />
          </div>

          <h2 className="text-lg sm:text-xl font-bold">Nutritional Value</h2>
          <p>
            High in protein and iron, Pothumkaal also offers health benefits
            from spices like turmeric, which has anti-inflammatory properties,
            and black pepper, known to aid digestion.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Cultural Importance</h2>
          <p>
            More than just a dish, Pothumkaal plays a role in{" "}
            <strong>Kerala’s food heritage</strong>. It is a staple at wedding
            feasts, harvest festivals like Onam, and local fairs. Cooking it is
            often a collective effort involving family and neighbors, making it
            a symbol of community bonding.
          </p>
        </section>

        {/* Extra SEO Section */}
        <section className="mt-8 text-sm sm:text-base text-gray-700 leading-relaxed space-y-3">
          <h2 className="text-lg sm:text-xl font-bold">
            Pairing & Travel Recommendations
          </h2>
          <p>
            The dish pairs wonderfully with Kerala-style accompaniments such as
            <em> appam</em>, <em>puttu</em>, or fluffy ghee rice. Food lovers
            visiting Wayanad can join local cooking classes to learn the
            traditional preparation method.
          </p>
          <p>
            Including Pothumkaal in your <strong>Kerala food tour</strong> is a
            must for an authentic cultural experience. Its preparation reflects
            centuries of culinary wisdom passed down through generations.
          </p>
        </section>

        {/* Closing SEO Paragraph */}
        <section className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed">
          <p>
            Whether you are a curious traveler or a passionate foodie, tasting
            Wayanadan Pothumkaal is like savoring a piece of{" "}
            <strong>Kerala’s culinary history</strong>. Rich, aromatic, and full
            of tradition, it is a dish that captures the soul of Wayanad’s
            spice-rich culture.
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
