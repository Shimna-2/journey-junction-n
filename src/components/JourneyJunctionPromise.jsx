import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const JourneyJunctionPromise = () => {
  const promises = [
    "Curated stays handpicked for comfort and authenticity",
    "Verified resorts with trusted guest reviews",
    "Smooth and stress-free travel planning",
    "Dedicated local support throughout your journey",
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Journey Junction Promise
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          With{" "}
          <span className="font-semibold text-green-600">Journey Junction</span>
          , experience curated stays, verified resorts, and smooth travel
          planning — your trusted travel partner in Wayanad.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          {promises.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 text-xl mt-1" />
              <p className="text-gray-700 text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyJunctionPromise;
