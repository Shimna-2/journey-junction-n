import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../assets/images/beautiful-vertical-shot-long-mountain-peak-covered-green-grass-perfect-wallpaper.jpg";
import JourneyJunctionPromise from "./JourneyJunctionPromise";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="bg-black bg-opacity-60 p-8 rounded-lg text-center max-w-3xl"
          data-aos="fade-up"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Explore the Top Resorts in{" "}
            <span className="text-green-300">Wayanad</span>
          </h1>
          <p className="mt-4 text-white text-lg font-medium">
            with{" "}
            <span className="text-white font-semibold">Journey Junction</span> —
            your travel partner.
          </p>
        </div>
      </div>

      {/* Journey Junction Promise Section */}
      <JourneyJunctionPromise />
    </>
  );
};

export default Home;
