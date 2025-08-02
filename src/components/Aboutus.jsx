import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";

// Import images for sliders
import stay1 from "../assets/images/stay1.jpg";
import stay2 from "../assets/images/stay2.jpg";
import stay3 from "../assets/images/stay3.jpg";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";
import slider3 from "../assets/images/slider3.jpg";

import ContactUs from "./ContactUs";

// Updated ImageSlider inline (to ensure images work)
const ImageSlider = () => {
  const images = [stay1, stay2, stay3];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Stay ${i + 1}`}
          className="rounded-lg shadow-md object-cover w-full h-64"
        />
      ))}
    </div>
  );
};

// Updated AutoSliderSection inline (with imports)
const AutoSliderSection = () => {
  const slides = [slider1, slider2, slider3];
  return (
    <section className="my-10">
      <div className="overflow-hidden relative w-full rounded-xl shadow-lg">
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide}
            alt={`Slide ${i + 1}`}
            className="w-full h-96 object-cover"
          />
        ))}
      </div>
    </section>
  );
};

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 text-gray-800 px-4 sm:px-6 md:px-20 py-10 sm:py-20">
      {/* Our Mission & Story */}
      <AutoSliderSection />

      {/* Image Slider */}
      <section className="my-16 sm:my-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Glimpses of Wayanad Stays
        </h2>
        <ImageSlider />
      </section>

      {/* Why Choose Us */}
      <section className="p-4 sm:p-6 md:p-10 rounded-3xl shadow-inner mb-20">
        <div className="bg-gray-200 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-10">
          <h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-10"
            data-aos="fade-up"
          >
            Why Choose Us
          </h2>
          <h6
            className="text-xl sm:text-2xl text-center text-gray-800 mb-6 font-medium"
            data-aos="fade-up"
          >
            Your Perfect Stay, Our Expertise
          </h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-gray-100 px-5 py-6 sm:px-6 sm:py-8 rounded-3xl shadow-md hover:shadow-xl border-l-4 border-gray-700 hover:scale-[1.03] transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <FaCheckCircle className="text-gray-700 text-xl mt-1" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactUs />
    </div>
  );
};

export default AboutUs;
