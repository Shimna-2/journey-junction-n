import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../assets/images/cloud-forest-landscape.jpg";
import JourneyJunctionPromise from "./JourneyJunctionPromise";

import TopDestinationsSlider from "./TopDestinationsSlider";
import NatureGallery from "./NatureGallery";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-16 relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Main content */}
        <div
          className="relative z-10 text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="text-[80px] sm:text-[64px] md:text-[120px] font-extrabold uppercase tracking-widest text-white/30 leading-none drop-shadow-xl">
            Wayanad
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium drop-shadow-sm font-[Merriweather]">
            Explore the top resorts in <strong>Wayanad</strong> with{" "}
            <span className="font-semibold">Journey Junction</span>
          </p>
        </div>
      </div>

      {/* Additional Components */}
      <JourneyJunctionPromise />
      <TopDestinationsSlider />
      <NatureGallery />
    </>
  );
};

export default Home;
