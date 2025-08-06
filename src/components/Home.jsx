import React, { Suspense, lazy, useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

// Hero image
import bgImage from "../assets/images/home-banner.webp";

// Lazy load sections
const JourneyJunctionPromise = lazy(() =>
  import("../components/JourneyJunctionPromise")
);
const TopDestinationsSlider = lazy(() =>
  import("../components/TopDestinationsSlider")
);
const NatureGallery = lazy(() => import("../components/NatureGallery"));
const TopResorts = lazy(() => import("../components/TopResorts"));
const ContactFormOnly = lazy(() => import("../components/ContactFormOnly"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    // Preload hero image in JS as backup
    const img = new Image();
    img.src = bgImage;
    img.loading = "eager";
    img.onload = () => setHeroLoaded(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className={`w-full h-[90vh] sm:h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 font-[Poppins] transition-opacity duration-700 ${
          heroLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "#333",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-extrabold uppercase tracking-widest text-white/30">
            Wayanad
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl">
            Explore the top resorts in <strong>Wayanad</strong> with{" "}
            <span className="font-semibold">Journey Junction</span>
          </p>
        </div>
      </div>

      {/* Sections */}
      <Suspense fallback={null}>
        <JourneyJunctionPromise />
        <TopDestinationsSlider />
        <NatureGallery />
        <TopResorts />
        <ContactFormOnly />
        <Footer />
      </Suspense>

      {/* Sticky WhatsApp & Call */}
      <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919633763916"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+919633763916"
          className="bg-blue-500 p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </>
  );
};

export default Home;
