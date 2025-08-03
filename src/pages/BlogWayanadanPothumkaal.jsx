// src/pages/BlogWayanadanPothumkaal.jsx
import React from "react";
import Footer from "../components/Footer";
import pothumkaal2 from "../assets/images/A dramatic capture of a tender beef shank piece….jpeg";
import pothumkaal5 from "../assets/images/beef3.jpg";
import pothumkaal6 from "../assets/images/beef4.jpeg";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadanPothumkaal() {
  const handleImageError = (e) => (e.target.src = fallbackImage);

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>
          Wayanadan Pothumkaal | Kerala's Iconic Spicy Beef Curry from Wayanad
        </title>
        <meta
          name="description"
          content="Discover the authentic Wayanadan Pothumkaal recipe – Kerala's traditional spicy beef curry from Wayanad. Learn its history, cultural roots, cooking process, and where to taste the best in Wayanad."
        />
        <meta
          name="keywords"
          content="Wayanadan Pothumkaal, Kerala beef curry, Wayanad beef recipe, traditional Kerala food, spicy beef Kerala, beef curry with coconut, Pothumkaal recipe, Wayanad food tourism, Kerala meat dishes"
        />
        <meta name="author" content="Journey Junction" />
      </head>

      <div className="bg-[#fdfaf8] w-full font-serif">
        <article className="max-w-7xl mx-auto pt-28 px-6 lg:px-12 bg-white shadow-xl rounded-xl p-8">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
              Wayanadan Pothumkaal: Kerala's Spicy Beef Curry from the Highlands
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wayanadan Pothumkaal is a traditional beef delicacy slow-cooked
              with coconut and spices in Kerala’s Wayanad region. A must-try for
              food lovers exploring authentic Kerala cuisine and{" "}
              <strong>spicy meat recipes</strong>.
            </p>
          </header>

          {/* Full-width main image */}
          <div className="mb-8">
            <img
              src={pothumkaal2}
              onError={handleImageError}
              alt="Authentic Wayanadan Pothumkaal beef curry served hot"
              className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Intro */}
          <section className="text-lg text-gray-800 leading-relaxed mb-10 space-y-3">
            <p>
              Originating in the lush highlands of{" "}
              <strong>Wayanad, Kerala</strong>, Wayanadan Pothumkaal is more
              than just a dish — it is a celebration of community, tradition,
              and bold flavors. This spicy beef curry combines locally sourced
              beef, roasted coconut, fresh curry leaves, and Kerala’s signature
              spice blend to create a rich and unforgettable taste.
            </p>
            <p>
              This dish is deeply embedded in{" "}
              <strong>Wayanad food tourism</strong>, attracting culinary
              travelers eager to explore authentic{" "}
              <em>Kerala non-vegetarian dishes</em>. Often cooked in{" "}
              <em>urulis</em> (bronze vessels) over firewood, it gains a
              distinct smoky aroma that modern kitchen appliances can rarely
              replicate. Many travelers consider tasting{" "}
              <em>Wayanadan Pothumkaal</em> a culinary highlight of their trip.
            </p>
          </section>

          {/* History & Origins with side image */}
          <section className="grid md:grid-cols-2 gap-6 mb-10 items-center">
            <div>
              <h2 className="text-2xl font-bold">History & Origins</h2>
              <p className="mt-3">
                The history of <strong>Wayanadan Pothumkaal</strong> traces back
                to the tribal and farming communities of Kerala’s Western Ghats.
                Communities such as the <em>Paniya</em> and <em>Kurichiya</em>{" "}
                perfected this recipe over centuries, using homegrown spices
                like black pepper, cardamom, and cinnamon to enhance the flavor.
              </p>
              <p className="mt-3">
                The dish gained popularity during the spice trade era, when
                Portuguese and British influences introduced new ingredients.
                Even today, the best versions are made in small villages where
                the tradition remains untouched.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={pothumkaal6}
                onError={handleImageError}
                alt="Cooking Wayanadan Pothumkaal in traditional uruli"
                className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
          </section>

          {/* Cooking Process (text only now) */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold">Cooking Process</h2>
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
              aromatic. The slow process allows the flavors to develop
              naturally, making each bite a burst of tradition.
            </p>
          </section>

          {/* Additional SEO section with image later */}
          <section className="text-lg text-gray-800 leading-relaxed space-y-4">
            <h2 className="text-2xl font-bold">Best Places to Taste</h2>
            <p>
              For the best <strong>Wayanadan Pothumkaal</strong>, visit local
              eateries and homestays in Kalpetta, Meppadi, and Sulthan Bathery.
              Many <em>toddy shops</em> also serve this dish, pairing it with
              tapioca or Kerala parotta. These small family-run kitchens often
              follow age-old recipes that keep the authenticity alive.
            </p>
            <div className="flex justify-center">
              <img
                src={pothumkaal5}
                onError={handleImageError}
                alt="Serving Wayanadan Pothumkaal on banana leaf"
                className="rounded-xl shadow-lg object-cover w-[85%] aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            <h2 className="text-2xl font-bold">Nutritional Value</h2>
            <p>
              Pothumkaal is rich in protein and iron, while spices like turmeric
              and ginger provide anti-inflammatory benefits. Using lean cuts and
              minimal oil makes it a healthier indulgence for meat lovers.
            </p>

            <h2 className="text-2xl font-bold">Cultural Importance</h2>
            <p>
              Beyond taste, Pothumkaal represents{" "}
              <strong>Kerala’s culinary heritage</strong>. Its preparation is
              often a community event, bringing people together in celebration
              during weddings, harvest festivals, and religious gatherings.
            </p>
          </section>
        </article>

        {/* Footer */}
        <div className="bg-gray-900 text-gray-300">
          <Footer />
        </div>
      </div>
    </>
  );
}
