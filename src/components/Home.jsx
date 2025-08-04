import React, { useEffect, Suspense, lazy } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import bgImage from "../assets/images/cloud-forest-landscape.jpg";

// Lazy-load heavy components
const JourneyJunctionPromise = lazy(() => import("./JourneyJunctionPromise"));
const TopDestinationsSlider = lazy(() => import("./TopDestinationsSlider"));
const NatureGallery = lazy(() => import("./NatureGallery"));
const TopResorts = lazy(() => import("./TopResorts"));
const ContactFormOnly = lazy(() => import("./ContactFormOnly"));
const Footer = lazy(() => import("./Footer"));

const Home = () => {
  useEffect(() => {
    try {
      AOS.init({
        duration: 1200,
        easing: "ease-in-out", // Smooth easing
        once: true, // Only animate once
        offset: 100, // Start animation a bit earlier
      });
    } catch (error) {
      console.error("AOS initialization failed:", error);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-[90vh] sm:h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: "#333",
        }}
      >
        <div className="absolute inset-0 z-0" />
        <div
          className="relative z-10 text-center text-white"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h1
            className="text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-extrabold uppercase tracking-widest text-white/30 leading-none drop-shadow-xl break-words"
            aria-label="Wayanad"
          >
            Wayanad
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-medium drop-shadow-sm font-[Merriweather] max-w-xl mx-auto px-4">
            Explore the top resorts in <strong>Wayanad</strong> with{" "}
            <span className="font-semibold">Journey Junction</span>
          </p>
        </div>
      </div>

      {/* Sections with alternating smooth flow */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
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
          className="bg-green-300 hover:bg-green-400 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="tel:+919633763916"
          className="bg-blue-300 hover:bg-blue-400 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        >
          <FaPhoneAlt size={24} />
        </a>
      </div>
    </>
  );
};

export default Home;
