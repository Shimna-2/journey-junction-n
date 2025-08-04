import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle, FaUsers, FaGlobe, FaLightbulb } from "react-icons/fa";
import ContactUs from "./ContactUs";
import Footer from "./Footer"; // ✅ Import Footer

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      title: "Verified Resorts & Villas",
      desc: "We handpick every property for safety, comfort, and exceptional experiences. Enjoy a vacation you can trust.",
    },
    {
      title: "Custom Packages",
      desc: "Flexible, curated travel plans for families, friends, and couples to make your trip truly yours.",
    },
    {
      title: "Unique Stays",
      desc: "Discover breathtaking stays like luxury domes, private treehouses, poolside cottages, and hidden gems.",
    },
    {
      title: "Local Support",
      desc: "Our 24/7 dedicated support ensures you're never alone—assistance is just a call away.",
    },
    {
      title: "Best Rates Guaranteed",
      desc: "No hidden fees, only the best value. We promise great prices without sacrificing quality or comfort.",
    },
    {
      title: "Eco‑Friendly Practices",
      desc: "We care about nature. Our partners follow sustainable practices to protect the environment while offering comfort.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 border-gray-600  to-gray-50 text-gray-800">
      {/* Page Content */}
      <main className="flex-1 px-4 sm:px-6 md:px-20 py-10 sm:py-20">
        {/* Mission, Vision, Story */}
        {/* Mission, Vision, Story */}
        <section
          className="bg-white shadow-xl rounded-3xl p-8 sm:p-12 mb-16"
          data-aos="fade-up"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-10">
            Our Mission, Vision & Story
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {/* Vision & Story - same gray shade */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-600  shadow-sm hover:shadow-md transition">
              <FaGlobe className="text-gray-700 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Vision 🌍
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted{" "}
                <strong>travel and tourism brand</strong>, inspiring explorers
                to discover <strong>Wayanad</strong> and beyond — where{" "}
                <strong>luxury resorts</strong>,{" "}
                <strong>eco‑friendly stays</strong>, and{" "}
                <strong>authentic cultural experiences</strong> create memories
                that last a lifetime.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                Our vision is to connect hearts with nature — to make every
                sunrise feel like a fresh beginning and every journey a story
                worth telling. We believe travel should not only be about places
                you visit but also about the
                <strong>emotions you carry back home</strong>.
              </p>
            </div>

            {/* Mission - keep distinct color */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-600 shadow-sm hover:shadow-md transition">
              <FaLightbulb className="text-gray-700 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Mission 🚀
              </h3>
              <p className="text-gray-700 leading-relaxed">
                At <strong>Journey Junction</strong>, our mission is to craft
                meaningful, personalized travel experiences — from romantic
                escapes to adventurous getaways — delivering joy to every
                traveler.
              </p>
            </div>

            {/* Story - same gray shade as Vision */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-600 shadow-sm hover:shadow-md transition">
              <FaUsers className="text-gray-700 text-4xl mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Our Story 📖
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Back in <strong>2019</strong>, <strong>Arjun ET</strong> started
                Journey Junction with a small idea — to help people discover
                beautiful places and feel at home wherever they go.
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                With a passionate team working behind the scenes, what began as
                a few recommendations for friends has grown into a space where
                travelers can find stays they trust, without the stress of
                searching endlessly. Our goal is to keep travel stress‑free,
                fair, and filled with moments you’ll remember fondly.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          className="bg-gray-100 rounded-3xl p-6 sm:p-10 shadow-inner"
          data-aos="fade-up"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-center text-gray-600 mb-10">
            Your Perfect Stay, Our Expertise
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white px-5 py-6 rounded-2xl shadow border-l-4 border-gray-700 hover:shadow-lg transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-2 mb-2">
                  <FaCheckCircle className="text-gray-700 text-lg mt-1" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="mt-16 bg-gray-100 shadow-xl rounded-3xl p-8 sm:p-12 border border-gray-200"
          data-aos="fade-up"
        >
          <ContactUs />
        </section>
      </main>

      {/* Footer - full width and bottom */}
      <Footer />
    </div>
  );
};

export default AboutUs;
