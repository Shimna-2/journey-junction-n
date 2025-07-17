import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const resorts = [
  {
    name: "Coffee Acres Resort",
    images: [
      "src/assets/images/coffeacres1.jpeg",
      "src/assets/images/coffeacres1.jpeg",
      "src/assets/images/imageslider3.jpg",
    ],
    facilities: [
      "🌿 Peaceful Environment",
      "🛏️ Comfortable Rooms",
      "🚿 Hot Water Facility",
      "📶 Free Wi-Fi",
    ],
  },
  {
    name: "Seagot Resort",
    images: [
      "src/assets/images/seagot.jpeg",
      "src/assets/images/seogot3.jpeg",
      "src/assets/images/seogot2.jpeg",
    ],
    facilities: [
      "⛰️ Hill View Balcony",
      "🍳 In-House Dining",
      "🚗 Parking Space",
      "📺 TV in Every Room",
    ],
  },
  {
    name: "Safari Hills",
    images: [
      "src/assets/images/safari.jpeg",
      "src/assets/images/safari1.jpeg",
      "src/assets/images/safari2.jpeg",
    ],
    facilities: [
      "🧳 Budget Friendly Packages",
      "🌾 Local Cultural Touch",
      "🔥 Evening Campfire",
      "🥘 Homemade Food",
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

const Budgetfriendlyresorts = () => {
  return (
    <section className="relative min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
          Budget-Friendly Resorts
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {resorts.map((resort, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] animate-fadeIn"
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
              <div className="p-5">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {resort.name}
                </h4>
                {/* Uncomment if you want facilities list back */}
                {/* <ul className="space-y-2 text-sm text-gray-600">
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

export default Budgetfriendlyresorts;
