import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../assets/images/pexels-nandhukumar-450441.jpg";
import JourneyJunctionPromise from "./JourneyJunctionPromise";
// import Weather from "./Weather";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-screen bg-cover bg-center flex items-center justify-start px-8 md:px-16 relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="max-w-2xl text-left  p-6 text-white "
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
            Explore the Top Resorts in{" "}
            <span className="text-green-300">Wayanad</span>
          </h1>
          <p className="mt-4 text-lg font-medium drop-shadow-sm">
            with <span className="font-semibold">Journey Junction</span> — your
            travel partner.
          </p>
        </div>
        {/* <Weather /> */}
      </div>

      {/* Journey Junction Promise */}
      <JourneyJunctionPromise />
    </>
  );
};

export default Home;
