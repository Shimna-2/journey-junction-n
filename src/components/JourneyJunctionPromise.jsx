import React, { memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const promises = [
  "Luxury resorts with valley views",
  "Budget-friendly eco-stays",
  "Romantic cottages for couples",
  "Adventure trails & hidden waterfalls",
  "Camping beneath starry skies",
  "Sunrise viewpoints & nature walks",
  "Instant WhatsApp bookings",
  "24/7 guest support",
];

const JourneyJunctionPromise = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Why Choose Journey Junction",
    itemListElement: promises.map((promise, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: promise,
    })),
  };

  return (
    <section
      className="relative w-full font-[Poppins] bg-gradient-to-br from-gray-200 to-gray-300 pt-4 px-4 sm:px-8"
      aria-labelledby="why-choose-us-heading"
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Content */}
      <div className="max-w-5xl mx-auto flex flex-col gap-3 pb-8">
        {/* Heading Section */}
        <div
          className="flex flex-col items-center gap-2 mt-4 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2
            id="why-choose-us-heading"
            className="text-2xl sm:text-3xl font-bold text-gray-900"
          >
            Why Choose Us?
          </h2>

          {/* Shorter SEO-friendly intro */}
          <p className="max-w-xl text-gray-700 text-xs sm:text-sm leading-relaxed">
            From luxury resorts to budget-friendly eco-stays, Journey Junction
            offers curated stays that blend comfort, adventure, and exceptional
            service in Wayanad and beyond.
          </p>
        </div>

        {/* Cards */}
        <div
          className="grid gap-4 sm:gap-4 sm:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {promises.map((item, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-delay={400 + index * 100}
              className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 sm:p-4 rounded-lg shadow-md border-l-4 border-gray-900 hover:scale-[1.01] transition-all duration-300 flex items-center gap-2"
            >
              <div
                aria-hidden="true"
                className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-900 text-white text-sm font-bold shadow-sm"
              >
                ✓
              </div>
              <h3 className="text-sm sm:text-base text-gray-900 font-medium">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom wave shape */}
      <div
        className="w-full overflow-hidden leading-none"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="block w-full h-16 sm:h-24"
        >
          <path
            fill="#9ca3af"
            fillOpacity="1"
            d="M0,160L80,149.3C160,139,320,117,480,101.3C640,85,800,75,960,96C1120,117,1280,171,1360,197.3L1440,224L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default memo(JourneyJunctionPromise);
