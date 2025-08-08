import React, { Suspense, lazy, useEffect, useState } from "react";

// Hero images (WebP)
import bgImageDesktop from "../assets/images/home-banner.webp";
import bgImageMobile from "../assets/images/home-banner-mobile.webp";

// Lazy sections
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

// Global cache flag so hero doesn't reload on back navigation
let heroImageAlreadyLoaded = false;

const Home = () => {
  const [heroLoaded, setHeroLoaded] = useState(heroImageAlreadyLoaded);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    if (!heroImageAlreadyLoaded) {
      const img = new Image();
      img.src = window.innerWidth <= 768 ? bgImageMobile : bgImageDesktop;
      img.loading = "eager";
      img.decoding = "sync";
      img.onload = () => {
        heroImageAlreadyLoaded = true;
        setHeroLoaded(true);

        if (window.innerWidth > 768) {
          setContentReady(true); // Desktop → load immediately
        }
      };
    } else {
      setHeroLoaded(true);
      if (window.innerWidth > 768) {
        setContentReady(true);
      }
    }

    // Mobile → lazy load sections on scroll
    if (window.innerWidth <= 768) {
      const onScroll = () => {
        setContentReady(true);
        window.removeEventListener("scroll", onScroll);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className={`w-full h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 font-[Poppins] transition-opacity duration-300 ${
          heroLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${
            window.innerWidth <= 768 ? bgImageMobile : bgImageDesktop
          })`,
          backgroundColor: "#222", // Dark placeholder
        }}
      >
        {/* Responsive preload image (hidden but ensures srcset works) */}
        <img
          src={bgImageDesktop}
          srcSet={`${bgImageMobile} 768w, ${bgImageDesktop} 1920w`}
          sizes="(max-width: 768px) 100vw, 1920px"
          alt="Wayanad Banner"
          loading="eager"
          decoding="sync"
          className="hidden"
        />

        {/* Hero Text */}
        <div className="text-center text-white">
          <h1
            className="hero-title text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-extrabold uppercase tracking-widest text-white/30"
            style={{
              textShadow:
                window.innerWidth > 768
                  ? "0px 2px 8px rgba(0,0,0,0.5)"
                  : "none",
            }}
          >
            Wayanad
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl">
            Explore the top resorts in <strong>Wayanad</strong> with{" "}
            <span className="font-semibold">Journey Junction</span>
          </p>
        </div>
      </div>

      {/* Lazy load sections */}
      {contentReady && (
        <Suspense fallback={null}>
          <JourneyJunctionPromise />
          <TopDestinationsSlider />
          <NatureGallery />
          <TopResorts />
          <ContactFormOnly />
          <Footer />
        </Suspense>
      )}
    </>
  );
};

export default Home;
