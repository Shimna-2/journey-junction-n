import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const resorts = [
  {
    name: "Crystal Blue Private Pool Villa",
    images: [
      "/src/assets/images/cbresort.jpg",
      "/src/assets/images/cbresort1.jpg",
      "/src/assets/images/cbresort3.jpg",
    ],
    facilities: [
      "🌿 Peaceful Environment",
      "🛏️ Comfortable Rooms",
      "🚿 Hot Water Facility",
      "📶 Free Wi-Fi",
      "🏊 Private Pool Access",
    ],
  },
  {
    name: "Wyld Woods Villa Retreat",
    images: [
      "/src/assets/images/wyld.jpeg",
      "/src/assets/images/wyld3.jpeg",
      //   "/src/assets/images/cbresort1.jpg",
    ],
    facilities: [
      "🌲 Forest View Location",
      "🛌 Cozy Interiors",
      "🍳 In-room Dining",
      "🚿 Hot Showers",
      "📶 High-Speed Wi-Fi",
      "🔥 Bonfire Area",
    ],
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Privatepoolvillas = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Private-Pool Villas Resorts
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {resorts.map((resort, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.02] animate-fadeIn"
              data-aos="fade-up"
            >
              <Slider {...sliderSettings}>
                {resort.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${resort.name} ${idx + 1}`}
                    className="w-full h-56 object-cover"
                  />
                ))}
              </Slider>

              <div className="p-6">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">
                  {resort.name}
                </h4>
                {/* <ul className="list-disc list-inside space-y-2 text-gray-600 text-[15px]">
                  {resort.facilities.map((facility, i) => (
                    <li key={i}>{facility}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privatepoolvillas;
