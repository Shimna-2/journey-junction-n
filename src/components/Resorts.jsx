import React, { useEffect, memo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./Footer";

// ✅ Images
import aramb1 from "../assets/images/aramb1.webp";
import aramb2 from "../assets/images/aramb2.webp";
import aramb3 from "../assets/images/aramb3.webp";
import msresort1 from "../assets/images/msresort1.webp";
import msresort2 from "../assets/images/msresort2.webp";
import msresort3 from "../assets/images/msresort3.webp";
import vythiri1 from "../assets/images/vythiri1.webp";
import vythiri2 from "../assets/images/vythiri2.webp";
import vythiri4 from "../assets/images/vythiri4.webp";
import lords83 from "../assets/images/Lords83.webp";
import lords831 from "../assets/images/lords831.webp";
import lords834 from "../assets/images/lords834.webp";
import mountx from "../assets/images/mountx.webp";
import mountx1 from "../assets/images/mountx1.webp";
import mountx3 from "../assets/images/mountx3.webp";
import vythirimist from "../assets/images/vythirimist.webp";
import vythirimist2 from "../assets/images/vythirimist2.webp";
import vythirimit1 from "../assets/images/vythirimit1.webp";
import coffeeacres1 from "../assets/images/coffeacres1.webp";
import imageslider3 from "../assets/images/imageslider3.webp";
import seagot from "../assets/images/seagot.webp";
import seogot3 from "../assets/images/seogot2.webp";
import seogot2 from "../assets/images/seogot3.webp";
import safari from "../assets/images/safari.webp";
import safari1 from "../assets/images/safari1.webp";
import safari2 from "../assets/images/safari2.webp";
import peppertrail from "../assets/images/peppertrail.webp";
import peppertrail1 from "../assets/images/peppertrail1.webp";
import peppertrail3 from "../assets/images/peppertrail3.webp";
import theyila from "../assets/images/theyila.webp";
import theyila2 from "../assets/images/theyila2.webp";
import theyila3 from "../assets/images/theyila3.webp";
import heroImage from "../assets/images/resort-banner.webp";

// ---------------- Data ----------------
const luxuryResorts = [
  { name: "Aramb Resorts", images: [aramb1, aramb2, aramb3] },
  { name: "Mountain Shadows", images: [msresort1, msresort2, msresort3] },
  { name: "Earthetics", images: [vythiri1, vythiri2, vythiri4] },
];
const premiumResorts = [
  { name: "Lords83", images: [lords83, lords831, lords834] },
  { name: "MountXanadu", images: [mountx, mountx1, mountx3] },
  { name: "Vythirimist", images: [vythirimist, vythirimist2, vythirimit1] },
];
const budgetResorts = [
  {
    name: "Coffee Acres Resort",
    images: [coffeeacres1, coffeeacres1, imageslider3],
  },
  { name: "Seagot Resort", images: [seagot, seogot3, seogot2] },
  { name: "Safari Hills", images: [safari, safari1, safari2] },
];
const privatePoolVillas = [
  {
    name: "Peppertrail Resorts",
    images: [peppertrail, peppertrail1, peppertrail3],
  },
  { name: "Theyila Resort", images: [theyila, theyila2, theyila3] },
  { name: "Lords83", images: [lords83, lords831, lords834] },
];

// ---------------- Resort Section ----------------
const ResortSection = memo(({ id, title, resorts }) => {
  const navigate = useNavigate();
  return (
    <section
      id={id}
      className="relative bg-gray-50 py-16 px-4 sm:px-6 lg:px-16 scroll-mt-24 font-[Poppins]"
    >
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
          {resorts.map((resort, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-gray-200"
              data-aos="fade-left"
              data-aos-delay={index * 120}
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2800 }}
                loop
                className="w-full h-56"
              >
                {resort.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${resort.name} ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">
                  {resort.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            onClick={() => navigate("/booknow")}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
});

// ---------------- Main Component ----------------
export default function Resorts() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true, offset: 100 });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 200);
      }
    }
  }, [location.hash]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ✅ Preload Fonts & Hero */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="preload" as="image" href={heroImage} />

      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center font-[Poppins]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
          <div data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              A Glimpse of Our Finest Resorts
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mx-auto drop-shadow mb-6">
              Discover the best handpicked resorts in Wayanad—choose from
              luxury, premium or budget experiences for your ideal getaway.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
            >
              {[
                { id: "luxury-resorts", label: "Luxury Resorts" },
                { id: "premium-resorts", label: "Premium Resorts" },
                { id: "budget-resorts", label: "Budget-Friendly Resorts" },
                { id: "private-pool", label: "Private Pool Villas" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => scrollToSection(btn.id)}
                  className="bg-white/80 hover:bg-white text-gray-800 px-5 py-2 rounded-lg font-semibold transition"
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resort Sections */}
      <ResortSection
        id="luxury-resorts"
        title="Luxury Resorts"
        resorts={luxuryResorts}
      />
      <ResortSection
        id="premium-resorts"
        title="Premium Resorts"
        resorts={premiumResorts}
      />
      <ResortSection
        id="budget-resorts"
        title="Budget-Friendly Resorts"
        resorts={budgetResorts}
      />
      <ResortSection
        id="private-pool"
        title="Private Pool Villas"
        resorts={privatePoolVillas}
      />

      <Footer />
    </>
  );
}
