// src/pages/BlogWayanadanPothumkaal.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import pothumkaal2 from "../assets/images/pothumkaal2.jpeg";
import pothumkaal5 from "../assets/images/pothumkaal5.jpeg";
import pothumkaal6 from "../assets/images/pothumkaal6.jpeg";

const fallbackImage =
  "https://via.placeholder.com/800x500?text=Image+Not+Available";

export default function BlogWayanadanPothumkaal() {
  const handleImageError = (e) => (e.target.src = fallbackImage);

  return (
    <div className="bg-[#fdfaf8] w-full font-serif">
      <Helmet>
        <title>
          Wayanadan Pothumkaal | Kerala's Iconic Spicy Beef Tradition
        </title>
        <meta
          name="description"
          content="Wayanadan Pothumkaal is Kerala’s iconic spicy beef delicacy from Wayanad. Learn its history, cultural roots, authentic recipe, preparation techniques, modern variations, and the best places to taste it in Wayanad."
        />
        <meta
          name="keywords"
          content="Wayanadan Pothumkaal, Kerala beef curry, Wayanad beef recipe, traditional Kerala food, spicy beef Kerala, beef curry with coconut, Pothumkaal recipe, Wayanad food tourism, best beef dishes Kerala"
        />
        <meta name="author" content="Journey Junction" />
      </Helmet>

      <article className="max-w-7xl mx-auto pt-32 px-6 lg:px-12 bg-white shadow-xl rounded-xl p-8">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Wayanadan Pothumkaal: Kerala's Spicy Beef Delight from the Highlands
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dive into the aromatic world of Wayanadan Pothumkaal — a legendary
            Kerala beef curry slow-cooked with coconut, fiery spices, and love.
            A symbol of Wayanad’s rich culinary heritage, it is a must-try for
            food lovers visiting Kerala.
          </p>
        </header>

        {/* Full-width image */}
        <div className="mb-14">
          <img
            src={pothumkaal2}
            onError={handleImageError}
            alt="Wayanadan Pothumkaal served hot with Kerala rice"
            className="rounded-xl shadow-xl object-cover w-full aspect-[16/9] hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Intro */}
        <section className="text-lg text-gray-800 leading-relaxed mb-16 space-y-4">
          <p>
            Originating in the mist-shrouded hills of Wayanad,{" "}
            <strong>Wayanadan Pothumkaal</strong> is much more than a delicious
            beef curry — it is a culinary tradition passed down through
            generations. Known for its rich, smoky aroma and deep, spicy flavor,
            this dish captures the essence of Kerala’s love for bold spices,
            fresh coconut, and slow cooking.
          </p>
          <p>
            Traditionally prepared during weddings, harvest celebrations, and
            major festivals like <em>Onam</em> and <em>Christmas</em>,
            Pothumkaal unites families and friends around long dining tables or
            banana leaves. The dish is cooked in large vessels called{" "}
            <em>urulis</em>, often over firewood, which gives it a signature
            earthy depth of flavor that is hard to replicate on modern
            stovetops.
          </p>
        </section>

        {/* Side-by-side images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <img
            src={pothumkaal5}
            onError={handleImageError}
            alt="Cooking Pothumkaal over traditional firewood"
            className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
          />
        </div>

        {/* Main Content */}
        <section className="text-lg text-gray-800 leading-relaxed space-y-6">
          <h2 className="text-2xl font-bold">History & Origins</h2>
          <p>
            The history of <strong>Wayanadan Pothumkaal</strong> is deeply
            rooted in the agricultural and tribal traditions of Kerala’s Western
            Ghats. Communities such as the <em>Paniya</em> and{" "}
            <em>Kurichiya</em> have been preparing variations of this dish for
            centuries, using locally sourced beef, wild spices, and fresh
            coconut from their own farms.
          </p>
          <p>
            During the Portuguese spice trade era, black pepper, cloves, and
            cinnamon became more prominent in Kerala’s kitchens. These spices
            were integrated into the Pothumkaal recipe, enriching its flavor
            profile. Later, British influence introduced modern cooking vessels,
            but many in Wayanad still prefer traditional clay pots or bronze
            urulis for the authentic taste.
          </p>

          <h2 className="text-2xl font-bold">
            Cultural Significance & Festivals
          </h2>
          <p>
            Pothumkaal is considered a dish of celebration. It is often prepared
            in bulk for community gatherings, with each household contributing
            ingredients like coconut, curry leaves, or spices. At{" "}
            <em>Onam Sadya</em> in Wayanad’s Christian and Muslim communities,
            this dish often makes a surprise appearance alongside vegetarian
            delicacies.
          </p>
          <p>
            Weddings in Wayanad are incomplete without Pothumkaal served with
            fluffy Kerala parottas or ghee rice. The preparation process itself
            becomes a social event, with family members chopping vegetables,
            grating coconut, and grinding spices together.
          </p>

          <h2 className="text-2xl font-bold">Step-by-Step Cooking Process</h2>
          <p>
            Authentic Pothumkaal begins with carefully selecting tender beef
            cuts. The meat is marinated with crushed black pepper, coriander
            powder, turmeric, ginger-garlic paste, and a generous amount of
            chili powder. Fresh curry leaves and coconut oil are non-negotiable
            for the signature aroma.
          </p>
          <p>
            The cooking is slow and deliberate — the beef is first pressure
            cooked or simmered until tender, then roasted with a masala blend
            that includes dry-roasted coconut slices. In rural Wayanad, this is
            still done on firewood, lending a subtle smokiness to the dish.
          </p>

          <img
            src={pothumkaal6}
            onError={handleImageError}
            alt="Serving Wayanadan Pothumkaal on banana leaf"
            className="rounded-xl shadow-lg object-cover w-full aspect-[4/3] hover:scale-[1.03] transition-transform duration-500"
          />

          <h2 className="text-2xl font-bold">
            Where to Taste the Best Pothumkaal in Wayanad
          </h2>
          <p>
            If you want to taste the best <strong>Pothumkaal</strong>, skip the
            big city restaurants and head to local eateries and homestays in
            Wayanad. Areas like Kalpetta, Meppadi, and Sulthan Bathery are known
            for small family-run kitchens that serve this dish fresh. Some
            popular toddy shops also offer an unforgettable pairing of
            Pothumkaal with tapioca or <em>puttu</em>.
          </p>

          <h2 className="text-2xl font-bold">
            Nutritional and Health Information
          </h2>
          <p>
            While indulgent, Pothumkaal can be nutritious when prepared with
            lean cuts of beef. It is high in protein, rich in iron, and contains
            healthy fats from coconut. The spices — especially turmeric, pepper,
            and ginger — have anti-inflammatory and digestive benefits.
          </p>

          <h2 className="text-2xl font-bold">
            Modern Variations & Global Influence
          </h2>
          <p>
            Chefs have reimagined Pothumkaal in creative ways — from beef tacos
            infused with Kerala spices to pasta tossed with Pothumkaal masala.
            Vegetarian versions use mushrooms, jackfruit, or tofu to mimic the
            texture while retaining the authentic spice profile.
          </p>

          <h2 className="text-2xl font-bold">
            Sustainable Practices & Support for Local Farmers
          </h2>
          <p>
            Sourcing ingredients locally is key to maintaining the authenticity
            of Pothumkaal. Many households in Wayanad grow their own curry
            leaves, chilies, and coconuts. By choosing locally sourced beef and
            organic spices, the dish supports small farmers and promotes
            sustainable food practices.
          </p>

          <h2 className="text-2xl font-bold">Looking Ahead</h2>
          <p>
            As culinary tourism in Kerala grows, Pothumkaal is gaining attention
            from food enthusiasts worldwide. Cooking classes and guided food
            tours in Wayanad now feature this dish as a highlight, helping
            preserve its legacy while introducing it to new audiences.
          </p>
        </section>
      </article>

      {/* Footer */}
      <div className="bg-gray-900 text-gray-300">
        <Footer />
      </div>
    </div>
  );
}
