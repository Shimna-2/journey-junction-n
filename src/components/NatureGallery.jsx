import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation
import morskieOko from "../assets/images/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background.jpg";

export default function NatureGalleryStyle3() {
  const [isDesktop, setIsDesktop] = useState(true);
  const navigate = useNavigate(); // ✅ Initialize navigate

  // Detect screen size to toggle backgroundAttachment for mobile performance
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      role="region"
      aria-labelledby="nature-gallery-heading"
      className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${morskieOko})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isDesktop ? "fixed" : "scroll",
        backgroundColor: "#333",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Motion Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        viewport={{ once: true, amount: 0.4 }}
        className="relative bg-gradient-to-br from-white to-gray-100 p-6 sm:p-8 shadow-xl max-w-lg sm:max-w-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        style={{
          clipPath: "polygon(0 0, 95% 0, 100% 10%, 100% 100%, 5% 100%, 0 90%)",
        }}
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800"></div>

        {/* Heading */}
        <motion.h2
          id="nature-gallery-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight font-[Playfair Display]"
        >
          Reconnect with Nature
        </motion.h2>

        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 leading-relaxed font-[Poppins]"
        >
          Escape to Wayanad’s misty hills and handpicked stays — where nature
          meets comfort
        </motion.h4>

        {/* Book Now Button */}
        <motion.button
          onClick={() => navigate("/booknow")} // ✅ Navigation added
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="px-5 sm:px-6 py-2 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 transition-all text-sm sm:text-base"
          aria-label="Book a stay in Wayanad"
        >
          Book Now
        </motion.button>
      </motion.div>

      {/* Google Fonts */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@400;500&display=swap");
      `}</style>
    </section>
  );
}
