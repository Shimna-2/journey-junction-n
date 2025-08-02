import React, { useEffect, useState, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgImage from "../assets/images/sunset.jpg";

const promises = [
  "Luxury resorts with valley views",
  "Budget-friendly eco-stays",
  "Romantic cottages for couples",
  "Adventure trails & waterfalls",
  "Camping beneath starry skies",
  "Instant WhatsApp bookings",
  "24/7 guest support",
  "Local spice garden tours",
];

const JourneyJunctionPromise = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Why Choose Journey Junction?";

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
    });

    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(typingInterval);
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center bg-center bg-cover relative p-6 sm:p-10"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundColor: bgImage ? "transparent" : "#444",
          backgroundAttachment: window.innerWidth > 768 ? "fixed" : "scroll",
          minHeight: "50vh",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="relative z-10 text-center md:text-left"
          data-aos="fade-up"
        >
          <h2 className="typing-heading text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide leading-tight">
            {displayedText}
            <span className="cursor">|</span>
          </h2>
        </div>
      </div>

      {/* Right Side */}
      <div
        className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center gap-4 sm:gap-6"
        style={{
          background: "linear-gradient(135deg, #e8e8e8, #cfcfcf)",
        }}
      >
        {promises.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="promise-card relative rounded-xl px-5 py-3 flex items-center gap-4 shadow-lg hover:shadow-xl transition-transform hover:scale-[1.02] bg-white/90 backdrop-blur-md border border-gray-200"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 text-white font-bold shadow">
              ✓
            </div>
            <p className="text-sm sm:text-base font-medium text-gray-800">
              {item}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .typing-heading {
          font-family: "Playfair Display", serif;
        }
        .cursor {
          display: inline-block;
          width: 2px;
          background: white;
          animation: blink 0.8s infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default memo(JourneyJunctionPromise);
