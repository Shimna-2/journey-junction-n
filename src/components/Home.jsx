import React, { Suspense, lazy, useEffect, useState, useRef } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

// Hero image & placeholder
import bgImage from "../assets/images/home-banner.webp";
const bgPlaceholder =
  "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IDAAAABQAgCdASoEAAQAAVAfJZgCdADdAAA/v+...";

// Section images
import soochipara from "../assets/images/soochipara.webp";
import pookodelake from "../assets/images/pookodelake.webp";
import karapuuzha from "../assets/images/karapuuzha.webp";
import enooru from "../assets/images/enooru.webp";
import edakkal from "../assets/images/edakkalcaves.webp";
import chembrapeak from "../assets/images/chembrapeak.webp";

const preloadImages = [
  soochipara,
  pookodelake,
  karapuuzha,
  enooru,
  edakkal,
  chembrapeak,
];

// Lazy-load sections
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
  const [heroSrc, setHeroSrc] = useState(bgPlaceholder);
  const imagesLoadedRef = useRef(false);

  // Load hero first
  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.fetchPriority = "high";
    img.loading = "eager";
    img.onload = () => {
      setHeroSrc(bgImage);
      setHeroLoaded(true);
    };
  }, []);

  // Smooth preload section images AFTER page is interactive
  useEffect(() => {
    if (!imagesLoadedRef.current) {
      const loadImages = () => {
        preloadImages.forEach((src) => {
          const img = new Image();
          img.src = src;
        });
        imagesLoadedRef.current = true;
      };

      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadImages);
      } else {
        setTimeout(loadImages, 200); // Fallback for browsers without requestIdleCallback
      }
    }
  }, []);

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

      {/* Preload hero */}
      <link rel="preload" as="image" href={bgImage} fetchPriority="high" />

      {/* Hero Section */}
      <div
        className={`w-full h-[90vh] sm:h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 relative font-[Poppins] transition-opacity duration-700 ${
          heroLoaded ? "opacity-100" : "opacity-80 blur-sm"
        }`}
        style={{
          backgroundImage: `url(${heroSrc})`,
          backgroundColor: "#333",
        }}
      >
        <div
          className="relative z-10 text-center text-white"
          data-aos="fade-down"
        >
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
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="w-16 h-16 border-4 border-white/30 border-t-green-400 rounded-full animate-spin"></div>
            <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold animate-pulse tracking-wider">
              Journey Junction
            </h1>
          </div>
        }
      >
        <div data-aos="fade-right">
          <JourneyJunctionPromise />
        </div>
        <div data-aos="fade-left">
          <TopDestinationsSlider />
        </div>
        <div data-aos="fade-right">
          <NatureGallery />
        </div>
        <div data-aos="fade-left">
          <TopResorts />
        </div>
        <div data-aos="fade-right">
          <ContactFormOnly />
        </div>
        <div data-aos="fade-up">
          <Footer />
        </div>
      </Suspense>

      {/* Sticky WhatsApp & Call */}
      <div className="fixed bottom-5 left-5 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/919633763916"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full"
        >
          <FaWhatsapp size={24} />
        </a>
        <a href="tel:+919633763916" className="bg-blue-500 p-3 rounded-full">
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </>
  );
};

export default Home;
