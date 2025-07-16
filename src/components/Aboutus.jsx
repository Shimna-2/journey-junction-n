import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import abtbg9 from "../assets/images/abtbg9.jpeg";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    const whatsappMessage = `Hello, my name is ${name}. My phone number is ${phone}. Message: ${message}`;
    window.open(
      `https://wa.me/917904281891?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
    alert("Thank you! Your message has been sent via WhatsApp.");
    setFormData({ name: "", phone: "", message: "" });
  };

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
      <section
        className="relative px-4 sm:px-6 md:px-20 py-14 sm:py-20 mb-20 rounded-2xl overflow-hidden"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${abtbg9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl" />
        <div className="relative z-10 bg-white/80 backdrop-blur-xl rounded-xl shadow-2xl px-6 sm:px-8 md:px-12 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-800">
          <div data-aos="fade-right" className="space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
              Our Mission
            </h2>
            <div className="w-16 h-1 bg-gray-800 rounded-full" />
            <p className="text-base sm:text-lg text-gray-700">
              At{" "}
              <span className="font-semibold text-gray-900">
                Journey Junction
              </span>
              , our mission is to craft travel experiences that are personal,
              seamless, and unforgettable. From handpicked resorts to local
              adventures, we focus on quality, comfort, and customer
              satisfaction. We aim to inspire travelers and promote responsible
              tourism in every destination we touch.
            </p>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-gray-700 mb-6 rounded animate-pulse"></div>
            <p className="text-base sm:text-lg text-gray-700">
              Journey Junction is the vision of <strong>Arjun Tilakan</strong>{" "}
              founded in <strong>2017</strong> — a trusted travel platform
              dedicated to creating unforgettable resort stays and personalized
              travel experiences. With a passionate and growing team, we strive
              to offer secure, seamless, and memorable getaways across Wayanad
              and beyond.
            </p>
          </div>
        </div>
      </section>

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
      <section
        className="relative py-14 px-4 rounded-2xl overflow-hidden"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${abtbg9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
            Contact Us
          </h2>
          <div className="bg-gray-100 rounded-3xl shadow-xl border border-gray-300 px-5 sm:px-8 py-10 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="flex-1 space-y-6 text-sm">
              <div className="flex items-start gap-3">
                <div className="text-xl text-gray-700 mt-1">📍</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    #V1/458L-21, 1st Floor, Aishwarya Mall Sulthan Bathery,
                    Wayanad-92, KL, IND.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl text-gray-700 mt-1">📞</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-gray-600">
                    +919744161939 <br /> +919633763916
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl text-gray-700 mt-1">📧</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-gray-600">journeyjunctionwyn@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-xl text-gray-700 mt-1">🌐</div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">
                    Connect With Us
                  </h4>
                  <div className="flex gap-4 text-xl text-gray-600">
                    <a
                      href="https://wa.me/919633763916"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://www.instagram.com/journey_junction___?igsh=ODZieXo1NTlhNjhr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500 transition"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1F7BL9EXTb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition"
                    >
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <div className="text-center md:text-left">
                  <button
                    type="submit"
                    className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition duration-300 flex items-center gap-2 justify-center"
                  >
                    <FaWhatsapp />
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
