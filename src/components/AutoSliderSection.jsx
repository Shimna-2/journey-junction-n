import React from "react";

const AutoSliderSection = () => {
  return (
    <section className="bg-white px-4 md:px-20" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Who We Are
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Our Mission",
            front: "🎯",
            back: "To craft travel experiences that are personal, seamless, and unforgettable. We focus on quality, comfort, and joy.",
          },
          {
            title: "Our Story",
            front: "📖",
            back: "Started in 2017 by Arjun ET, Journey Junction connects culture and comfort. Now, we serve thousands of happy travelers.",
          },
          {
            title: "Our Vision",
            front: "🌍",
            back: "To be a globally trusted travel brand, offering curated experiences that connect people with nature and peace.",
          },
        ].map((item, i) => (
          <div key={i} className="group perspective">
            <div className="relative h-64 transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 rounded-2xl shadow-lg flex items-center justify-center text-5xl font-bold text-gray-800 backface-hidden">
                {item.front}
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-white rounded-2xl shadow-lg px-4 py-6 text-center text-gray-700 text-sm backface-hidden transform rotate-y-180">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.back}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AutoSliderSection;
