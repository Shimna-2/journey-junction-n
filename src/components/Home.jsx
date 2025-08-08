import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import bgDesktop from "../assets/images/home-banner.webp";
import bgMobile from "../assets/images/home-banner-mobile.webp";

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
  const sentinelRef = useRef(null);

  /* Debounced resize for less layout thrash */
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

  /* Preload & prioritize hero image */
  useEffect(() => {
    const heroSrc = isMobile ? bgMobile : bgDesktop;

    // Preload hero image
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = heroSrc;
    preloadLink.fetchPriority = "high"; // Chrome LCP optimization
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

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full h-screen relative flex items-center justify-center px-4 sm:px-6 md:px-16 font-[Poppins] bg-[#222] overflow-hidden"
        aria-label="Hero — Wayanad"
      >
        <picture className="absolute inset-0 w-full h-full">
          <source
            srcSet={`${bgMobile} 768w, ${bgDesktop} 1920w`}
            type="image/webp"
            sizes="(max-width: 768px) 100vw, 1920px"
          />
          <img
            src={isMobile ? bgMobile : bgDesktop}
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

      {/* Sentinel for mobile lazy loading */}
      <div ref={sentinelRef} />

      {/* Lazy Sections */}
      {contentReady && (
        <Suspense
          fallback={
            <div
              className="p-8 text-center text-white"
              role="status"
              aria-live="polite"
            >
              Loading content...
            </div>
          }
        >
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
}
