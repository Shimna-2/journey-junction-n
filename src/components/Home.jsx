// src/pages/Home.jsx
import React, { Suspense, lazy, useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/images/home-banner.webp";

// Lazy-load heavy components
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

  // Preload hero image with high priority
  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.fetchPriority = "high";
    img.loading = "eager";
    img.onload = () => setHeroLoaded(true);
  }, []);

  // Show loading screen until hero image loads
  if (!heroLoaded) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-[Poppins]"
        role="status"
        aria-label="Loading Journey Junction website content"
      >
        {/* Spinner */}
        <div className="w-20 h-20 border-4 border-white/30 border-t-green-400 rounded-full animate-spin"></div>

        {/* Brand name */}
        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide animate-pulse">
          Journey Junction
        </h1>

        <span className="sr-only">Loading content, please wait</span>
      </div>
    );
  }

  return (
    <>
      {/* Preconnect Fonts */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Preload only the hero image */}
      <link rel="preload" as="image" href={bgImage} fetchPriority="high" />

      {/* Hero Section */}
      <div
        className="w-full h-[90vh] sm:h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 relative font-[Poppins]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "#333",
        }}
        role="img"
        aria-label="Scenic Wayanad landscape view"
      >
        <div
          className="relative z-10 text-center text-white"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h1 className="text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-extrabold uppercase tracking-widest text-white/30 leading-none drop-shadow-xl break-words">
            Wayanad
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-medium drop-shadow-sm max-w-xl mx-auto px-4">
            Explore the top resorts in <strong>Wayanad</strong> with{" "}
            <span className="font-semibold">Journey Junction</span>
          </p>
        </div>
      </div>

      {/* Sections */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen bg-black text-white">
            Loading content...
          </div>
        }
      >
        <div data-aos="fade-right" data-aos-delay="200">
          <JourneyJunctionPromise />
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <TopDestinationsSlider />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <NatureGallery />
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <TopResorts />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <ContactFormOnly />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <Footer />
        </div>
      </Suspense>

      {/* Sticky WhatsApp & Call */}
      <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919633763916"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+919633763916"
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Call us directly"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </>
  );
};

export default Home;
