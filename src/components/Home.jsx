import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import bgDesktop from "../assets/images/home-banner.webp";
import bgMobile from "../assets/images/home-banner-mobile.webp";
import placeholderDesktop from "../assets/images/home-banner-placeholder.webp";
import placeholderMobile from "../assets/images/home-banner-placeholder-mobile.webp";

/* Lazy components - non-critical below the fold */
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

let heroImageAlreadyLoaded = false;

export default function Home() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 768 : true
  );
  const [heroLoaded, setHeroLoaded] = useState(heroImageAlreadyLoaded);
  const [contentReady, setContentReady] = useState(false);
  const [showStickyIcons, setShowStickyIcons] = useState(false);

  const sentinelRef = useRef(null);
  const heroRef = useRef(null);

  /* Debounced resize */
  useEffect(() => {
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* Preload hero image */
  useEffect(() => {
    const heroSrc = isMobile ? bgMobile : bgDesktop;

    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = heroSrc;
    preloadLink.fetchPriority = "high";
    document.head.appendChild(preloadLink);

    if (!heroImageAlreadyLoaded) {
      const img = new Image();
      img.src = heroSrc;
      img.decoding = "async";
      img.loading = "eager";
      img.onload = () => {
        heroImageAlreadyLoaded = true;
        setHeroLoaded(true);
        if (!isMobile) setContentReady(true);
      };
      img.onerror = () => {
        heroImageAlreadyLoaded = true;
        setHeroLoaded(true);
        if (!isMobile) setContentReady(true);
      };
    } else {
      setHeroLoaded(true);
      if (!isMobile) setContentReady(true);
    }

    return () => {
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, [isMobile]);

  /* Mobile: load sections only when visible */
  useEffect(() => {
    if (isMobile && "IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            setContentReady(true);
            io.disconnect();
          }
        },
        { rootMargin: "200px" }
      );
      if (sentinelRef.current) io.observe(sentinelRef.current);
      return () => io.disconnect();
    }
  }, [isMobile]);

  /* Show sticky icons only when hero section is NOT visible */
  useEffect(() => {
    if ("IntersectionObserver" in window && heroRef.current) {
      const io = new IntersectionObserver(
        (entries) => {
          // show icons only when hero is NOT intersecting
          setShowStickyIcons(!entries[0].isIntersecting);
        },
        { threshold: 0 } // triggers as soon as any part is out of view
      );
      io.observe(heroRef.current);
      return () => io.disconnect();
    }
  }, []);

  const placeholderSrc = isMobile ? placeholderMobile : placeholderDesktop;
  const heroSrc = isMobile ? bgMobile : bgDesktop;

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="w-full h-screen relative flex items-center justify-center px-4 sm:px-6 md:px-16 font-[Poppins] bg-[#222] overflow-hidden"
        aria-label="Hero — Wayanad"
      >
        {/* Placeholder background */}
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-out ${
            heroLoaded
              ? "opacity-0 scale-105 blur-sm"
              : "opacity-100 scale-100 blur-none"
          } animate-kenburns`}
        />

        {/* Main hero image */}
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet={`${bgMobile} 768w, ${bgDesktop} 1920w`}
            type="image/webp"
            sizes="(max-width: 768px) 100vw, 1920px"
          />
          <img
            src={heroSrc}
            alt="Wayanad scenic landscape banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              heroLoaded ? "opacity-100" : "opacity-0"
            }`}
            width="1920"
            height="1080"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>

        {/* Hero Text */}
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="hero-title text-[36px] sm:text-[60px] md:text-[100px] lg:text-[120px] font-extrabold uppercase tracking-widest text-white/30"
            style={{
              textShadow: !isMobile ? "0px 2px 8px rgba(0,0,0,0.5)" : "none",
            }}
          >
            Wayanad
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg lg:text-xl">
            Explore the top resorts in <strong>Wayanad</strong> with{" "}
            <span className="font-semibold">Journey Junction</span>
          </p>
        </div>
      </section>

      {/* Sticky Icons - appear only after hero section */}
      {showStickyIcons && (
        <div className="fixed left-4 bottom-4 flex flex-col gap-3 z-50">
          <a
            href="https://wa.me/919633763916"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="tel:+919633763916"
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            aria-label="Call Us"
          >
            <FaPhoneAlt size={20} />
          </a>
        </div>
      )}

      {/* Sentinel for mobile lazy loading */}
      <div ref={sentinelRef} />

      {/* Lazy Sections */}
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

      {/* Ken Burns animation */}
      <style jsx>{`
        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.05) translate(0, 0);
          }
        }
        .animate-kenburns {
          animation: kenburns 10s ease-in-out infinite alternate;
        }
      `}</style>
    </>
  );
}
